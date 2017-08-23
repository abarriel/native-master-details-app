import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { GREY_FONT, centering } from '../../style';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: 90,
    height: 90,
    marginLeft: 10,
    marginTop: 10,
    ...centering,
    backgroundColor: 'red',
  },
  h1: {
    color: GREY_FONT,
    fontSize: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: -1, height: -1 },
  },
});

const Characters = ({ character }) => {
  const uri = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  console.log(uri);
  return (
    <View style={styles.main}>
      <Image source={{ uri }} style={{ width: 80, height: 80 }} />
      <Text>{character.name}</Text>
    </View>);
};

export default Characters;
