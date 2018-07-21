import 'config/ReactotronConfig';
import 'config/DevToolsConfig';
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, ScrollView,
} from 'react-native';

import Post from 'components/Post';

const red = '#EE7777';
const white = '#FFFFFF';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: red,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    paddingTop: 20,
    maxHeight: 80,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 10,
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        name: 'Diego Fernandes',
        content:
          'Lorem ipsum in venenatis netus sit feugiat pharetra et, euismod ornare et pharetra pulvinar aliquet vitae velit quisque, aptent aliquam felis mattis conubia platea tortor. leo integer aliquam vivamus at himenaeos tellus tempor, viverra lacus lectus massa cras urna, aliquam conubia consequat senectus platea urna.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        name: 'Lucas',
        content:
          'Lorem ipsum in venenatis netus sit feugiat pharetra et, euismod ornare et pharetra pulvinar aliquet vitae velit quisque, aptent aliquam felis mattis conubia platea tortor. leo integer aliquam vivamus at himenaeos tellus tempor, viverra lacus lectus massa cras urna, aliquam conubia consequat senectus platea urna.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        name: 'Margarida',
        content:
          'Lorem ipsum in venenatis netus sit feugiat pharetra et, euismod ornare et pharetra pulvinar aliquet vitae velit quisque, aptent aliquam felis mattis conubia platea tortor. leo integer aliquam vivamus at himenaeos tellus tempor, viverra lacus lectus massa cras urna, aliquam conubia consequat senectus platea urna.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.appContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
GoNative App
          </Text>
        </View>
        <ScrollView style={styles.scrollView}>
          {posts.map(post => <Post data={post} key={post.id} />)}
        </ScrollView>
      </View>
    );
  }
}
