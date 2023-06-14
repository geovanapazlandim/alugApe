import React, { Component } from 'react'; 

import { Button, View, Text } from 'react-native'; 

 
 

class AddItemsScreen extends Component { 

  static navigationOptions = { 

    title: 'Adicionar Itens', 

  }; 

  render() { 

    return ( 

      <View style={{ flex: 1, backgroundColor:'#F0F0F0', position:'relative', justifyContent:'center' }}> 

        <Text style={{color:'#494c4e', fontSize:20,  fontFamily:'roboto', marginBottom:60, textAlign:'center'}}>Adicionar Casas</Text> 
        <View style={{flexDirection:'row', justifyContent:'space-around', paddingHorizontal:60 }}>
        <Button 
color="#F7A156"
          title="Alugar" 

          onPress={() => this.props.navigation.push('AddItemsScreen')} 

        /> 

        <Button 
color="#F7A156"
          title="Home" 

          onPress={() => this.props.navigation.navigate('Screen')} 

        /> 

        <Button 
color="#F7A156"
          title="Voltar" 

          onPress={() => this.props.navigation.goBack()} 

        /> 
</View>
      </View> 

    ); 

  } 

} 

 
 

export default AddItemsScreen; 