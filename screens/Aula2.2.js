import { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View, Switch } from 'react-native';

export default function Aula2() {

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

  useEffect(() => {
    console.log('tela sendo atualizada')
  })

  useEffect(() => {
    console.log('executa apenas no inicio do componente')
  }, [])

  useEffect(() => {
    console.log('usuario alterando o tema da aplicacao')
  }, [isEnabled])

  return (
    <View style={isDark ? styles.container : styles.containerDark}>
      <TextInput placeholder='Nome' value={nome} onChangeText={setNome} />
      <TextInput placeholder='E-mail' keyboardType='email-address' value={email} onChangeText={setEmail} />

      <Switch value={isEnabled} onValueChange={setIsEnabled} />

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
