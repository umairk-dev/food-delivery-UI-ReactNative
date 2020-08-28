import React, { useState } from "react";
import {FlatList, View} from 'react-native';

import IconListItem from './icon-list-item';


const HorizontalIconList = ({items}) =>{
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={items}
            renderItem={({item}) => <IconListItem {...item}/>}
        />
    );
}

export default HorizontalIconList;