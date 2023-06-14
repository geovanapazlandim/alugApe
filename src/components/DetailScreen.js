import React, { Component } from 'react'; 

import { Button, View, Text } from 'react-native'; 

class DetailScreen extends Component { 

  static navigationOptions = { 

    title: 'Detalhes dos Imóveis' 

  }; 

  render() { 

    return ( 

      <View style={{ flex: 1, backgroundColor:'#F0F0F0', position:'relative', justifyContent:'center' }}> 

        <Text style={{color:'#494c4e', fontSize:20,  fontFamily:'roboto', marginBottom:60, textAlign:'center'}}>Detalhes dos Imóveis</Text> 
        <View style={{flexDirection:'row', justifyContent:'space-around', paddingHorizontal:60 }}>
        <Button 
color="#F7A156"
          title="Detalhes da Casa" 

          onPress={() => this.props.navigation.push('DetailScreen')} 

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

export default DetailScreen; 

 
 