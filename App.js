import React from 'react'; 

import { StyleSheet, Text, View } from 'react-native'; 

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'

import Screen from './src/components/Screen'; 


import AddItemsScreen from './src/components/AddItemsScreen'; 

import EditItemsScreen from './src/components/EditItemsScreen'; 

import UpdateItemsScreen from './src/components/UpdateItemsScreen'

const RootStack = createStackNavigator( 

  { 

    Screen: {
      screen: Screen
    },
    
    AddItemsScreen: {
      screen: AddItemsScreen
    },
    EditItemsScreen:{
      screen: EditItemsScreen
    }, 
    UpdateItemsScreen:{
      screen: UpdateItemsScreen
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