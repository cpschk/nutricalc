import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';

const CustomModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShowAgain, setShouldShowAgain] = useState(false); 

  useEffect(() => {
    AsyncStorage.getItem('shouldShowModal')
      .then((value) => {
        if (value === 'false' || value === null) {
          setIsVisible(true);
        } else {
            setIsVisible(false);
          setShouldShowAgain(value === 'true');
        }
      })
  }, []);

  const handleCheckboxChange = async () => {
    setShouldShowAgain(!shouldShowAgain);
    if (!shouldShowAgain) {
      await AsyncStorage.setItem('shouldShowModal', 'true');
    }
  };

  const handleModalClose = async () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Modal transparent animationType="slide" visible={isVisible}>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300 }}>
          <Text>Mensaje de modal</Text>
          <CheckBox
            checked={shouldShowAgain}
            onPress={handleCheckboxChange}
            title="No quiero ver el modal nuevamente"
            checkedColor="blue"
          />
          <TouchableOpacity onPress={handleModalClose}>
            <Text>Cerrar modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
