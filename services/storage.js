import AsyncStorage from '@react-native-async-storage/async-storage';

// Salvando um valor
// Uso: storeData('themePreference', 'dark')
export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error('Failed to save object', e);
    }
};

// Lendo um valor
// Uso: const themePreference = getData('themePreference')
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