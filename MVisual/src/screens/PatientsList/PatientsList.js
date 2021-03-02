import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import File from '../../components/File/File'


const PatientsListScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image style={styles.topImage} source={require('../../../assets/images/patient.png')} />
                <Text style={styles.title}>Por Paciente</Text>
            </View>
            <View style={styles.searchView}>
                <TextInput style={styles.textInput}>
                </TextInput>
                <Image style={styles.searchImage} source={require('../../../assets/images/search.png')} />
            </View>
            <ScrollView>
                <View style={styles.patientsView}>
                    <File image={"patient"} label={"Juan Camilo Chafloque Mesia"} />
                    <File image={"patient"} label={"Abel Santiago Cortes"} />
                    <File image={"patient"} label={"Julio Andres Mejia Vera"} />
                    <File image={"patient"} label={"Leonardo Flórez Valencia"} />
                    <File image={"patient"} label={"Juan Sebastian Osorio Garcia"} />
                    <File image={"patient"} label={"Sebastian Andres Rodriguez Fernandez"} />
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

export default PatientsListScreen
