// screen de react-native en donde se puede ver distindos views, en este caso 2, uno es sobre ejercicios y el otro es relacionado alimentacion
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ImproveStyles } from '../styles/ImproveScreenStyle';
import { Icon } from 'react-native-elements';

const ImproveScreen = () => {

  return (
    <View>
        <Text >Mejora</Text>
    
        <View style={ImproveStyles.containerItems}>
            <TouchableOpacity style={ImproveStyles.infoContainer} >
            <Image
                source={require('../assets/dumbbell.png')}
                style={{ width: 70, height: 70 }}
            />
            <Text> Ejercicios</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={ImproveStyles.infoContainer} >
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
        <View style={ImproveStyles.containerItems}>
            <TouchableOpacity style={ImproveStyles.infoContainer} >
            <Image
                source={require('../assets/dumbbell.png')}
                style={{ width: 70, height: 70 }}
            />
            <Text> Ejercicios</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={ImproveStyles.infoContainer} >
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
    </View>
  );
};

export default ImproveScreen;