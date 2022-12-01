import {View, Text, Image} from 'react-native';
import React from 'react';
import {FONTS, COLORS} from '../../constants/index';
import { TabIconInterface } from '../../types/TabIconInterface';



const TabIcon = ({
  focused,
  icon,
  iconStyle,
  label,
  isTrade = false,
}: TabIconInterface) => {
  if (isTrade) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 60,
          width: 60,
          borderRadius: 30,
          backgroundColor: COLORS.black,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            height: 25,
            width: 25,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
        />
        <Text style={{color: COLORS.white, ...FONTS.h4}}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            height: 25,
            width: 25,
            tintColor: focused ? COLORS.focusedColor : COLORS.tintColor,
            ...iconStyle,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.focusedColor : COLORS.tintColor,
            fontFamily: 'Roboto-Bold', fontSize: 14, lineHeight: 22
          }}>
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
