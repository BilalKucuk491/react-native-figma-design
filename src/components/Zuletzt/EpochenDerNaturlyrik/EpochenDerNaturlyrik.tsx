import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {icons, SIZES} from '../../../constants';
import {FontIos} from '../../../constants/theme';
import ContentMenuOption from '../../ContentMenuOption/ContentMenuOption';
import {TinyStar} from '../../../assets/newicons';
import { horizontalScale, verticalScale } from '../../../constants/metrics';

const EpochenDerNaturlyrik = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContextContainer}>
        <Text style={styles.title}>Epochen der Naturlyrik</Text>
        <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
        <View style={styles.subTitleLine} />
      </View>

      {/* part 1 */}
      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          <TinyStar />
        </View>
        <View >
          <Text style={styles.numText}>11</Text>
        </View>
        <View style={styles.partContainer}>
        <View style={{marginLeft: horizontalScale(12)}}>
            <Text style={styles.text}>Sturm und Drang (1773-1784)</Text>
          </View>
          <ContentMenuOption />
        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 2       */}

      <View style={styles.contextContainer}>
        <View style={{marginLeft:horizontalScale(8)}}>
          <Text style={styles.numText}>12</Text>
        </View>
        <View style={styles.partContainer}>
    
          <View style={styles.textContainer}>
            <Text style={styles.text}>Romantik (1785-1835)</Text>
          </View>
          <ContentMenuOption />
        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 3 */}

      <View style={styles.contextContainer}>
        <View style={styles.iconContainer}>
          <TinyStar />
        </View>
        <View >
          <Text style={styles.numText}>13</Text>
        </View>
        <View style={styles.partContainer}>
    
          <View style={styles.textContainer}>
            <Text style={styles.text}>Realismus (1830-1890)</Text>
          </View>
          <ContentMenuOption />
        </View>
      </View>

      <View style={styles.subLine} />

      {/* part 4       */}

      <View style={styles.contextContainer}>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>14</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Expressionismus (1910-1924) </Text>
          </View>
          <ContentMenuOption />
        </View>
      </View>

      <View style={styles.subLine} />


      {/* part 5  */}

      <View style={styles.contextContainer}>
        <View style={styles.numContainer}>
          <Text style={styles.numText}>15</Text>
        </View>
        <View style={styles.partContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Moderne (2000er Jahre)</Text>
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
    marginLeft:horizontalScale(11)
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:-horizontalScale(6.31),
    marginRight:horizontalScale(6.37),
    marginTop:-verticalScale(5),
  },
  numContainer: {
    marginLeft:horizontalScale(8)
  },
  numText: {
    fontFamily: FontIos,
    fontWeight: '400',
    fontSize: 15,
    color: '#898A8D',
  },
  textContainer: {
    marginLeft: horizontalScale(12),
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

export default EpochenDerNaturlyrik;
