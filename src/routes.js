import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Telas
import Home from './screens/Home'


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: 'HomeScreen' 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}