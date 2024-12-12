import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/UseMovies'
import Slider from '../components/Slider';

export default function FilmScreen() {
    const { nowPlaying, loading, sumarPagina } = useMovies();
    return (
        <SafeAreaView>
            <FlatList
                data={nowPlaying?.movies}
                renderItem={({ item }) =>
                    <View>
                        <Image source={{ uri: "https://image.tmdb.org/t/p/original".concat(item.poster)}} style={{ width: 200, height: 250 }} />
                        <Text style={styles.testo}>{item.title}</Text>
                    </View>
                }
                keyExtractor={(item, index) => `${item.id}_${index}`}
                onEndReached={() => { sumarPagina(); }} 
                onEndReachedThreshold={0.5}
            >

            </FlatList>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    testo: {
        margin: 10,
        padding: 8,
        fontSize: 24
    }
})