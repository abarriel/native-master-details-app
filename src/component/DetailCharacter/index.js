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
  const { character: { thumbnail, series, stories, name, description } } = params;
  const uri = `${thumbnail.path}.${thumbnail.extension}`;
  const nameClean = name.substr(0, name.indexOf('(')) || name;
  return (
    <View style={styles.main}>
      <Image source={{ uri }} style={{ width: 70, height: 70, marginTop: 10 }} />
      <Text style={styles.title}>{nameClean}</Text>
      <Text>{description}</Text>
      <SectionList
        sections={[
          { title: 'Series', data: series.items },
          { title: 'Comics', data: stories.items },
        ]}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader} key={section.title}>{section.title}</Text>}
      />
    </View>);
};

DetailCharacter.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DetailCharacter;
