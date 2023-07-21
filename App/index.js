import { useState } from 'react';
import { View,ScrollView,SafeAreaView,TextInput,TouchableOpacity,Linking,Button,Modal ,StyleSheet} from 'react-native';
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

const Popstyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    popup: {
      width: 200,
      height: 200,
      backgroundColor: "red",
      borderRadius: 10,
      position: "absolute",
      top: 0,
      left: 0,
    },
  });
const Home = () => {
    const router =useRouter();
    
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const renderPopupWindow = () => {
        if (isPopupVisible) {
          return (
            <View style={styles.popup}>
            <Text>This is a popup window!</Text>
            </View>
          );
        } else {
          return null;
        }
      };

      const handleClick = () => {
        setIsPopupVisible(!isPopupVisible);
      };
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
        
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;