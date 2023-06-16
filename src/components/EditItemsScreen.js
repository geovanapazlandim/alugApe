import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View, navigation } from 'react-native';
import firebase from '../service/connectionFirebase';



class EditItemsScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      anunciante: '',
      cidade: '',
      descricao: '',
      imovel: '',
      localizacao: '',
      tipoImovel: '',
      valor: '',
      isLoading: true
    };
  }
  componentDidMount() {

    const dbRef = firebase.firestore().collection('imovelAluguel').doc()
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          anunciante: user.anunciante,
          cidade: user.cidade,
          descricao: user.descricao,
          imovel: user.imovel,
          localizacao: user.localizacao,
          tipoImovel: user.tipoImovel,
          valor: user.valor,

          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  updateUser() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase.firestore().collection('imovelAluguel').doc(this.state.key);
    updateDBRef.set({
      anunciante: this.state.anunciante,
      cidade: this.state.cidade,
      descricao: this.state.descricao,
      imovel: this.state.imovel,
      localizacao: this.state.localizacao,
      tipoImovel: this.state.tipoImovel,
      valor: this.state.valor,
    }).then((docRef) => {
      this.setState({
        key: '',
        anunciante: '',
        cidade: '',
        descricao: '',
        imovel: '',
        localizacao: '',
        tipoImovel: '',
        valor: '',
        isLoading: false,
      });
      this.props.navigation.navigate('EditItemsScreen');
    })
      .catch((error) => {
        console.error("Error: ", error);
        this.setState({
          isLoading: false,
        });
      });
  }
  deleteUser() {
    const dbRef = firebase.firestore().collection('imovelAluguel').doc(this.props.route.params.userkey)
    dbRef.delete().then((res) => {
      console.log('Item removido do banco de dados')
      this.props.navigation.navigate('EditItemsScreen');
    })
  }
  openTwoButtonAlert = () => {
    Alert.alert(
      'Deletar Imóvel',
      'Tem certeza?',
      [
        { text: 'Sim', onPress: () => this.deleteUser() },
        { text: 'Não', onPress: () => console.log('Nenhum item foi removido'), style: 'cancel' },
      ],
      {
        cancelable: true
      }
    );
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Anunciante'}
            value={this.state.anunciante}
            onChangeText={(val) => this.inputValueUpdate(val, 'anunciante')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Cidade'}
            value={this.state.email}
            onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Descrição'}
            value={this.state.descricao}
            onChangeText={(val) => this.inputValueUpdate(val, 'descricao')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Imóvel'}
            value={this.state.imovel}
            onChangeText={(val) => this.inputValueUpdate(val, 'imovel')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Localização'}
            value={this.state.localizacao}
            onChangeText={(val) => this.inputValueUpdate(val, 'localizacao')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Tipo do Imóvel'}
            value={this.state.tipoImovel}
            onChangeText={(val) => this.inputValueUpdate(val, 'tipoImovel')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Valor'}
            value={this.state.valor}
            onChangeText={(val) => this.inputValueUpdate(val, 'valor')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Update'
            onPress={() => this.updateUser()}
            color="#19AC52"
          />
        </View>
        <View>
          <Button
            title='Delete'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7,
  }
})
export default EditItemsScreen;