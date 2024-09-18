import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Task from './components/Task/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {


  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [isEnabled, setIsEnabled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  function handleSubmit() {
    if (typeof nome !== 'string' || typeof email !== 'string') {
      return;
    }

    console.log('Nome: ', nome, 'E-mail: ', email, 'Aceita os termos de uso: ', isEnabled)
  }

  async function setItem() {
    try {
      await AsyncStorage.setItem('theme', isDark)
      console.log('Dado foi salvo')
    } catch (error) {
      console.error(error)
    }
  }

  async function getItem() {
    try {
      const response = await AsyncStorage.getItem('theme')
      console.log('Dado foi recuperado')
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log('tela sendo atualizada')
  })

  useEffect(() => {
    console.log('executa apenas no inicio do componente')
  }, [])

  useEffect(() => {
    console.log('usuario alterando o tema da aplicacao')
    setItem()

  }, [isDark])

  return (
    <View style={isDark ? styles.container : styles.containerDark}>
      <TextInput placeholder='Nome' value={nome} onChangeText={setNome} />
      <TextInput placeholder='E-mail' keyboardType='email-address' value={email} onChangeText={setEmail} />

      <Switch value={isDark} onValueChange={setIsDark} />

      <Button title='Enviar' onPress={handleSubmit} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  }
});
