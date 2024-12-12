import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/UseMovies'
import Slider from '../components/Slider';

export default function HomeScreen() {
    return (
        <View>
            <Text>Bienvenido a la pantalla principal!</Text>
        </View>

    )
}

const styles = StyleSheet.create({})