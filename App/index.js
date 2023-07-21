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
import {Menu , MenuOptions , MenuOption , MenuTrigger , MenuProvider } from 'react-native-popup-menu'

const styles = StyleSheet.create({
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
        <MenuProvider style={styles.container}>
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
      </MenuProvider>
        
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