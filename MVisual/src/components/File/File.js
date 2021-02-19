import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

const File = (props) => {

    return (
        <View style={styles.container}>
            {props.image == 'patient' ?
                <Image style={styles.image} source={require("../../../assets/images/avatar-5.jpg")} /> :
                props.image == 'series' ? <Image style={styles.image} source={require("../../../assets/images/avatar-1.jpg")} /> :
                    <Image style={styles.image} source={require("../../../assets/images/avatar-2.jpg")} />
            }
            <Text style={styles.label}>{props.label}</Text>
        </View>
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
        width: 55,
        height: 55
    },

    label: {
        paddingLeft: 15,
        fontSize: 18,
        color: 'gray',
        width: '70%',
    }
})

export default File
