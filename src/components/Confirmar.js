import { View, Text, StyleSheet } from 'react-native';

const Confirmar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Confirmar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    backgroundColor: "#433FE7",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    top: 680,
    left: 105
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    lineHeight: 20,
  },
});

export default Confirmar;
