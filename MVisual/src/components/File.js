import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Pressable } from 'react-native'

const File = (props) => {
    const navigation = useNavigation();
    const name = ''
    console.log(props.label)
    const goToPatient = () => {
        navigation.navigate("SeriesbyPatientStudy", { id: props.label, post: 'patient' });
    }
    const goToStudy = () => {
        navigation.navigate("SeriesbyPatientStudy", { id: props.label, post: 'study' });
    }
    const goToSeries = () => {
        //Go to visualization
        //navigation.navigate("SeriesbyPatientStudy", { id: props.label, post: 'study' });
    }
    if (props.image) {
        if (props.image === 'patient')
            return (
                <Pressable onPress={goToPatient}>
                    <View style={styles.container}>
                        <Image style={styles.image} source={require("../../assets/images/avatar-5.jpg")} />
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                </Pressable>
            )
        if (props.image === 'study')
            return (
                <Pressable onPress={goToStudy}>
                    <View style={styles.container}>
                        <Image style={styles.imageStudy} source={require("../../assets/images/folder.png")} />
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                </Pressable>
            )
        if (props.image === 'series')
            return (
                <Pressable onPress={goToSeries}>
                    <View style={styles.container}>
                        <Image style={styles.image} source={require("../../assets/images/testimage.png")} />
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                </Pressable>
            )
        if (props.image === 'procesadas')
            return (
                <Pressable onPress={goToSeries}>
                    <View style={styles.container}>
                        <Image style={styles.image} source={require("../../assets/images/processed_static.png")} />
                        <Text style={styles.label}>{props.label}</Text>
                    </View>
                </Pressable>
            )
    } else {
        return (
            <Text>hey</Text>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 20
    },
    imageStudy: {
        width: 60,
        height: 50,
    },
    label: {
        paddingLeft: 15,
        fontSize: 18,
        color: 'gray',
        width: '70%',
    }
})

export default File
