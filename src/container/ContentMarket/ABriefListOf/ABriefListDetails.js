import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//图文详情
export default class ABriefListDetails extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '简略详情'
    });

    constructor(props) {
        super(props);
    }

    render() {
        const {state: {params: {data, rowId}}} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{data.title}</Text>
                <Text style={styles.contentStyle}>{data.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 37,
        marginLeft: 30,
        alignItems: 'center'
    },
    titleStyle: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'PingFangSC-regular',
    },
    contentStyle: {
        marginTop: 24,
    },
})
