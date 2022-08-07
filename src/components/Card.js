import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = ({ item }) => {
  return (
    <div>
      <Img src={item?.urls?.thumb} alt={item?.description} />
      <p>{item?.description || "No desc.."}</p>
    </div>
  );
};

export default Card;
