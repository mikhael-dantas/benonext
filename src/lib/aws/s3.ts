// import aws from 'aws-sdk';
import AWS from 'aws-sdk';
import axios from 'axios';
import crypto from 'crypto';

const s3 = new AWS.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    signatureVersion: 'v4',
})

export async function getSignedPutObjectUrl(extension: string): Promise<string> {
    let url: string;
    const imageUUID = crypto.randomUUID();

    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: imageUUID + "." + extension,
            Expires: 60,
        }

        url = await s3.getSignedUrlPromise('putObject', params)
    } catch (error) {
        throw new Error(error);
    }

    return url;
}

// client
export async function CheckFile(scopedFile: File): Promise<{ valid: boolean, message: string }> {
    if (!scopedFile) {
        return {
            valid: false,
            message: 'No file selected.'
        }
    }

    const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];
    if (!allowedTypes.includes(scopedFile.type)) {
        return {
            valid: false,
            message: 'Invalid file type. Please select a PNG, JPEG, or GIF image.'
        }
    }

    const maxFileSize = 10 * 1024 * 1024; // 5 MB
    if (scopedFile.size > maxFileSize) {
        return {
            valid: false,
            message: `File is too large. Maximum allowed file size is ${maxFileSize} bytes.`
        }
    }

    return {
        valid: true,
        message: ''
    }
}


export async function FetchUploadUrl(scopedExtension: string, csrfToken: string): Promise<{ uploadUrl: string } | {error: string}> {
    const parsedResponse = await (await fetch(`/api/aws/getuploadurl?extension=${scopedExtension}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken,
        },
        credentials: 'include',
    })).json();

    return parsedResponse;
}

export async function UploadToS3(scopedFile: File, scopedUploadUrl: string) {
    await axios.put(
        scopedUploadUrl,
        scopedFile, {
        headers: {
        'Content-Type': 'multipart/form-data',
        },
    });
}
