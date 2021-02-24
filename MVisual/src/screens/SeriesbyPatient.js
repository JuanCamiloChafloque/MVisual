import React from 'react'
import { View, Text, StyleSheet, Button, Image, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function SeriesbyPatient() {
    const navigation = useNavigation();

    const handleBackButtonClick = e => {
        navigation.goBack();
    }
    return (
        <View style={styles.sbp}>
            <View style={styles.topContainer}>
                <TouchableOpacity  onPress={handleBackButtonClick}>
                    <Image style={styles.sbp__backbtn} source={require('../../assets/icons/keyboard-left-arrow-button.png')} />
                </TouchableOpacity >
                <View style={styles.topContainer__right}>
                    <Image style={styles.topContainer__rightImg} source={require('../../assets/images/avatar-5.jpg')} />
                    <Text>Juan Sebaasatian Osorio Garcia</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sbp: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 35,
        paddingVertical: 30
    },
    sbp__backbtn: {
        width: 50,
        height: 50,
        marginTop:20
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topContainer__right: {
    },
    topContainer__rightImg: {
        alignSelf: 'flex-end',
        width: 55,
        height: 55
    }
})