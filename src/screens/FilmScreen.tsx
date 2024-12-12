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
                        <Image source={{ uri: "https://image.tmdb.org/t/p/original".concat(item.poster)}} style={{ width: 100, height: 150 }} />
                        <Text>{item.poster}</Text>
                    </View>
                }
                keyExtractor={(item) => item.id.toString()}
                onEndReached={() => { sumarPagina(); }} 
                onEndReachedThreshold={0.5}
            >

            </FlatList>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({})