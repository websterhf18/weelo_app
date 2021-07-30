/**
 * @author Hugo Garcia
 * @description Home Screen
 * @returns 
 */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fromJS, Map as ImmutableMap } from 'immutable';

import { SlicesHome } from '@navigation/interfaceInject';
import useConfigTheme from '@hooks/useConfigTheme';

import List from '@components/List/List';
import Header from '@components/Header/Header';
import RenderItem from '@components/RenderItem/RenderItem';

import useStyles from './styles';

interface Props {
    navigation: any;
}

const Home: React.FC<Props & SlicesHome> = (props) => {
    const { configTheme } = useConfigTheme();
    const styles = useStyles(configTheme);

    const dispatch = useDispatch();
    //const indicadoresRedux = useSelector(({ indicadores }: { indicadores: any }) => indicadores.indicadores);

    //const [data, setData] = useState(fromJS([]));
    const [loadingRefresh, setLoadingRefresh] = useState(false)

    useEffect(() => {
        //console.log('indicadoresRedux', indicadoresRedux)
        //setData(fromJS(indicadoresRedux))
    }, [/**indicadoresRedux**/])

    const onRefresh = async () => {
        try {
            setLoadingRefresh(true);
            //await dispatch(props.getIndicadoresRedux)
            setLoadingRefresh(false);
        } catch (error) {
            setLoadingRefresh(false);
        }
    }
    /**const renderItem = ({ item, index }: { item: ImmutableMap<string, any>, index: number }) => (
        <RenderItem item={item} onPress={getInfoItem} onPressInfo={showInfoItem} />
    )
    const getInfoItem = (item: ImmutableMap<string, any>) => props.navigation.navigate('Detail', { item: item.toJS() })
    const showInfoItem = (item: ImmutableMap<string, any>) => props.navigation.navigate('DetailItem', { item: item.toJS() })**/

    return (
        <SafeAreaView style={styles.container}>
            <Header
                iconName='menu'
                iconColor='#2E86C1'
                title='Indicadores'
                onPress={props.navigation.openDrawer}
            />
            {loadingRefresh ? (
                <ActivityIndicator color='black' size={30} style={{ margin: 20 }} />
            ) : (
                {/**<List
                    dataSource={data}
                    extraData={fromJS(indicadoresRedux)}
                    renderItem={renderItem}
                    refreshing={loadingRefresh}
                    onRefresh={onRefresh}
                />*/}
            )}
        </SafeAreaView>
    )
}

export default Home;
