import { Text } from "react-native";
import { CameraBox, Container, TriagleCorner, TriagleCornerBottonLeft, TriagleCornerBottonRight, TriagleCornerTopRight } from "./styles";
import CardView from "../../components/CardView";

export default function Gragage() {
  return (
    <Container>
      <CameraBox>
              <TriagleCorner></TriagleCorner>
              <TriagleCornerTopRight></TriagleCornerTopRight>
              <TriagleCornerBottonLeft></TriagleCornerBottonLeft>
              <TriagleCornerBottonRight></TriagleCornerBottonRight>
              <CardView></CardView>
      </CameraBox>
    </Container>
  );
}
