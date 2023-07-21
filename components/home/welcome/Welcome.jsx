import React from 'react'
import { View, Text } from 'react-native'
// import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <Text style={styles.userName} >Hello Vishant!!</Text>
    </View>
  )
}

export default Welcome