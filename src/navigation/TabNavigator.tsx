import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from '../components/TabIcon';
import {icons} from '../constants';
import {
  GespeichertScreen,
  SpiritScreen,
  SuchenScreen,
  ZuletztScreen,
} from '../screens';
import {Gespeichert, Person, Suchen, Zuletzt} from '../assets/newicons';
import {Text} from 'react-native-svg';
import Zuletzt2 from '../assets/newicons/Zuletzt2';
import Gespeichert2 from '../assets/newicons/Gespeichert2';
import Suchen2 from '../assets/newicons/Suchen2';
import Person2 from '../assets/newicons/Person2';

const Tab = createBottomTabNavigator();
export interface TabBarCustomButtonInterface {
  children: any;
  onPress: any;
}

const TabNavigator = () => {
  const [isModalVisible, setTradeVisibility] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 80,
          backgroundColor: '#e9e5e5',
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isModalVisible) {
              return (
                <>
                {focused == true ? <Zuletzt2 /> : <Zuletzt />}
                </>
              );
            }
          },
        }}
        name="ZuletztScreen"
        component={ZuletztScreen}
        listeners={{
          tabPress: e => {
            if (isModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isModalVisible) {
              return (
                <>
                {focused == true ? <Gespeichert /> : <Gespeichert2 />}
                </>
              );
            }
          },
        }}
        name="GespeichertScreen"
        component={GespeichertScreen}
        listeners={{
          tabPress: e => {
            if (isModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isModalVisible) {
              return (
                <>
                {focused == true ? <Suchen2 /> : <Suchen />}
                </>
              );
            }
          },
        }}
        name="SuchenScreen"
        component={SuchenScreen}
        listeners={{
          tabPress: e => {
            if (isModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isModalVisible) {
              return (
                <>
                {focused == true ? <Person2 /> : <Person />}
                </>
              );
            }
          },
        }}
        name="SpiritScreen"
        component={SpiritScreen}
        listeners={{
          tabPress: e => {
            if (isModalVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
