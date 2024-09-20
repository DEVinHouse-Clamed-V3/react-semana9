import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button, Modal } from 'react-native';
import Task from '../components/Task/Task';
import { getData } from '../services/storage';

export default function TasksScreen() {

  const [inputValue, setInputValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  const [tasks, setTasks] = useState([])
  const [original, setOriginal] = useState([
    // {
    //   id: 1,
    //   nome: "Estudar",
    //   descricao: "Estudar para DevInHouse",
    //   status: "false",
    //   data: "18 set 2024"
    // },
    // {
    //   id: 2,
    //   nome: "Pagar boleto",
    //   descricao: "Pagar boleto do condominio de minas",
    //   status: "false",
    //   data: "17 set 2024"
    // },
    // {
    //   id: 3,
    //   nome: "Estudar 2",
    //   descricao: "Estudar para Faculdade",
    //   status: "false",
    //   data: "18 set 2024"
    // },
  ])

  const [search, setSearch] = useState("")

  // Codigo que será executado no carregamento do componente.
  // Irá verificar se possui dados salvos localmente relacionados as Tasks.
  // Caso haja tasks salvas, ele irá ser carregado no array 'original'
  // Caso contrário, original continuará sendo um array vazio.
  useEffect(() => {
    async function getStorageData() {
      const _tasks = await getData('tasks')
      if (_tasks) {
        setOriginal(_tasks)
      }
    }

    getStorageData()
  }, [])

  // useEffect responsavel por atualizar o array 'tasks'
  // Este é o array que é renderizado na tela
  // Código será executado toda vez que variável search ou original for alterada.
  useEffect(() => {
    /**
     * "Estudar".includes("") => true
     * "Pagar boleto".includes("") => true
     * "Estudar 2".includes("") => true
     */
    console.log('usuario digitando no input de busca ou array Original foi alterado')
    const filtrado = original.filter(item =>
      item.nome.toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()))


    setTasks(filtrado)
  }, [search, original])

  function novaTarefa() {
    const newTask = {
      id: tasks.length + 1,
      nome: inputValue,
      descricao: "Exemplo de tarefa criada",
      status: "false",
      data: "19 set 2024"
    }

    setOriginal(prev => [...prev, newTask])
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder='Buscar tarefa' onChangeText={setSearch} value={search} />
      <Button title='Criar Tarefa' onPress={() => setModalVisible(true)} />

      {tasks.length === 0 ? 
        <Text>Nao existem tarefas cadastradas</Text> : <></>}      

      <View style={styles.list}>
        {tasks.map(task => {
          return <Task key={task.id}
            nome={task.nome}
            descricao={task.descricao}
            status={task.status}
            data={task.data} />
        })}
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Nova Tarefa</Text>
            <TextInput 
              placeholder='Digite o nome da tarefa'
              value={inputValue} onChangeText={setInputValue}/>
            <Button title='Cancelar' onPress={() => setModalVisible(false)} />
            <Button title='Salvar' onPress={novaTarefa} />
          </View>
        </View>
      </Modal>

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