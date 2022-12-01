import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import Card from './Card';
import dummyData from '../../assets/Data/dummyData';
import {SIZES} from '../../constants/theme';

const CardList = () => {
  const data = dummyData;
  return (
    <>
      {data != null ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginLeft: -(SIZES.width - 165 * 2) / 3,
            }}>
            {data
              .filter(el => {
                return el != null;
              })
              .map((item, key) => {
                return (
                  <Card
                    key={key}
                    image_path={item.image_path}
                    imageTitle={item.imageTitle}
                    imageArtist={item.imageArtist}
                  />
                );
              })}
          </View>
        </ScrollView>
      ) : (
        <Text
          style={{
            padding: 20,
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Hata
        </Text>
      )}
    </>
  );
};

export default CardList;
