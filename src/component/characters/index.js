import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { centering } from '../../style';

const styles = StyleSheet.create({
  main: {
    ...centering,
    padding: 0,
    margin: 7,
    width: 90,
    height: 90,
    justifyContent: 'flex-start',
    backgroundColor: 'red',
    overflow: 'hidden',
    borderRadius: 5,
    borderColor: '#FF3504',
  },
  title: {
    color: 'white',
    marginTop: 2,
    fontSize: 10,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: -1, height: -1 },
  },
});

const Characters = ({ character, handlePress }) => {
  const uri = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  const name = character.name.substr(0, character.name.indexOf('(')) || character.name;
  return (
    <TouchableOpacity onPress={() => handlePress(character.id)}>
      <View style={styles.main}>
        <Image source={{ uri }} style={{ width: 91, height: 72 }} />
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>);
};

Characters.propTypes = {
  character: PropTypes.object.isRequired,
  handlePress: PropTypes.func.isRequired,
};


export default Characters;
