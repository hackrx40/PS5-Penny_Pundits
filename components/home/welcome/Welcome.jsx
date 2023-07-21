import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
// import styles from './welcome.style'
import { COLORS,icons,SIZES } from '../../../constants'
import { StyleSheet } from 'react-native'
import styles from './welcome.style'

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
  return (
    <View>
      <Text style={styles.userName} >Hello Vishant!!</Text>
      <Text > </Text>
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