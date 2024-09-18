import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [idade, setIdade] = useState(0)

  const [novoProduto, setNovoProduto] = useState("Caderno")
  const [produtos, setProdutos] = useState(["Celular", "Geladeira", "Fogão"])
  const [count, setCount] = useState(0)

  const [filtro, setFiltro] = useState(1)

  function addProduto() {
    setProdutos([...produtos, novoProduto])
    setNovoProduto("")
  }

  // Update
  useEffect(() => {
    console.log("Algo foi alterado na tela")
  })
  
  // Identificar montagem do componente
  useEffect(() => {
    console.log("Componente foi iniciado.")
    // const response = fetch('buscar-api/produtos')
    // setProdutos(response)
  }, [])

  // Mapear variaveis - vai executar quando houver mudanca na variavel
  useEffect(() => {
    console.log('Lista de produtos foi alterada.')
  }, [produtos])

  // useEffect(() => {
  //   if (idade < 18) {
  //     // alert para mostrar que nao é permitido menores de idade na app.
  //   }
  //  }, [idade])

  useEffect(() => {
    // filtro = 2
    if (filtro === 1) {
      setProdutos(produtos)
    }
    const filtrado = produtos.filter(item => item.category === filtro)
    setProdutos(filtrado)
  }, [filtro])

  return (
    <View style={styles.container}>

      {/* 
      Button Todos - 1
      Button Eletronicos - 2
      Button Alimentos - 3
      */}

      <>
        <Text>Fragmento</Text>
      </>

      <Text>Produto Digitado: {novoProduto}</Text>
      
      <TextInput value={novoProduto} placeholder='Digite o nome do produto'
        onChangeText={setNovoProduto} />

      {produtos.map(produto => {
        return <Text>{produto}</Text>
      })}

      <Button title='Adicionar Produto' onPress={addProduto} />

      <Text>Count: {count}!</Text>
      <StatusBar style="auto" />

      <Button title='Aumentar' 
        onPress={() => setCount(count+1)} />

      <Button title='Diminuir' 
        onPress={() => setCount(count-1)} />


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