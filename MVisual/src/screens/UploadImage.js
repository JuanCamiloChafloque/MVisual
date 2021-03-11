import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';

const UploadImage = () => {

  const navigation = useNavigation();
  var RNFS = require('react-native-fs');

  const [photo, setPhoto] = useState(null);
  const [sliderW, setSliderW] = useState(false);
  const [sliderL, setSliderL] = useState(false);
  const [camera, setCamera] = useState(null);

  const takePicture = async function () {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      camera.startPreview();
      const data = await camera.takePictureAsync(options);
      console.log(data);
    }
  };

  const file = () => {
    RNFS.readDir(RNFS.MainBundlePath)
      .then((result) => {
        console.log('GOT RESULT', result);

        // stat the first file
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  }

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
      <RNCamera
        ref={ref => {
          setCamera(ref);
        }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      />
      <View style={styles.buttonContainer}>
        <Button title="Cargar Foto de Almacenamiento" onPress={takePicture} style={styles.button} />
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
