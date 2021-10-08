import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, Pressable } from 'react-native';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import Firebase from "../utils/firebase";


const auth = Firebase.auth()


export default function School({ navigation }) {

    const { user } = useContext(AuthenticatedUserContext);


    const handleLogOut = async () => {

        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }

    }




    return (
        <View style={[styles.container, { flexDirection: "column" }]}>

            <View style={{ flex: 3, backgroundColor: "#d8075b", alignItems: "center", justifyContent: "center" }} >

                <Image
                    source={
                        require('../img/EnfermosCovid.png')
                    }

                    style={
                        {
                            height: 200,
                            width: 200,

                        }
                    }
                />
            </View>

            <View style={{ flex: 3, backgroundColor: "white", alignItems: "center", justifyContent: "flex-start" }} >

                <Text style={{ fontSize: 40, marginTop: 30 }}>
                    Casos activos
                </Text>
                <Text style={{ fontSize: 100 }}>
                    8
                </Text>
                <Button
                    title='Ver personas'
                    disabled
                />
            </View>







            <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }} >
                <Button
                    onPress={() => navigation.navigate('HomeScreen')}
                    title="Regresar"
                    color="#008e38"
                />
            </View>
        </View>


    );
}






const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 0,
    },
});
