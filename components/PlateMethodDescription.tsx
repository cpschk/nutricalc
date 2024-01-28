import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlateMethodDescription = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        En el fascinante mundo de la nutrición, presentamos la técnica del plato, una guía visual sencilla para distribuir tus macronutrientes de manera equilibrada y disfrutar de una vida saludable. Aquí te contamos cómo hacerlo:
      </Text>

      <Text style={styles.heading}>1. Proteínas:</Text>
      <Text style={styles.text}>
        Imagina que un cuarto de tu plato está lleno de proteínas de alta calidad, como carne magra, pescado fresco, huevos o legumbres. Estos bloques constructores son esenciales para la reparación y fortalecimiento de tus tejidos.
      </Text>

      <Text style={styles.heading}>2. Carbohidratos:</Text>
      <Text style={styles.text}>
        Ocupando otro cuarto del plato, los carbohidratos saludables se presentan en forma de granos enteros, frutas frescas y coloridas, así como verduras variadas. Estos te proporcionarán la energía necesaria para enfrentar tus actividades diarias con vitalidad.
      </Text>

      <Text style={styles.heading}>3. Grasas:</Text>
      <Text style={styles.text}>
        Completa la otra mitad de tu plato con grasas saludables, provenientes de aceites de calidad, nueces, aguacates y pescado graso. Estas grasas desempeñan un papel crucial en funciones energéticas y en la absorción de vitaminas esenciales.
      </Text>

      <Text style={styles.text}>
        Además, recuerda el toque final: ¡variedad y color! Incluye una amplia gama de alimentos para asegurarte de obtener todos los nutrientes que tu cuerpo necesita.
      </Text>

      <Text style={styles.heading}>La Importancia:</Text>
      <Text style={styles.text}>
        Mantener un equilibrio adecuado de macronutrientes con la técnica del plato no solo es fácil, sino que también es esencial para optimizar el rendimiento de tu cuerpo y disfrutar de una salud vibrante.
      </Text>

      <Text style={styles.heading}>Recomendaciones:</Text>
      <Text style={styles.text}>
        Personaliza tu plato según tus necesidades individuales, pero como regla general, busca siempre la proporción adecuada de proteínas, carbohidratos y grasas para crear una base sólida para tu bienestar.
      </Text>

      <Text style={styles.text}>
        ¡Con la técnica del plato, cada comida se convierte en una obra maestra nutricional para alimentar tu cuerpo y tu vida!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text: {
    marginBottom: 10,
  },
});

export default PlateMethodDescription;
