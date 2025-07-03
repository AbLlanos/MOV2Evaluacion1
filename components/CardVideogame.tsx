import React, { useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardVideogame(props: any) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.card}>
                <View style={styles.info}>
                    <Text style={styles.titulo}>{props.informacion.titulo}</Text>
                    <Text>{props.informacion.desarrollador}</Text>
                    <Text>{props.informacion.precio}</Text>
                    <Text>{props.informacion.lanzamiento}</Text>
                    <Text>{props.informacion.descripcion}</Text>

                </View>
                <Image
                    source={{ uri: props.informacion.imagen }}
                    style={styles.imagen}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 10,
        backgroundColor: '#b0b0b0',
        borderRadius: 8,
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        alignItems:"center",
        justifyContent:"center"
    },
    imagen: {
        width: 150,
        height: 150,
        borderRadius: 10,
        resizeMode:"contain"
        
    },
    info: {
        flex: 1,
        paddingLeft: 12,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 20,
        marginBottom: 4,
    },
    descripcion: {
        color: '#333',
    },
});
