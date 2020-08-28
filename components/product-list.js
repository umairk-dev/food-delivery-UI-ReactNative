import React from 'react';
import {FlatList, View,Text,StyleSheet} from 'react-native';
import Product from './product';

const ProductList = ({items, handleScroll}) => {
   
    return (

        <View style={styles.container}>
            {items.map((item, key) => (
                <View style={{ width:"49%"}} key={item.id}>
                    <Product {...item} />
                </View>                
            ))}
        </View>
       
   );
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        width:"100%",
        height:"100%",
       flexDirection: 'row',
       flexWrap: 'wrap',
    }
})

export default ProductList;