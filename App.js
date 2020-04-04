import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header";
import Content from "./src/components/content";
import Footer from "./src/components/Footer"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
