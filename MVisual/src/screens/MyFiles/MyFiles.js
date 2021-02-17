import React from 'react'
import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import ImagePreview from '../../components/ImagePreview/ImagePreview'

const MyFilesScreen = () => {

    const patientImage = require('../../../assets/images/patient.png');
    const studyImage = require('../../../assets/images/studies.png');
    const seriesImage = require('../../../assets/images/series.png');

    return (
        <View style={styles.myFilesScreenContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Archivos</Text>
            </View>
            <View style={styles.recentContainer}>
                <Text style={styles.recentTitle}>Recientes</Text>
                <View style={styles.imagesContainer}>
                    <ImagePreview />
                    <ImagePreview />
                    <ImagePreview />
                </View>
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.categoriesTitle}>Categorias</Text>
                <View style={styles.categoriesSection}>
                    <Image style={styles.categoriesImages} source={patientImage} />
                    <Text style={styles.categoriesText}>Pacientes</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.categoriesSection}>
                    <Image style={styles.categoriesImages} source={studyImage} />
                    <Text style={styles.categoriesText}>Estudios</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.categoriesSection}>
                    <Image style={styles.categoriesImages} source={seriesImage} />
                    <Text style={styles.categoriesText}>Series</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    myFilesScreenContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },

    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 60
    },

    titleText: {
        fontSize: 30,
        color: 'gray'
    },

    recentContainer: {
        paddingHorizontal: 40,
        justifyContent: 'space-around',
        marginBottom: 25
    },

    recentTitle: {
        fontSize: 22,
        color: 'gray',
        marginBottom: 20
    },

    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    categoriesContainer: {
        paddingHorizontal: 40
    },

    categoriesTitle: {
        fontSize: 22,
        color: 'gray',
        marginBottom: 15
    },

    categoriesImages: {
        width: 35,
        height: 35
    },

    categoriesSection: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 18,
    },

    categoriesText: {
        paddingHorizontal: 30,
        fontSize: 18,
        color: 'gray'
    },

    divider: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    }
})


export default MyFilesScreen