import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { globalStyle } from '../styles/globalStyle';
import { EvilIcons } from '@expo/vector-icons';


const CardInformation = ({ pokemon, handleFavorites }) => {
    
    return (
        <View style={styles.body}>
            <TouchableOpacity style={styles.bodyTouchable} onPress={() => handleFavorites(pokemon)}>
                <EvilIcons name="trash" size={35} color="black" />
            </TouchableOpacity>

            <View style={styles.bodyText}>
                <Text style={globalStyle.text}>Name: {pokemon.name}</Text>
                <Text style={globalStyle.text}>HP {pokemon.hp}</Text>
                <Text style={globalStyle.text}>Rarity: {pokemon.rarity}</Text>
                <Text style={globalStyle.text}>#{pokemon.pokedexNum}</Text>
            </View>
        </View>
    )
}

const NoFavorites = () => {
    return (
        <View style={styles.bodyNoFavorites}>
            <Text style={[globalStyle.text, styles.textNoFavorites]}>You currently have no favorite pokemon</Text>

        </View>
    )
}

export default function Favorites({ favorites, handleFavorites }) {

    return (
            <View style={[globalStyle.container, styles.background]}>
                <FlatList 
                    data={favorites}
                    renderItem={({item}) => <CardInformation pokemon={item} handleFavorites={handleFavorites}/>}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<NoFavorites />}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: "100%",
        backgroundColor: '#dadbdb',
        flexDirection: 'row',
    },
    headerTouchable: {
        position: 'absolute',
        left: 10
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#dddddd'
    },
    body: {
        width: '75%',
        height: 150,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        borderColor: 'purple',
        borderWidth: 0.5,
        elevation: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        shadowOffset: {height: 5, width: 5},
        shadowRadius: 5,
        marginVertical: 10,
        backgroundColor: 'white',
        marginTop: 30
    },
    bodyTouchable: {
        position: 'absolute',
        left: 10
    },
    bodyText: {
        textAlign: 'right',
        alignItems: 'flex-end',
        position: 'absolute',
        right: 10
    },
    bodyNoFavorites: {
        width: '75%',
        height: 150,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: 'purple',
        borderWidth: 0.5,
        elevation: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        shadowOffset: {height: 5, width: 5},
        shadowRadius: 5,
        backgroundColor: 'white',
        marginTop: 200
    },
    textNoFavorites: {
        marginLeft: 20
    }
})
