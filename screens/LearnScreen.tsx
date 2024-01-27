import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import { LearnStyles } from '../styles/LearnScreenStyle';

const ResultScreen = () => {
  // const { result } = route.params;{ route }
  const [isIMCVisible, setIMCVisible] = useState(false);
  const [isTMBVisible, setTMBVisible] = useState(false);
  const [isMacroVisible, setMacroVisible] = useState(false);
  const [isTecPlateVisible, setTecPlateVisible] = useState(false);

  // const showInfo = () => {
  //   // setIsVisible(!isVisible);
  // };

  return (
    <View style={LearnStyles.container}>
      <Text>Resultado:</Text>

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setIMCVisible(!isIMCVisible)}>
        <Text>{isIMCVisible} Que es el IMC</Text>

      </TouchableOpacity>
      {isIMCVisible && (
        <View style={LearnStyles.showinfo}>
          <Text>IMC bla bla bla</Text>
        </View>
      )}

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setTMBVisible(!isTMBVisible)}>
        <Text>{isTMBVisible} Que es el TMB</Text>
      </TouchableOpacity>
      {isTMBVisible && (
        <View style={LearnStyles.showinfo}>
          <Text>TMB bla bla bla</Text>
        </View>
      )}

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setMacroVisible(!isMacroVisible)}>
        <Text>Que son los Macronutrientes</Text>
      </TouchableOpacity>
      {isMacroVisible && (
        <View style={LearnStyles.showinfo}>
          <Text>Macronutrientes bla bla bla</Text>
        </View>
      )}

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setTecPlateVisible(!isTecPlateVisible)}>
        <Text>Que es la Tecnica del plato</Text>
      </TouchableOpacity>
      {isTecPlateVisible && (
        <View style={LearnStyles.showinfo}>
          <Text>El plato bla bla bla</Text>
        </View>
      )}

    </View>
  );
};

export default ResultScreen;
