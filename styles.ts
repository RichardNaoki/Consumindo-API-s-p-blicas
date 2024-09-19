import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    fontFamily: 'Arial',
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
  pokemonInfo: {
    marginTop: 2,
    alignItems: 'center',
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  pokemonDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});