import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from "../components/content";
import Footer from "../components/Footer"

const BookScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Content />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default BookScreen;
