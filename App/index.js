import { useState } from 'react';
import { View,ScrollView,SafeAreaView } from 'react-native';
import {Stack , useRouter} from 'expo-router';
import Budget from './budgetPg';
// import Profile from './profile';
import DropDown from './DropDown';
import InputForm from './form';
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
           
            
        </View>
        <Budget />
        <NumberPad />
        <InputForm />
        <Api />
        <Popularjobs />
        <Rewards />
        
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;