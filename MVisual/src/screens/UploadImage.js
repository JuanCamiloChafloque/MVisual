import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const UploadImage = () => {

  const navigation = useNavigation();

  const [photo, setPhoto] = useState(null);
  const [sliderW, setSliderW] = useState(false);
  const [sliderL, setSliderL] = useState(false);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response);
      if (response.uri) {
        setPhoto(response);
        setSliderW(true);
        setSliderL(true);
      }
    });
  };

  const goToCanvaDisplay = () => {
    navigation.navigate("CanvasDisplay", { image: photo });
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Cargar Foto de Almacenamiento" onPress={handleChoosePhoto} style={styles.button} />
      </View>
      <View>
        {photo && <Image source={{ uri: photo.uri }} style={styles.image} />}
      </View>
      <View style={styles.buttonNext}>
        {(sliderW && sliderL) && <Button title="Procesar Imagen" onPress={goToCanvaDisplay} style={styles.next} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    marginTop: 50,
    paddingHorizontal: 10,
    alignItems: 'center'
  },

  image: {
    width: 400,
    height: 400
  },

  button: {
    width: '100%',
  },

  buttonContainer: {
    marginBottom: 20
  },

  buttonNext: {
    marginTop: 60
  }

})

export default UploadImage;
