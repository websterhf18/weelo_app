import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fromJS, Map as ImmutableMap } from 'immutable';

import { ScrollView, Text } from 'react-native';
import useConfigTheme from '@hooks/useConfigTheme';
import { SlicesDetail } from '@navigation/interfaceInject';
import HeaderBack from '@components/HeaderBack/HeaderBack';
import useStyles from './styles';

interface Props {
    navigation: any;
    route: any;
}

const Detail: React.FC<Props & SlicesDetail> = (props) => {
    const { configTheme } = useConfigTheme();
    const styles = useStyles(configTheme);

    const dispatch = useDispatch()
    //const seriesRedux = useSelector(({ indicadores }: { indicadores: any }) => indicadores.series);

    const [data, setData] = useState(fromJS([]));

    useEffect(() => {
        //console.log('seriesRedux', seriesRedux)
        //setData(fromJS(seriesRedux))
    }, [/**seriesRedux**/])
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBack
                routerBack='Coins'
                title={props.route.params?.item?.data?.nombre}
                onPress={props.navigation.goBack}
            />
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text style={styles.valor}>{'Bitcoin'}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Detail;
