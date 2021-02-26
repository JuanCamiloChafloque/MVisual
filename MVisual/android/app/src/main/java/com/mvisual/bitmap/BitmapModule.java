package com.mvisual.bitmap;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;

public class BitmapModule extends ReactContextBaseJavaModule {

    public BitmapModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Bitmap";
    }

    @ReactMethod
    public void getPixels(String filePath, final Promise promise) {
        filePath = "/storage/emulated/0/DCIM/Camara/IMG_20201012_173117.jpg";
        Log.d("Bitmap Class",filePath);
        try {
            WritableNativeMap result = new WritableNativeMap();
            WritableNativeArray pixels = new WritableNativeArray();
            Log.d("Bitmap decode",filePath);
            InputStream is = new FileInputStream(filePath);
            Bitmap bitmap = BitmapFactory.decodeStream(is);
            Log.d("Bitmap is done",bitmap.toString());
            if (bitmap == null) {
                promise.reject("Failed to decode. Path is incorrect or image is corrupted");
                return;
            }

            int width = bitmap.getWidth();
            int height = bitmap.getHeight();

            boolean hasAlpha = bitmap.hasAlpha();

            for (int x = 0; x < width; x++) {
                for (int y = 0; y < height; y++) {
                    int color = bitmap.getPixel(x, y);
                    String hex = Integer.toHexString(color);
                    pixels.pushString(hex);
                }
            }

            result.putInt("width", width);
            result.putInt("height", height);
            result.putBoolean("hasAlpha", hasAlpha);
            result.putArray("pixels", pixels);

            promise.resolve(result);

        } catch (Exception e) {
            Log.d("Bitmap Class Exeption",e.getMessage());
            promise.reject(e);
        }

    }

}