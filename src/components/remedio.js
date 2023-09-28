import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Remedio = ({ sourceImagem, nome, horario, onDelete }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.containerImagem}>
        <Image source={sourceImagem} style={styles.imagem}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.hora}>Tomar às {horario}</Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.lixeiraContainer}>
        <Image
          source={require("../../assets/lixeira.png")}
          style={styles.lixeira}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E6F1FA",
    borderRadius: 10,
    marginVertical: 5,
  },
  containerImagem: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  imagem: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  nome: {
    fontSize: 20,
    fontWeight: "600",
  },
  hora: {
    fontSize: 15,
  },
  lixeiraContainer: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  lixeira: {
    width: 30,
    height: 30,
  },
});

export default Remedio;
