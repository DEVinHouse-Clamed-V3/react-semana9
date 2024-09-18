import { StyleSheet, Text, View } from 'react-native';

// props
function Task({ nome, descricao, status, data }) {
    return (
        <View style={styles.card}>   
            <Text>Nome: {nome}</Text>    
            <Text>Descricao: {descricao}</Text>   
            <Text>Status: {status}</Text>     
            <Text>Data: {data}</Text>

        {/* nome, descricao, status, data */}
        </View>
    )
}

export default Task;

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
        height: 'auto',
        padding: '14px',
        borderRadius: '4px'        
    }
})