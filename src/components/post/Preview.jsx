import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Preview = ({ img }) => {
  const reader = new FileReader();
  const file = img;

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
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
