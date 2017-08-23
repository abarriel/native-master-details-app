import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import Character from '../character';
import { GREY_FONT, centering } from '../../style';
import { getFetchingState, getCharacters } from '../../selectors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    ...centering },
  main: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'green',
    flexWrap: 'nowrap',
  },
  contentContainer: {
    // width: 100,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

const App = ({ isFetching, characters }) => {
  if (isFetching) return <ActivityIndicator color="crimson" size="large" style={styles.container} />;
  return (
    <ScrollView style={styles.main} contentContainerStyle={styles.contentContainer} >
      { characters.map(character => <Character character={character} key={character.id} />) }
    </ScrollView>);
};

const mapStateToProps = createStructuredSelector({
  isFetching: getFetchingState,
  characters: getCharacters,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
