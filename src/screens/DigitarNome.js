import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Confirmar from "../components/Confirmar";

const DigitarNome = () => {
  const navigation = useNavigation();

  const handleCadastrarRemedio = () => {
    navigation.navigate("CadastrarRemedio");
  };

  return (
    <View style = {styles.container}>
      <Text style={[styles.qualSeuNome]}>
        Qual seu nome ?
      </Text>
      <View style={styles.barra} />
      <Text style={[styles.insiraUmNome]}>
        Insira um nome
      </Text>
      <TouchableOpacity onPress={handleCadastrarRemedio}>
        <View>
           <Confirmar/>
        </View>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    width: "100%",
  },
  
  qualSeuNome: {
    top: 150,
    left: 90,
    fontSize: 30,
    fontWeight: "600",
    color: "#433FE7",
    
  },
  barra: {
    top: 400,
    left: 70,
    borderStyle: "solid",
    borderColor: "#000000",
    borderTopWidth: 1,
    width: 265,
    position: "absolute",
  },
  insiraUmNome: {
    top: 320,
    left: 130,
    fontSize: 20,
    color: "#000000",
    opacity: 0.5,
  },
  digitarNome: {
    backgroundColor: "#ffffff",
    flex: 1,
    width: "100%",
    height: 810,
  },
});

export default DigitarNome;
