import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyle } from '../styles/globalStyle';


function CardInformation({ pokemon }) {
    
    return (
        <View style={styles.cardInformation}>
            <Text style={globalStyle.text}>Name: {pokemon.name}</Text>
            <Text style={globalStyle.text}>Supertype: {pokemon.supertype}</Text>
            <Text style={globalStyle.text}>Subtype: {pokemon.subtype}</Text>
            <Text style={globalStyle.text}>Evolves from: {pokemon.evolvesFrom}</Text>
            <Text style={globalStyle.text}>HP {pokemon.hp}</Text>
            <Text style={globalStyle.text}>Release Date: {pokemon.releaseDate}</Text>
            <Text style={globalStyle.text}>Rarity: {pokemon.rarity}</Text>
            <Text style={globalStyle.text}>National Pokedex Number: #{pokemon.pokedexNum}</Text>

        </View>
    )
}

export default function PokemonCard({ pokemon, handleFavorites}) {
    const [isPressed, setIsPressed] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const likedContainer = isLiked ? styles.likedContainer : null;
    const likedHeart = isLiked ? styles.likedHeart : null;

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    const handleLike = () => {
        handleFavorites(pokemon);
        setIsLiked(pokemon.liked);
    };

    useEffect(() => {
        setIsLiked(pokemon.liked)
    }, []);

    if (isPressed) {
        return (
            <View>
                <TouchableHighlight onPress={() => handlePress()} style={styles.cardInformationContainer}>
                    <CardInformation pokemon={pokemon}/>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => handleLike()} style={[styles.heartContainer, likedContainer]}>
                    <Ionicons name="heart-sharp" size={24} style={[styles.heart, likedHeart]} />
                </TouchableHighlight>
            </View>
            
        )
    }
    
    return (
        <View>
            <TouchableHighlight onPress={() => handlePress()} style={styles.imageContainer}>
                <Image source={{uri: pokemon.imageUrl}} style={styles.image} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => handleLike()} style={[styles.heartContainer, likedContainer]}>
                <Ionicons name="heart-sharp" size={24} style={[styles.heart, likedHeart]} />
            </TouchableHighlight>

        </View>
    )
        
}

const styles = StyleSheet.create({
    cardInformationContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: 50,
        height: 500,
        width: 350,
        borderRadius: 20,
        borderColor: 'purple',
        borderWidth: 0.5,
        elevation: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        shadowOffset: {height: 5, width: 5},
        shadowRadius: 5,
        marginHorizontal: 10,
        backgroundColor: 'white'
    },
    cardInformation: {
        marginLeft: 50,
        lineHeight: 5,
        textShadowColor: 'purple',
        letterSpacing: 0.5,
        lineHeight: 10
    },
    imageContainer: {
        height: 500,
        width: 350,
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 20,
        borderColor: 'purple',
        borderWidth: 0.4,
        elevation: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        shadowOffset: {height: 5, width: 5},
        shadowRadius: 5,
        marginHorizontal: 10
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    heartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
        width: 350,
        marginTop: 25,
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'purple',
        backgroundColor: 'white'

    },
    heart: {
        color: 'red'
    },
    likedHeart: {
        color: 'white'
    },
    likedContainer: {
        backgroundColor: 'red'
    }
})