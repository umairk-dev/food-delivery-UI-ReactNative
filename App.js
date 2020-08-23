import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from './screens/intro';
import Home from './screens/home';
import Detail from './screens/detail';


const Stack = createStackNavigator();

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function HomeStack() {
  return (
    <Tab.Navigator>
    </Tab.Navigator>
  );
}

const App = () =>{

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Intro} 
          options={{
            headerTransparent:true,  
            title:"",
              headerTintColor: '#fff',  headerStyle:{ backgroundColor:'#FC9D14'}
          }}
            
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
