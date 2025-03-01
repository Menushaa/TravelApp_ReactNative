import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons'
import Listings from '@/components/Listings'
import listingData from '@/data/destinations.json'


const Page = () => {
    const headerHeight = useHeaderHeight()
    const [category, setCategory] = useState('All')

    const onCatChanged = (category: string) =>{
        console.log("category:",category)
        setCategory(category)
    }

    return (
        <>
            <Stack.Screen options={{
                headerTransparent: true,
                headerTitle: '',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }}>
                        <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=female' }}
                            style={{ width: 40, height: 40, borderRadius: 10 }}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => { }} style={{
                        marginRight: 20,
                        backgroundColor: Colors.white,
                        padding: 10,
                        borderRadius: 10,
                        shadowColor: '#171717',
                        shadowOffset: { width: 2, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                    }}>
                        <Ionicons name='notifications' size={20} color={Colors.black} />
                    </TouchableOpacity>
                ),
            }} />
            <View style={[styles.container, { paddingTop: headerHeight }]}>
                <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

                <View style={styles.searchSectionWrapper}>
                    <View style={styles.searchBar}>
                        <Ionicons name='search' size={18}
                            style={{ marginRight: 1, paddingVertical: 10 }}
                            color={Colors.black} />
                        <TextInput placeholder='Search....' />
                    </View>
                    <TouchableOpacity onPress={() => { }}
                        style={{
                            backgroundColor: Colors.primaryColor,
                            padding: 12,
                            borderRadius: 10,
                            marginLeft:20,
                        }} >

                        <Ionicons name='options' size={28} color={Colors.white} />
                    </TouchableOpacity>
                </View>
                <CategoryButtons onCategoryChanged={onCatChanged}/>

                <Listings listings={listingData}/>
            </View>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bgColor,
    },
    headingTxt: {
        fontSize: 29,
        fontWeight: '800',
        color: Colors.black,
        marginTop: 0,
    },
    searchSectionWrapper: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        padding: 6,
        borderRadius: 10,
    },
})