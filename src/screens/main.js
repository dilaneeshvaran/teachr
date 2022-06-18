import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Main = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        console.log("back button pressed")
                    }}
                    style={styles.backButtonContainer}>
                    <Image
                        style={styles.backButton}
                        source={require('../assets/images/chevron.png')}

                    />
                </TouchableOpacity>
                <Text style={styles.title}>Teach'rs favoris</Text>
            </View>
            <View style={styles.body}>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    header: {
        width: '100%',
        height: '30%',
        backgroundColor: "#0071cc",
        justifyContent: "flex-end",
    },
    body: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: "white",
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 25
    },
    backButtonContainer: {
        width: 50,
        height: 50,
        marginBottom: 20,
    },
    backButton: {
        width: 50,
        height: 50,
        tintColor: "white",
    },

});

export default Main;