import React, { useState, useEffect } from 'react';
import fs from 'fs';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    // const fetchImages = async () => {
    //     try {
    //     const imageFiles = fs.readdirSync("/public/uploads");
    //     const images = imageFiles.map(fileName => {
    //         return {
    //             id: fileName,
    //             src: `/uploads/${fileName}`,
    //             name: fileName
    //         }
    //     });
    //     setImages(images);
    //     } catch (err) {
    //     console.error("Error reading images:", err);
    //     }
    // };

    useEffect(() => {
        // fetchImages();
    }, []);

    return (
        <div>
        <div>
            {/* {images.map((image) => (
            <img key={image.id} src={image.src} alt={image.name} />
            ))} */}
        </div>
        {/* <button onClick={() => fetchImages()}>Refresh</button> */}
        </div>
    );
};

export default ImageGallery;
