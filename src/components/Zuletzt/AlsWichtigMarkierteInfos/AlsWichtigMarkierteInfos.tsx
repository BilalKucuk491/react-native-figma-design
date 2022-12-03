import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {icons, SIZES} from '../../../constants';
import {FontIos} from '../../../constants/theme';
import TreeDot from '../../TreeDot/TreeDot';
const marginDistance = (SIZES.width - 337) / 3;

const AlsWichtigMarkierteInfos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContextContainer}>
        <Text style={styles.title}>Als wichtig markierte Infos</Text>
        <Text style={styles.subTitle}>Von dir</Text>
        <View style={styles.subTitleLine} />
      </View>

      {/* part 1 */}
      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Image style={styles.icon} source={icons.dialog} />
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Tatte: Textart, Auto, Titel, Them...</Text>
          </View>
          <TreeDot/>

        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 2       */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Image style={styles.icon} source={icons.dialog} />
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Deckungshypothese, Vermutun...</Text>
          </View>
          <TreeDot/>

        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 3 */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Image style={styles.icon} source={icons.dialog} />
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Inhaltsangabe, Kurze Zusamme... </Text>
          </View>
          <TreeDot/>

        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 4 */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Image style={styles.icon} source={icons.dialog} />
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Sprachliche Mittel</Text>
          </View>
          <TreeDot/>

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
  icon: {
    marginTop:5
  },
  numContainer: {
    marginLeft: SIZES.width / 24,
  },
  numText: {
    fontFamily: FontIos,
    fontWeight: '400',
    fontSize: 15,
    color: '#898A8D',
  },
  textContainer: {
    marginLeft: marginDistance * 0.3,
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

export default AlsWichtigMarkierteInfos;
