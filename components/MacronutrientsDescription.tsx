import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MacronutrientsDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Macronutrientes</Text>
      <Text>
        <Text style={styles.strong}>¿Qué son?</Text> Los macronutrientes son nutrientes esenciales que el cuerpo
        necesita en grandes cantidades para mantener sus funciones vitales y proporcionar energía.
      </Text>
      <Text style={styles.strong}>Tipos de Macronutrientes:</Text>
      <Text>
        <Text style={styles.listItem}>
          <Text style={styles.strong}>Proteínas:</Text> Son fundamentales para la construcción y reparación de
          tejidos. Se encuentran en alimentos como carne, pescado, huevos, legumbres y lácteos.
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.strong}>Carbohidratos:</Text> Son la principal fuente de energía. Se encuentran en
          alimentos como granos enteros, frutas, verduras y legumbres.
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.strong}>Grasas:</Text> Cumplen funciones energéticas y ayudan en la absorción de
          vitaminas. Se encuentran en alimentos como aceites, nueces, aguacates y pescado graso.
        </Text>
      </Text>
      <Text>
        <Text style={styles.strong}>Importancia:</Text> Mantener un equilibrio adecuado de estos macronutrientes es
        esencial para una dieta saludable y el funcionamiento óptimo del cuerpo.
      </Text>
      <Text>
        <Text style={styles.strong}>Recomendaciones:</Text> La proporción de macronutrientes varía según las necesidades
        individuales, pero generalmente se recomienda una dieta equilibrada que incluya una adecuada cantidad de
        proteínas, carbohidratos y grasas.
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
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default MacronutrientsDescription;
