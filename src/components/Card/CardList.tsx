import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import Card from './Card';

interface CardInterface {
  image_path: string;
  imageTitle: string;
  imageArtist: string;
}

interface CardListInterface {
  data: Array<CardInterface>;
}

const CardList = ({data}: CardListInterface) => {
  return (
    <>
      {data != null ? (
        <ScrollView>
          <View style={{ flexDirection: 'row',
  flexWrap: 'wrap',justifyContent:"center"}}>
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
