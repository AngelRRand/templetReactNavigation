import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Inicio from './src/Views/Inicio';
import Nosotros from './src/Views/Nosotros';


//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>

        <Stack.Navigator
          inicialRouteName='Inicio'
        >
          <Stack.Screen
            name='Inicio'
            component={Inicio}
          />
          <Stack.Screen
            name='Nosotros'
            component={Nosotros}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
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
