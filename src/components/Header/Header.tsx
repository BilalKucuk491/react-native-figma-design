import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {icons, SIZES} from '../../constants';
import { FontIos } from '../../constants/theme';

const Header = () => {
  return (
    <>
        <View style={styles.GespeichertContainer}>
          <Text style={styles.Gespeichert}>Gespeichert</Text>
        </View>

        <View style={styles.ZuletztHinzugefugtContainer}>
          <Text style={styles.ZuletztHinzugefugt}>Zuletzt hinzugefügt</Text>
        </View>

        <View style={styles.contextContainer}>
          <View style={styles.VonDirContainer}>
            <Text style={styles.vonDir}>Von dir</Text>
          </View>

          <View style={styles.navbarIconContainer}>
            <Image style={styles.navbarIcon} source={icons.navbar} />
          </View>
        </View>
      </>

  );
};

const styles = StyleSheet.create({
  GespeichertContainer: {
    marginBottom: 38,
    marginTop: 57,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 25,
  },
  Gespeichert: {
    fontFamily: FontIos,
    fontWeight: '600',
    fontSize: 17,
    color: '#000',
    letterSpacing: 0.03,
  },
  ZuletztHinzugefugtContainer: {
    marginLeft: (SIZES.width - 165 * 2) / 3,
  },
  ZuletztHinzugefugt: {
    fontFamily: FontIos,
    fontWeight: '700',
    fontSize: 23,
    lineHeight: 27,
    letterSpacing: 0.02,
    color: '#000',
  },
  contextContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  VonDirContainer: {
    marginLeft: (SIZES.width - 165 * 2) / 3,
  },
  vonDir: {
    fontFamily: FontIos,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 0.02,
    color: '#89898D',
    marginTop: 5,
  },
  navbarIconContainer: {
    backgroundColor: '#d3d3d9',
    marginRight: (SIZES.width - 165 * 2) / 3,
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  navbarIcon: {},
});
export default Header;
