import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {icons, SIZES} from '../../../constants';
import {FontIos} from '../../../constants/theme';
const marginDistance = (SIZES.width - 337) / 3;

const Formulierungshilfen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContextContainer}>
        <Text style={styles.title}>Formulierungshilfen</Text>
        <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
        <View style={styles.subTitleLine} />
      </View>

      {/* part 1 */}
      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>7</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Satzanfänge</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image source={icons.blackDots} />
          </View>
        </View>
      </View>

      <View style={styles.middleLine} />

      {/* part 2       */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>8</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Beschreibung/Wirkung</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image source={icons.blackDots} />
          </View>
        </View>
      </View>

      <View style={styles.middleLine} />

      {/* part 3 */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>9</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Synonyme</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image source={icons.blackDots} />
          </View>
        </View>
      </View>

      <View style={styles.middleLine} />

      {/* part 4 */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          {/* <Image style={styles.icon} source={icons.tinyStar} /> */}
        </View>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>10</Text>
        </View>
        <View style={styles.partContainer}>
    
          <View style={{marginLeft: marginDistance * 0.30}}>
            <Text style={styles.text}>Sprachliche Mittel</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Image source={icons.blackDots} />
          </View>
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
    marginLeft: SIZES.width / 24,
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
  partContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
});

export default Formulierungshilfen;
