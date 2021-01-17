import React from 'react';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import { globalStyle } from '../styles/globalStyle';

import PokemonCard from './pokemonCard';


export default function Home({ allPokemon, handleFavorites}) {

    return (
        <ImageBackground style={[globalStyle.container, styles.background]} source={require('../assets/background-image.jpg')}>
            <FlatList 
                data={allPokemon}
                renderItem={ ({item}) => <PokemonCard pokemon={item} handleFavorites={handleFavorites} />}
                keyExtractor={item => item.id}
                horizontal={true}
                getItemLayout={(data, index) => (
                    {length: 360, offset: 360 * index, index}
                )}
            />
        
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        resizeMode: 'cover',
        justifyContent: 'center'
    }
})