import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';


const Canvas = () => {

    const route = useRoute();

    return (
        <View>
            <Text>{route.params.image.uri}</Text>
        </View>
    )
}

export default Canvas
