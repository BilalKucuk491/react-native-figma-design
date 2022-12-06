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
import { FolderOutline, Plus, ShareOutline, TreeDots } from '../../assets/newicons';
import Plus2 from "../../assets/newicons/Plus2"
import { verticalScale } from '../../constants/metrics';
const HeaderMenuOption = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <TouchableOpacity onPress={() => setModalVisibility(!modalVisibility)}>
      <View style={styles.circleContainer}>
        <TreeDots/>
      </View>
      {modalVisibility && (
        <Menu opened={modalVisibility}>
          <MenuTrigger />
          <MenuOptions optionsContainerStyle={styles.menuOptions}>
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Thema Speichern</Text>
             <View style={{...styles.menuOptionIcon, marginRight:verticalScale(5)}}>
                <Plus2/>
              </View>
            </MenuOption>
            <View style={{height: 1, backgroundColor: '#C6C6C8'}} />
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Zu Ordner hinzufügen...</Text>
              <View style={styles.menuOptionIcon}>
                <FolderOutline/>
              </View>
            </MenuOption>
            <View style={{height: verticalScale(8), backgroundColor: 'rgba(207, 206, 209, 0.4)'}} />
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Thema teilen</Text>
              <View style={styles.menuOptionIcon}>
                <ShareOutline/>
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    width: 28,
    height: 28,
    backgroundColor: 'rgba(211, 211, 217, 0.4)',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuOptions: {
    borderRadius: 10,
    width: 264,
    height: 141,
    marginLeft: "6%",
    marginTop: verticalScale(45),
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

export default HeaderMenuOption;
