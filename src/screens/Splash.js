import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("BemVindo")}
    >
      <Image
        style={[styles.background]}
        contentFit="cover"
        source={require("../../assets/telaInicial.png")}
      />
      <Text style={styles.controlDrugs}>Control Drugs</Text>
      <Image
        style={[styles.maosRemedios]}
        contentFit="cover"
        source={require("../../assets/maos.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 1000,
    height: 1200,
  },
  controlDrugs: {
    top: 110,
    left: 75,
    fontSize: 40,
    color: "#000000",
    textAlign: "center",
    position: "absolute",
  },
  maosRemedios: {
    width: 430,
    height: 775,
    left: 0,
    position: "absolute",
  },
});

export default Splash;
