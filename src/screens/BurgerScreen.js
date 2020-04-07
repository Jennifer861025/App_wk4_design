import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from "../components/content";
import Footer from "../components/Footer";

const BurgerScreen = () => {
  return (
    <View>
      <View style = {styles.container}>
        <Content />
        <Footer />
      </View>
      <View style = {styles.bgcBlack}></View>
    </View>  
    
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    bgcBlack: {
        height: 660, 
        marginTop: -700,
        backgroundColor:'rgba(0,0,0,0.3)',
    }
  });

export default BurgerScreen;
