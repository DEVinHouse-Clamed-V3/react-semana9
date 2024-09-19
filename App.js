import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import TasksScreen from './screens/TasksScreen'

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* Definicao das tabs */}
      <Tab.Navigator initialRouteName='Tasks'>
        <Tab.Screen name='Message' component={HomeScreen} />
        <Tab.Screen name='Tasks' component={TasksScreen} />
        <Tab.Screen name='Last Activity' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}