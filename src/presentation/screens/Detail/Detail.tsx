import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fromJS, Map as ImmutableMap } from 'immutable';

import { ScrollView, Text, View, TextInput } from 'react-native';
import useConfigTheme from '@hooks/useConfigTheme';
import { SlicesDetail } from '@navigation/interfaceInject';
import HeaderBack from '@components/HeaderBack/HeaderBack';
import useStyles from './styles';

import { exchangeCurrency } from '@utils/currency'

interface Props {
    navigation: any;
    route: any;
}

const Detail: React.FC<Props & SlicesDetail> = (props) => {
    const { configTheme } = useConfigTheme();
    const styles = useStyles(configTheme);

    const dispatch = useDispatch()
    const detailRedux = useSelector(({ coins }: { coins: any }) => coins.detail);

    const [data, setData] = useState({
        usd_val : 0,
        total: 0
    });
    const setForm = (input: string, value: string) => {
        setData({
            ...data,
            [input]: value
        })
        exchangeTotal();
    }
    const exchangeTotal: any = () => {
        const total = exchangeCurrency(data.usd_val.toString(), props.route.params?.item?.data?.price_usd);
        return total;
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack
                routerBack='Coins'
                title={props.route.params?.item?.data?.name}
                onPress={props.navigation.goBack}
            />
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text style={styles.valor}>{props.route.params?.item?.data?.name}</Text>
                <View style={styles.containerBox}>
                    <View style={styles.box}>
                        <Text style={styles.text}>Value on USD</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.info}>{props.route.params?.item?.data?.price_usd}</Text>
                    </View>
                </View>
                <View style={styles.containerBox}>
                    <View style={styles.box}>
                        <Text style={styles.text}>USD</Text>
                    </View>
                    <View style={styles.box}>
                        <TextInput 
                        onChangeText={text => setForm('usd_val', text)}
                        keyboardType='numeric'
                        style={styles.info} />
                    </View>
                </View>
                <View style={styles.containerBox}>
                    <View style={styles.box}>
                        <Text style={styles.text}>{props.route.params?.item?.data?.name}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.info}>{exchangeTotal()}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Detail;
