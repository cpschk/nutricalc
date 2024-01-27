// CustomModal.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';

const CustomModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShowAgain, setShouldShowAgain] = useState(false);

  useEffect(() => {
    // Verificar si el usuario eligió no volver a mostrar el modal
    AsyncStorage.getItem('shouldShowModal')
      .then((value) => {
        if (value === 'false') {
          setIsVisible(false);
        } else {
          // Configurar el estado del checkbox solo si shouldShowModal es 'true'
          setShouldShowAgain(value === 'true');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el estado del modal desde AsyncStorage', error);
        // Si hay un error al obtener el valor, asumimos que shouldShowAgain debe ser false
        setShouldShowAgain(false);
      });
  }, []);

  const handleCheckboxChange = () => {
    setShouldShowAgain(!shouldShowAgain);
  };

  const handleModalClose = async () => {
    // Almacenar la opción de no volver a mostrar el modal en AsyncStorage
    if (!shouldShowAgain) {
      await AsyncStorage.setItem('shouldShowModal', 'false');
    }

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
