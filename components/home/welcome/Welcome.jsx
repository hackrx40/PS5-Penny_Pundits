import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
// import styles from './welcome.style'
import { COLORS,icons,SIZES } from '../../../constants'
import { StyleSheet } from 'react-native'
import styles from './welcome.style'
import { useState } from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
import { StatusBar } from 'expo-status-bar'

const newStyles = StyleSheet.create({
forimage:
{width: 40,
height: 40,
borderRadius: SIZES.small / 1.25,},
containerForImage:
{
width: 60,
height: 60,
backgroundColor: COLORS.white,
borderRadius: SIZES.small / 1.25,
justifyContent: "center",
alignItems: "center",
}
})

const Welcome = () => {
  const [value , setValue ] = useState(0);
  return (
    <View>
      <Text style={styles.userName} >Hello Vishant!!</Text>
      <Text > </Text>
      <View style={{flex: 1,
    justifyContent: "center",
    alignItems: "center",}}>
      <CircularProgress 
      radius={90}
      value={85}
      textColor='#0000'
      fontSize={20}
      // valueSuffix={'%'}
      inActiveStrokeColor={'#000'}
      activeStrokeColor={'black'}
      inActiveStrokeOpacity={0.8}
      inActiveStrokeWidth={5}
      duration={3000}
      onAnimationComplete={()=>setValue(50)}
      />
      </View>
        
        
      <View style={{ flex: 1,
    justifyContent: "center",
    alignItems: "center",
    }}>
      <Text style={{fontSize:25}}>Recent Transactions</Text>
      <Text> </Text>
      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <View style={newStyles.containerForImage}>
          <Image 
          source={icons.Edu}
          resizeMode="contain"
          style={newStyles.forimage}
          />
          
        </View>
        <Text >50 $</Text>
      </View>
      
      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <View style={newStyles.containerForImage}>
          <Image 
          source={icons.Groceries}
          resizeMode="contain"
          style={newStyles.forimage}
          />
          
        </View>
        <Text >50 $</Text>
      </View>
      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <View style={newStyles.containerForImage}>
          <Image 
          source={icons.Health}
          resizeMode="contain"
          style={newStyles.forimage}
          />
          
        </View>
        <Text >50 $</Text>
      </View>
      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <View style={newStyles.containerForImage}>
          <Image 
          source={icons.Utilities}
          resizeMode="contain"
          style={newStyles.forimage}
          />
          
        </View>
        <Text >50 $</Text>
      </View>
      </View>
    </View>
  )
}

export default Welcome