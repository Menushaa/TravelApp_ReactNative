import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { ListingType } from '@/types/listingsType'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

type Props = {
    listings: any[]
}




const Listings = ({ listings }: Props) => {

    const renderItems: ListRenderItem<ListingType> = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.item}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image} />
                    <View style={styles.bookmark}>
                        <Ionicons name='bookmark-outline' size={20} color={Colors.white} />
                    </View>
                    <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}
                    </Text>
                    <View>
                        <View>
                            <FontAwesome5
                                name="map-market-alt"
                                size={18}
                                color={Colors.primaryColor} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList
                data={listings}
                renderItem={renderItems}
                horizontal
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default Listings

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 30,
    },
    bookmark: {
        position: 'absolute',
        top: 185,
        right: 30,
        backgroundColor: Colors.primaryColor,
        padding: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Colors.white,

    },
    itemTxt: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,
    }
})

