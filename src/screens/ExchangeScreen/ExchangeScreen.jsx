import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native'
import NavBar from '../../components/navbar'
import ExchangeCard from './ExchangeCard'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

function ExchangeScreen({ navigation }) {


    return (
        <View style={{ flex: 1, }}>
            <Image source={require('../../../assets/bgImg.png')} style={styles.imageBG} />
            <View style={styles.container}>
                <View style={styles.body}>
                    <View >
                        <View style={styles.head}>
                            <Text style={styles.pageTitle}>Trao đổi</Text>
                        </View>
                        <View style={styles.information}>
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 18,
                                    fontWeight: 400,
                                }}> Số dư tài khoản</Text>
                            <Text style={styles.money}>value coin</Text>
                        </View>
                        <View style={styles.body}>
                            <ExchangeCard />
                        </View>
                    </View>
                </View>
                <View>
                    <NavBar navigation={navigation}></NavBar>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    body: {
        flex: 9,
        alignItems: 'center',
    },

    bottomBar: {
        flex: 1,
        backgroundColor: 'red',
    },

    imageBG: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#221F3A',
    },

    head: {
        justifyContent: 'flex-start',
        width: windowWidth - 80,
        marginTop: 70,
        marginBottom: 50,
        flexDirection: 'row',
        alignSelf: 'center',
    },


    pageTitle: {
        flex: 1,
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
        alignItems: 'center',
        alignSelf: 'center',
    },

    information: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    money: {
        color: '#FFCDEA',
        fontWeight: 600,
        fontSize: 38,
        margin: 14,
    }

})

export default ExchangeScreen