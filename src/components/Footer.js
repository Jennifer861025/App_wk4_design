import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";

const Footer = () => {
  return (
      <View>
        <View style = {styles.footerBookStyle}>
            <View style={styles.BtnBoxStyle}>
                <Image
                    style = {styles.BtnMarkStyle}
                    source = {require('../img/icon_bottomnav_home.png')}/>
                <Text style = {styles.BtnTextStyle}>Home</Text>
            </View>
            <View style={styles.BtnBoxStyle}>
                <Image
                    style = {styles.BtnMarkStyle}
                    source = {require('../img/icon_bottomnav_mybook_selected.png')}/>
                <Text style = {styles.BtnTextStyle_MyBook}>My Book</Text>
            </View>
            <View style={styles.BtnBoxStyle}>
                <Image
                    style = {styles.BtnMarkStyle}
                    source = {require('../img/icon_drawer_favorites.png')}/>
                <Text style = {styles.BtnTextStyle}>Favorite</Text>
            </View>
        </View>
        <View style={styles.footerBlackStyle}>
            <Image
                style = {styles.FooterBtnStyle_Left}
                source = {require('../img/iconmonstr-triangle-2-240.png')}/>
            <Image
                style = {styles.FooterBtnStyle}
                source = {require('../img/iconmonstr-circle-2-240.png')}/>
            <Image
                style = {styles.FooterBtnStyle}
                source = {require('../img/iconmonstr-square-4-240.png')}/>
        </View>
      </View>
      
  );
};

const styles = StyleSheet.create({
  footerBookStyle: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 56,
    marginTop: -27
  },
  BtnBoxStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  BtnMarkStyle: {
    width: 24,
    height: 24,
  },
  BtnTextStyle:{
    fontSize: 12,
    color: "#818181",
  },
  BtnTextStyle_MyBook: {
    fontSize: 14,
    color: "#00b49f",
  },
  footerBlackStyle: {
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 48,
  },
  FooterBtnStyle: {
    height: 18,
    width: 18,
  },
  FooterBtnStyle_Left: {
    height: 20,
    width: 20,
    transform: [{rotateZ:'30deg'}],
    marginTop: -5
  }
});

export default Footer;
