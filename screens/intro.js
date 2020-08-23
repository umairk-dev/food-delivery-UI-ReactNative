import React from 'react';
import {View,Image, Text,StyleSheet, Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Intro = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.sliderContainerStyle}>
                    <View 
                        style={styles.slider}
                        horizontal={true}
                    >
                        <Image style={styles.image} source={require('../assets/intro_1.png')} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>A new destination for foodie</Text>
                <Text style={styles.subtitle}>Pull up a chair. Take a taste. Come join us. Life is so endlessly delicious</Text>
                <TouchableOpacity style={styles.button}>
                    <Icon color="#000" name="chevron-right" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    topContainer : {
        flex:1.5,
        flexDirection:"row",
        alignSelf:"center",
        overflow: 'hidden',
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').width / 1.7,
        backgroundColor:'#FFF'
    },
    bottomContainer : {
        flex:1,
        backgroundColor:'#FFF',
        justifyContent:"space-between",
        alignItems:"center"
    },
    sliderContainerStyle: {
        borderRadius: Dimensions.get('window').width,
        width: Dimensions.get('window').width * 2,
        height: Dimensions.get('window').width * 2,
        marginLeft: -(Dimensions.get('window').width / 2),
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        backgroundColor:'#FC9D14',
        elevation:5
    },
    slider: {
        width: "100%",
        height: Dimensions.get('window').width / 1.1,
        position: 'absolute',
        bottom: 0,
        marginLeft: Dimensions.get('window').width / 2,
        padding:10
    },
    image :{
        width:"50%",
        height:"100%"
    },
    title:{
        paddingTop:40,
        width:"70%",
        fontSize:25,
        fontWeight:"bold",
        flex:1
    },
    subtitle:{
        width:"70%",
        fontSize:15,
        flex:1
    },
    button:{
        backgroundColor:"#FC9D14",
        borderRadius:100,
        width:"16%",
        height:"80%",
        flex:1,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center"

    }
})

export default Intro;
