import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { userState, useEffect, useState } from 'react'
import { fonts, myDimensi } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { Icon } from 'react-native-elements'
import { MyButton, MyGap } from '../../components'
import axios from 'axios'
import { apiURL, storeData } from '../../utils/localStorage'

export default function Login({ navigation }) {


  const [loading, setLoading] = useState(false);
  const [buka, setBuka] = useState(true);

  const [kirim, setKirim] = useState({
    email: '',
    password: '',
  });

  const __masuk_via_email = () => {
    setLoading(true);
    console.log(kirim);
    axios.post(apiURL + 'api/auth/login', kirim).then(res => {
      setLoading(false);
      console.log(res.data.user);
      storeData('user', res.data.user);
      navigation.replace('MainApp');
    })
  }

  return (

    <SafeAreaView style={{
      flex: 1,
      padding: 10,
      backgroundColor: colors.white
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/logo.png')} style={{
          width: myDimensi / 0.2,
          height: myDimensi / 0.2
        }} />
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: myDimensi / 1.1
        }}>
          Masuk Ke Ayokulakan
        </Text>
        <View style={{
          flexDirection: 'row'
        }}>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: myDimensi / 2
          }}>
            Belum Punya Akun Ayokulakan ?
          </Text>
          <TouchableOpacity><Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: myDimensi / 2,
            left: 5,
            color: colors.primary
          }}>Daftar</Text></TouchableOpacity>
        </View>
      </View>

      <View style={{
        flex: 1.5,
        padding: 10,

      }}>
        <View>
          <View style={{
            flexDirection: "row",
            alignItems: 'center',
          }}>
            <Icon type='ionicon' name='mail-outline' size={myDimensi / 1.8} color={colors.black} />
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: myDimensi / 2,
              color: colors.black,
              left: 2,
            }}>Email</Text>
          </View>
          <TextInput autoCapitalize='none' value={kirim.email} onChangeText={v => setKirim({
            ...kirim,
            email: v
          })} keyboardType='email-address' style={{
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 5,
            fontSize: myDimensi / 2,

            paddingLeft: 10,
            fontFamily: fonts.secondary[400]

          }} placeholder="Masukan email Anda" />
        </View>
        <MyGap jarak={10} />
        <View>
          <View style={{
            flexDirection: "row",
            alignItems: 'center',

          }}>
            <Icon type='ionicon' name='lock-closed-outline' size={myDimensi / 1.8} color={colors.black} />
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: myDimensi / 2,
              color: colors.black,
              left: 2,
            }}>Password</Text>
          </View>
          <View style={{
            position: "relative"
          }}>
            <TextInput autoCapitalize='none' value={kirim.password} onChangeText={v => setKirim({
              ...kirim,
              password: v
            })} secureTextEntry={buka} style={{
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 5,
              fontSize: myDimensi / 2,


              paddingLeft: 10,
              fontFamily: fonts.secondary[400]

            }} placeholder="Masukan password Anda" />
            <TouchableOpacity onPress={() => {

              if (buka) {
                setBuka(false)
              } else {
                setBuka(true)
              }

            }} style={{
              position: 'absolute',
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%', padding: 10,
            }}>
              <Icon type='ionicon' name={buka ? 'eye-outline' : 'eye-off-outline'} size={myDimensi / 1.5} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        <MyGap jarak={10} />

        <View style={{
          flexDirection: 'row'
        }}>
          <TouchableOpacity style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: myDimensi / 2.1,
              color: colors.black
            }}>Lupa Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: myDimensi / 2.1,
              color: colors.primary
            }}>Login Dengan No Handphone</Text>
          </TouchableOpacity>
        </View>
        <MyGap jarak={10} />
        {!loading && <MyButton onPress={__masuk_via_email} title="Login" warna={colors.primary} Icons="log-in-outline" />}
        {loading && <ActivityIndicator color={colors.primary} size="large" />}
        <MyGap jarak={10} />
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: myDimensi / 2.4,
          color: colors.black,
          textAlign: 'center'
        }}>Atau Login Menggunakan Social Media</Text>
        <MyGap jarak={20} />
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <TouchableOpacity style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: colors.border,
            padding: 10,
            margin: 2,
            borderRadius: 5,

          }}>
            <Image source={{
              uri: 'https://ayokulakan.com/image/icon/share-facebook.png'
            }} style={{
              width: 20,
              height: 20
            }} />
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: myDimensi / 2.1,
              left: 5,
              color: colors.black
            }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            margin: 2,
            borderWidth: 1,
            padding: 10,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 5,

          }}>
            <Image source={{
              uri: 'https://ayokulakan.com/image/icon/google.png'
            }} style={{
              width: 20,
              height: 20
            }} />
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: myDimensi / 2.1,
              color: colors.black,
              left: 5,
            }}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>



    </SafeAreaView>




  )
}

const styles = StyleSheet.create({})