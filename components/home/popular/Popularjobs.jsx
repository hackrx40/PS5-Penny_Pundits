import React from 'react'
import { View, Text } from 'react-native'

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
      
      <Text> Daily Challenges </Text>
      <Text> 1. Login in the app </Text>
      <Text> 2. Check out analytics tab </Text>
      <Text> 3. Add an expense for the day </Text>
      <Text> 4. Check transactions </Text>
      
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