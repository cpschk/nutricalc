import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import { LearnStyles } from '../styles/LearnScreenStyle';
import ImcDescription from '../components/ImcDescription';
import TmbDescription from '../components/TmbDescription';
import MacronutrientsDescription from '../components/MacronutrientsDescription';
import PlateMethodDescription  from '../components/PlateMethodDescription';

const LearnInfo = () => {
  // const { result } = route.params;{ route }
  const [isIMCVisible, setIMCVisible] = useState(false);
  const [isTMBVisible, setTMBVisible] = useState(false);
  const [isMacroVisible, setMacroVisible] = useState(false);
  const [isTecPlateVisible, setTecPlateVisible] = useState(false);


  return (
    <ScrollView contentContainerStyle={LearnStyles.container}>
      <Text>Aprende sobre ...</Text>

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setIMCVisible(!isIMCVisible)}>
        <Text style={LearnStyles.textTitle}>{isIMCVisible} IMC</Text>
      </TouchableOpacity>
      {isIMCVisible && (
        <View style={LearnStyles.showinfo}>
          {/* <Text>IMC</Text> */}
          <ImcDescription />
        </View>
      )}

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setTMBVisible(!isTMBVisible)}>
        <Text style={LearnStyles.textTitle}>{isTMBVisible} TMB</Text>
      </TouchableOpacity>
      {isTMBVisible && (
        <View style={LearnStyles.showinfo}>
          {/* <Text>TMB bla bla bla blaasgfjhsagfsahdgfljhadsgflsdahgfljsdgfljsdagfjlsgdlfhgdshfgsdfgsldagfdsalgfsaldhgfhdsagflhsdagfsdhgfhsdagfhsdagfshagfashdgfjdshagfjlsdjagfjhsdaggfjhdsagfjdsahgfjdsagfjlsadhgfjdshagfsdagfjshdgfjhsadcjhadsbcjhsdfylsgcshgfcxbsdjhcasdhasj</Text> */}
          <TmbDescription />
        </View>
      )}

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setMacroVisible(!isMacroVisible)}>
        <Text style={LearnStyles.textTitle}>MACRONUTRIENTES</Text>
      </TouchableOpacity>
      {isMacroVisible && (
        <View style={LearnStyles.showinfo}>
          {/* <Text>Macronutrientes bla bla bla blaasgfjhsagfsahdgfljhadsgflsdahgfljsdgfljsdagfjlsgdlfhgdshfgsdfgsldagfdsalgfsaldhgfhdsagflhsdagfsdhgfhsdagfhsdagfshagfashdgfjdshagfjlsdjagfjhsdaggfjhdsagfjdsahgfjdsagfjlsadhgfjdshagfsdagfjshdgfjhsadcjhadsbcjhsdfylsgcshgfcxbsdjhcasdhasj</Text> */}
          <MacronutrientsDescription />
        </View>
      )}

      <TouchableOpacity style={LearnStyles.infoContainer} onPress={() => setTecPlateVisible(!isTecPlateVisible)}>
        <Text style={LearnStyles.textTitle}>TECNICA DEL PLATO</Text>
      </TouchableOpacity>
      {isTecPlateVisible && (
        <View style={LearnStyles.showinfo}>
          {/* <Text>El plato bla bla blaasgfjhsagfsahdgfljhadsgflsdahgfljsdgfljsdagfjlsgdlfhgdshfgsdfgsldagfdsalgfsaldhgfhdsagflhsdagfsdhgfhsdagfhsdagfshagfashdgfjdshagfjlsdjagfjhsdaggfjhdsagfjdsahgfjdsagfjlsadhgfjdshagfsdagfjshdgfjhsadcjhadsbcjhsdfylsgcshgfcxbsdjhcasdhasj</Text> */}
          <PlateMethodDescription />
        </View>
      )}

    </ScrollView>
  );
};

export default LearnInfo;
