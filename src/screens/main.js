import React from 'react';
import { Dimensions, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TeacherCard from '../components/TeacherCard';
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get('window').width / 100;

const Main = () => {
    //teachers data
    const data = [
        {
            id: 1,
            name: "Nicolas",
            formation: "université 1",
            description: "description",
            profileImage: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "Pierre",
            formation: "université 2",
            description: "description",
            profileImage: "https://picsum.photos/200/500",
        },
        {
            id: 3,
            name: "Benji",
            formation: "université 3",
            description: "description",
            profileImage: "https://picsum.photos/200/600",
        },
    ]

//function render teacher card component for carousal
    const renderItem = ({ item, index }) => {
        return (
            <TeacherCard info={item} />
        );
    }

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
                <View style={styles.carousel}>
                    <Carousel
                        data={data}
                        renderItem={renderItem}
                        slideStyle={{marginLeft: 15}}
                        sliderWidth={width * 100}
                        itemWidth={width * 50}
                        activeSlideAlignment="start"
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                    />
                </View>
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
        flex: 1,
        backgroundColor: 'white',
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
    carousel: {
        width: '100%',
        flex: 1,
        marginLeft: 20,
        marginTop: 45,
    },
});

export default Main;