import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style = {styles.container}>
    <Pressable
      onPress={() => navigation.navigate("BemVindo")}
    >
      <Text style={styles.controlDrugs}>Control Drugs</Text>
      <Image
        style={[styles.maosRemedios]}
        contentFit="cover"
        source={require("../../assets/maos.png")}
      />
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#836FFF"
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
