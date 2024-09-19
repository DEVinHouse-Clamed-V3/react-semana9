import { useEffect, useState } from "react";
import { View, Text, Button, Switch } from "react-native";
import { getData, storeData } from "../services/storage";

export default function MessagesScreen() {

    const [isDark, setIsDark] = useState(false)

    // Montado
    useEffect(() => {
        async function carregarDadosStorage() {
            const themePreference = await getData('theme')
            console.log('Preferencia de tema salva: ', themePreference)
        }
        carregarDadosStorage()
    }, [])

    function mudancaTema() {
        console.log('Usuario está mudando a preferencia de tema. isDark: ', isDark)
        setIsDark(!isDark)
        storeData('theme', isDark ? 'dark' : 'light')
    }
    return (
        <View>
            <Text>Não existem mensagens recentes.</Text>
            <Switch value={isDark} onValueChange={mudancaTema}/>
        </View>
    )
}