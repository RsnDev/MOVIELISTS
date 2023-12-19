import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from './screens/MoviesListScreen';
import MovieDetailsScreen from './screens/MovieDetails';


const Stack = createStackNavigator();
const App = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='MovieListScreen'>
    <Stack.Screen name='MovieListScreen' component={MovieListScreen}/>
    <Stack.Screen name='MovieDetailsScreen' component={MovieDetailsScreen}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

