import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import dummyContext from '../../assets/Data/dummyContext';
import {icons} from '../../constants';

interface ContextInterface {
  iconNumber: number;
  num?: number;
  optionTitle: string;
}

const ContextComponent = ({iconNumber, num, optionTitle}: ContextInterface) => {
  return (
    <View>
      <View style={styles.iconContainer}>
        <View style={styles.tinyStarContainer}>
          {iconNumber !== 0 ? (
            <Image
              style={{width: 15, height: 15}}
              source={iconNumber == 1 ? icons.tinyStar : icons.dialog}
            />
          ) : (
            ''
          )}
        </View>
        <Text style={styles.number}>{num}</Text>
      </View>
      <View style={styles.ChildContainer}>
        <Text>{optionTitle}</Text>
        <Image style={{marginRight: 20}} source={icons.blackDots} />
      </View>
      <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
    </View>
  );
};

const Context = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Formelle Struktur</Text>
          <Text style={styles.subTitle}>Von Naturlyrik: Gedichtsanalyse</Text>
          <View style={styles.line} />
        </View>

        <View>
          <View style={styles.iconContainer}>
            <View style={styles.tinyStarContainer}>
              <Image style={{width: 15, height: 15}} source={icons.tinyStar} />
            </View>
            <Text style={styles.number}>1</Text>
          </View>
          <View style={styles.ChildContainer}>
            <Text>Einleitung</Text>
            <Image style={{marginRight: 20}} source={icons.blackDots} />
          </View>
          <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
        </View>

        <View>
          <View style={styles.iconContainer}>
            <View style={styles.tinyStarContainer}>
              <Image style={{width: 15, height: 15}} source={icons.tinyStar} />
            </View>
            <Text style={styles.number}>2</Text>
          </View>
          <View style={styles.ChildContainer}>
            <Text>Hauptteil</Text>
            <Image style={{marginRight: 20}} source={icons.blackDots} />
          </View>
          <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
        </View>

        <View>
          <View style={styles.iconContainer}>
            <View style={styles.tinyStarContainer}>
              <Image style={{width: 15, height: 15}} source={icons.tinyStar} />
            </View>
            <Text style={styles.number}>3</Text>
          </View>
          <View style={styles.ChildContainer}>
            <Text>Schluss</Text>
            <Image style={{marginRight: 20}} source={icons.blackDots} />
          </View>
          <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
        </View>
      </View>

      {dummyContext.map((item, key) => {
        return (
          <>
            <View style={{marginTop: 25}} />
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
                <View style={styles.line} />
              </View>

              {item.childs.map((element, index) => {
                return (
                  <ContextComponent
                    key={index}
                    iconNumber={element.iconNum}
                    num={element.number}
                    optionTitle={element.title}
                  />
                );
              })}
            </View>
            <View style={{marginTop: 25}} />
          </>
        );
      })}

      <View style={{marginTop: 25}} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Als wichtig markierte Infos</Text>
          <Text style={styles.subTitle}>Von dir</Text>
          <View style={styles.line} />
        </View>

        <View>
          <View style={styles.iconContainer}>
            <View style={styles.tinyStarContainer}>
              <Image
                style={{width: 15, height: 15, marginLeft: 15}}
                source={icons.dialog}
              />
            </View>
          </View>
          <View style={styles.ChildContainer}>
            <Text>Tatte: Textart, Auto, Titel, Them...</Text>
            <Image style={{marginRight: 20}} source={icons.blackDots} />
          </View>
          <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
        </View>

        <View>
          <View style={styles.iconContainer}>
            <View style={styles.tinyStarContainer}>
              <Image
                style={{width: 15, height: 15, marginLeft: 15}}
                source={icons.dialog}
              />
            </View>
          </View>
          <View style={styles.ChildContainer}>
            <Text>Deckungshypothese, Vermutun...</Text>
            <Image style={{marginRight: 20}} source={icons.blackDots} />
          </View>
          <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
        </View>

        <View>
          <View style={styles.iconContainer}>
            <View style={styles.tinyStarContainer}>
              <Image
                style={{width: 15, height: 15, marginLeft: 15}}
                source={icons.dialog}
              />
            </View>
          </View>
          <View style={styles.ChildContainer}>
            <Text>Inhaltsangabe, Kurze Zusamme...</Text>
            <Image style={{marginRight: 20}} source={icons.blackDots} />
          </View>
          <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
        </View>

        <View>
          <View style={styles.iconContainer}>
            <View style={styles.tinyStarContainer}>
              <Image
                style={{width: 15, height: 15, marginLeft: 15}}
                source={icons.dialog}
              />
            </View>
          </View>
          <View style={styles.ChildContainer}>
            <Text>Sprachliche Mittel</Text>
            <Image style={{marginRight: 20}} source={icons.blackDots} />
          </View>
          <View style={{...styles.line, marginLeft: 58, marginVertical: 15}} />
        </View>
      </View>

      <View style={{marginTop: 65}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 45,
  },
  titleContainer: {
    marginLeft: 30,
    marginVertical: 5,
  },
  ChildContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 58,
  },
  iconContainer: {
    top: 20,
    width: 35,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  tinyStarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    color: '#898A8D',
  },
  contextContainer: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    lineHeight: 20.29,
    fontWeight: '600',
    color: '#000',
  },
  subTitle: {
    fontSize: 13,
    lineHeight: 25,
    fontWeight: '400',
    color: '#989898',
  },
  line: {
    backgroundColor: '#C6C6C8',
    height: 0.75,
  },
  starContainer: {
    justifyContent: 'center',
    margin: 5,
  },
  star: {},
});

export default Context;
