import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Gragage from './src/views/Garage/Garage';

export default function App() {
  return (
    <>
      <Gragage></Gragage>
      <StatusBar style="auto" />
    </>
  );
}

