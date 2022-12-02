import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import dummyContext from '../../assets/Data/dummyContext';
import {icons, SIZES} from '../../constants';
import {FontIos} from '../../constants/theme';

const marginDistance = (SIZES.width - 337) / 3;

interface RowComponentInterface {
  num?: number;
  title: string;
  iconName?: any;
  lastLine?: boolean;
}

const RowComponent = ({
  num,
  title,
  iconName,
  lastLine = true,
}: RowComponentInterface) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.tinyIconContainer}>
      {iconName == icons.dialog ? (
          <Image style={{...styles.tinyIcon,marginLeft:20,marginRight:-20}} source={iconName} />
        ) : (
          <Image style={styles.tinyIcon} source={iconName} />
        )}
      </View>
      <View style={styles.numberContainer}>
        {num != null ? (
          num >= 10 && iconName != null ? (
            <Text style={{...styles.number, marginLeft: -10, marginRight: -15}}>
              {num}
            </Text>
          ) : (
            <Text style={styles.number}>{num}</Text>
          )
        ) : (
          ''
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        {lastLine && <View style={styles.smallSeperator} />}
      </View>

      <View style={styles.threeDotsContainer}>
        <Image style={styles.threeDots} source={icons.blackDots} />
      </View>
    </View>
  );
};

const Context = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Formelle Struktur</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
        </View>

        <View style={styles.normalSeperator} />
        <RowComponent num={1} title="Einleitung" iconName={icons.tinyStar} />
        <RowComponent num={2} title="Hauptteil" iconName={icons.tinyStar} />
        <RowComponent
          num={3}
          title="Schluss"
          iconName={icons.tinyStar}
          lastLine={false}
        />
        <View style={{...styles.normalSeperator, bottom: 20}} />
      </View>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Formaler Aufbau</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
        </View>

        <View style={styles.normalSeperator} />
        <RowComponent num={4} title="Metrum" iconName={icons.tinyStar} />
        <RowComponent num={5} title="Kadenz" iconName={icons.tinyStar} />
        <RowComponent
          num={6}
          title="Schluss"
          iconName={icons.tinyStar}
          lastLine={false}
        />
        <View style={{...styles.normalSeperator, bottom: 20}} />
      </View>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Formulierungshilfen</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
        </View>

        <View style={styles.normalSeperator} />
        <RowComponent num={7} title="Satzanfänge" />
        <RowComponent num={8} title="Beschreibung/Wirkung" />
        <RowComponent num={9} title="Synonyme" />
        <RowComponent num={10} title="Sprachliche Mittel" lastLine={false} />
        <View style={{...styles.normalSeperator, bottom: 20}} />
      </View>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Epochen der Naturlyrik</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
        </View>

        <View style={styles.normalSeperator} />
        <RowComponent
          num={11}
          title="Sturm und Drang (1773-1784)"
          iconName={icons.tinyStar}
        />
        <RowComponent num={12} title="Romantik (1785-1835)" />
        <RowComponent
          num={13}
          title="Realismus (1830-1890)"
          iconName={icons.tinyStar}
        />
        <RowComponent num={14} title="Expressionismus (1910-1924) " />
        <RowComponent
          num={15}
          title="Moderne (2000er Jahre) "
          lastLine={false}
        />
        <View style={{...styles.normalSeperator, bottom: 20}} />
      </View>

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Als wichtig markierte Infos</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Von dir</Text>
        </View>

        <View style={styles.normalSeperator} />
        <RowComponent
          title="Tatte: Textart, Auto, Titel, Them..."
          iconName={icons.dialog}
        />
        <RowComponent
          title="Deckungshypothese, Vermutun..."
          iconName={icons.dialog}
        />
        <RowComponent
          title="Inhaltsangabe, Kurze Zusamme..."
          iconName={icons.dialog}
        />
        <RowComponent
          title="Sprachliche Mittel"
          iconName={icons.dialog}
          lastLine={false}
        />
        <View style={{...styles.normalSeperator, bottom: 20}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: marginDistance / 2,
  },
  titleContainer: {
    marginLeft: marginDistance,
  },
  title: {
    fontFamily: FontIos,
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
  subTitleContainer: {
    marginLeft: marginDistance,
  },
  subTitle: {
    fontFamily: FontIos,
    fontWeight: '400',
    fontSize: 15,
    color: '#989898',
  },
  normalSeperator: {
    backgroundColor: '#C6C6C8',
    height: 0.9,
    marginLeft: marginDistance,
    marginBottom: marginDistance / 3,
    marginTop: marginDistance / 4,
  },
  smallSeperator: {
    backgroundColor: '#C6C6C8',
    height: 1,
    marginTop: marginDistance / 3,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: marginDistance / 3,
  },

  tinyIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: marginDistance,
  },
  tinyIcon: {},
  numberContainer: {
    marginLeft: SIZES.width / 16.7 / 1.5,
    marginRight: SIZES.width / 16.7 / 1.5,
  },
  number: {},
  textContainer: {
    flex: 1,
  },
  text: {},
  threeDotsContainer: {
    marginBottom: marginDistance,
    marginRight: SIZES.width / 16.7 / 1.5,
  },
  threeDots: {},
});

export default Context;
