import AsyncStorage from '@react-native-async-storage/async-storage';


/**
 * console.log('1 - 19:55:56')
 * console.log('2 - 19:55:57')
 * const response = await fetch('api')
 * console.log('3 - 19:55:59')
 * 
 */


// Salvando um valor
// Uso: await storeData('themePreference', 'dark')
// Uso: await storeData('email', 'yan.m.esteves@gmail.com')
export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error('Failed to save object', e);
    }
};

// Lendo um valor
// Uso: const themePreference = await getData('themePreference')
// Uso: const email = await getData('email')
export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.error('Failed to retrieve data', e);
    }
};

// Remover um valor
// Uso: removeData('themePreference')
export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Data removed');
    } catch (e) {
        // erro ao remover
        console.error('Failed to remove data', e);
    }
};

// Uso: clearData()
export const clearData = async () => {
    try {
        await AsyncStorage.clear();
        console.log('Data clear');
    } catch (e) {
        // erro ao remover
        console.error('Failed to clear data', e);
    }
}