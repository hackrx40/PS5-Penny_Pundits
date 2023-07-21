import { useState } from 'react';
import { View,ScrollView,SafeAreaView } from 'react-native';
import {Stack , useRouter} from 'expo-router';
import Budget from './budgetPg';

import {COLORS , SIZES, icons ,images } from '../constants';
import {Nearbyjobs, Popularjobs ,ScreenHeaderBtn,Welcome} from '../components';
<<<<<<< HEAD
import CircularProgress from 'react-native-circular-progress-indicator';
=======
import NumberPad from './numPad';

//popular jobs is for challenges
>>>>>>> 52f5af06a7e84b0c97ae522aa417dac3e637a67c

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
            // headerTitle: "HELLO WORLD"
            
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

        </ScrollView>

    </SafeAreaView>
    )
}

export default Home;

// Test push from Tejas
// Test push from tanaya
//Test push  Tejas #2
// test push 