import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {icons} from '../../constants';
import {FontIos, SIZES} from '../../constants/theme';
import HeaderMenuOption from '../HeaderMenuOption';
import { LeftArrow, Plus } from '../../assets/newicons';
import { horizontalScale, verticalScale } from '../../constants/metrics';

const HeaderContext = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <LeftArrow/>
        </View>
        <Text style={styles.text}>Naturlyrik: Gedichtsanal</Text>
        <View style={styles.iconContext}>
          <View style={{...styles.circle, marginRight: horizontalScale(10)}}>
            <Plus/>
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
  mainContainer:{
    marginTop:verticalScale(61),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(11),
  },
  circle: {
    width: 28,
    height: 28,
    backgroundColor: 'rgba(211, 211, 217, 0.4)',
    borderRadius: 56,
    justifyContent: 'center',
    alignItems: 'center',
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
