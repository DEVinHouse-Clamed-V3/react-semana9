import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [novoProduto, setNovoProduto] = useState("Caderno")
  const [produtos, setProdutos] = useState(["Celular", "Geladeira", "Fogão"])
  const [count, setCount] = useState(0)

  function addProduto() {
    setProdutos([...produtos, novoProduto])
    setNovoProduto("")
  }

  return (
    <View style={styles.container}>

      <Text>Produto Digitado: {novoProduto}</Text>
      
      <TextInput value={novoProduto} placeholder='Digite o nome do produto'
        onChangeText={setNovoProduto} />

      {produtos.map(produto => {
        return <Text>{produto}</Text>
      })}
      <Button title='Adicionar Produto' onPress={addProduto} />

      {/* <Text>Count: {count}!</Text> */}
      <StatusBar style="auto" />

      {/* <Button title='Aumentar' 
        onPress={() => mudarValorCount(1)} />

      <Button title='Diminuir' 
        onPress={() => mudarValorCount(-1)} /> */}


      {/* 
        BARRA DE PESQUISA

        Lista de Produtos
        arrayProdutos...

        {array.map(item...)}
      */}

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
});
