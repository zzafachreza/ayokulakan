import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { MyCarouser, MyGap, MyPembayaranOnline } from '../../components'
import { colors } from '../../utils/colors'
import { Icon } from 'react-native-elements'
import { fonts, myDimensi, windowWidth } from '../../utils/fonts'
import axios from 'axios'
import { apiURL, apiURLStorage, getData, storeData, validToken } from '../../utils/localStorage'
import MyTerbaik from '../../components/MyTerbaik'
import MyKategori from '../../components/MyKategori'





export default function Home({ navigation }) {

  const [Kategori, setKategori] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {

    getData('user').then(res => {
      setUser(res);
    })

    axios.get(apiURL + 'api/kategori/barang').then(res => {
      console.log(res.data.data.data);
      setKategori(res.data.data.data)
    })

  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white
    }}>
      <View style={styles.header}>
        <View style={{
          paddingHorizontal: 5,
          borderRadius: 5,
          backgroundColor: colors.white
        }}>
          <Image source={require('../../assets/tulisan.png')} style={{

            width: 100,
            height: 30

          }} />
        </View>
        <View style={{
          flex: 1,
        }}>

        </View>
        {!user && <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon type='ionicon' name='log-in-outline' color={colors.white} />
          <Text style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: 12
          }}>Masuk</Text>
        </TouchableOpacity>}

        {user && <TouchableOpacity onPress={() => {
          storeData('user', null);
          navigation.replace('MainApp')
        }} style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: 12,
            right: 10,
          }}>Selamat datang, {user.username}</Text>
          <Text style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            fontSize: 12
          }}>Keluar</Text>
          <Icon type='ionicon' name='log-out-outline' color={colors.white} />

        </TouchableOpacity>}
      </View>


      {/* header */}


      <ScrollView>
        <MyGap jarak={10} />
        <MyCarouser />

        <MyKategori />

        <MyPembayaranOnline />


        <MyTerbaik />


      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: 10,
  },
  navigation: {
    padding: 10,
    flexDirection: 'row'
  },
  header: {
    backgroundColor: colors.primary,
    padding: 10,
    flexDirection: 'row',
  },
  kategori: {
    width: windowWidth / 6.5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    height: 80
  }

})