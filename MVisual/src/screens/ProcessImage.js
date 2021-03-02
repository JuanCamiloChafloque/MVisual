import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import File from '../components/File';

const ProcessImage = () => {
    return (
        <View style={styles.pimg}>
            <View style={styles.topContainer}>
                
                    <Image style={styles.topContainer__rightImgProcessed} source={require('../../assets/images/ProcessedImage.png')} /> 
                    <Text style={styles.topContainer__name}>Imágenes Procesadas</Text>
               
            </View>
            <View style={styles.searchView}>
                <TextInput style={styles.textInput}>
                </TextInput>
                <Image style={styles.searchImage} source={require('../../assets/images/search.png')} />
            </View>
            <ScrollView>
                <View>
                    <File image={"processed"} label={"arias_cerebup_serie12.png"} />
                    <File image={"processed"} label={"arias_cerebup_serie13.png"} />
                    <File image={"processed"} label={"arias_cerebup_serie14.png"} />
                    <File image={"processed"} label={"arias_cerebup_serie15.png"} />
                    <File image={"processed"} label={"arias_cerebup_serie16.png"} />
                    <File image={"processed"} label={"arias_cerebup_serie17.png"} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    pimg: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    pimg__backbtn: {
        width: 50,
        height: 50,
        marginTop: 20
    },
    topContainer: {
        alignSelf: 'flex-end',
    },
   
    topContainer__rightImgProcessed:{
        alignSelf: 'flex-end',
        width: 70,
        height: 70
    },
    searchView: {
        marginTop: 30,
        marginBottom: 30,
        justifyContent: 'center'
    },
    searchImage: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 10,
        marginRight: 12
    },
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: 'lightgray',
        color: 'white',
        borderRadius: 20,
        paddingLeft: 15,
    },
    topContainer__name: {
        fontSize: 18,
        color: 'gray',
        maxWidth: 250,
    },

})

export default ProcessImage
