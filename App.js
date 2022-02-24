import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';


export default function App() {
  const Stack = createNativeStackNavigator();
      return <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
{/* <Stack.Screen name='Home' component={Home}/> */}
            <Stack.Screen name='Home'>
            {(props)=> <Home {...props} channelName={"Samiul Islam"}/>}
            </Stack.Screen>
            {/* About Screen */}
            <Stack.Screen name='About' component={About}/>
            {/* Contact Screen */}
            <Stack.Screen name='Contact' component={Contact}/>
            {/* About Screen */}
            <Stack.Screen name='Course' component={Course}/>
            {/* About Screen */}
            <Stack.Screen name='User' component={UserData}/>
        </Stack.Navigator>
      </NavigationContainer>  
}
 