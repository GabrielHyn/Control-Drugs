import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Remedio from '../components/remedio';

const MeusRemedios = () => {
  return (
    <View style={styles.meusRemedios}>
      <Text style={styles.meusRemedios1}>
        <Text style={styles.meus}>Meus</Text>
        {'\n'}
        <Text style={styles.remedios}>Remédios</Text>
      </Text>
      <Text style={styles.proximosRemedios}>Próximos Remédios</Text>
      <View style={styles.componenteContainer}>
        <View style={styles.remediosContainer}>
          <Remedio
            sourceImagem={require('../../assets/remedioAmarelo.png')}
            nome="Diazepam"
            hora="7:30"
          />
          <Remedio
            sourceImagem={require('../../assets/remedioVermelho.png')}
            nome="Clonidina"
            hora="8:00"
          />
          <Remedio
            sourceImagem={require('../../assets/remedioAmarelo.png')}
            nome="Omeprazol"
            hora="8:30"
          />
          <Remedio
            sourceImagem={require('../../assets/remedioVermelho.png')}
            nome="Buscopam"
            hora="9:00"
          />
        </View>
      </View>
      <View style={styles.oSeuRemedioContainer}>
      <Text style={styles.oSeuRemedio}>
          Faltam <strong>2 HORAS</strong> para o seu remedio <strong>DIAZEPAM</strong>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meus: {
    fontWeight: '300',
    fontSize: 40,
  },
  remedios: {
    fontWeight: '700',
    fontSize: 40,
  },
  meusRemedios1: {
    top: 80,
    fontSize: 15,
    lineHeight: 36,
    textAlign: 'left',
    color: '#000',
    left: 32,
    position: 'absolute',
  },
  proximosRemedios: {
    top: 320,
    left: 21,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
    position: 'absolute',
  },
  componenteContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginBottom: 100,
  },
  oSeuRemedio: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    marginVertical: 16,
  },
  meusRemedios: {
    flex: 1,
    backgroundColor: '#fff',
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
    position: 'absolute',
  },
});

export default MeusRemedios;
