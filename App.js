// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mapview from './Mapview';
import Gyro from './Gyro';
import Local from './Local';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to MapView"
        onPress={() => navigation.navigate('Mapview')}
      />
      <Button
        title="Go to Gyroscope"
        onPress={() => navigation.navigate('Gyro')}
      />
      <Button
        title="Go to Location"
        onPress={() => navigation.navigate('Local')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Mapview' component={Mapview}></Stack.Screen>
        <Stack.Screen name='Gyro' component={Gyro}></Stack.Screen>
        <Stack.Screen name='Local' component={Local}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

