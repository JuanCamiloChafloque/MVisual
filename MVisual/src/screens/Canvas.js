import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

const Canvas = () => {
    const route = useRoute();
    console.log(route.params.image.fileName);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <RNSketchCanvas
                    strokeColors={[{ color: '#FF0000' }, { color: '#0000FF' }, { color: '#00FF00' }]}
                    localSourceImage={{ filename: route.params.image.uri, directory: '', mode: 'AspectFit' }}
                    containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                    canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                    defaultStrokeIndex={0}
                    defaultStrokeWidth={5}
                    closeComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Close</Text></View>}
                    undoComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
                    clearComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
                    eraseComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}
                    strokeComponent={colors => (
                        <View style={[{ backgroundColor: colors }, styles.strokeColorButton]} />
                    )}
                    strokeSelectedComponent={(colors, index, changed) => {
                        return (
                            <View style={[{ backgroundColor: colors, borderWidth: 2 }, styles.strokeColorButton]} />
                        )
                    }}
                    strokeWidthComponent={(w) => {
                        return (<View style={styles.strokeWidthButton}>
                            <View style={{
                                backgroundColor: 'white', marginHorizontal: 2.5,
                                width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                            }} />
                        </View>
                        )
                    }}
                    saveComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Save</Text></View>}
                    savePreference={() => {
                        return {
                            folder: 'RNSketchCanvas',
                            filename: String(Math.ceil(Math.random() * 100000000)),
                            transparent: false,
                            includeImage: true,
                            imageType: 'png'
                        }
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
        justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'
    },
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});

export default Canvas
