import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Task from '../components/Task/Task';

export default function TasksScreen() {

  const [tasks, setTasks] = useState([])
  const [original, setOriginal] = useState([
    {
      id: 1,
      nome: "Estudar",
      descricao: "Estudar para DevInHouse",
      status: "false",
      data: "18 set 2024"
    },
    {
      id: 2,
      nome: "Pagar boleto",
      descricao: "Pagar boleto do condominio de minas",
      status: "false",
      data: "17 set 2024"
    },
    {
      id: 3,
      nome: "Estudar 2",
      descricao: "Estudar para Faculdade",
      status: "false",
      data: "18 set 2024"
    },
  ])

  const [search, setSearch] = useState("")

  useEffect(() => {
    // toLocaleLowerCase
    console.log('usuario digitando no input de busca')
    const filtrado = original.filter(item => item.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setTasks(filtrado)
  }, [search])

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder='Buscar tarefa' onChangeText={setSearch} value={search} />
      
      <View style={styles.list}>
        {tasks.map(task => {
          return <Task key={task.id}
            nome={task.nome}
            descricao={task.descricao}
            status={task.status}
            data={task.data} />
        })}
      </View>
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
    gap: '10px',
    marginTop: '10px'
  },
  searchInput: {
    width: '200px',
    height: '32px',
    borderWidth: 1,
    borderColor: 'gray'
  }
});