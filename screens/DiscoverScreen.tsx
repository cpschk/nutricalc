import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { DiscoverStyles } from '../styles/DiscoverScreenStyle';
import { Icon } from 'react-native-elements';

const DiscoverScreen = () => {

  return (
    <ScrollView contentContainerStyle={DiscoverStyles.container}>
      <Text >Descubre</Text>

      <View style={DiscoverStyles.containerItems}>
        <TouchableOpacity style={DiscoverStyles.infoContainer} >
          <Image
            source={require('../assets/dumbbell.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text> Ejercicios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={DiscoverStyles.infoContainer} >
          <Image
            source={require('../assets/food.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text> Alimentos</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity 
            style={homeStyles.calculateContainer} 
            onPress={() => navigateToNextScreen('calcula')}>
              
              <Text style={homeStyles.textSelectContainer}>Calcula tu ...</Text>
          </TouchableOpacity> */}
      </View>
      <View style={DiscoverStyles.containerItems}>
        <TouchableOpacity style={DiscoverStyles.infoContainer} >
          <Image
            source={require('../assets/dumbbell.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text> Ejercicios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={DiscoverStyles.infoContainer} >
          <Image
            source={require('../assets/food.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text> Alimentos</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity 
            style={homeStyles.calculateContainer} 
            onPress={() => navigateToNextScreen('calcula')}>
              
              <Text style={homeStyles.textSelectContainer}>Calcula tu ...</Text>
          </TouchableOpacity> */}
      </View>
      <View style={DiscoverStyles.containerItems}>
        <TouchableOpacity style={DiscoverStyles.infoContainer} >
          <Image
            source={require('../assets/dumbbell.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text> Ejercicios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={DiscoverStyles.infoContainer} >
          <Image
            source={require('../assets/food.png')}
            style={{ width: 70, height: 70 }}
          />
          <Text> Alimentos</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity 
            style={homeStyles.calculateContainer} 
            onPress={() => navigateToNextScreen('calcula')}>
              
              <Text style={homeStyles.textSelectContainer}>Calcula tu ...</Text>
          </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default DiscoverScreen;