import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TmbDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasa Metabólica Basal (TMB)</Text>
      <Text>
        <Text style={styles.strong}>¿Qué es?</Text> La TMB representa la cantidad mínima de energía que el cuerpo
        necesita en reposo para mantener funciones vitales como la respiración y la función cardíaca.
      </Text>
      <Text>
        <Text style={styles.strong}>Cómo se calcula:</Text> La fórmula de Harris-Benedict es comúnmente utilizada. Para
        hombres:{' '}
        <Text style={styles.code}>
          TMB = 88.362 + (13.397 x Peso en kg) + (4.799 x Altura en cm) - (5.677 x Edad en años)
        </Text>
        . Para mujeres:{' '}
        <Text style={styles.code}>
          TMB = 447.593 + (9.247 x Peso en kg) + (3.098 x Altura en cm) - (4.330 x Edad en años)
        </Text>
        .
      </Text>
      <Text>
        <Text style={styles.strong}>Uso práctico:</Text> La TMB es útil para determinar el número mínimo de calorías
        que el cuerpo necesita en reposo. Si deseas perder peso, puedes consumir menos calorías que tu TMB, y si deseas
        ganar peso, consumir más.
      </Text>
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
});

export default TmbDescription;
