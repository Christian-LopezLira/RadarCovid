import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, Pressable } from 'react-native';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import Firebase from "../utils/firebase";


const auth = Firebase.auth()


export default function Profile({ navigation }) {

    const { user } = useContext(AuthenticatedUserContext);


    const handleLogOut = async () => {

        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }

    }


    const handleProfile = () => {

    }

    const handleAmount = () => {

    }

    const handleReport = () => {

    }

    return (
        <View style={[styles.container, { flexDirection: "column" }]}>

            <View style={{ flex: 3, backgroundColor: "#0a81cb", alignItems: "center", justifyContent: "center" }} >

                <Image
                    source={
                        require('../img/mii.png')
                    }

                    style={
                        {
                            height: 200,
                            width: 200,

                        }
                    }
                />
            </View>

            <View style={{ flex: 3, backgroundColor: "white", alignItems: "center", justifyContent: "center" }} >

                <Text style={{ fontSize: 40 }}>
                    Usuario
                </Text>
                <Text style={{ fontSize: 20 }}>
                    {user.email}
                </Text>
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
