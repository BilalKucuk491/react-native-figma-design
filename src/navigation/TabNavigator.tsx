import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from '../components/TabIcon';
import { icons } from '../constants';
import {GespeichertScreen, SpiritScreen,SuchenScreen,ZuletztScreen} from '../screens';


const Tab = createBottomTabNavigator();
export interface TabBarCustomButtonInterface {
  children: any;
  onPress: any;
}

const TabBarCustomButton = ({
  children,
  onPress,
}: TabBarCustomButtonInterface) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

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
          backgroundColor: "#F7F7F7E5",
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            if (!isModalVisible) {
              return (
                <TabIcon focused={focused} icon={icons.zuletzt} label="Zuletzt" />
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
                <TabIcon
                  focused={focused}
                  icon={icons.gespeichert}
                  label="Gespeichert"
                />
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
                <TabIcon
                  focused={focused}
                  icon={icons.suchen}
                  label="Suchen"
                />
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
                <TabIcon
                  focused={focused}
                  icon={icons.person}
                  label="Spirit"
                />
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
