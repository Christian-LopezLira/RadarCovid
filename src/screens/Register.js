import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';
import Firebase from '../utils/firebase';


const auth = Firebase.auth();



export default function Register({ navigation }) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');



    const handleRegister = async () => {
        try {
            if (email !== "" && pass !== "") {
                await auth.createUserWithEmailAndPassword(email, pass);

            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <View style={styles.container}>
            <Image style={styles.Imagen}
                source={require('../img/RegistroUPEN.jpg')}
            />



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
                onPress={handleRegister}
                title="Registrar"
                color="#008e38"
            //accessibilityLabel=""
            />



        </View>
    );
}








const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },





});
