import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Confirmar from "../components/Confirmar";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const RemedioCadastrado = () => {
  const navigation = useNavigation();

  const handleMeusRemedios = () => {
    navigation.navigate("MeusRemedios");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.voltar} onPress={() => navigation.goBack()}>
          Voltar
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.layoutSeta]}
            contentFit="cover"
            source={require("../../assets/setaEsquerda.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress = {handleMeusRemedios}>
        <Confirmar />
      </TouchableOpacity>
      <View style={[styles.remedioCadastrado]}>
        <Text style={[styles.remedioCadastradoText]}>Remédio Cadastrado</Text>
        <Text
          style={[styles.apenasTome]}
        >{` APENAS TOME RÉMEDIOS COM A PRESCRIÇÃO MÉDICA !!`}</Text>
      </View>
      <Image
        style={styles.doutor}
        contentFit="cover"
        source={require("../../assets/doutor.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  remedioCadastradoText: {
    left: 65,
    fontSize: 30,
    fontWeight: "600",
    color: "#000",
    top: 420,
  },
  remedioCadastrado: {
    height: 120,
    position: "absolute",
  },
  apenasTome: {
    top: 500,
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "700",
    color: "#f60101",
    left: 60,
    width: 300,
    textAlign: "center",
  },
  doutor: {
    top: 120,
    left: 105,
    width: 185,
    height: 260,
    position: "absolute",
  },
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  voltar: {
    paddingLeft: 5,
    top: 65,
    left: -88,
    color: "#000",
    width: 311,
    textAlign: "center",
    lineHeight: 25,
    fontSize: 18,
    position: "absolute",
  },

  layoutSeta: {
    width: 50,
    height: 50,
    top: 54,
    position: "absolute",
    overflow: "hidden",
  },
});

export default RemedioCadastrado;
