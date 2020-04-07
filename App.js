import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';

import BookScreen from './src/screens/BookScreen';
import { StyleSheet, Text, View ,Image,TouchableOpacity,Linking} from 'react-native';
// import Header from "./src/components/Header";
// import Content from "./src/components/content";
// import Footer from "./src/components/Footer"
// import { normalize } from 'react-native-elements';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="BookScreen" 
          component={BookScreen} 
          options = {{
            title : 'My Book',
            headerTintColor: '#fff',
            headerStyle: { 
              backgroundColor: '#00b49f',
              height: 110,
             },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'normal',
            },
            headerLeft: () =>(
              <TouchableOpacity
                onPress={ () => navigationRef.current?.navigate("BurgerScreen")}
              >
                <Image 
                  style = {styles.NavbarBtnStyle} 
                  source = {require('./src/img/btn_navbar_mobile.png')}/>
              </TouchableOpacity>
            ),
            headerRight: () =>(
              <Image 
                style = {styles.NavbarBtnStyle} 
                source = {require('./src/img/btn_search.png')}/>
            ),
          }}
        />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  NavbarBtnStyle: {
    height: 40,
    width: 40,
    margin: 8
  },
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Header />
//       <Content />
//       <Footer />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   },
// });
