import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BemVindo = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("login");
  };
  
  return (
    <View style={styles.container}>
      <Text style={[styles.nuncaMaisEsqueca, styles.estilo]}>
        Nunca mais esqueça de tomar os seus remédios. Agora você irá se
        organizar para toma-los na hora exata.
      </Text>
      <Text style={[styles.tenhaOControle, styles.estilo]}>{`Tenha o controle
  dos seus Remédios`}</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Image
          style={styles.setaIcone}
          contentFit="cover"
          source={require("../../assets/setaDireita.png")}
        />
      </TouchableOpacity>
      <Image
        style={styles.remedioIcone}
        contentFit="cover"
        source={require("../../assets/comprimidoLaranja.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  estilo: {
    textAlign: "center",
    color: "#433FE7",
    fontWeight: "600",
    left: 50,
    position: "absolute",
  },
  nuncaMaisEsqueca: {
    top: 528,
    fontSize: 22,
    width: 288,
    height: 125,
  },
  tenhaOControle: {
    top: 118,
    fontSize: 30,
  },
  setaIcone: {
    height: 60,
    width: 60,
    top: 700,
    left: 170,
    position: "absolute",
  },
  remedioIcone: {
    top: 210,
    left: 10,
    width: 375,
    height: 255,
    position: "absolute",
  },
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default BemVindo;
