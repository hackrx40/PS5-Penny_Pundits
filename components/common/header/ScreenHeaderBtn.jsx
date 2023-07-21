import React from 'react'
import { useState } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity , Image , Modal , StyleSheet} from 'react-native'
import {Menu , MenuOptions , MenuOption , MenuTrigger , MenuProvider } from 'react-native-popup-menu'

import styles from './screenheader.style'

const Newstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
  },
  button:{
  backgroundColor: 'lightblue',
  padding: 15,
  borderRadius: 5,
  textalign: 'center',
  display: 'flex',
  fontsize: 16,
  margin: 4,
  }
});


const ScreenHeaderBtn = ({ iconUrl , dimension  }) => {

  return (
    <View>
      {/* <TouchableOpacity style={styles.btnContainer} >
        <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
        />
      </TouchableOpacity> */}
      <MenuProvider style={Newstyles.container}>
        <View>
          <Menu>
            <MenuTrigger style={Newstyles.button}
            text="Open menu" />
            <MenuOptions>
              <MenuOption onSelect={() => alert(` You clicked on Save`)} text="Save" />
              <MenuOption onSelect={() => alert(`You Clicked on Delete`)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => alert(`Not called`)}
                disabled={true}
                text="Disabled"
              />
            </MenuOptions>
          </Menu>
        </View>
      </MenuProvider>
      
    </View>
  )
}

export default ScreenHeaderBtn