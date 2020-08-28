import 'react-native-gesture-handler';
import React from 'react';
import {View,
  StyleSheet,TouchableOpacity
} from 'react-native';


import Home from './home';
import Detail from './detail';
import Cart from './cart';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/dist/FontAwesome';



const Tab = createBottomTabNavigator();



const MainView = ({navigation}) => {
    return (
      <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Search') {
                        iconName = 'search';
                    }else if (route.name === 'Favorite') {
                        iconName = 'heart-o';
                    }else if (route.name === 'Notification') {
                        iconName = 'bell-o';
                    }else if(route.name === "Cart"){
                        return focused ? (
                            <View style={styles.cartFocused}>
                                <Icon name="shopping-basket" size={size} color="#fff" />
                            </View>
                        ):(
                            <View style={styles.cartNotFocused}>
                                <Icon name="shopping-basket" size={size} color="#FC9D14" />
                            </View>
                        );
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                activeTintColor: '#FC9D14',
                inactiveTintColor: 'gray',
                safeAreaInsets:false,
                style:{
                    borderTopStartRadius:40,
                    borderTopEndRadius:40,
                    backgroundColor:"#E6E6E6",
                    padding:10
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{ title:"",}}/>
            
            <Tab.Screen name="Search" component={Detail} options={{title:"",}}/>
        
            <Tab.Screen name="Cart" component={Cart} options={{ title:"", }}/>
            
            <Tab.Screen name="Favorite" component={Detail} options={{ title:"", }}/>

            <Tab.Screen name="Notification" component={Detail} options={{ title:"", }}/>


      </Tab.Navigator>

    );
  }



  
const styles = StyleSheet.create({
    tabs:{
      flex:1,
      alignItems:"baseline",
      justifyContent:"center",
    },
    cartFocused:{
        position: 'absolute',
        bottom: 0, // space from bottombar
        height: 68,
        width: 68,
        backgroundColor:"#FC9D14",
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        color:"#fff"
 
    },
    cartNotFocused:{
        position: 'absolute',
        bottom: 0, // space from bottombar
        height: 68,
        width: 68,
        backgroundColor:"#fff",
        borderRadius:100,
        borderColor:"#FC9D14",
        justifyContent: 'center',
        alignItems: 'center',
 
    }
 });

  export default MainView;
