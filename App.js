import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import TasksScreen from './screens/TasksScreen'
import MessagesScreen from './screens/MessagesScreen'
import TestesScreen from './screens/TestesScreen'
import LastActivityScreen from './screens/LastActivityScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeProvider } from './context/ThemeContext';

import './gesture-handler.native';
// const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <NavigationContainer>
          <StatusBar
            backgroundColor="transparent"
            translucent={true}
            barStyle="dark-content" // Define o estilo do conteúdo da StatusBar (claro ou escuro)
          />


          <Drawer.Navigator initialRouteName="Testes">
            <Drawer.Screen name="Tasks" component={TasksScreen} />
            <Drawer.Screen name="Messages" component={MessagesScreen} />
            <Drawer.Screen name="Testes" component={TestesScreen} />
          </Drawer.Navigator>


          {/* Login component={LoginScreen} */}
          {/* Cadastro component={CadastroScreen} */}

          {/* Definicao das drawers */}


          {/* Definicao das tabs */}
          {/* <Tab.Navigator
          initialRouteName='Tasks'
          screenOptions={{ tabBarIndicatorStyle: { backgroundColor: "blue" } }}>
        
          <Tab.Screen name='Messages' component={MessagesScreen} />
          <Tab.Screen name='Tasks' component={TasksScreen} />
          <Tab.Screen name='Last Activity' component={LastActivityScreen} />
          
        </Tab.Navigator> */}
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
})