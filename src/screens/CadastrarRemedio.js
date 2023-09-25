import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Confirmar from "../components/Confirmar";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

const CadastrarRemedio = () => {
  const navigation = useNavigation();

  const [medicamentos, setMedicamentos] = useState([]);
  const [nomeRemedio, setNomeRemedio] = useState("");
  const [horarioRemedio, setHorarioRemedio] = useState("");
  const [dosagemRemedio, setDosagemRemedio] = useState("");
  const [descricaoRemedio, setDescricaoRemedio] = useState("");

  const handleRemedioCadastrado = () => {
    if (nomeRemedio && horarioRemedio) {
      setMedicamentos([
        ...medicamentos,
        { nome: nomeRemedio, horario: horarioRemedio, dosagemRemedio, descricaoRemedio },
      ]);
      setNomeRemedio("");
      setHorarioRemedio("");
      setDosagemRemedio("");
      setDescricaoRemedio("");
    }
    navigation.navigate("RemedioCadastrado");
  };

  return (
    <View style={styles.cadastrarRemedio}>
      <View>
        <Text style={styles.voltar} onPress={() => navigation.goBack()}>
          Voltar
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.setaEsquerda, styles.layoutSeta]}
            contentFit="cover"
            source={require("../../assets/setaEsquerda.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome do remédio"
          placeholderTextColor="gray"
          onChangeText={(text) => setNomeRemedio(text)}
          value={nomeRemedio}
        />
        <TextInput
          style={styles.input}
          placeholder="Informe a dosagem"
          placeholderTextColor="gray"
          onChangeText={(text) => setDosagemRemedio(text)}
          value={dosagemRemedio}
        />
        <TextInput
          style={styles.input}
          placeholder="Para que serve esse medicamento?"
          placeholderTextColor="gray"
          onChangeText={(text) => setDescricaoRemedio(text)}
          value={descricaoRemedio}
        />
        <TextInput
          style={styles.input}
          placeholder="Horário do medicamento"
          placeholderTextColor="gray"
          onChangeText={(text) => setHorarioRemedio(text)}
          value={horarioRemedio}
        />
      </View>
      <TouchableOpacity onPress={handleRemedioCadastrado}>
        <Confirmar />
      </TouchableOpacity>
      <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    left: 50,
    width: 310,
    position: "absolute",
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
  inputsContainer: {
    position: "absolute",
    bottom: 160,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingBottom: 20,
    left: 0,
    right: 0,
  },
  input: {
    height: 50,
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 10,
  },
});

export default CadastrarRemedio;
