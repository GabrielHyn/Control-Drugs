import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Remedio from "../components/remedio";
import { useNavigation } from "@react-navigation/native";

const medicamentos = [
  {
    key: "diazepam",
    sourceImagem: require("../../assets/remedioAmarelo.png"),
    nome: "Diazepam",
    hora: "20:30",
  },
  {
    key: "Clonidina",
    sourceImagem: require("../../assets/remedioVermelho.png"),
    nome: "Clonidina",
    hora: "15:00",
  },
  {
    key: "Omeprazol",
    sourceImagem: require("../../assets/remedioAmarelo.png"),
    nome: "Omeprazol",
    hora: "17:30",
  },
  {
    key: "Buscopam",
    sourceImagem: require("../../assets/remedioVermelho.png"),
    nome: "Buscopam",
    hora: "18:30",
  },
];

const MeusRemedios = () => {
  const navigation = useNavigation();
  const [tempoRestante, setTempoRestante] = useState(0);
  const medicamentoMaisProximoNome = useRef(""); // Usamos useRef para armazenar o nome do medicamento mais próximo

  useEffect(() => {
    const calcularTempoRestante = () => {
      const agora = new Date();
      const horaAtual = agora.getHours() * 3600 + agora.getMinutes() * 60;

      const novoMedicamentoMaisProximo = medicamentos.reduce(
        (maisProxMed, medicamento) => {
          const [hora, minuto] = medicamento.hora.split(":");
          const horaMedicamento = parseInt(hora) * 3600 + parseInt(minuto) * 60;

          if (
            horaMedicamento > horaAtual &&
            (!maisProxMed || horaMedicamento < maisProxMed.hora)
          ) {
            return { hora: horaMedicamento, nome: medicamento.nome };
          }

          return maisProxMed;
        },
        null
      );

      if (novoMedicamentoMaisProximo) {
        setTempoRestante(novoMedicamentoMaisProximo.hora - horaAtual);
        medicamentoMaisProximoNome.current = novoMedicamentoMaisProximo.nome; // Atualizamos o valor usando useRef
      } else {
        setTempoRestante(0);
        medicamentoMaisProximoNome.current = ""; // Se não houver medicamentos futuros, definimos como vazio
      }
    };

    calcularTempoRestante();

    const interval = setInterval(calcularTempoRestante, 1000);

    return () => clearInterval(interval);
  }, []);

  const horasRestantesProximo = Math.floor(tempoRestante / 3600);
  const minutosRestantesProximo = Math.floor((tempoRestante % 3600) / 60);

  const handleCadastrarRemedio = () => {
    navigation.navigate("CadastrarRemedio");
  };

  return (
    <View style={styles.meusRemedios}>
      <Text style={styles.meusRemedios1}>
        <Text style={styles.meus}>Meus</Text>
        {"\n"}
        <Text style={styles.remedios}>Remédios</Text>
      </Text>
      <Text style={styles.proximosRemedios}>Próximos Remédios</Text>
      <View style={styles.componenteContainer}>
        <View style={styles.remediosContainer}>
          {medicamentos.map((medicamento) => (
            <Remedio
              key={medicamento.key}
              sourceImagem={medicamento.sourceImagem}
              nome={medicamento.nome}
              hora={medicamento.hora}
            />
          ))}
        </View>
      </View>
      <View style={styles.oSeuRemedioContainer}>
        <Text style={styles.oSeuRemedio}>
          {tempoRestante > 0
            ? `Faltam ${horasRestantesProximo} horas e ${minutosRestantesProximo} minutos para o seu remédio ${medicamentoMaisProximoNome.current}` // Usamos medicamentoMaisProximoNome.current aqui para exibir o nome do medicamento
            : "Não há medicamentos futuros."}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.botaoCadastrar}
        onPress={handleCadastrarRemedio}
      >
        <Text style={styles.textoBotaoCadastrar}>Cadastrar Remédio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  meus: {
    fontWeight: "300",
    fontSize: 40,
  },
  remedios: {
    fontWeight: "700",
    fontSize: 40,
  },
  meusRemedios1: {
    top: 80,
    fontSize: 15,
    lineHeight: 36,
    textAlign: "left",
    color: "#000",
    left: 32,
    position: "absolute",
  },
  proximosRemedios: {
    top: 320,
    left: 21,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    position: "absolute",
  },
  componenteContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    marginBottom: 100,
  },
  oSeuRemedio: {
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    marginVertical: 16,
  },
  destaque: {
    fontWeight: "bold",
  },
  meusRemedios: {
    flex: 1,
    backgroundColor: "#fff",
  },
  remediosContainer: {
    marginTop: 16,
  },
  oSeuRemedioContainer: {
    top: 192,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
    width: 340,
    height: 90,
    left: 32,
    position: "absolute",
  },
  botaoCadastrar: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: "#433EF7",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 12,
  },
  textoBotaoCadastrar: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MeusRemedios;
