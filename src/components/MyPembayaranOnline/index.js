import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { fonts, myDimensi, windowHeight, windowWidth } from '../../utils/fonts';

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

export default function MyPembayaranOnline() {
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
        <Icon type="ionicon" name="card-outline" color={colors.black} size={16} />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.black,
            left: 10,
            fontSize: myDimensi / 2.5,
          }}>
          Pembayaran Online
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: '#16A858',
          }}>

          <IconPemayaran
            title="Pulsa"
            img={require('../../assets/icon/pulsa.png')}
            onPress={() => navigation.navigate('Pulsa')}
          />
          <IconPemayaran
            title="Paket Data"
            img={require('../../assets/icon/data.png')}
            onPress={() => navigation.navigate('PpobData')}
          />
          <IconPemayaran
            title="Voucher Game"
            img={require('../../assets/icon/game.png')}
            onPress={() => navigation.navigate('PpobGame')}
          />
          <IconPemayaran
            title="BPJS Kesehatan"
            img={require('../../assets/icon/bpjs.png')}
            onPress={() => navigation.navigate('PpobBpjs')}
          />
          <IconPemayaran
            title="PLN Prabayar"
            img={require('../../assets/icon/pln.png')}
            onPress={() => navigation.navigate('PpobPlnToken')}
          />

          <IconPemayaran
            title="PLN Pascabayar"
            img={require('../../assets/icon/pln2.png')}
            onPress={() => navigation.navigate('PpobPlnMeteran')}
          />

          <IconPemayaran
            title="PDAM"
            img={require('../../assets/icon/pdam.png')}
            onPress={() => navigation.navigate('PpobPdam')}
          />
          <IconPemayaran
            title="Tiket Kereta"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/Tiket-Kereta.png',
            }}
          />

          <IconPemayaran
            title="Tiket Pesawat"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/Tiket-Pesawat.png',
            }}
            onPress={() => navigation.navigate('Pesawat')}
          />
          <IconPemayaran
            title="Hotel"
            img={require('../../assets/icon/hotel.png')}
          />
          <IconPemayaran
            title="Tiket Kapal"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/Tiket-Kapal.png',
            }}
          />
          <IconPemayaran
            title="E - Samsat"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/E-samsat.png',
            }}
          />
          <IconPemayaran
            title="TV"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/TV.png',
            }}
            onPress={() => navigation.navigate('PpobTv')}
          />
          <IconPemayaran
            title="Internet"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/Internet.png',
            }}
            onPress={() => navigation.navigate('PpobInternet')}
          />

          <IconPemayaran
            title="Telepon Rumah"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/Telepone-Rumah.png',
            }}
            onPress={() => navigation.navigate('PpobTelepon')}
          />

          <IconPemayaran
            title="Tiket Travel"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/Tiket-ravel.png',
            }}
            onPress={() => navigation.navigate('Travel')}
          />

          <IconPemayaran
            title="Tiket Bus"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/Tiket-Bus.png',
            }}
            onPress={() => navigation.navigate('Bus')}
          />

          <IconPemayaran
            title="Tour"
            img={{
              uri: 'https://ayokulakan.com/image/Icon-PPOB/rote.png',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
