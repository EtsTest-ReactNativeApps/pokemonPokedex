import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { globalStyle } from '../styles/globalStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Nav({ goToFavorites, listLength }) {
    return (
        <SafeAreaView style={styles.nav}>
            <View style={styles.listLengthContainer}>
                <Text style={[globalStyle.text, styles.listLengthText]}>{listLength}</Text>
                <Text style={[globalStyle.text, styles.listLengthText]}>Cards</Text>
            </View>

            <View style={styles.headerContainer}>
                <MaterialCommunityIcons name="pokeball" size={25} color="#e9800d" />
                <Text style={[globalStyle.text, styles.text]}>Pokedex</Text>

            </View>

            <TouchableOpacity onPress={() => goToFavorites()} style={styles.touchable}>
                <FontAwesome5 name="heart" size={30} style={styles.heart}/>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nav: {
        justifyContent: 'center',
        height: 125,
        width: "100%",
        backgroundColor: '#252b2b',
        flexDirection: 'row',
        borderBottomColor: 'purple',
        borderBottomWidth: 0.5,
        shadowColor: 'blue',
        shadowOpacity: 0.2,
        shadowOffset: {height: 5, width: 0},
    },
    listLengthContainer: {
        position: 'absolute',
        left: 15,
        marginTop: 60,
    },
    listLengthText: {
        fontSize: 15,
        color: 'white'
    },
    headerContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    text: {
        fontSize: 20,
        marginHorizontal: 5,
        color: 'white'
    },
    touchable: {
        position: 'absolute',
        right: 20,
        marginTop: 65
    },
    heart: {
        color: 'red'
    }
})