import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/Config';
import { FlatList } from 'react-native-gesture-handler';
import Informacion from '../components/Informacion';

export default function MensajeScreen() {
    const [id, setid] = useState("");
    const [nombre, setnombre] = useState("");


    const [datos, setdatos] = useState([])


    async function leerID() {
        const idNum = parseInt(id);
        const { data, error } = await supabase.from('productos').select().eq('id', idNum);

        const producto = data[0];

        if (producto) {
            Alert.alert(
                'Información por id del producto',
                `ID: ${producto.id}\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCategoría: ${producto.categoria}\nStock: ${producto.stock}`
            );
        }

        setdatos(data as any);
    }

    async function leerNombre() {
        const { data, error } = await supabase.from("productos").select().eq('nombre', nombre);

        const producto = data[0];

        if (producto) {
            Alert.alert(
                'Información por nombre del producto',
                `ID: ${producto.id}\nNombre: ${producto.nombre}\nPrecio: ${producto.precio}\nCategoría: ${producto.categoria}\nStock: ${producto.stock}`
            );
        }


        setdatos(data as any);
    }

    useEffect(() => {
        leerID()
        //console.log(datos); 
    }, [])

    type Producto = {

        id: number,
        nombre: String,
        precio: number,
        categoria: String,
        stock: number
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title2}>Traer datos por ID del producto</Text>

            <Text style={styles.label}>Debe ingresar el id del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='id'
                onChangeText={(texto) => setid(texto)}
            />

            <View style={styles.divisor}>
                <Button color={"#a50909"} title='Leer producto por ID' onPress={() => leerID()} ></Button>
            </View>




            <Text style={styles.title2}>Traer datos por el nombre del producto</Text>

            <Text style={styles.label}>Debe ingresar el nombre del producto</Text>
            <TextInput
                style={styles.input}
                placeholder='nombre'
                onChangeText={(texto) => setnombre(texto)}
            />

            <View style={styles.divisor}>
                <Button color={"#a50909"} title='Leer producto por nombre' onPress={() => leerNombre()} ></Button>
            </View>

            <Text> Lista solicitada</Text>

            <FlatList
                data={datos}
                renderItem={({ item }: { item: Producto }) => (
                    <View>
                        <Text>ID: {item.id}</Text>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Precio: {item.precio}</Text>
                        <Text>Categoria: {item.categoria}</Text>
                        <Text>sotkc: {item.stock}</Text>
                    </View>
                )}
            />

            <Informacion datos={datos} />


        </View>
    )
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
})