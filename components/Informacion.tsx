import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';



type Producto = {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    stock: number;
};

type Props = {
    datos: Producto[];
};


export default function Informacion({ datos }: Props) {


    return (
        <FlatList
            data={datos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <Text>ID: {item.id}</Text>
                    <Text>Nombre: {item.nombre}</Text>
                    <Text>Precio: {item.precio}</Text>
                    <Text>Categoria: {item.categoria}</Text>
                    <Text>Stock: {item.stock}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({})