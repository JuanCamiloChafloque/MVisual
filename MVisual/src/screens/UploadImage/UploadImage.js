import React, {useState} from 'react';
import {View, Image, Button, NativeModules} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const imagenPrueba = '../../../assets/images/patient.png';
const UploadImage = () => {
  const [photo, setPhoto] = useState(null);
  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response);
      if (response.uri) {
        setPhoto(response);
      }
    });
  };
  const analysePixels = () => {
    if (photo != null) {
      console.log('Uri: ', photo.uri);
      NativeModules.Bitmap.getPixels(photo.uri)
        .then((image) => {
          console.log(image.width);
          console.log(image.height);
          console.log(image.hasAlpha);
          for (let x = 0; x < image.width; x++) {
            for (let y = 0; y < image.height; y++) {
              const offset = image.width * y + x;
              const pixel = image.pixels[offset];
              console.log('Offset', offset);
              console.log('Pixel', pixel);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.warn('Upload an Image.....first');
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {photo && (
        <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      <Button title="Analyse Pixels" onPress={analysePixels} />
    </View>
  );
};

export default UploadImage;
