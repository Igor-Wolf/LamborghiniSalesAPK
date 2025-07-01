/// fazer uma solicitação para api

import { fetchGetCarsData } from "../../apis/getCars";
import { CarModel } from "./props";

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let response = null;
    if (carData && carData?.id > 1) {
      response = await fetchGetCarsData(carData.id - 1);
    }
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log(error);
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let response = null;
    if (carData && carData?.id < 10) {
      response = await fetchGetCarsData(carData.id + 1);
    }
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log(error);
    setCarData(null);
  }
};

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await fetchGetCarsData(id);
    if (response) {
      setCarData(response);
    } else {
      setCarData(null); // opcional: limpar estado se nada for retornado
    }
  } catch (error) {
    console.log("Erro ao carregar dados do carro:", error);
    setCarData(null); // opcional: fallback em caso de erro
  }
};
