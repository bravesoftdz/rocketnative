import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const white = '#FFFFFF';
const borderColor = '#ecf0f1';
const grey = '#333333';
const grey2 = '#999999';
const grey3 = '#EEEEEE';
const grey4 = '#666666';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: grey,
  },
  author: {
    fontSize: 16,
    color: grey2,
  },
  hr: {
    backgroundColor: grey3,
    height: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: grey4,
  },
});

const Post = ({ data: { title, name, content } }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {title}
    </Text>
    <Text style={styles.author}>
      {name}
    </Text>
    <View style={styles.hr} />
    <Text style={styles.content}>
      {content}
    </Text>
  </View>
);

Post.defaultProps = {
  data: {
    title: 'Aprendendo React Native',
    name: 'Lucas Duarte',
    content:
      'Lorem ipsum in venenatis netus sit feugiat pharetra et, euismod ornare et pharetra pulvinar aliquet vitae velit quisque, aptent aliquam felis mattis conubia platea tortor. leo integer aliquam vivamus at himenaeos tellus tempor, viverra lacus lectus massa cras urna, aliquam conubia consequat senectus platea urna.',
  },
};

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Post;
