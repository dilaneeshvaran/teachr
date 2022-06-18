import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const width = Dimensions.get('window').width / 100;
const height = Dimensions.get('window').height / 100;

const TeacherCard = (props) => {

    const {info} = props
    return (
        // TODO:
        <View style={styles.container}>
            {/*profil section*/}
            <View style={styles.profile}>
                <Image
                    style={styles.profileImage}
                    source={{uri : info.profileImage}}
                />
                <Text style={styles.profileName}>{info.name} </Text>
            </View>
            {/*description section*/}
            <View style={styles.description}>
                <Text style={styles.titleDescription}>Formation</Text>
                <Text style={styles.textDescription}>{info.formation} </Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.titleDescription}>Description</Text>
                <Text style={styles.textDescription}>{info.description} </Text>
            </View>
            {/*buttons section*/}
            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#0071cc" }]}>
                    <Text style={styles.buttonText}>Prendre un cours avec Teachrs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {
                    borderColor: "#fca28b",
                    borderWidth: 1
                }]}>
                    <Text style={[styles.buttonText, { color: "#fca28b" }]}>Retirer ce teachrs de mes favoris</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width * 50,
        height: height * 50,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: "white"
    },
    profile: {
        width: "100%",
        height: "20%",
        flexDirection: "row",
        alignItems: "center",
    },
    profileImage: {
        width: width * 10,
        height: width * 10,
        borderRadius: 100,
        marginLeft: 10,
        marginTop: 5,
    },
    profileName: {
        marginLeft: 10,
        fontSize: 16,
        color: "black",
    },
    buttons: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: "90%",
        height: "20%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
    },
    buttonText: {
        fontSize: 10,
        color: "white",
    },
    description: {
        width: "100%",
        marginTop: 15,
        marginLeft: 15,
    },
    titleDescription: {
        fontSize: 12,
    },
    textDescription: {
        fontSize: 12,
        color: "black",
        width: "90%",
        fontWeight: "bold",
    },
})

export default TeacherCard
