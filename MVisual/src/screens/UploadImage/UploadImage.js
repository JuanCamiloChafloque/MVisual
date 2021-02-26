import React, {useState} from 'react';
import {View, Image, Button, NativeModules, Platform, PermissionsAndroid, Text} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';


const UploadImage = () => {
  let imagenPrueba = '/storage/emulated/0/DCIM/Camara/IMG_20201012_173117.jpg';
  const [filePath, setFilePath] = useState({});
  
  const requestExternalWritePermission = async () => {
    if(Platform.OS == 'android'){
      try{
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'MVisual needs write permission',
          },);
          // If WRITE_EXTERNAL_STORAGE Permission is granted
          return granted == PermissionsAndroid.RESULTS.GRANTED;
      }catch(err){
        console.warn(err);
        return false;
      }
    }else
    return true;
  }
  const handleChoosePhoto = () => {
    const options = {
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    let isStoragePermitted = requestExternalWritePermission();
    if (isStoragePermitted){
      ImagePicker.launchImageLibrary(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('path -> ', response.path);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };
  const analysePixels = () => {
    //if (filePath != null) {
      NativeModules.Bitmap.getPixels(imagenPrueba)
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
    //} else {
      //console.warn('Upload an Image.....first');
    //}
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {filePath && (
        <Image source={{uri: filePath.uri}} style={{width: 300, height: 300}} />
      )}
      <Text style={{
      padding: 10,
      color: 'black',
      textAlign: 'center'}}>{filePath.uri}</Text>
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
      <Button title="Analyse Pixels" onPress={analysePixels} />
    </View>
  );
};


export default UploadImage;
