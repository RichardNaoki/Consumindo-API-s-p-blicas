import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

interface PokemonInfoProps {
  data: any;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ data }) => {
  return (
    <View style={styles.pokemonInfo}>
      <Text style={styles.pokemonName}>{data.name} (#{data.id})</Text>
      <Image source={{ uri: data.sprites.front_default }} style={styles.pokemonImage} />
      <Text style={styles.pokemonDetail}>Altura: {data.height / 10} m</Text>
      <Text style={styles.pokemonDetail}>Peso: {data.weight / 10} kg</Text>
      <Text style={styles.pokemonDetail}>Tipos: {data.types.map((type: any) => type.type.name).join(', ')}</Text>
      <Text style={styles.pokemonDetail}>Habilidades: {data.abilities.map((ability: any) => ability.ability.name).join(', ')}</Text>
    </View>
  );
};

export default PokemonInfo;