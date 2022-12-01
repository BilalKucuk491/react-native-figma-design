import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {icons} from '../../constants';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Gespeichert</Text>
      </View>
      <View style={styles.contextHeader}>
        <Text>Zuletzt hinzugefügt</Text>
        <Text>Von dir</Text>
        <View style={styles.circle}>
          <Image source={icons.navbar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
  headerText: {color: '#000', marginTop: 8, fontSize: 30},
  circle: {
    backgroundColor: '#EEEEEF',
    width: 38,
    height: 38,
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },searchContainer:{
    justifyContent:"center",
    alignItems:"center",
    top:50
  },
  searchTitle: {
    fontSize:17,
    fontWeight:"600",
    color:"#000",
    
  },
  contextHeader:{
    alignItems:"flex-start",
    top:60,
    marginLeft:40,
  }
});
export default Header;
