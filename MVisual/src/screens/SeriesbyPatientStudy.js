import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import File from '../components/File/File';
import { useRoute } from '@react-navigation/native';


export default function SeriesbyPatientStudy() {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route)
    const handleBackButtonClick = e => {
        navigation.goBack();
    }
    //Get the ID and useEffect for display the correct data
    return (
        <View style={styles.sbp}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={handleBackButtonClick}>
                    <Image style={styles.sbp__backbtn} source={require('../../assets/icons/keyboard-left-arrow-button.png')} />
                </TouchableOpacity >
                <View style={styles.topContainer__right}>
                    {route.params.post === 'study' ?
                        <Image style={styles.topContainer__rightImgStudy} source={require('../../assets/images/folder.png')} />
                        :
                        <Image style={styles.topContainer__rightImg} source={require('../../assets/images/avatar-5.jpg')} />
                    }
                    <Text style={styles.topContainer__name}>{route.params.id}</Text>
                </View>
            </View>
            <View style={styles.searchView}>
                <TextInput style={styles.textInput}>
                </TextInput>
                <Image style={styles.searchImage} source={require('../../assets/images/search.png')} />
            </View>
            <ScrollView>
                <View>
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
    sbp: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        paddingVertical: 30
    },
    sbp__backbtn: {
        width: 50,
        height: 50,
        marginTop: 20
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
    },
    topContainer__rightImgStudy:{
        alignSelf: 'flex-end',
        width: 65,
        height: 55
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