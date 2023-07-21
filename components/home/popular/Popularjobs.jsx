import React from 'react'
import { View, Text,Image } from 'react-native'
import { COLORS,icons,SIZES } from '../../../constants'


import styles from './popularjobs.style'

// popular jobs is for challenges


// const st = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain', // Choose the desired image resize mode
//   },
// });

const Popularjobs = () => {
  return (
    <View>
      <Text> </Text>
      
      <Text style={[styles.text, { fontSize: 24 }, {textAlign: 'center'},] }> Daily Challenges </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 1. Login in the app </Text>
      <Image 
      source={icons.coin}

      />
      <Text> </Text>
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 2. Check out analytics tab </Text>
      <Text> </Text>
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 3. Add an expense for the day </Text>
      <Text> </Text>
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 4. Check transactions </Text>
      
{/* 
      <View style={st.containerForImage}>
      <Image
       
        source={require('assets\icon.png')}
        style={st.image} 
        resizeMode="contain"
      
      />
          
        </View> */}
      

      </View>
  )
}



export default Popularjobs