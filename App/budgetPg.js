// import { View, Text } from 'react-native';
import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES, icons, images, FONT } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';

const Budget = () => {

    const [categories, setCategories] = useState([]);

    function handleAddCategory(category) {
        setCategories([Groceries,
            Restaurant,
            Utilities,
            Rent,
            Travel,
            Entertainment,
            Health,
            Sport,
            Education]);
    }

    const renderCategory = ({ category }) => (
        <TouchableOpacity
            onPress={() => console.log(category)}
            style={styles.category}
        >
            <Text>{category}</Text>
        </TouchableOpacity>
    );

    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.plus} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.Vishant} dimension="100%" />
                    ),
                    headerTitle: ""
                }} />
            <View>
                <SafeAreaView>
                    <View>
                        <Text style={styles.h1}>Budgets</Text>
                    </View>
                    <View>
                        <Text style={{ fontFamily: FONT.xLarge, textAlign: 'center' }}>
                            -----------------
                            NO CURRENT BUDGET
                            -----------------
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Categories</Text>
                        <ScrollView style={styles.borderBox}
                            contentContainerStyle={{
                                flexGrow: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View>
                                <View>
                                    <Text>
                                        Groceries
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}>
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>
                                        Restaurant
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}>
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>
                                        Rent
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}>
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>
                                        TextTravel
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}>
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>
                                        Entertainment
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}>
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>
                                        Health
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}>
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>
                                        Sport
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}> 
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <Text>
                                        Education
                                    </Text>
                                    <TouchableOpacity style={styles.button_attribute}>
                                        <Text>Set-Budget</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        textAlign: 'center',
    },
    h1: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xxLarge,
        textAlign: 'center',
    },
    borderBox: {
        // width: 'auto',
    },
    button_attribute: { 
        backgroundColor : 'aqua',
        border : '1px solid black',
        // borderRadius : '8px;',
        fontSize : '20px',
    }
});
export default Budget