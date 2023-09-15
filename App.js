import React from "react";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";

export default function App() {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
}
