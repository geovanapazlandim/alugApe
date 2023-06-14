import React from 'react'; 

import { StyleSheet, Text, View } from 'react-native'; 

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import Screen from './src/components/Screen'; 

import DetailScreen from './src/components/DetailScreen'; 

import AddItemsScreen from './src/components/AddItemsScreen'; 

import EditItemsScreen from './src/components/EditItemsScreen'; 

  

const RootStack = createStackNavigator( 

  { 

    Screen: {
      screen: Screen
    },

    DetailScreen: {
      screen: DetailScreen
    }, 
    
    AddItemsScreen: {
      screen: AddItemsScreen
    },
    EditItemsScreen:{
      screen: EditItemsScreen
    }, 
  }, 

  { 

    initialRouteName: 'Screen', 

    navigationOptions: { 

      headerStyle: { 

        backgroundColor: '#777777', 

      }, 

      headerTintColor: '#fff', 

      headerTitleStyle: { 

        fontWeight: 'bold', 

      }, 

    }, 

  }, 

); 

const App = createAppContainer(RootStack);
export default App;

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    backgroundColor: '#fff', 

    alignItems: 'center', 

    justifyContent: 'center', 

  }, 

}); 