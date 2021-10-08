import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, ToastAndroid, Button, Alert, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import Firebase from "../utils/firebase";


const auth = Firebase.auth()


const Separator = () => (
    <View style={styles.separator} />
);


export default function AlertCovid({ navigation }) {

    const { user } = useContext(AuthenticatedUserContext);


    const handleLogOut = async () => {

        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }

    }


    const showToast = () => {
        ToastAndroid.show("No funciona jeje, Salu2", ToastAndroid.SHORT);
    };


    return (
        <View style={[styles.container, { flexDirection: "column" }]}>

            <View style={{ flex: 3, backgroundColor: "#dfca72", alignItems: "center", justifyContent: "center" }} >

                <Image
                    source={
                        require('../img/Virus_boton.png')
                    }

                    style={
                        {
                            height: 200,
                            width: 200,

                        }
                    }
                />
            </View>

            <View style={{ flex: 3, alignItems: "center", justifyContent:'center', justifyContent: "flex-start", backgroundColor: "white", padding: 10 }}>
                <ScrollView style={{ flex: 1 }}>

                    <Text style={{ fontSize: 30 }}>
                        Activar alarma COVID-19
                    </Text>
                    <Text style={{ fontSize: 20, marginTop: 20 }}>
                        Si tuviste contacto con una persona sospechosa o positiva de COVID-19 da la alerta para informar a las personas de la institución.
                    </Text>

                    <Separator />

                    <Pressable
                        onPress={() => showToast()}
                        style={{ backgroundColor: 'red', height: 50, width: 300, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}
                    >

                        <Text style={{ fontSize: 25, color: 'white' }}>
                            Lanzar aviso
                        </Text>

                    </Pressable>

                </ScrollView>
            </View>





            <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }} >
                <Button
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="Regresar"
                    color="#008e38"
                />
            </View>
        </View >


    );
}






const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 0,
    },
    separator: {
        marginVertical: 15,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
