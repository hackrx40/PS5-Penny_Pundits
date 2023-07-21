import React from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity , Image , Modal} from 'react-native'

import styles from './screenheader.style'




const ScreenHeaderBtn = ({ iconUrl , dimension  }) => {

  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} >
        <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
        />
    

      </TouchableOpacity>
      
    </View>
  )
}

export default ScreenHeaderBtn