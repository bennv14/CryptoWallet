import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar } from 'victory-native';

const URL = {
  bitcoin: 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=149&interval=daily',
  ethereum: 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=149&interval=daily'
}
const MONTHS_DICT = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
}

export default function App() {

  const [data, setData] = useState()

  const fetchData = async () => {

    const data = []

    const btcPrices = await fetch(URL['bitcoin'])
      .then(response => response.json())
      .then(data => data.prices)
    const ethPrices = await fetch(URL['ethereum'])
      .then(response => response.json())
      .then(data => data.prices)

    for(let i = 0 ; i < Math.min(ethPrices.length, btcPrices.length); i++){
      data = [...data, 
        {
          month: MONTHS_DICT[new Date(btcPrices[i][0]).getMonth() + 1],
          btc: btcPrices[i][1],
          eth: ethPrices[i][1]
        }]
    }
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const datas = [
    { month: 'Jan', person1: 180, person2: 170 },
    { month: 'Feb', person1: 175, person2: 165 },
    { month: 'Mar', person1: 183, person2: 173 },
    { month: 'Apr', person1: 178, person2: 168 },
    { month: 'May', person1: 182, person2: 172 },
  ];

  return (
    <View style={{ backgroundColor: 'red' }}>
      <VictoryChart>
        <VictoryGroup offset={20} colorScale={'qualitative'}>
          <VictoryBar data={datas} x="month" y="person1" color="#FA9F42" cornerRadius={{ topLeft: 5, topRight: 5 }} barWidth={7} />
          <VictoryBar data={datas} x="month" y="person2" color="#8CFFDA" cornerRadius={{ topLeft: 5, topRight: 5 }} barWidth={7} />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
}
