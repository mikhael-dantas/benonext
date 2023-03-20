import ImageGallery from '@myComponents/ImageGallery';
import { useState } from 'react';
import { CheckFile, FetchUploadUrl, UploadToS3 } from 'src/lib/aws/s3';
import { FetchCsrfToken } from 'src/lib/csrf/FetchCsrfToken';


const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    const [uploadedUrl, setUploadedUrl] = useState('');

    const handleFileSelect = async e => {
        const file = e.target.files[0];
        const validationReturn = await CheckFile(file);

        if (!validationReturn.valid) {
            alert(validationReturn.message);
            return;
        }

        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleUpload = async () => {
        try {
            if (!selectedFile) {throw new Error('No file selected.')}

            let validationReturn: { valid: boolean, message: string }
            let parsedUploadUrlResponse: { uploadUrl: string } | {error: string}



            await CheckFile(selectedFile).then(res => {
                validationReturn = res;
            });
            if (!validationReturn.valid) {throw new Error(validationReturn.message)}

            const csrfToken = await FetchCsrfToken()
            if ("error" in csrfToken) {throw new Error("Error fetching csrf token")}

            await FetchUploadUrl(selectedFile.type.split('/')[1], csrfToken.csrfToken).then(res => {
                parsedUploadUrlResponse = res;
            })
            if ("error" in parsedUploadUrlResponse) {throw new Error(parsedUploadUrlResponse.error)}


            await UploadToS3(selectedFile, parsedUploadUrlResponse.uploadUrl)
            .catch(err => {throw new Error("Error uploading to S3")})

            const imageUrl = parsedUploadUrlResponse.uploadUrl.split('?')[0];
            setUploadedUrl(imageUrl);
        } catch (err) {
            alert(err.message);
        }
    };

return (
    <div className='
    mx-auto
    md:max-w-2/3
    bg-green-400
    p-5
    rounded-lg
        shadow-[rgba(0,0,0,0.35)0px_5px_15px]
    '>
        <ImageGallery/>
        <div className='
        flex
        flex-col
        md:flex-row
        '>
            <div className='
            portrait:max-h-[60vh]
            max-w-[80%]
            md:max-w-[50%]
            mx-auto
            overflow-hidden
            p-6
            rounded-lg
            shadow-[rgba(6,24,44,0.4)0px_0px_0px_2px,rgba(6,24,44,0.65)0px_4px_6px_-1px,rgba(255,255,255,0.08)0px_1px_0px_inset]
            '>
                {previewUrl && (
                    <img src={previewUrl} alt="" width="100%" />
                )}
            </div>
            <div className='
            flex
            flex-col
            justify-center
            items-center
            md:ml-4
            '>
                <h1 className='
                text-[1.2rem]
                text-center
                font-semibold
                text-gray-100
                '>
                    Upload your image to the image galery
                </h1>
                <input type="file" onChange={handleFileSelect} className='
                bg-gray-100
                p-2
                rounded
                mx-auto
                mt-4 md:ml-4
                h-[3rem]
                '/>
                <button className='
                bg-green-600
                shadow-[rgba(0,0,0,0.35)0px_5px_15px]
                p-2 rounded
                text-white
                mt-4

                ' 
                onClick={handleUpload}>Upload</button>
            </div>

            <img src={uploadedUrl} alt="" width="100%" />
        </div>
    </div>
);
};

export default ImageUpload;
