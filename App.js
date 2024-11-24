import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Ionicons } from '@expo/vector-icons'; 

import SplashScreen from './src/components/SplashScreen';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HomeScreen'; 
import ExploreScreen from './src/components/ExploreScreen';
import NewsScreen from './src/components/NewsScreen';
import AddPetScreen from './src/components/AddPetScreen';
import VaccinationCardScreen from './src/components/VaccinationCardScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#88CBCB',
        tabBarInactiveTintColor: '#252525',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === 'Meu Pet') {
            iconName = focused ? 'paw' : 'paw-outline';
          } else if (route.name === 'Explorar') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Notícias') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Meu Pet" component={HomeScreen} />
      <Tab.Screen name="Explorar" component={ExploreScreen} />
      <Tab.Screen name="Notícias" component={NewsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="AddPet" component={AddPetScreen} />
        <Stack.Screen name="VaccinationCard" component={VaccinationCardScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
