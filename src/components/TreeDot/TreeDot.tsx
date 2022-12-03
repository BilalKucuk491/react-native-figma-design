import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {icons} from '../../constants';

const TreeDot = () => {
  return (
    <TouchableOpacity onPress={()=> console.log("Merhaba")}>
      <View style={{justifyContent: 'center'}}>
        <Image source={icons.blackDots} />
      </View>
    </TouchableOpacity>
  );
};


export default TreeDot;
