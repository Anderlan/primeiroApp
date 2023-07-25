import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/capa.png';
import Foto from './assets/foto.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.fotoTopo } source={Capa} />

      <View style={ estilos.boxDescricao }>
        <Image style={ estilos.fotoPerfil } source={Foto} />
        <Text style={ estilos.titulo }>Insira seu nome aqui</Text>
        <Text style={ estilos.cargo }>Insira um breve resumo sobre voce</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  fotoTopo: {
    flex: 1,
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center',
  },

  fotoPerfil: {
    marginTop:20,
    marginBottom:20,
    width: 100,
    height: 100,
    borderRadius:50
  },
  titulo: {
    marginBottom:10,
    fontSize: 22,
  },
  cargo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16
  }
});
