import { View, Text, TouchableOpacity } from "react-native";
import { ButtonPressble, ButtonText, Container, IconBuy } from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function BuyButton() {
  return (
    <Container>
      <ButtonPressble onPress={() => {}}>
        <IconBuy>
          <AntDesign name="shoppingcart" size={24} color={"white"}></AntDesign>
        </IconBuy>
        <ButtonText>Buy This </ButtonText>
      </ButtonPressble>
    </Container>
  );
}
