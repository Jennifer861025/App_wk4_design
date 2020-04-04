import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";
import Content from "./src/components/content"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
