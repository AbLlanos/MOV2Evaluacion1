import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home( {navigation}:any) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Abner Salazar</Text>
            <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYAGAA7BhzEjlftV-ncukzKICYsPqmlCx3g&s" }} style={styles.imagen} />

            <View style={styles.btn}></View>

            <View style={styles.btn}>
                <Button
                    title="Empezar a usar la app"
                    onPress={() => navigation.navigate('Tabs')}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: "center",
    },
    titulo: {
        fontSize: 40,
        marginBottom: 10,
    },
    imagen: {
        width: 200,
        height: 400,
        borderRadius: 10,
    },
    btn: {
        margin: 20
    }
});