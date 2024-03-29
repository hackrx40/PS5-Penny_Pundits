import { useState } from 'react';
import { View,ScrollView,SafeAreaView,TextInput,TouchableOpacity,Linking,Button,Modal ,StyleSheet,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Stack , useRouter} from 'expo-router';
import Budget from './budgetPg';
// import Profile from './profile';
import DropDown from './DropDown';
import InputForm from './form';
import LineChrts from './Chrt';
import Api from './testapi';
import Rewards from './Rewards';
import {COLORS , SIZES, icons ,images } from '../constants';
import {Nearbyjobs, Popularjobs ,ScreenHeaderBtn,Welcome} from '../components';
import NumberPad from './numPad';





const Home = () => {
    const router =useRouter();
   
    return(

    <SafeAreaView style={{ flex: 1,backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen 
        options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () =>(
                <ScreenHeaderBtn iconUrl={icons.plus} dimension="60%" handleClick/>
            ),
            headerRight: () =>(
                <ScreenHeaderBtn iconUrl={icons.Vishant} dimension="100%"/>
            ),
            // headerTitle: "HELLO WORLD"
            
        }}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        
        <Welcome /> 
        {/* <MenuProvider style={styles.container}>
        <View>
          <Menu>
            <MenuTrigger style={styles.button}
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
      </MenuProvider> */}
        <Budget />
        <NumberPad />
        <InputForm />
        <Api />
        <Popularjobs />
        <Rewards />
        <LineChrts />
        <Nearbyjobs />
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;