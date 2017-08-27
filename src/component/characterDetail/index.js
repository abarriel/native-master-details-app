import React from 'react';
import { StyleSheet, View, Image, Text, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { centering } from '../../style';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    ...centering,
  },
  title: {
    color: 'red',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    color: 'red',
    fontSize: 15,
    height: 44,
  },
});

const DetailCharacter = ({ navigation: { state: { params } } }) => {
  const { character } = params;
  const uri = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  const name = character.name.substr(0, character.name.indexOf('(')) || character.name;
  console.log(character);
  return (
    <View style={styles.main}>
      <Image source={{ uri }} style={{ width: 70, height: 70, marginTop: 10 }} />
        <Text style={styles.title}>{name}</Text>
        <Text>{character.description}</Text>
        <SectionList
          sections={[
            { title: 'Series', data: character.series.items },
            { title: 'Comics', data: character.stories.items },
          ]}
          renderItem={({ item }) => <Text style={styles.item} keyExtractor={(item, ok) => item.name}>{item.name}</Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader} key={section.title}>{section.title}</Text>}
        />
    </View>);
};

export default DetailCharacter;
