import { ScrollView, StyleSheet, Text, View, Image, Pressable, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '../config/Entities/Movie'
import { useMovies } from '../hooks/UseMovies';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

interface Caracteristicas {
  pageHeight?: number | string,
  backgroundColor?: string,
  children?: React.ReactNode //Fufa sin esto tengo que definir children porque les estoy pasando childrens que loco
}



export default function Slider({pageHeight = 400, backgroundColor = '#fff'}: Caracteristicas) {
  const { nowPlaying, loading, sumarPagina } = useMovies();

  return (
    <SafeAreaView style={[styles.container, { height: typeof pageHeight === 'number' ? pageHeight : undefined, backgroundColor }]}>
    <FlatList
        data={nowPlaying?.movies}
        renderItem={({ item }) =>
            <View>
                <Image source={{ uri: "https://image.tmdb.org/t/p/original".concat(item.poster)}} style={{ width: 200, height: 250 }} />
                <Text>{item.title}</Text>
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
      container: {
        width: '100%',
    },
})