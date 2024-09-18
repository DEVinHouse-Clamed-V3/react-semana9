import { Button, Text, TextInput, View, Switch } from 'react-native';

// props
function Task({ nome, descricao, status, data }) {
    return (
        <View>   
            <Text>Nome: {nome}</Text>    
            <Text>Descricao: {descricao}</Text>   
            <Text>Status: {status}</Text>     
            <Text>Data: {data}</Text>

        {/* nome, descricao, status, data */}
        </View>
    )
}

export default Task;