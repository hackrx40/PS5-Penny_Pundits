import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
// import styles from './welcome.style'
import { COLORS,icons,SIZES } from '../../../constants'
import { StyleSheet } from 'react-native'
import styles from './welcome.style'

const newStyles = StyleSheet.create({
forimage:
{width: 30,
height: 30,
borderRadius: SIZES.small / 1.25,},
containerForImage:
{
width: 40,
height: 40,
backgroundColor: COLORS.white,
borderRadius: SIZES.small / 1.25,
justifyContent: "center",
alignItems: "center",
}
})

const Welcome = () => {
  return (
    <View>
      <Text style={styles.userName} >Hello Vishant!!</Text>
      <Text > </Text>
      <Text>Recent Transactions</Text>
      <Text> </Text>
      <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <View style={newStyles.containerForImage}>
          <Image 
          source={icons.Edu}
          resizeMode="cover"
          style={newStyles.forimage}
          />
          
        </View>
        <Text >50 $</Text>
      </View>
    </View>
  )
}

export default Welcome