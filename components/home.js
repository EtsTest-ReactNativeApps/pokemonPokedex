import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/globalStyle';

import PokemonCard from './pokemonCard';


export default function Home({ allPokemon, handleFavorites}) {

    return (
        <View style={[globalStyle.container, styles.background]}>
            <FlatList 
                data={allPokemon}
                renderItem={ ({item}) => <PokemonCard pokemon={item} handleFavorites={handleFavorites} />}
                keyExtractor={item => item.id}
                horizontal={true}
                getItemLayout={(data, index) => (
                    {length: 360, offset: 360 * index, index}
                )}
            />
        
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#dddddd'
    }
})