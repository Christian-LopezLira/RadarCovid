import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { linear } from 'react-native/Libraries/Animated/src/Easing';
import Firebase from '../utils/firebase'

const auth = Firebase.auth();


const Separator = () => (
    <View style={styles.separator} />
);


export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    

    const handleLogin = async () => {

        try {
            if (email !== '' && pass !== '') {
                await auth.signInWithEmailAndPassword(email, pass);
            }
        } catch (error) {

            console.log(error);

        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <Image style={styles.Imagen}
                    source={require('../img/radar_virus.png')}
                />
                <Text style={styles.TextoTitulo}>
                    RADAR COVID-19
                </Text>




                <TextInput // input tipo Email
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Ingresa el email"
                    keyboardType="email-address"
                />

                <TextInput // input tipo Pass
                    style={styles.input}
                    onChangeText={setPass}
                    value={pass}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                />

                <Button
                    style={styles.boton}
                    onPress={handleLogin}
                    title="Acceder"
                //accessibilityLabel=""
                />

                <View>
                    <Separator />
                    <Text style={styles.title}>
                        ¿No tienes cuenta? Accede con tu correo institucional
                    </Text>

                    <View style={styles.fixToText}>


                        <Button
                            style={styles.boton}
                            onPress={() => navigation.navigate('Register')}
                            title="Crear cuenta"
                        //accessibilityLabel=""
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}








const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    TextoTitulo: {

        color: 'gray',
        fontSize: 45,
        marginBottom: 30,
    },

    Imagen: {
        resizeMode: 'contain',
        height: 200,
        marginTop: 30
    },

    separator: {
        marginVertical: 15,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },



    fixToText: {

        justifyContent: 'space-between',

    },


    title:
    {
        textAlign: 'center',
        marginVertical: 8,
    }

});
