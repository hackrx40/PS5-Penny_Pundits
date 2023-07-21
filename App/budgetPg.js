// import { View, Text } from 'react-native';
import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
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
                        <Text>
                            -----------------
                            NO CURRENT BUDGET
                            -----------------
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.title}>Categories</Text>
                        <ScrollView>
                            <TouchableOpacity>
                                <View>
                                Groceries
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                Restaurant
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                Rent
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                Travel
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                Entertainment
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                Health
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                Sport
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View>
                                    Education
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
    },
});
export default Budget