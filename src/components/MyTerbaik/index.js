import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { apiURL, apiURLStorage } from '../../utils/localStorage';
import { fonts, myDimensi } from '../../utils/fonts';
import { colors } from '../../utils/colors';

export default function MyTerbaik() {
  useEffect(() => {
    axios
      .get(
        apiURL + 'api/product?includes=creator,attachments',
      )
      .then((res) => {
        console.warn(res.data.data.data);
        setData(res.data.data.data);
      });
  }, []);

  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const Bintang = ({ nilai }) => {
    var myBintang = [];

    for (let i = 0; i < 5; i++) {
      myBintang.push(
        <View key={i}>
          <Icon
            type="font-awesome"
            name="star"
            color={i < nilai ? '#F8B459' : '#C7C7C7'}
            style={{ marginHorizontal: 2 }}
            size={12}
          />
        </View>,
      );
    }

    return <>{myBintang}</>;
  };

  const renderItem = ({ item }) => {

    let uri = 'https://zavalabs.com/nogambar.jpg';

    let nilaiProduct = 0;

    let terjual = 0;

    if (item.barang_terjual > 0) {
      terjual = item.barang_terjual;
    } else {
      terjual = 0;
    }

    if (item.reviews.length > 0) {
      nilaiProduct = item.reviews[0].rate;
    } else {
      nilaiProduct = 0;
    }

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('Product', item)
        }
        activeOpacity={1.0}>
        <Image style={styles.image} source={{ uri: apiURLStorage + item.attachment[0].url }} />
        <View style={styles.detailsContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.title}>
              Rp. {new Intl.NumberFormat().format(item.harga_barang)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.subTitle}>{item.nama_barang}</Text>
          </View>
          <View
            style={{
              flex: 1,

              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon type="font-awesome" name="map-marker" color={colors.secondary} size={12} />
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: myDimensi / 3,
                left: 2,
                color: colors.black,
              }}>
              {item.lapak.cities.name}
            </Text>
          </View>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Bintang nilai={nilaiProduct} />
            </View>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: myDimensi / 3,
                left: 5,
                color: colors.black,
              }}>
              ( {parseInt(terjual)} )
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name="heart-outline" color={colors.black} size={16} />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.black,
            left: 10,
            fontSize: myDimensi / 2.5,
          }}>
          Pilihan Produk buat kamu
        </Text>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  card: {
    shadowColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,
    backgroundColor: 'white',
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    flex: 1,
  },
  detailsContainerButton: {
    paddingHorizontal: 5,
  },
  title: {
    fontFamily: fonts.secondary[600],
    fontSize: myDimensi / 2,
    color: colors.primary,
  },
  subTitle: {
    fontSize: myDimensi / 3,
    fontFamily: fonts.secondary[400],
    color: colors.black,
    marginBottom: 10,
  },
});