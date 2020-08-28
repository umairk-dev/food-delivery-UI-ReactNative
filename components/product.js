import React from 'react';
import {TouchableOpacity,View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Image from 'react-native-scalable-image';
import ProductCircle from './product-circle';

//Photo by Trang Doan from Pexels

const Product = ({id,image,name,desc,price,onSale}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.image}>
                    <ProductCircle  image={image}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.subtitle}>{desc}</Text>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.price}>{price}</Text>
                    <TouchableOpacity>
                        <Icon name="heart-o" size={20}  />
                    </TouchableOpacity>
                </View> 
               

            </View>


            
           
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        shadowColor:"black",
        padding:10,
    },
    innerContainer:{
        flex:1,
        borderWidth: 1,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        backgroundColor:"white",
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"100%",     
    },
    image:{
        flex:2,
        padding:5
    },
    title:{
        flex:1,
        fontSize: 20,
        fontWeight:"bold"
    },
    subtitle:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        fontSize: 15
    },
    bottom:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:'center',
        padding:20,
        width:"100%"
    },
    price:{
        fontSize:15,
        fontWeight:"bold"
    }

})
    

export default Product;