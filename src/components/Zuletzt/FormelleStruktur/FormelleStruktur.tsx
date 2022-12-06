import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {icons, SIZES} from '../../../constants';
import {FontIos} from '../../../constants/theme';
import ContentMenuOption from '../../ContentMenuOption/ContentMenuOption';
import {TinyStar} from '../../../assets/newicons';
import { horizontalScale, verticalScale } from '../../../constants/metrics';

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
          <TinyStar />
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>1</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Einleitung</Text>
          </View>
          <ContentMenuOption />
        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 2       */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          <TinyStar />
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>2</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hauptteil</Text>
          </View>
          <ContentMenuOption />
        </View>
      </View>

      <View style={styles.subLine} />

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          <TinyStar />
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>3</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Schluss</Text>
          </View>
          <ContentMenuOption />
        </View>
      </View>

      <View style={styles.middleLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(50),
  },
  headerContextContainer: {
    marginLeft: horizontalScale(20),
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
    marginTop: verticalScale(4),
  },
  subTitleLine: {
    height: 1,
    backgroundColor: '#C6C6C8',
    marginTop: verticalScale(4),
  },
  contextContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(14),
    marginLeft:horizontalScale(14)
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:-horizontalScale(6.31),
    marginRight:horizontalScale(6.37),
    marginTop:-verticalScale(5),
  },
  numContainer: {
  },
  numText: {
    fontFamily: FontIos,
    fontWeight: '400',
    fontSize: 15,
    color: '#898A8D',
  },
  textContainer: {
    marginLeft: horizontalScale(14),
  },
  text: {
    fontFamily: FontIos,
    fontWeight: '600',
    fontSize: 17,
    color: '#000',
  },
  middleLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#C6C6C8',
    marginTop: verticalScale(14),
    marginLeft: horizontalScale(20),
  },
  subLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#C6C6C8',
    marginTop: verticalScale(13),
    marginLeft: horizontalScale(46),

  },
  partContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: horizontalScale(21),
  },
});

export default FormelleStruktur;
