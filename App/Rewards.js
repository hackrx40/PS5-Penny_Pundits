import React from "react";
import { View, Text, Image, Dimensions ,SafeAreaView, TouchableOpacity} from 'react-native'
import { COLORS, SIZES, icons, images, FONT } from '../constants';

const {space}= " ";

const Rewards = () => {
    return (
        <SafeAreaView style={{justifyContent: 'center',
        alignItems: 'center'}}>
        <View>Rewards</View>
        <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <View>Balance:10000000</View>
        <Image 
      source={icons.coin}
      style={{
        width:35,
        height:35
      }}
        />
        </View>
        <View>
                {'  '}
            </View>
            <View>
                Coupons for 2% discount on insurance
            </View>
            <View>                 </View>
            <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <TouchableOpacity>
            <Image 
            source={icons.coupon}
            style={{
              width:35,
              height:35
            }}
            />
            </TouchableOpacity>
            <Text>{'   '}</Text>
            <View>5000</View>
            <Image 
            source={icons.coin}
            style={{
              width:35,
              height:35
            }}
            />
        </View>
        <View>
                {'  '}
            </View>
            <View>
                Coupons for financial advice
            </View>
            <View>                 </View>
            <View style={{flexDirection: 'row',
    alignItems:'center'}}>
        <TouchableOpacity>
            <Image 
            source={icons.coupon}
            style={{
              width:35,
              height:35
            }}
            />
            </TouchableOpacity>
            <Text>{'   '}</Text>
            <View>5000</View>
            <Image 
            source={icons.coin}
            style={{
              width:35,
              height:35
            }}
            />
        </View>
        </SafeAreaView>
        
    )
}

export default Rewards;