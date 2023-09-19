import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Confirmar from "../components/Confirmar";
import { TouchableOpacity } from "react-native";

const CadastrarRemedio = () => {
  const navigation = useNavigation();

  const handleRemedioCadastrado = () => {
    navigation.navigate("RemedioCadastrado");
  };

  return (
    <View style={styles.cadastrarRemedio}>
      <View>
        <Text style={styles.voltar} onPress={() =>navigation.goBack()} >Voltar</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={[styles.setaEsquerda, styles.layoutSeta] }
          contentFit="cover"
          source={require("../../assets/setaEsquerda.png")}
        />
        </TouchableOpacity>
      </View>
      <View
        style={[styles.cadastrarRemedioCaixa, styles.container]}
      />
      <Text style={[styles.diazepam]}>Diazepam</Text>
        <TouchableOpacity onPress={handleRemedioCadastrado}>
          <Confirmar/>
        </TouchableOpacity>
      <View>
        <Text style={styles.informeOHorarioText}>
          Informe o horário que o remedio vai ser tomado:
        </Text>
      </View>
      <View>
        <Text style={[styles.qualADosagemText]}>
          Qual a Dosagem do seu remedio ?
        </Text>
      </View>
      <Text style={[styles.paraConvulsoes, styles.container]}>
        Para convulsões e ansiedade
      </Text>

      <Image
        style={[styles.setaEsquerdaPreta, styles.layoutSeta]}
        contentFit="cover"
        source={require("../../assets/setaEsquerdaPreta.png")}
      />
      <Image
        style={[styles.setaDireitaPreta, styles.layoutSeta]}
        contentFit="cover"
        source={require("../../assets/setaDireitaPreta.png")}
      />
      <Image
        style={styles.remedioAmarelo}
        contentFit="cover"
        source={require("../../assets/remedioAmarelo.png")}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    left: 50,
    width: 310,
    position: "absolute",
  },
  qualADosagemText: {
    position: "absolute",
    top: 400,
    left: 85,
    textAlign: "center",
    fontSize: 15,
  },
  cadastrarRemedioPosicao: {
    top: 20,
    width: 375,
    height: 468,
  },
  cadastrarRemedioCaixa: {
    top: 418,
    height: 88,
    backgroundColor: "#E6F1FA",
  },
  diazepam: {
    top: 288,
    left: 135,
    fontSize: 30,
    fontWeight: "600",
    color: "#000",
    position: "absolute",
    textAlign: "center",
  },

  informeOHorarioText: {
    fontSize: 15,
    color: "#000",
    position: "absolute",
    textAlign: "center",
    top: 500,
    left: 35,
    position: "absolute",
    textAlign: "center",
  },

  paraConvulsoes: {
    top: 344,
    color: "#000",
    textAlign: "center",
    lineHeight: 25,
    fontSize: 15,
    left: 32,
  },

  cadastrarRemedio: {
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
    position: "absolute",
    overflow: "hidden",
  },

  setaEsquerda: {
    top: 54,
    width: 200,
    height: 255,
    position: "absolute",
  },

  setaEsquerdaPreta: {
    left: 70,
    top: 160,
  },
  
  setaDireitaPreta: {
    top: 160,
    right: 70,
  },

  remedioAmarelo: {
    top: 100,
    left: 105,
    width: 166,
    height: 162,
    position: "absolute",
  },
});

export default CadastrarRemedio;
