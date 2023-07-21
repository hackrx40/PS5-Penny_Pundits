import { useState } from 'react';
import { View,ScrollView,SafeAreaView,TextInput,TouchableOpacity,Linking,Button,Modal ,StyleSheet,Text} from 'react-native';
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
        
        
        <Budget />
        <NumberPad />
        <InputForm />
        <Api />
        <Popularjobs />
        <Rewards />
        <LineChrts />
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;