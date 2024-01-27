import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const settingsData = [
    { key: 'notification', label: 'Notificaciones', value: 'Activado' },
    { key: 'theme', label: 'Tema', value: 'Claro' },
    { key: 'language', label: 'Idioma', value: 'Español' },
  ];

  const resetModalPreference = async () => {
    try {
      console.log('shouldShowModal viene con:', await AsyncStorage.getItem('shouldShowModal'));
      await AsyncStorage.setItem('shouldShowModal', 'false');
      console.log('Selección del usuario para mostrar el modal restablecida exitosamente');
      console.log('shouldShowModal:', await AsyncStorage.getItem('shouldShowModal'));
    } catch (error) {
      console.error('Error al intentar restablecer la selección del usuario para mostrar el modal', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configuración</Text>
      {settingsData.map((item) => (
        <View key={item.key} style={styles.settingItem}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={resetModalPreference} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Restablecer elección del modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SettingsScreen;
