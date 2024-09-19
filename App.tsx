import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, Alert } from 'react-native';
import PokemonInfo from './components/PokemonInfo';

export default function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState<any | null>(null);

  const fetchPokemon = () => {
    if (!pokemonName.trim()) {
      Alert.alert('Erro', 'Você precisa digitar um nome de Pokémon.');
      return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon não encontrado');
        }
        return response.json();
      })
      .then(data => setPokemonData(data))
      .catch(error => {
        Alert.alert('Erro', 'Pokémon não encontrado. Verifique o nome digitado e tente novamente.');
        console.error('Erro ao buscar dados do Pokémon:', error);
        setPokemonData(null);
      });
  };

  return (
    <ImageBackground source={require('./assets/pokedex_background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Rotomdex</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do Pokémon"
          value={pokemonName}
          onChangeText={setPokemonName}
        />
        <Button title="Buscar" onPress={fetchPokemon} />
        {pokemonData && <PokemonInfo data={pokemonData} />}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    color: '#ff4500',
    fontWeight: 'bold',
    position: 'absolute',
    top: 50,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: 'white',
  },
});