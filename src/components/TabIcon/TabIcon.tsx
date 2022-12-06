import {View, Text, Image} from 'react-native';
import React from 'react';
import {FONTS, COLORS} from '../../constants/index';
import {TabIconInterface} from '../../types/TabIconInterface';
import {Gespeichert, Person, Suchen, Zuletzt} from '../../assets/newicons';
import Suchen2 from '../../assets/newicons/Suchen2';
import Zuletzt2 from '../../assets/newicons/Zuletzt2';
import Gespeichert2 from '../../assets/newicons/Gespeichert2';
import Person2 from '../../assets/newicons/Person2';
import { verticalScale } from '../../constants/metrics';
import { FontIos } from '../../constants/theme';

const ControlIcon = (iconName: String, focused: boolean) => {
  switch (iconName) {
    case 'Zuletzt':
      return focused ? <Zuletzt2 /> : <Zuletzt />;
    case 'Gespeichert':
      return focused ? <Gespeichert /> : <Gespeichert2 />;
    case 'Suchen':
      return focused ? <Suchen2 /> : <Suchen />;
    case 'Spirit':
      return focused ? <Person2 /> : <Person/>;
    default:
      break;
  }
};

const TabIcon = ({
  focused,
  iconName,
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
        {}
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
          
        {ControlIcon(iconName,focused)}

        <Text
          style={{
            color: focused ? COLORS.focusedColor : COLORS.tintColor,
            fontFamily: FontIos,
            fontWeight:"500",
            fontSize: 14,
            lineHeight: 22,
            marginTop:verticalScale(5.5)
          }}>
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
