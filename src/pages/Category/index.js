import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { fonts, myDimensi, windowHeight, windowWidth } from '../../utils/fonts';
import axios from 'axios';
import { apiURLStorage } from '../../utils/localStorage';
export default function Category({ navigation, route }) {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('https://ayokulakan.com/api/kategori/barang?limit=100').then(res => {
            console.warn('kategori', res.data.data.data);
            setData(res.data.data.data)
        })

    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {data.map(item => {
                    return (
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: colors.white,
                            padding: 10,

                            borderBottomWidth: 1,
                            marginVertical: 5,
                            borderBottomColor: colors.secondary,
                            alignItems: 'center'
                        }}>
                            <Image
                                resizeMode="contain"
                                source={{
                                    uri: apiURLStorage + item.attachment[0].url
                                }}
                                style={{ width: myDimensi / 0.4, height: myDimensi / 0.7, aspectRatio: 1 }}
                            />
                            <View style={{
                                padding: 10,
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: fonts.secondary[600],
                                    fontSize: myDimensi / 1.8
                                }}>{item.name} {item.id}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
