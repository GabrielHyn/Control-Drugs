import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Input from '../components/Input';
import { useNavigation } from "@react-navigation/native";
import {app} from "../config/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
      const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, senha)
            .then((credenciais)=>{
                navigation.navigate("MeusRemedios");
            })
            .catch((error)=>{
              alert("Não possível autenticar");
              console.log(error);
          })        
        

  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acesse o Control Drugs</Text>
        <Input
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <Input
            placeholder="senha"
            senha={true}
            value={senha}
            onChangeText={text => setSenha(text)}
        />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.esqueceuASenha}>Esqueceu a senha?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    marginBottom: 50,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#433fe7',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginVertical: 20,
    width: '30%',
    
  },
  button: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  esqueceuASenha: {
    marginTop: 10,
    color: '#433fe7',
  },
});

export default Login;