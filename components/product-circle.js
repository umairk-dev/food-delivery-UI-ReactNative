import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const ProductCircle = ({image}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.innerContainer} source={image}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        shadowColor:"black",
        padding:10,
    
    },
    innerContainer:{
        width:120,
        height:120,
        borderRadius:120/2,
    },
    

});

export default ProductCircle;