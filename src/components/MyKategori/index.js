import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { fonts, myDimensi, windowHeight, windowWidth } from '../../utils/fonts';
import axios from 'axios';
import { apiURLStorage } from '../../utils/localStorage';

const IconPemayaran = ({ img, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        // flex: 1,
        width: 80,
        height: myDimensi / 0.35,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
      <View
        style={{
          flex: 2,
        }}>
        <Image
          resizeMode="contain"
          source={img}
          style={{ width: myDimensi / 0.5, height: myDimensi / 0.7, aspectRatio: 1 }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            // color: '#F8781D',
            color: colors.black,
            fontSize: myDimensi / 3,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity >
  );
};

export default function MyKategori() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('https://ayokulakan.com/api/kategori/barang?limit=100').then(res => {
      console.warn('kategori', res.data.data.data);
      setData(res.data.data.data)
    })

  }, [])

  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        padding: 10,

      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name="grid-outline" color={colors.black} size={16} />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.black,
            left: 10,
            fontSize: myDimensi / 2.5,
          }}>
          Kategori Produk
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: '#16A858',
          }}>

          {data.map(item => {
            return (
              <IconPemayaran
                title={item.name}
                img={{
                  uri: apiURLStorage + item.attachment[0].url
                }}
                onPress={() => navigation.navigate('Pulsa')}
              />
            )
          })}

        </View>
      </ScrollView>
    </View>
  );
}
