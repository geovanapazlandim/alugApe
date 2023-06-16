//@ts-check
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from '../service/connectionFirebase';

export default function UpdateItemsScreen(props) {
    //   static navigationOptions = {
    //     title: 'AlugApê - Atualizar Item',
    //   };

    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       anunciante: '',
    //       cidade: '',
    //       descricao: '',
    //       imovel: '',
    //       localizacao: '',
    //       tipoImovel: '',
    //       valor: '',
    //     };
    //   }

    useEffect(() => {
        console.log(props.navigation.getParam())
        // const { item } = this.props.route.params;
        // const {
        //     anunciante,
        //     cidade,
        //     descricao,
        //     imovel,
        //     localizacao,
        //     tipoImovel,
        //     valor,
        // } = item;

        // this.setState({
        //     anunciante,
        //     cidade,
        //     descricao,
        //     imovel,
        //     localizacao,
        //     tipoImovel,
        //     valor,
        // });
    }, []);

    const atualizarItem = async () => {
        const { item } = this.props.route.params;
        const {
            anunciante,
            cidade,
            descricao,
            imovel,
            localizacao,
            tipoImovel,
            valor,
        } = this.state;

        try {
            await firebase
                .firestore()
                .collection('imovelAluguel')
                .doc(item.key)
                .update({
                    anunciante,
                    cidade,
                    descricao,
                    imovel,
                    localizacao,
                    tipoImovel,
                    valor,
                });
            console.log('Item atualizado com sucesso!');
        } catch (error) {
            console.log('Erro ao atualizar item:', error);
        }
    };

    const handleChange = (field, value) => {
        this.setState({ [field]: value });
    };

    return (
        <View style={styles.formulario}>
            {/* <Text style={styles.texto}>Formulário de Atualização</Text>
        <TextInput
          placeholder={'Anunciante'}
          style={styles.input}
          value={anunciante}
          onChangeText={(text) => this.handleChange('anunciante', text)}
        />
        <TextInput
          placeholder={'Cidade'}
          style={styles.input}
          value={cidade}
          onChangeText={(text) => this.handleChange('cidade', text)}
        />
        <TextInput
          placeholder={'Descrição'}
          style={styles.input}
          value={descricao}
          onChangeText={(text) => this.handleChange('descricao', text)}
        />
        <TextInput
          placeholder={'Link Imagem'}
          style={styles.input}
          value={imovel}
          onChangeText={(text) => this.handleChange('imovel', text)}
        />
        <TextInput
          placeholder={'Localização'}
          style={styles.input}
          value={localizacao}
          onChangeText={(text) => this.handleChange('localizacao', text)}
        />
        <TextInput
          placeholder={'Tipo de Imóvel'}
          style={styles.input}
          value={tipoImovel}
          onChangeText={(text) => this.handleChange('tipoImovel', text)}
        />
        <TextInput
          placeholder={'Valor'}
          style={styles.input}
          value={valor}
          onChangeText={(text) => this.handleChange('valor', text)}
        />
        <Button title="Atualizar" style={styles.botao} onPress={this.atualizarItem} />

        <Button
          color="#F7A156"
          title="Cancelar"
          onPress={() => this.props.navigation.goBack()}
        /> */}
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        width: '70%',
        borderColor: 'gray',
        borderWidth: 1,
        height: '8%',
        justifyContent: 'center',
        borderRadius: 5,
    },
    formulario: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
        width: '100%',
        padding: '5%',
    },
    texto: {
        fontSize: 25,
    },
});
