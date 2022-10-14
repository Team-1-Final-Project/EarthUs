import styled from 'styled-components';

const CardProfileIcon = (props) => {
  const img = props.image;

  return <Icon src={img}></Icon>;
};

export default CardProfileIcon;

const Icon = styled.img`
  border-radius: 50% 50%;
`;
