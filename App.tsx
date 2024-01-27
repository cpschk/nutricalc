// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import ImcTmbCalculate from './screens/ImcTmbScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Casa"
      component={HomeScreen}
      options={{ 
        headerShown: false 
      }}
    />
    <Stack.Screen
      name="ImcTmbCalculate"
      component={ImcTmbCalculate}
      options={{
        headerBackTitle: 'Volver', 
        headerTitle: '',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="ResultScreen"
      component={ResultScreen}
      options={{
        headerBackTitle: 'Volver', 
        headerTitle: '',
        headerShown: true,
      }}
    />
    {/* <Stack.Screen
      name="ResultScreen"
      component={ResultScreen}
      options={{
        headerBackTitle: 'Volver', 
        headerTitle: '',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="ResultScreen"
      component={ResultScreen}
      options={{
        headerBackTitle: 'Volver', 
        headerTitle: '',
        headerShown: true,
      }}
    /> */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} options={{ unmountOnBlur: true }}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
