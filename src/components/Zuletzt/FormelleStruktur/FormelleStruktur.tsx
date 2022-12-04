import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {icons, SIZES} from '../../../constants';
import {FontIos} from '../../../constants/theme';
import ContentMenuOption from '../../ContentMenuOption/ContentMenuOption';
const marginDistance = (SIZES.width - 337) / 3;

const FormelleStruktur = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContextContainer}>
        <Text style={styles.title}>Formelle Struktur</Text>
        <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
        <View style={styles.subTitleLine} />
      </View>

      {/* part 1 */}
      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={icons.tinyStar} />
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>1</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Einleitung</Text>
          </View>
          <ContentMenuOption/>
        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 2       */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={icons.tinyStar} />
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>2</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hauptteil</Text>
          </View>
          <ContentMenuOption/>

        </View>
      </View>

      <View style={styles.subLine} />

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={icons.tinyStar} />
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>3</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Schluss</Text>
          </View>
          <ContentMenuOption/>

        </View>
      </View>

      <View style={styles.middleLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: marginDistance * 2,
  },
  headerContextContainer: {
    marginLeft: marginDistance,
  },
  title: {
    fontFamily: FontIos,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: '#000',
  },
  subTitle: {
    fontFamily: FontIos,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 15,
    color: '#989898',
    marginTop: 8,
  },
  subTitleLine: {
    height: 1,
    backgroundColor: '#C6C6C8',
    marginTop: 6,
  },
  contextContainer: {
    flexDirection: 'row',
    marginLeft: marginDistance / 5,
    marginTop: 16,
  },
  iconContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  numContainer: {
    marginLeft: SIZES.width / 45,
  },
  numText: {
    fontFamily: FontIos,
    fontWeight: '400',
    fontSize: 15,
    color: '#898A8D',
  },
  textContainer: {
    marginLeft: marginDistance * 0.6,
  },
  text: {
    fontFamily: FontIos,
    fontWeight: '600',
    fontSize: 17,
    color: '#000',
  },
  middleLine: {
    flex: 1,
    height: 1.2,
    backgroundColor: '#C6C6C8',
    marginTop: 16,
    marginLeft: marginDistance,
  },
  subLine: {
    flex: 1,
    height: 1.2,
    backgroundColor: '#C6C6C8',
    marginTop: 16,
    marginLeft: marginDistance*2,
  },
  partContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
});

export default FormelleStruktur;
