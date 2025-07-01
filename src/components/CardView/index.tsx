import {
  CarBrand,
  CarName,
  ImageCarsApi,
  ImageContainer,
  ImageLogo,
  LogoContainer,
  PriceLabel,
  PriceLabelContainer,
} from "./styles";

import Logo from "../../../assets/lambLogo.png";
import { Button, Image, Text, View } from "react-native";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { useEffect, useState } from "react";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);

  const renderLogoBox = () => {
    return (
      <LogoContainer resizeMode="contain">
        <ImageLogo source={Logo} resizeMode="contain"></ImageLogo>
      </LogoContainer>
    );
  };

  const renderCarDetails = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <CarBrand>Lamborghini</CarBrand>
        <CarName>{carData?.carName}</CarName>
      </View>
    );
  };

  const renderCarImage = () => {
    return (
      <ImageCarsApi
        source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }}
        resizeMode="contain"
      ></ImageCarsApi>
    );
  };

  const renderPriceControls = () => {
    return (
      <PriceLabelContainer>
        <Button
          title="<"
          color={"#01a6b3"}
          onPress={() => {
            handlePreviousItem(carData, setCarData);
          }}
        ></Button>
        <PriceLabel>{carData?.price}</PriceLabel>
        <Button
          title=">"
          color={"#01a6b3"}
          onPress={() => {
            handleNextItem(carData, setCarData);
          }}
        ></Button>
      </PriceLabelContainer>
    );
  };

  return (
    <>
      <ImageContainer>
        {renderLogoBox()}
        <Divider></Divider>
        {renderCarDetails()}
        {renderCarImage()}
        <Divider></Divider>
        <BuyButton></BuyButton>
        {renderPriceControls()}
      </ImageContainer>
    </>
  );
}
