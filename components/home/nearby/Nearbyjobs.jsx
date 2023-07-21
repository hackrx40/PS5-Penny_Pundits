import React from 'react'
import { View, Text } from 'react-native'

import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  return (
    <View>
      <Text style={[styles.text, { fontSize: 30}, {color: 'red'}, {fontWeight: 'bold'} , {textAlign: "center"}]}> PROFILE </Text>
      <Text> </Text>
      <Text style={[styles.text, { fontSize: 20}, {fontWeight: 'bold'}]}> Name    : Vishant Kalwani </Text>
      <Text> </Text>

      <Text style={[styles.text, { fontSize: 20}, {fontWeight: 'bold'}]}> Age   :   26 </Text>
      <Text> </Text>

      <Text style={[styles.text, { fontSize: 20}, {fontWeight: 'bold'}]}> Email  : </Text>

      <Text> </Text>

      <Text style={[styles.text, { fontSize: 20}, {fontWeight: 'bold'}]}> Mobile  :   </Text>

      <Text> </Text>
      <Text style={[styles.text, { fontSize: 20}, {fontWeight: 'bold'}]}> Income    : 1,00,000 </Text>
      <Text> </Text>

      <Text style={[styles.text, { fontSize: 20}, {fontWeight: 'bold'}]}> No of dependents   : 2 </Text>
      <Text> </Text>

      <Text style={[styles.text, { fontSize: 20}, {fontWeight: 'bold'}]}> City   : Pune </Text>
      <Text> </Text>
    </View>
  );
};

export default Nearbyjobs;