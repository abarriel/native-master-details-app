import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { getVisibleTodos } from '../../selectors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  h1: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: -1, height: -1 },
  },
});

console.log('Started Log');
const App = () => { // eslint-disable-line 
  const handleKeyPress = (e) => {
    // if (key === 'Enter' && value) {
  }

  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.h1}>Marvel</Text>
      <TextInput placeholder="What type of movie you are looking for?" onKeyPress={handleKeyPress}/>
    </View>
    <View style={styles.main} />
    <View style={styles.footer} />
  </View>);
}

const mapStateToProps = createStructuredSelector({
  todos: getVisibleTodos,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
