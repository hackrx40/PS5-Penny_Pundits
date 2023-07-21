import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';

const Profile = () => {
    const router =useRouter();
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>HELLOOOO</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Profile;