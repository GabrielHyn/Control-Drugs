import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Remedio from "../components/remedio";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useFocusEffect } from "@react-navigation/native";

const MeusRemedios = () => {
  const navigation = useNavigation();
  const [tempoRestante, setTempoRestante] = useState(0);
  const medicamentoMaisProximoNome = useRef("");

  const [medicamentos, setMedicamentos] = useState([]);

  const carregarMedicamentos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "remedios"));
      const medicamentosArray = [];

      querySnapshot.forEach((doc) => {
        const medicamento = {
          id: doc.id,
          ...doc.data(),
        };
        medicamentosArray.push(medicamento);
      });

      setMedicamentos(medicamentosArray);
    } catch (error) {
      console.error("Erro ao carregar medicamentos: ", error);
    }
  };

  useEffect(() => {
    carregarMedicamentos();
  }, []);

  useEffect(() => {
    const calcularTempoRestante = () => {
      const agora = new Date();
      const horaAtual = agora.getHours() * 3600 + agora.getMinutes() * 60;

      let tempoRestante = Infinity;
      let medicamentoProximoNome = "";

      for (const medicamento of medicamentos) {
        if (medicamento && medicamento.horario) {
          const [hora, minuto] = medicamento.horario.split(":");
          const horaMedicamento = parseInt(hora) * 3600 + parseInt(minuto) * 60;

          const tempoAteMedicamento = horaMedicamento - horaAtual;

          if (tempoAteMedicamento > 0 && tempoAteMedicamento < tempoRestante) {
            tempoRestante = tempoAteMedicamento;
            medicamentoProximoNome = medicamento.nome;
          }
        }
      }

      if (tempoRestante === Infinity) {
        const primeiroMedicamento = medicamentos[0];
        if (primeiroMedicamento && primeiroMedicamento.horario) {
          const [hora, minuto] = primeiroMedicamento.horario.split(":");
          const horaMedicamento = parseInt(hora) * 3600 + parseInt(minuto) * 60;

          tempoRestante = 24 * 3600 - horaAtual + horaMedicamento;
          medicamentoProximoNome = primeiroMedicamento.nome;
        }
      }

      setTempoRestante(tempoRestante);
      medicamentoMaisProximoNome.current = medicamentoProximoNome;
    };

    calcularTempoRestante();

    const interval = setInterval(calcularTempoRestante, 1000);

    return () => clearInterval(interval);
  }, [medicamentos]);

  const horasRestantesProximo = Math.floor(tempoRestante / 3600);
  const minutosRestantesProximo = Math.floor((tempoRestante % 3600) / 60);

  const handleCadastrarRemedio = () => {
    navigation.navigate("CadastrarRemedio");
  };

  const handleExcluirRemedio = async (id) => {
    try {
      await deleteDoc(doc(db, "remedios", id));
      console.log("Medicamento excluído com sucesso!");
      const medicamentosArray = medicamentos.filter((med) => med.id !== id);
      setMedicamentos(medicamentosArray);
    } catch (error) {
      console.error("Erro ao excluir medicamento: ", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      carregarMedicamentos();
    }, [])
  );

  return (
    <View style={styles.meusRemedios}>
      <Text style={styles.meusRemedios1}>
        <Text style={styles.meus}>Meus</Text>
        {"\n"}
        <Text style={styles.remedios}>Remédios</Text>
      </Text>
      <Text style={styles.proximosRemedios}>Próximos Remédios</Text>
      <View style={styles.componenteContainer}>
        <ScrollView style={styles.remediosContainer}>
          {medicamentos.map((medicamento, index) => (
            <Remedio
              key={index}
              sourceImagem={medicamento.imagem}
              nome={medicamento.nome}
              horario={medicamento.horario}
              onDelete={() => handleExcluirRemedio(medicamento.id)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.oSeuRemedioContainer}>
        <Text style={styles.oSeuRemedio}>
          {tempoRestante > 0
            ? `Faltam ${horasRestantesProximo} horas e ${minutosRestantesProximo} minutos para o seu remédio ${medicamentoMaisProximoNome.current}`
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
    maxHeight: 300,
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
