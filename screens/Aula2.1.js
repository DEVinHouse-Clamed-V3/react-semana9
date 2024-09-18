import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Aula1() {  

  const [text, setText] = useState("")
  const [numero, setNumero] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isEnabled, setIsEnabled] = useState(true)
  const [selectedValue, setSelectedValue] = useState("")

  const [form, setForm] = useState({

  })
  
  function submit() {
    if (typeof numero !== 'number') {
      return
    }

    if (typeof text !== 'string') {
      return
    }
  }

  useEffect(() => {
    if (isEnabled) {
      // mostra o tema light
    } else {
      // mostra o tema dark
    }
  }, [isEnabled])

  return (
    <View style={isEnabled ? styles.container : styles.containerDark}>
      <Text>Texto Digitado: {text}</Text>
      <Text>Número Digitado: {numero}</Text>
      <Text>Senha Digitada: {password}</Text>

      <TextInput        
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setText} value={text} placeholder="Digite algo"        
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setNumero} value={numero} placeholder="Digite um número"        
        keyboardType='numeric'
      />

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setEmail} value={email} placeholder="Digite seu e-mail"  
        autoCompleteType="email"
        textContentType="emailAddress"
        autoCapitalize='none'
        keyboardType='email-address'
      />

      <TextInput 
       style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
       placeholder='Digite sua senha' value={password} onChangeText={setPassword}
       secureTextEntry={true}
      />


      {/* <Switch onValueChange={setIsEnabled} value={isEnabled} /> */}


      <Picker selectedValue={selectedValue} onValueChange={(itemValue) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

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
