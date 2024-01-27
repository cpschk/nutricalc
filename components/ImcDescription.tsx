import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImcDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Índice de Masa Corporal (IMC)</Text>
      <Text>
        <Text style={styles.strong}>¿Qué es?</Text> El IMC es una medida que evalúa la relación entre tu peso y tu
        altura. Es una herramienta comúnmente utilizada para clasificar el peso de una persona en categorías como bajo
        peso, peso normal, sobrepeso u obesidad.
      </Text>
      <Text>
        <Text style={styles.strong}>Cómo se calcula:</Text> Puedes calcular el IMC dividiendo tu peso en kilogramos
        entre el cuadrado de tu altura en metros. La fórmula es: <Text style={styles.code}>IMC = Peso (kg) / (Altura (m))^2</Text>.
      </Text>
      <Text>
        <Text style={styles.strong}>Interpretación:</Text>
      </Text>
      <View style={styles.list}>
        <Text>• Menos de 18.5: Bajo peso.</Text>
        <Text>• 18.5 a 24.9: Peso normal.</Text>
        <Text>• 25.0 a 29.9: Sobrepeso.</Text>
        <Text>• 30.0 o más: Obesidad.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  strong: {
    fontWeight: 'bold',
  },
  code: {
    fontFamily: 'monospace',
  },
  list: {
    marginLeft: 20,
  },
});

export default ImcDescription;
