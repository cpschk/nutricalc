// HomeScreen.tsx
// import React, { useState } from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

import * as React from 'react';
import { View, Text, ImageBackground, TouchableOpacity,  TextInput, Button, ScrollView } from 'react-native';
import { homeStyles } from '../styles/HomeScreenStyle';
import { Icon } from 'react-native-elements';
import { Video, ResizeMode } from 'expo-av';

const HomeScreen = ({ navigation }) => {
  const navigateToNextScreen = (id) => {
    if (id === 'calcula') {
      navigation.navigate('ImcTmbCalculate');
    } else if (id === 'aprende') {
      navigation.navigate('ResultScreen');
    } else if (id === 'descubre') {
      navigation.navigate('ResultScreen');
    } else if (id === 'mejora') {
      navigation.navigate('ResultScreen');
    }
  };

  return (
    // <ImageBackground
    //   source={require('../assets/enhanced-image.png')} // Reemplaza con la ruta correcta de tu imagen
    //   // source={require('../assets/paper-fruits.png')} // Reemplaza con la ruta correcta de tu imagen
    //   // source={require('../assets/clay-tree-enhanced-image.jpg')} // Reemplaza con la ruta correcta de tu imagen
    //   style={homeStyles.backgroundImage}
    // >
    <View style={homeStyles.container}>
      <Video
        source={require('../assets/tree.mp4')}
        style={homeStyles.backgroundVideo}
        rate={1.0}
        shouldPlay={true}
        isLooping={true}
        volume={1.0}
        isMuted={true}
        resizeMode={ResizeMode.COVER}
      />

      <View>
        <Text style={homeStyles.textHeader}>Bienvenido</Text>
        <Text style={homeStyles.textDown}>Descubre el poder de una alimentación saludable</Text>
      </View>

      <View style={homeStyles.dietContainer}>
        <Text style={homeStyles.text}>Lograr una dieta equilibrada</Text>
      </View>

      <View style={homeStyles.selectsContainer}>

        <TouchableOpacity 
          style={homeStyles.calculateContainer} 
          onPress={() => navigateToNextScreen('calcula')}>
            <Icon name="gauge" size={70} type="entypo" color="#000000" />
            <Text style={homeStyles.textSelectContainer}>Calcula tu ...</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={homeStyles.calculateContainer}
          onPress={() => navigateToNextScreen('aprende')}>
            <Icon name="psychology" size={70} type="material-icons" color="#000000" />
            <Text style={homeStyles.textSelectContainer}>Aprende sobre</Text>
        </TouchableOpacity>

      </View>

      <View style={homeStyles.selectsContainer}>

        <TouchableOpacity 
          style={homeStyles.calculateContainer} 
          onPress={() => navigateToNextScreen('descubre')}>
            <Icon name="school" size={70} type="material-icons" color="#000000" />
            <Text style={homeStyles.textSelectContainer}>Descubre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={homeStyles.calculateContainer} 
          onPress={() => navigateToNextScreen('mejora')}>
            <Icon name="self-improvement" size={70} type="material-icons" color="#000000" />
            <Text style={homeStyles.textSelectContainer}>Mejora tu...</Text>
        </TouchableOpacity>

      </View>
      
    </View>
    // </ImageBackground>
  );
};


export default HomeScreen;
