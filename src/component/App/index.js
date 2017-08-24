import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { StyleSheet, ActivityIndicator, ListView } from 'react-native';
import CharacterDetail from '../characterDetail';
import Characters from '../characters';
import { centering } from '../../style';
import { getFetchingState, getCharacters, getSingleCharacter } from '../../selectors';
import { loadSingleCharacter } from '../../actions';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    ...centering,
  },
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...centering },
});

const App = ({ isFetching, characters, loadSingleCharacter, singleCharacter }) => { // eslint-disable-line no-shadow
  if (isFetching) return <ActivityIndicator color="crimson" size="large" style={styles.main} />;
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(characters);
  if (!isEmpty(singleCharacter)) return <CharacterDetail character={singleCharacter[0]} />;
  return (
    <ListView
      contentContainerStyle={styles.container}
      dataSource={dataSource}
      renderRow={(rowData) => <Characters character={rowData} handlePress={(id) => loadSingleCharacter(id)} />}
    />);
};

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  characters: PropTypes.array.isRequired,
  loadSingleCharacter: PropTypes.func.isRequired,
  singleCharacter: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isFetching: getFetchingState,
  characters: getCharacters,
  singleCharacter: getSingleCharacter,
});

const mapDispatchToProps = {
  loadSingleCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
