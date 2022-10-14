import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Preview = ({ img }) => {
  const reader = new FileReader();
  const file = img;

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
    }
  });

  return <PreviewImage src={imgSrc} />;
};

const PreviewImage = styled.img`
  margin-top: 20px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export default Preview;
