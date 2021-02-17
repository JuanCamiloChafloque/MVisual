import React from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native';



const ImagePreview = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: ('https://upload.wikimedia.org/wikipedia/commons/2/2a/Sagittal_brain_MRI.jpg') }}></Image>
            <Text style={styles.text} >Img..1</Text>
        </View >
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 20
    },

    text: {
        fontSize: 14,
        color: 'gray'
    }

})

export default ImagePreview