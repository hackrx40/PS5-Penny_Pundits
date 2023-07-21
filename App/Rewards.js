import React from "react";
import { View, Text, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, icons, images, FONT } from '../constants';

const { space } = " ";

const Rewards = () => {
  return (
    <SafeAreaView style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View>
        <Text>
          Rewards
        </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View>
          <Text>
            Balance:10000000
          </Text>
        </View>
        <Image
          source={icons.coin}
          style={{
            width: 35,
            height: 35
          }}
        />
      </View>
      <View>
        {'  '}
      </View>
      <View>
        <Text>Coupons for 2% discount on insurance</Text>
      </View>
      <View>                 </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity>
          <Image
            source={icons.coupon}
            style={{
              width: 35,
              height: 35
            }}
          />
        </TouchableOpacity>
        <Text>{'   '}</Text>
        <View><Text>5000</Text></View>
        <Image
          source={icons.coin}
          style={{
            width: 35,
            height: 35
          }}
        />
      </View>
      <View>
        {'  '}
      </View>
      <View>
        <Text>
          Coupons for financial advice
        </Text>
      </View>
      <View>                 </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity>
          <Image
            source={icons.coupon}
            style={{
              width: 35,
              height: 35
            }}
          />
        </TouchableOpacity>
        <Text>{'   '}</Text>
        <View><Text>5000</Text></View>
        <Image
          source={icons.coin}
          style={{
            width: 35,
            height: 35
          }}
        />
      </View>
    </SafeAreaView>

  )
}

export default Rewards