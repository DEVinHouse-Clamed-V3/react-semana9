import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Modal } from 'react-native';


export default function TestesScreen() {

  const [count, setCount] = useState(0)

  const [liked, setLiked] = useState(false)
  /**
   * Gerenciamento de estados simples
   *  - like / curtir do instagram
   *  - const [liked, setLiked] = useState(false)
   * 
   * Formulario Dinamico
   * - const [email, setEmail] = useState('')
   * <TextInput value={email} onChangeText={setEmail} />
   * 
   * Search
   * 
   * Dados Temporarios
   * 
   * 
   * Controle de Interface (tema dark / light)
   */

  const [search, setSearch] = useState('')

  const [filtrados, setFiltrados] = useState([])
  const [original, setOriginal] = useState([
    {
      id: 0,
      nome: 'T-Cross',
      marca: 'VW'
    },
    {
      id: 1,
      nome: 'Corolla',
      marca: 'Toyota'
    }
  ])

  useEffect(() => {
    const arrayTemporario = original.filter(item =>
      item.nome.includes(search) ||
      item.marca.includes(search))

    setFiltrados(arrayTemporario)
  }, [search])


  return (
<View style={styles.container}>
      <TextInput placeholder='Buscar Carro' value={search} onChangeText={setSearch} />
      {filtrados.map(item => {
        return <Text key={item.id}>{item.marca} - {item.nome}</Text>
      })}

      {/* <Text>Contador: {count}</Text>
            <Button title='Aumentar' onPress={() => setCount(count+1)}/> */}
      {/* <Button title='Aumentar' onPress={() => setCount(count+1)}/>
            <Text>{liked ? 'Curtido' : 'Curtir'}</Text>
            <Button title={liked ? 'Descurtir' : 'Curtir'} onPress={() => setLiked(!liked)}/> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 10
  },
  searchInput: {
    width: 200,
    height: 32,
    borderWidth: 1,
    borderColor: 'gray'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});