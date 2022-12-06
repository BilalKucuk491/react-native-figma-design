import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {icons, SIZES} from '../../constants';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {FontIos} from '../../constants/theme';
import { verticalScale } from '../../constants/metrics';
import BlackDotsts from "../../assets/newicons/BlackDots"
const ContentMenuOption = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <TouchableOpacity onPress={() => setModalVisibility(!modalVisibility)}>
      <View style={styles.circleContainer}>
       <BlackDotsts/>
      </View>
      {modalVisibility && (
        <Menu opened={modalVisibility}>
          <MenuTrigger />
          <MenuOptions optionsContainerStyle={styles.menuOptions}>
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Als wichtig markieren</Text>
              <Image style={styles.menuOptionIcon} source={icons.starOutline} />
            </MenuOption> 
            <View style={{height: 1, backgroundColor: '#C6C6C8'}} />
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Kapitel teilen</Text>
              <Image
                style={styles.menuOptionIcon}
                source={icons.shareOutline}
              />
            </MenuOption>
          </MenuOptions>
        </Menu>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:verticalScale(5)
  },

  menuOptions: {
    borderRadius: 10,
    width: 250,
    height: 88,
    marginLeft: SIZES.width / 20,
    marginTop: SIZES.width / 15,
  },
  menuOptionContainer: {
    flexDirection: 'row',
    padding: 12,
  },
  menuOptionText: {
    fontFamily: FontIos,
    color: '#000',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 20,
  },
  menuOptionIcon: {
    position: 'absolute',
    right: 17,
    top: 12.76,
  },
});

export default ContentMenuOption;
