import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './screens/Home'
import {Profile} from './screens/Profile'
import {HomeStack} from './screens/HomeStack'
import { Login } from './screens/Login';
import { HomeTabs } from './screens/HomeTabs';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
