import React,{useState} from 'react';
import {View,Text,StyleSheet,Animated} from 'react-native';

import NavigationBar from 'react-native-navbar';

const AnimatedNavigationBar = Animated.createAnimatedComponent(NavigationBar);



import ProfileCircle from '../components/profile-circle';
import HorizontalIconList from '../components/horizontal-icon-list';


import ProductList from '../components/product-list';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    const [categories,setCategories] = useState([
        {id:uuidv4(), image: require('../assets/burger.png') },
        {id:uuidv4(), image: require('../assets/pizza.png') },
        {id:uuidv4(), image: require('../assets/salad.png') },
        {id:uuidv4(), image: require('../assets/soda.png') },
        {id:uuidv4(), image: require('../assets/summer.png') }
    ]);
    
    const [products,setProducts] = useState([
        {id:uuidv4(), image: require('../assets/food_pizza.jpg'),name:"Pizza",desc:"Italian Pizza",price:"$20" },
        {id:uuidv4(), image: require('../assets/food_salad.png'),name:"Salad",desc:"mixed vegies",price:"$30" },
        {id:uuidv4(), image: require('../assets/food_salmon.png'),name:"Salmon",desc:"Salmon and vegies",price:"$45" },
        {id:uuidv4(), image: require('../assets/food_chicken.png'),name:"Chicken",desc:"yummy chicken dish",price:"$10" },
       
    ]);

    const [isNavBarHidden,setIsNavBarHidden] = useState(false); 
    const [height,setHeight] = useState(new Animated.Value(64));

    const setAnimation = enable => {
        Animated.timing(height, {
        useNativeDriver:false,
        duration: 400,
        toValue: enable? 64 : 0
        }).start()
    };

    const handleScroll = (event) => {
        
        setAnimation(isNavBarHidden);
        setIsNavBarHidden(!isNavBarHidden);
    };
    

    const handleProfileClick = () =>{
        navigation.navigate('Profile')
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>G'day Umair!</Text>
                <View style={styles.profile}>
                    <ProfileCircle  image={require('../assets/client.png')} onClick={handleProfileClick}/>
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>What do you want for dinner?</Text>
            </View>
            <View>
                <HorizontalIconList items = {categories}/>
            </View>
            <Text style={styles.subtitle}>Recommended</Text>
            <View style={styles.container}>
                <ProductList handleScroll={handleScroll} items = {products}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    topBar:{
        flexDirection:"row",
        padding:10,
        justifyContent:"space-between",
        alignItems:"center"
    },
    title:{
        fontSize:26,
        padding:10,
        justifyContent:"flex-start",
        alignSelf:"flex-start"
    },
    subtitle:{
        fontSize:25,
        marginStart:15,
        width:"70%",
        fontWeight:"bold"
        
    },
    profile:{
        justifyContent:"flex-end"
    }
})

export default Home;
