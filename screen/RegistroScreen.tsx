import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../supabase/Config';

export default function RegistroScreen() {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');

    async function guardarProducto() {

        if (
            nombre.trim() === '' ||
            categoria.trim() === '' ||
            precio.trim() === '' ||
            stock.trim() === ''
        ) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const { error } = await supabase
            .from('productos')
            .insert([
                {
                    nombre: nombre,
                    categoria: categoria,
                    precio: parseFloat(precio),
                    stock: parseInt(stock),
                },
            ]);

        Alert.alert('Listo', 'Producto guardado correctamente');

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Producto</Text>

            <Text style={styles.label}>Ingrese el nombre del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='nombre'
                value={nombre}
                onChangeText={(texto) => setNombre(texto)}
            />

            <Text style={styles.label}>Ingrese la categoria del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='categoria'
                value={categoria}
                onChangeText={(texto) => setCategoria(texto)}
            />

            <Text style={styles.label}>Ingrese el precio del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='precio'
                keyboardType='numeric'
                value={precio}
                onChangeText={(texto) => setPrecio(texto)}
            />

            <Text style={styles.label}>Ingrese el stock del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='stock'
                value={stock}
                onChangeText={(texto) => setStock(texto)}
            />

            <View style={styles.divisor}>
                <Button title='Guardar Producto' onPress={guardarProducto} />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 20,
        marginTop: 10,
    },
    input: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: "#e68a4c",
        width: "90%",
    },
    divisor: {
        marginVertical: 15,
    }

});
