import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native'
import Card from './Card'
import NavBar from '../../components/navbar'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const listCoins = ['Bitcoin', 'Ethereum']

function HomeScreen({ navigation }) {

    const [visibleReceive, setVisibleReceive] = useState(false)

    const ReceiveModal = () => {
        return (
            <Modal
                transparent={true}
                visible={visibleReceive}
                animationType='slide'
                onRequestClose={() => { setVisibleReceive(false) }}
            >
                <View style={{ justifyContent: 'flex-end', flex: 1, }}>
                    <View style={styles.receiveModal}>
                        <View style={styles.closeModal}>
                            <TouchableOpacity onPress={() => { setVisibleReceive(false) }}>
                                <Text>close</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.QRCode}>
                            <Text>QR code</Text>
                        </View>
                        <View style={styles.url}>
                            <Text>URL https:ashfkhfdhasfk</Text>
                            <TouchableOpacity onPress={() => { }}
                                style={styles.copyButton}>
                                <Text style={{
                                    backgroundColor: '#fbf9f9ff',
                                    flex: 1,
                                    fontSize: 20,
                                    color: '#FFFFFF',
                                }}>
                                    Copy
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View style={visibleReceive ? { flex: 1, opacity: 0.7 } : { flex: 1 }}>
            <Image source={require('../../../assets/bgImg.png')} style={styles.imageBG} />
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.infomation}>
                        <Text style={styles.nameAccount}> Account 1</Text>
                        <Text style={styles.money}> 10000 ETH</Text>
                        <View style={styles.funtion}>
                            <TouchableOpacity onPress={() => { navigation.navigate('SendCoin') }}>
                                <View style={styles.functionIcon}>
                                    <Image source={require('../../../assets/send.png')} />
                                </View>
                                <Text style={styles.funtionText}>Gửi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setVisibleReceive(true) }}>
                                <View style={styles.functionIcon}>
                                    <Image source={require('../../../assets/receive.png')} />
                                </View>
                                <Text style={styles.funtionText}>Nhận</Text>
                            </TouchableOpacity>
                            <ReceiveModal />
                            <TouchableOpacity onPress={() => { navigation.navigate('history') }}>
                                <View style={styles.functionIcon}>
                                    <Image source={require('../../../assets/buy.png')} />
                                </View>
                                <Text style={styles.funtionText}>Mua</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                    <View style={styles.pagerView}>
                        <View style={styles.titlePageView}>
                            <Text style={styles.tokensText}>Tokens</Text>
                        </View>
                        <View style={styles.cardView}>
                            <FlatList data={listCoins}
                                renderItem={({ item }) => (
                                    <Card coin={item} />
                                )}
                                horizontal
                                pagingEnabled
                                snapToAlignment='center'
                                style={{ flex: 1 }}>

                            </FlatList>
                        </View>
                    </View>
                </View>
                <View style={styles.navbar}>
                    <NavBar navigation={navigation} />
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

    infomation: {
        flex: 1,
    },

    nameAccount: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 80,
        color: '#fff',
    },

    money: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        color: '#FFCDEA',
    },

    funtion: {
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 160,
    },

    functionIcon: {
        width: 40,
        height: 40,
        borderRadius: 30,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    funtionText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 300,
        fontSize: 14,
    },
    receiveModal: {
        height: windowHeight * 0.6,
        backgroundColor: '#8a10d3fe',
        marginHorizontal: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    closeModal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#8c10d0fe',
    },

    QRCode: { flex: 5 },
    url: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    copyButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A25CC2',
        marginLeft: 20,
    },

    pagerView: {
        height: windowHeight * 0.45,
        width: '100%',
        backgroundColor: '#221F3A',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignContent: 'center',
        justifyContent: 'space-around',
        color: '#FFFFFF'
    },

    titlePageView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 48,
    },

    tokensText: {
        fontWeight: 600,
        fontSize: 24,
        color: '#FFFFFF',
    },

    cardView: {
        flex: 5,
    },

    navbar: {
        backgroundColor: '#221F3A'
    }

})

export default HomeScreen;
