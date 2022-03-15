import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './components/Onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/Login/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (

  <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen options={{headerShown: false}} name="Onboarding" component={Onboarding}/>
     <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
     <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
});
