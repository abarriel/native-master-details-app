import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { centering } from '../../style';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    ...centering,
  },
  title: {
  },
});

const DetailCharacter = ({ navigation: { state: { params } } }) => {
  const { character } = params;
  const uri = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  const name = character.name.substr(0, character.name.indexOf('(')) || character.name;
  return (
    <View style={styles.main}>
      <Image source={{ uri }} style={{ width: 70, height: 70 }} />
      <Text style={styles.title}>{name}</Text>
    </View>);
};

export default DetailCharacter;
