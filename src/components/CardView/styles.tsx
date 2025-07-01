import styled from "styled-components";

export const ImageContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 180px;
  padding-top: 10px;
`;

export const ImageLogo = styled.Image`
  width: 65%;
  height: 100%;
`;

export const CarBrand = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 18px;
  font-style: italic;
`;

export const CarName = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const ImageCarsApi = styled.Image`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
`;

export const PriceLabelContainer = styled.View`
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const PriceLabel = styled.Text`
  
  color: white;
  font-size: 22px;

`
