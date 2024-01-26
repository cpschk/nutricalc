// SettingsScreen.tsx
// import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  // Datos ficticios para la configuración
  const settingsData = [
    { key: 'notification', label: 'Notificaciones', value: 'Activado' },
    { key: 'theme', label: 'Tema', value: 'Claro' },
    { key: 'language', label: 'Idioma', value: 'Español' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Configuración</Text>
      {settingsData.map((item) => (
        <View key={item.key} style={styles.settingItem}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
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
});

export default SettingsScreen;
