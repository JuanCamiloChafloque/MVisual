import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const UploadImage = () => {
  const [photo, setPhoto] = useState(null);
  handleChoosePhoto = () => {
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
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {photo && (
        <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};

export default UploadImage;
