import { useEffect, useState } from 'react';
import styled from 'styled-components';
import imageCompression from 'browser-image-compression';

const Preview = ({ img }) => {
  const reader = new FileReader();
  const file = img;

  const [imageSrc, setImageSrc] = useState('');

  const compressImage = async (file) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      fileType: 'image/jpeg',
    };

    try {
      const compressedFile = await imageCompression(file, options);
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (file) {
      compressImage(file);
    }
  });

  return <PreviewImage src={imageSrc} />;
};

const PreviewImage = styled.img`
  margin-top: 20px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export default Preview;
