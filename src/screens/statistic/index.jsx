import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import GroupBarChar from '../../components/BarChar';
import globalStyles from '../../../style.global';
import Icon from 'react-native-vector-icons/Entypo';
import NavBar from '../../components/navbar';
import DropDownPicker from 'react-native-dropdown-picker';

const windowWidth = Dimensions.get('window').width;
const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=149&interval=daily'

function Statistic({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('apple');
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  return (
    <View style={{ ...globalStyles.container, ...globalStyles.positionRelative }}>
      <View style={{ ...globalStyles.positionAbsolute }}>
        <Image style={{ width: windowWidth }} source={require('../../../assets/backgroudExchangeScreen.png')}></Image>
      </View>
      <View style={{ position: 'absolute' }}>
        <View style={{ flexDirection: 'row', marginTop: 76, left: 0, width: '60%', justifyContent: 'space-between' }}>
          <View>
          </View>
          <Text style={{ color: 'white', fontSize: 20 }}>Thống Kê</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
        </View>

        {/* choose 2 coin */}
        <View style={{ flexDirection: 'row' }}>
          
          
        </View>

        {/* choose day begin and day end */}
        <View style={{ flexDirection: 'row' }}>
          
          
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <GroupBarChar />
        </View>
      </View>
      <View style={{ bottom: 0, position: 'absolute' }}>
        <NavBar navigation={navigation} />
      </View>
      {/* <ExchangeChart /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drop_down_styles: {
    width: 130,
    backgroundColor: '#8020ef3d',
    paddingLeft: 40,
    border: 1,
    borderColor: '#8020EF',
    borderRadius: 30,
  },
});

export default Statistic;
