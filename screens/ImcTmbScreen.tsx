import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { ImcTmbStyles } from '../styles/ImcTmbScreenStyle';

const ImcTmbCalculate = () => {
  const [estatura, setEstatura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [edad, setEdad] = useState<string>('');
  const [rangoIMC, setrangoIMC] = useState<string>('');
  const [genero, setGenero] = useState<string>('masculino');
  const [nivelActividad, setNivelActividad] = useState<string>('sedentario');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [imc, setBmi] = useState<number | null>(null);
  const [tmbResult, setTmbResult] = useState<number | null>(null);
  const [caloriesWithActivity, setCaloriesWithActivity] = useState<string | null>(null);

  const validarCampo = (campo: string, mensaje: string) => {
    if (!campo) {
      alert(mensaje);
      return false;
    }
    return true;
  };

  const calcularTmb = (genero: string, peso: number, estatura: number, edad: number): void => {
    let calculatedTmb: number;
    if (genero.toLowerCase() === 'masculino') {
      calculatedTmb = 88.362 + 13.397 * peso + 4.799 * estatura - 5.677 * edad;
    } else if (genero.toLowerCase() === 'femenino') {
      calculatedTmb = 447.593 + 9.247 * peso + 3.098 * estatura - 4.330 * edad;
    }
    setTmbResult(calculatedTmb);
    
  };

  const calculateCaloriesWithActivity = useCallback(() => {
    const activityFactors = {
      'sedentario': 1.2,
      'ligero': 1.375,
      'moderado': 1.55,
      'intenso': 1.725,
    };

    if (activityFactors.hasOwnProperty(nivelActividad)) {
      const activityFactor = activityFactors[nivelActividad];
      if (tmbResult !== null && tmbResult !== undefined) {
        const caloriesWithActivityValue = (tmbResult * activityFactor).toFixed(0);
        setCaloriesWithActivity(caloriesWithActivityValue);
      } else {
        console.error('El resultado TMB no está definido.');
      }
    } else {
      console.error('Nivel de actividad física no válido.');
    }
  }, [tmbResult, nivelActividad, setCaloriesWithActivity]);

  const determinarRangoIMC = (imc: number): string => {
    if (imc < 18.5) {
      return 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidad (Grado I)';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidad (Grado II)';
    } else {
      return 'Obesidad severa (Grado III)';
    }
  };

  const handleResult = () => {
    if (!validarCampo(estatura.toString(), 'Por favor, ingrese la estatura.')) return;
    if (!validarCampo(peso.toString(), 'Por favor, ingrese el peso.')) return;
    if (!validarCampo(edad, 'Por favor, ingrese la edad.')) return;

    const bmi = peso / ((estatura / 100) * (estatura / 100));

    setBmi(bmi);
    setrangoIMC(determinarRangoIMC(bmi));
    calcularTmb(genero, peso, estatura, Number(edad));
    calculateCaloriesWithActivity();

    // console.log('Estatura:', estatura);
    // console.log('Peso:', peso);
    // console.log('Edad:', edad);
    // console.log('Género:', genero);
    setIsVisible(!isVisible);
  };

  return (
    <ScrollView contentContainerStyle={ImcTmbStyles.container}>
      <View style={ImcTmbStyles.dataContainer}>
        <View style={ImcTmbStyles.data}>
          <Text style={ImcTmbStyles.label}>Estatura (cm):</Text>
          <TextInput
            style={ImcTmbStyles.input}
            keyboardType="numeric"
            placeholder="Ingrese la estatura"
            value={estatura.toString()}
            onChangeText={(text) => setEstatura(parseFloat(text))}
          />

          <Text style={ImcTmbStyles.label}>Peso (kg):</Text>
          <TextInput
            style={ImcTmbStyles.input}
            keyboardType="numeric"
            placeholder="Ingrese el peso"
            value={peso.toString()}
            onChangeText={(text) => setPeso(parseFloat(text))}
          />

          <Text style={ImcTmbStyles.label}>Edad:</Text>
          <TextInput
            style={ImcTmbStyles.input}
            keyboardType="numeric"
            placeholder="Ingrese la edad"
            value={edad}
            onChangeText={(text) => setEdad(text)}
          />

          <Text style={ImcTmbStyles.label}>Género:</Text>
          <Picker
            selectedValue={genero}
            onValueChange={(itemValue) => setGenero(itemValue)}
            style={ImcTmbStyles.picker}
          >
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Femenino" value="femenino" />
          </Picker>

          <Text style={ImcTmbStyles.label}>Nivel de actividad física:</Text>
          <Picker
            selectedValue={nivelActividad}
            onValueChange={(itemValue) => setNivelActividad(itemValue)}
            style={ImcTmbStyles.picker}
          >
            <Picker.Item label="Sedentario" value="sedentario" />
            <Picker.Item label="Ligero" value="ligero" />
            <Picker.Item label="Moderado" value="moderado" />
            <Picker.Item label="Intenso" value="intenso" />
          </Picker>
        </View>
        <View>
          <Image source={require('../assets/paper-fruits.png')} style={ImcTmbStyles.image} />
        </View>
      </View>
      <View style={ImcTmbStyles.buttonContainer}>
        <TouchableOpacity style={ImcTmbStyles.button} onPress={handleResult}>
          <Text style={ImcTmbStyles.buttonText}>
            {isVisible ? 'Ocultar Resultado' : 'Mostrar Resultado'}
          </Text>
        </TouchableOpacity>
      </View>

      {isVisible && (
        <View style={ImcTmbStyles.hiddenView}>
          <Text>
            Aqui se vera el resultado asdasdasdasdas{'\n'}
          </Text>

          <View style={ImcTmbStyles.imcTmbView}>
            <Text style={ImcTmbStyles.imctmb}>
              IMC{'\n'}
              {imc?.toFixed(2)}
            </Text>

            <Text style={ImcTmbStyles.imctmb}>
              TMB{'\n'}
              {tmbResult.toFixed(0)}
            </Text>
          </View>

          <Text>
            El IMC se clasifica como:{'\n'} {rangoIMC}{'\n'}
            Con actividad física{'\n'}
            {caloriesWithActivity} kcal
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ImcTmbCalculate;
