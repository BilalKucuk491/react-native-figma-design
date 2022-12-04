import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {icons} from '../../constants';
import {FontIos} from '../../constants/theme';
import HeaderMenuOption from '../HeaderMenuOption';

const HeaderContext = () => {
  return (
    <View style={{marginTop: 50}}>
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <Image style={{height: 16, width: 8}} source={icons.leftArrow} />
        </View>
        <Text style={styles.text}>Naturlyrik: Gedichtsanal</Text>
        <View style={styles.iconContext}>
          <View style={{...styles.circle, marginRight: 10}}>
            <Image style={styles.icon} source={icons.plus} />
          </View>

          {/* <TouchableOpacity onPress={()=> console.log("Merhaba")}>
            <View style={styles.circle}>
              <Image style={styles.icon} source={icons.treeDots} />
            </View>
          </TouchableOpacity> */}

          <HeaderMenuOption/>

        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  circle: {
    width: 28,
    height: 28,
    backgroundColor: 'rgba(211, 211, 217, 0.4)',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10,
  },
  iconContext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    fontFamily: FontIos,
  },
});
export default HeaderContext;
