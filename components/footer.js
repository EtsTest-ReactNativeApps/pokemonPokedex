import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function Nav() {
    return (
        <View style={styles.nav}>

        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 75,
        width: "100%",
        backgroundColor: '#252b2b',
        position: 'absolute',
        bottom: 0,
        borderTopColor: 'purple',
        borderTopWidth: 0.5
    }
})