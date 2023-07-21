// import { View, Text } from 'react-native';
import { useState } from 'react';
import { View,ScrollView,SafeAreaView } from 'react-native';
import {Stack , useRouter} from 'expo-router';
import Budget from './budgetPg';
import InputForm from './form';

import {COLORS , SIZES, icons ,images } from '../constants';
import {Nearbyjobs, Popularjobs ,ScreenHeaderBtn,Welcome} from '../components';
import NumberPad from './numPad';

//popular jobs is for challenges

const Home = () => {
    const router =useRouter();
    return(

    <SafeAreaView style={{ flex: 1,backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen 
        options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () =>(
                <ScreenHeaderBtn iconUrl={icons.plus} dimension="60%"/>
            ),
            headerRight: () =>(
                <ScreenHeaderBtn iconUrl={icons.Vishant} dimension="100%"/>
            ),
            headerTitle: ""
        }}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
            flex: 1,
            padding: SIZES.medium
        }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
        </View>
        <Budget />
        <NumberPad />
        <InputForm />
        </ScrollView>

    </SafeAreaView>
    )
}

export default Home;

// Test push from Tejas
// Test push from tanaya
//Test push  Tejas #2
// test push 