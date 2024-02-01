// HomeScreen.tsx
// import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity,  TextInput, Button, ScrollView } from 'react-native';
import { homeStyles } from '../styles/HomeScreenStyle';
import { Icon } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
  const navigateToNextScreen = (id) => {
    if (id === 'calcula') {
      navigation.navigate('ImcTmbCalculate');
    } else if (id === 'aprende') {
      navigation.navigate('LearnInfo');
    } else if (id === 'descubre') {
      navigation.navigate('DiscoverScreen');
    } else if (id === 'mejora') {
      navigation.navigate('LearnInfo');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/enhanced-image.png')}
      style={homeStyles.backgroundImage}
    >
    <View style={homeStyles.container}>

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
    </ImageBackground>
  );
};

export default HomeScreen;
