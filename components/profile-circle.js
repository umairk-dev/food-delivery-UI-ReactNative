import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const ProfileCircle = ({image,onClick}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Image style={styles.innerContainer} source={image}/>
        </TouchableOpacity>
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
        width:60,
        height:60,
        borderRadius:60/2,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10
    },
    

});

export default ProfileCircle;