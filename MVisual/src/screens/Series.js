import React from 'react'
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native'
import File from '../components/File'

export default function Series() {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image style={styles.topImage} source={require('../../assets/images/series.png')} />
                <Text style={styles.title}>Series</Text>
            </View>
            <View style={styles.searchView}>
                <TextInput style={styles.textInput}>
                </TextInput>
                <Image style={styles.searchImage} source={require('../../assets/images/search.png')} />
            </View>
            <ScrollView>
                <View style={styles.patientsView}>
                    <File image={"series"} label={"arias_cerebup_serie12.png"} />
                    <File image={"series"} label={"arias_cerebup_serie13.png"} />
                    <File image={"series"} label={"arias_cerebup_serie14.png"} />
                    <File image={"series"} label={"arias_cerebup_serie15.png"} />
                    <File image={"series"} label={"arias_cerebup_serie16.png"} />
                    <File image={"series"} label={"arias_cerebup_serie17.png"} />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 35,
        paddingVertical: 30
    },

    topView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 40
    },

    title: {
        marginLeft: 15,
        fontSize: 25,
        color: 'gray',
        fontWeight: 'bold'
    },

    searchView: {
        marginBottom: 30,
        justifyContent: 'center'
    },

    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: 'lightgray',
        color: 'white',
        borderRadius: 20,
        paddingLeft: 15,
    },

    searchImage: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 10,
        marginRight: 12
    },

    topImage: {
        width: 50,
        height: 50,
    }

})