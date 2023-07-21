import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
// import styles from './welcome.style'
import { COLORS,icons,SIZES } from '../../../constants'
import { StyleSheet } from 'react-native'
import styles from './welcome.style'

const newStyles = StyleSheet.create({
forimage: (dimension) => (
  {width: 50,
  height: 50,
  borderRadius: SIZES.xSmall / 1.25,}),

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

const Welcome = (dimension) => {
  return (
    <View>
      <Text style={styles.userName} >Hello Vishant!!</Text>
      <Text > </Text>
      <Text>Recent Transactions</Text>
      <Text> </Text>
      
      <View style={{
        flexDirection: 'row',
    alignItems:'center'}} dimension="50%">
        <View style={newStyles.containerForImage}>
          <Image 
          source={icons.Edu}
          resizeMode="contain"
          style={newStyles.forimage(dimension)}
          />
          
        </View>
        <Text >50 $</Text>
      </View>
    </View>
  )
}

export default Welcome