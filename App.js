import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,View,Text,Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Intro from './screens/intro';
import MainView from './screens/main';
import Cart from './screens/cart';
import Profile from './screens/profile';

const RootStack = createStackNavigator();



function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}



const App = () =>{

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Welcome">
        <RootStack.Screen name="Welcome" component={Intro} 
          options={{
            headerTransparent:true,  
            title:"",
            headerTintColor: '#fff',  headerStyle:{ backgroundColor:'#FC9D14'}
          }}            
        />
        <RootStack.Screen name="Main" component={MainView} 
          options={{
            headerTransparent:true,  
            title:"",
            headerLeft:()=>{
            }
          }}     
        />
         <RootStack.Screen name="Cart" component={Cart} 
          options={{
            headerTransparent:true,  
            title:"",
            headerLeft:()=>{
            }
          }}     
        />
        <RootStack.Screen name="MyModal" component={ModalScreen} />
        <RootStack.Screen name="Profile" component={Profile} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}


export default App;
