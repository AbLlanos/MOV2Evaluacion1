import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardVideogame from '../../components/CardVideogame';


export default function ListaExternaScreen() {
    const [videojuegos, setVideojuegos] = useState([]);

    async function cargarVideojuegos() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/video_juegos.json');
        const json = await resp.json();
        console.log('videojuegos:', json.videojuegos);
        setVideojuegos(json.videojuegos);
    }

    useEffect(() => {
        cargarVideojuegos();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.titulo}>Lista de Videojuegos</Text>
            <FlatList
                data={videojuegos}
                renderItem={({ item }) => <CardVideogame informacion={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
        marginVertical: 10,
        textAlign: 'center',
    },
});
