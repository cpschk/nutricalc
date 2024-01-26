// ProfileScreen.tsx
// import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = () => {
  // Datos de ejemplo para el perfil
  const userProfile = {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com',
    // Agrega más datos según tus necesidades
  };

  return (
    <View>
      <Text>Perfil de Usuario:</Text>
      <Text>Nombre: {userProfile.name}</Text>
      <Text>Edad: {userProfile.age}</Text>
      <Text>Email: {userProfile.email}</Text>
      {/* Agrega más elementos según tus necesidades */}
    </View>
  );
};

export default ProfileScreen;
