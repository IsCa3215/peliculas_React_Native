import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/UseMovies'
import Slider from '../components/Slider';

export default function FilmScreen() {
    return (
        <Slider pageHeight={700} backgroundColor="lightblue" >
        </Slider>

    )
}

const styles = StyleSheet.create({
    testo: {
        margin: 10,
        padding: 8,
        fontSize: 24
    }
})