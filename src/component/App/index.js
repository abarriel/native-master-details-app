import React from 'react';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { StyleSheet, ActivityIndicator, ListView, View } from 'react-native';
import CharacterDetail from '../characterDetail';
import Characters from '../characters';
import { centering } from '../../style';
import { getFetchingState, getCharacters } from '../../selectors';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    ...centering,
  },
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...centering },
});

const App = ({ isFetching, characters, navigation: { navigate }}) => { // eslint-disable-line no-shadow
  if (isFetching) return <ActivityIndicator color="crimson" size="large" style={styles.main} />;
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(characters);
  return (
    <View style={styles.main}>
      <ListView
        contentContainerStyle={styles.container}
        dataSource={dataSource}
        renderRow={(character) => <Characters character={character} handlePress={() => navigate('SingleCharacter', { character })} />}
      />
    </View>);
};

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  characters: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isFetching: getFetchingState,
  characters: getCharacters,
});

const mapDispatchToProps = {
};

const SimpleApp = StackNavigator({
  Home: {
    screen: connect(mapStateToProps, mapDispatchToProps)(App),
    navigationOptions: (() => ({ title: 'Marvel Characters' })),
  },
  SingleCharacter: {
    screen: CharacterDetail,
    navigationOptions: (({ navigation: { state: { params } } }) => ({ title: params.character.name })),
  },
});
export default (SimpleApp);
