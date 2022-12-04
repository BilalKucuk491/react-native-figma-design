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
const HeaderMenuOption = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <TouchableOpacity onPress={() => setModalVisibility(!modalVisibility)}>
      <View style={styles.circleContainer}>
        <Image style={styles.icon} source={icons.treeDots} />
      </View>
      {modalVisibility && (
        <Menu opened={modalVisibility}>
          <MenuTrigger />
          <MenuOptions optionsContainerStyle={styles.menuOptions}>
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Thema Speichern</Text>
              <Image style={styles.menuOptionIcon} source={icons.plus} />
            </MenuOption>
            <View style={{height: 1, backgroundColor: '#C6C6C8'}} />
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Zu Ordner hinzufügen...</Text>
              <Image
                style={styles.menuOptionIcon}
                source={icons.folderOutline}
              />
            </MenuOption>
            <View style={{height: 8, backgroundColor: 'rgba(207, 206, 209, 0.4)'}} />
            <MenuOption
              style={styles.menuOptionContainer}
              onSelect={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.menuOptionText}>Thema teilen</Text>
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
  menuOptions: {
    borderRadius: 10,
    width: 264,
    height: 140,
    marginLeft: SIZES.width / 20,
    marginTop: SIZES.width / 10,
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
