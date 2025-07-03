import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../supabase/Config';

export default function EditarEliminarScreen() {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');

    async function editarProducto() {
        if (
            id.trim() === "" ||
            nombre.trim() === "" ||
            categoria.trim() === "" ||
            precio.trim() === "" ||
            stock.trim() === ""
        ) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

        const { error } = await supabase
            .from('productos')
            .update({
                nombre: nombre,
                categoria: categoria,
                precio: parseFloat(precio),
                stock: parseInt(stock),
            })
            .eq('id', parseInt(id));

        Alert.alert('Listo', 'Se mofifico el producto');
    }


    async function eliminar() {
        const response = await supabase
            .from("productos")
            .delete()
            .eq('id', id)
    }

    function Confirmar() {
        Alert.alert(
            'Confirmar eliminación',
            `¿Seguro que deseas eliminar el producto con ID ${id}?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Eliminar',
                    style: 'destructive',
                    onPress: () => eliminar(),
                },
            ]
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Producto</Text>

            <Text style={styles.label}>ID del producto a editar</Text>
            <TextInput
                style={styles.input}
                placeholder='id'
                onChangeText={(texto) => setId(texto)}
            />

            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                placeholder='nombre'
                onChangeText={(texto) => setNombre(texto)}
            />

            <Text style={styles.label}>Categoría</Text>
            <TextInput
                style={styles.input}
                placeholder='categoría'
                onChangeText={(texto) => setCategoria(texto)}
            />

            <Text style={styles.label}>Precio</Text>
            <TextInput
                style={styles.input}
                placeholder='precio'
                onChangeText={(texto) => setPrecio(texto)}
            />

            <Text style={styles.label}>Stock</Text>
            <TextInput
                style={styles.input}
                placeholder='stock'
                onChangeText={(texto) => setStock(texto)}
            />

            <View style={styles.divisor}>
                <Button color={"#964ef4"} title='Guardar cambios de los datos del producto' onPress={() => editarProducto()} />
            </View>

            <Text style={styles.title2}>Eliminar producto</Text>

            <Text style={styles.label}>Debe ingresar el id del producto para eliminardlo</Text>
            <TextInput
                style={styles.input}
                placeholder='id'
                onChangeText={(texto) => setId(texto)}
            />

            <View style={styles.divisor}>
                <Button color={"#a50909"} title='Eliminar producto' onPress={() => Confirmar()} ></Button>
            </View>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center',
    },
    title2: {
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    input: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: '#43bae5',
        width: '100%',
    },
    divisor: {
        marginVertical: 5,
    }
});
