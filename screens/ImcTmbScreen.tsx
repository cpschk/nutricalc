// ProfileScreen.tsx
import React, { useState } from 'react';
// import { View, Text } from 'react-native';
import { View, Text, TextInput, Button, ScrollView  } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { ImcTmbStyles } from '../styles/ImcTmbScreenStyle';


const ImcTmbCalculate = () => {
  const [estatura, setEstatura] = useState('');
  const [peso, setPeso] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('masculino');

  const [isVisible, setIsVisible] = useState(false);

  const handleEnviar = () => {
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Estatura:', estatura);
    console.log('Peso:', peso);
    console.log('Edad:', edad);
    console.log('Género:', genero);
    setIsVisible(!isVisible);
  };

  return (
    // <View style={ImcTmbStyles.container}>
    <ScrollView contentContainerStyle={ImcTmbStyles.container}>
      <Text style={ImcTmbStyles.label}>Estatura (cm):</Text>
      <TextInput
        style={ImcTmbStyles.input}
        keyboardType="numeric"
        placeholder="Ingrese la estatura"
        value={estatura}
        onChangeText={(text) => setEstatura(text)}
      />

      <Text style={ImcTmbStyles.label}>Peso (kg):</Text>
      <TextInput
        style={ImcTmbStyles.input}
        keyboardType="numeric"
        placeholder="Ingrese el peso"
        value={peso}
        onChangeText={(text) => setPeso(text)}
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

      <Button title={isVisible ? 'Ocultar Resultado' : 'Mostrar Resultado'} onPress={handleEnviar} />


      {isVisible && (
        <View style={ImcTmbStyles.hiddenView}>
        <Text> Aqui se vera el 
          resultado asdasdasdasdas
          dasdasdkjsadh ckhsds jkd dfdjfsalk
          hfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjz
          hfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfask
          hfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfask
          hfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskhfclwenlfhdfjcjzjhcrlrehñuñeuyuaeuhfaskjhcrlrehñuñeuyuaeuhfaskjhcrlrehñuñeuyuaeuhfask
          jhafkjdsañtñehsf-kjsdkfjahsgkjhaekhekñhfsakfhksajhgksajhgwehwhkewjhgkjsdahjkdvdjsghEHEGSDHFÑUUTUYWHFJSAHCUEWRYBW4IUWICJHASECBAÑEBÑABVAUVBAÑKEJBFWAHBBABFSÑIHBTtbsñngbñsbñfhgk
          jdsfhgkdlshglkdsde IMC</Text>
      </View>
      )}
    {/* </View> */}
    </ScrollView>
  );
};

export default ImcTmbCalculate;
