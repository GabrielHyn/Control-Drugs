import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("BemVindo");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.controlDrugs}>Control Drugs</Text>
      <Image
        style={[styles.maosRemedios]}
        contentFit="cover"
        source={require("../../assets/maos.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#836FFF",
  },
  controlDrugs: {
    top: 110,
    left: 75,
    fontSize: 40,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    position: "absolute",
  },
  maosRemedios: {
    width: 430,
    height: 775,
    position: "absolute",
  },
});

export default Splash;
