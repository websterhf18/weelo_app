/**
 * @author Hugo Garcia
 * @description Item Of List Component
 * @returns 
 */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Map as ImmutableMap } from 'immutable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import useConfigTheme from '@hooks/useConfigTheme';

import useStyles from './styles';

interface Props {
    item: ImmutableMap<string, any>;
    onPress: (item: ImmutableMap<string, any>) => void;
}

const RenderItem: React.FC<Props> = (props) => {
    const { item, onPress } = props;
    const { configTheme } = useConfigTheme();
    const styles = useStyles(configTheme);

    const onPresItem = () => onPress(item)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boxText} onPress={onPresItem}>
                <Text style={styles.title} ellipsizeMode='tail' numberOfLines={1}>{item.get('name')}</Text>
                <Text style={styles.text}>{'Price on USD '}{item.getIn(['data', 'price_usd'])}</Text>
            </TouchableOpacity>
            <View style={styles.boxIcons}>
                <TouchableOpacity onPress={onPresItem}>
                    <MaterialCommunityIcons name='chevron-right' size={25} color='#aaa' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RenderItem;
