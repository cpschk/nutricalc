import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [hideMessage, setHideMessage] = useState(false);

  useEffect(() => {
    checkMessagePreference();
  }, []);

  const checkMessagePreference = async () => {
    try {
      const value = await AsyncStorage.getItem('hideWelcomeMessage');
      if (value !== null) {
        setHideMessage(value === 'true');
      }
    } catch (error) {
      console.error('Error al obtener la preferencia del mensaje de bienvenida', error);
    }
  };

  const handleCheckboxChange = async () => {
    setHideMessage(!hideMessage);
    try {
      await AsyncStorage.setItem('hideWelcomeMessage', (!hideMessage).toString());
    } catch (error) {
      console.error('Error al guardar la preferencia del mensaje de bienvenida', error);
    }
  };

  return (
    <View>
      {showMessage && !hideMessage && (
        <View>
          <Text>Bienvenido a la aplicación. Este es un mensaje de bienvenida.</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox checked={hideMessage} onPress={handleCheckboxChange} />
            <Text>No deseo volver a ver este mensaje</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default WelcomeMessage;
