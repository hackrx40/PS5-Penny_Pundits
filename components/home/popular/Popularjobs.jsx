import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'
import { COLORS,icons,SIZES } from '../../../constants'


import styles from './popularjobs.style'

// popular jobs is for challenges


const st = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: SIZES.small / 1.25,
    width: 0,
    height:0,

  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: SIZES.small / 1.25,
    
    // marginTop: 10 // Choose the desired image resize mode
  },
});

const Popularjobs = () => {
  return (
    <View >
      <Text> </Text>
      
      <Text style={[styles.text, { fontSize: 24 }, {textAlign: 'center'},] }> Daily Challenges </Text>
      {/* <Text> </Text> */}
      {/* <Text> </Text> */}

      
      
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 1. Login in the app</Text>
       
      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
       <View >
      <Image 
      source={icons.coin}
      style={st.image}  />
     </View> 
      <Text style={[styles.text, { fontSize: 16 }, {color:"blue"} ]}>100</Text> 
      

      </View>
      
      <Text> </Text>
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 2. Check out analytics tab 
      
      </Text>

      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
       <View >
      <Image 
      source={icons.coin}
      style={st.image}  />
     </View> 
      <Text style={[styles.text, { fontSize: 16 }, {color:"blue"} ]}>200</Text> 
      

      </View>

      <Text> </Text>
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 3. Add an expense for the day </Text>

      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
       <View >
      <Image 
      source={icons.coin}
      style={st.image}  />
     </View> 
      <Text style={[styles.text, { fontSize: 16 }, {color:"blue"} ]}>200</Text> 
      

      </View>
      <Text> </Text>
      <Text style={[styles.text, { fontSize: 18}, {color: 'purple'}]}> 4. Daily Bonus </Text>
      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
       <View >
      <Image 
      source={icons.coin}
      style={st.image}  />
     </View> 
      <Text style={[styles.text, { fontSize: 16 }, {color:"blue"} ]}>350</Text> 
      

      </View>
      
{/* { 
      <View style={st.containerForImage}>
      <Image
       
        source={require('assets\icon.png')}
        style={st.image} 
        resizeMode="contain"
      
      />
          
        </View> } */}
      

      </View>
  )
}



export default Popularjobs