//@ts-check
import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  image,
  Text,
  FlatList,
} from "react-native";
import { Card, Button } from "react-native-elements";
import firebase from "../service/connectionFirebase";
import UpdateItemsScreen from "./UpdateItemsScreen";

class Screen extends Component {
  constructor() {
    super();

    this.ref = firebase.firestore().collection("imovelAluguel");
    this.unsubscribe = null;

    this.state = {
      isLoading: true,
      aluguelImovel: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    let aluguelImovel = [];
    querySnapshot.forEach((doc) => {
      const {
        anunciante,
        cidade,
        descricao,
        localizacao,
        tipoImovel,
        valor,
        imovel,
      } = doc.data();
      aluguelImovel.push({
        key: doc.id,
        doc,
        anunciante,
        cidade,
        descricao,
        localizacao,
        tipoImovel,
        valor,
        imovel,
      });
    });
    this.setState({
      aluguelImovel: aluguelImovel,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "AlugApê",
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: "transparent" }}
          icon={{ name: "add-circle", style: { marginRight: 0, fontSize: 28 } }}
          onPress={() => {
            navigation.push("AddItemsScreen");
          }}
        />
      ),
    };
  };

  handleDeleteItem = (key) => {
    firebase
      .firestore()
      .collection("imovelAluguel")
      .doc(key)
      .delete()
      .then(() => {
        console.log("Item deletado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao deletar item:", error);
      });
  };

  handleUpdateItem = (item) => {
    this.props.navigation.navigate('UpdateItemsScreen', { item });
  };


  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#02b126" />
        </View>
      );
    }

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#fff" }}>
          <FlatList
            keyExtractor={(item) => item.key}
            data={this.state.aluguelImovel}
            renderItem={({ item }) => (
              <Card>
                <Card.Title>{item.tipoImovel}</Card.Title>
                <Card.Divider />
                <Card.Image
                  style={{ padding: 0 }}
                  source={{ uri: item.imovel }}
                />
                <Text style={{ marginBottom: 10 }}>
                  Descrição: {item.descricao}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Localização: {item.localizacao}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  Cidade: {item.cidade}
                </Text>
                <Text style={{ marginBottom: 10, color: "gray" }}>
                  Valor: R${item.valor}
                </Text>
                <Button
                  title="RESERVE AGORA"
                  color="#00ff"
                  onPress={() => {
                    alert("Reservado!");
                  }}
                />
                <Button
                  title="Deletar"
                  onPress={() => this.handleDeleteItem(item.key)}
                />
                <Button
                  title="Atualizar"
                  onPress={() => {
                    this.handleUpdateItem(item)
                  }}
                />
              </Card>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Screen;
