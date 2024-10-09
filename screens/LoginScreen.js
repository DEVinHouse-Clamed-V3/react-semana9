import { useState } from "react"
import { View, Button, StyleSheet, TextInput, Text } from "react-native"
import { useAuth } from '../context/AuthContext';
export const LoginScreen = () => {
    const { login, logout, user } = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        login(username, password)
    }

    function handleLogout() {
        logout()
    }

    return (
        <View style={styles.container}>
            <Text>Usuario conectado: {JSON.stringify(user)}</Text>
            <TextInput 
                placeholder="Username" 
                value={username} 
                onChangeText={setUsername} />

            <TextInput 
                placeholder="Password" 
                secureTextEntry
                value={password} 
                onChangeText={setPassword} />

            <Button title="Login" onPress={handleLogin}/>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F6FA',
        padding: 20
    }
})