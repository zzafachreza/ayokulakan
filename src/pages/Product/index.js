import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { apiURL, apiURLStorage } from '../../utils/localStorage';
import { fonts, myDimensi, windowHeight } from '../../utils/fonts';
import { colors } from '../../utils/colors';
import RenderHtml from 'react-native-render-html';
import { MyButton } from '../../components';
import RBSheet from "react-native-raw-bottom-sheet";


export default function Product({ navigation, route }) {

    const refRBSheet = useRef();
    const [jml, setJml] = useState('1');
    const [total, setTotal] = useState('0');

    const item = route.params
    console.log(item);

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

    return (
        <SafeAreaView
            style={styles.card}>
            <ScrollView>
                <Image style={styles.image} source={{ uri: apiURLStorage + item.attachment[0].url }} />
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10
                    }}>
                    <Icon type="font-awesome" name="map-marker" color={colors.secondary} size={12} />
                    <Text
                        style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: myDimensi / 2,
                            left: 2,
                            color: colors.black,
                        }}>
                        {item.lapak.cities.name}
                    </Text>
                </View>

                <View style={styles.detailsContainer}>
                    <View
                        style={{
                            padding: 10,
                        }}>
                        <Text style={styles.title}>
                            Rp. {new Intl.NumberFormat().format(item.harga_barang)}
                        </Text>
                        <Text style={styles.subTitle}>{item.nama_barang}</Text>
                        {/* <Text style={styles.description}>{item.deskripsi.replace("<p>", "").replace("</p>", "")}</Text> */}
                        <RenderHtml
                            contentWidth={windowHeight}
                            source={{
                                html: item.deskripsi
                            }}
                        />

                    </View>

                    {/* bintang */}
                    <View
                        style={{
                            padding: 10,
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
                <View style={{
                    padding: 10
                }}>
                    <MyButton onPress={() => refRBSheet.current.open()} Icons="cart-outline" warna={colors.primary} title="Tambahkan Keranjang" />
                </View>

            </ScrollView>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={false}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: '#00000080'
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    padding: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.secondary[600],
                        fontSize: myDimensi / 1.4,
                        color: colors.black,
                    }}>{item.nama_barang}</Text>
                    <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                        <Icon type='ionicon' name='close' />
                    </TouchableOpacity>
                </View>
                <View style={{
                    padding: 10,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: myDimensi / 1,
                        color: colors.black,
                    }}>Rp. {new Intl.NumberFormat().format(jml * item.harga_barang)}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flex: 0.5, marginBottom: 10,
                }}>
                    <TouchableOpacity onPress={() => {
                        setJml(parseInt(jml) + 1)
                    }} style={{
                        flex: 1,
                        backgroundColor: colors.secondary,
                        marginHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon type='ionicon' name='add' color={colors.white} />
                    </TouchableOpacity>
                    <Text style={{
                        borderBottomWidth: 1,
                        flex: 1,
                        textAlign: 'center',
                        color: colors.black,
                        fontSize: myDimensi / 1,
                    }} >{parseInt(jml)}</Text>
                    <TouchableOpacity onPress={() => {
                        setJml(parseInt(jml) - 1)
                    }} style={{
                        flex: 1,
                        backgroundColor: colors.secondary,
                        marginHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon type='ionicon' name='remove' color={colors.white} />
                    </TouchableOpacity>
                </View>

                <MyButton radius={0} warna={colors.primary} title="Tambahkan Keranjang" Icons="cart-outline" />
            </RBSheet>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
    },
    card: {
        backgroundColor: colors.white,
        flex: 1,

    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain'
    },
    detailsContainer: {
        flex: 1,
    },
    detailsContainerButton: {
        paddingHorizontal: 5,
    },
    title: {
        fontFamily: fonts.secondary[600],
        fontSize: myDimensi / 1,
        color: colors.primary,
    },
    subTitle: {
        fontSize: myDimensi / 1.5,
        marginTop: 10,
        fontFamily: fonts.secondary[400],
        color: colors.black,
        marginBottom: 10,
    },
    description: {
        fontSize: myDimensi / 3,
        marginTop: 10,
        fontFamily: fonts.secondary[400],
        color: colors.black,
        marginBottom: 10,
    },
});