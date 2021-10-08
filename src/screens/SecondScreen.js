import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, Pressable } from 'react-native';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import Firebase from "../utils/firebase";


const auth = Firebase.auth()


export default function SecondScreen({ navigation }) {

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
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>


            <View
                style={
                    {
                        flex: 2,
                        backgroundColor: "#0a81cb",
                        flexDirection: "row",
                    }
                }
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", margin: 20 }}>
                    {/* PERFIL */}




                    <Image
                        source={
                            require('../img/mii.png')
                        }

                        style={
                            {
                                height: 100,
                                width: 100,

                            }
                        }
                    />

                </View>

                <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column', margin: 20 }}>

                    <Text style={{ fontSize: 40, color: 'white' }}>
                        Perfil
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('HomeScreen')}
                        title=">"
                        color="black"

                    />



                </View>






            </View>

            <View style={{ flex: 2, backgroundColor: "#d8075b", flexDirection: "row" }} >

                {/* ESTADO ESCOLAR */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", margin: 20 }}>




                    <Image
                        source={
                            require('../img/EnfermosCovid.png')
                        }

                        style={
                            {
                                height: 100,
                                width: 100,

                            }
                        }
                    />

                </View>

                <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column', margin: 20 }}>

                    <Text style={{ fontSize: 25, color: 'white' }}>
                        Situación escolar
                    </Text>
                    <Button

                        title=">"
                        color="black"

                    />



                </View>


            </View>



            <View style={{ flex: 2, backgroundColor: "#dfca72", flexDirection: "row" }} >

                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", margin: 20 }}>




                    <Image
                        source={
                            require('../img/EnfermosCovid.png')
                        }

                        style={
                            {
                                height: 100,
                                width: 100,

                            }
                        }
                    />

                </View>

                <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'column', margin: 20 }}>

                    <Text style={{ fontSize: 20, color: 'white' }}>
                        Alerta positivo COVID
                    </Text>
                    <Button

                        title=">"
                        color="black"

                    />



                </View>


            </View>



            <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }} >
                <Button
                    onPress={handleLogOut}
                    title="Regresar"
                    color="#008e38"
                />

            </View>
        </View>
    );
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
});
