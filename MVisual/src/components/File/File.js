import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight, Pressable } from 'react-native'

const File = (props) => {
    const navigation = useNavigation();
    const name=''
    
    const goToPatientStudy = () => {
        navigation.navigate("SeriesbyPatientStudy",{id: props.label,post: 'study'});
    }
    return (
        
        <Pressable onPress={goToPatientStudy}>
            <View style={styles.container}>
                {props.image == 'patient' ?
                    <Image style={styles.image} source={require("../../../assets/images/avatar-5.jpg")} /> :
                    props.image == 'series' ? <Image style={styles.image} source={require("../../../assets/images/testimage.png")} /> :
                        <Image style={styles.imageStudy} source={require("../../../assets/images/folder.png")} />
                }
                <Text style={styles.label}>{props.label}</Text>
            </View>
        </Pressable>
    )
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
