import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

//摘要列表
export default class ListOfDetails extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '摘要详情'
    });

    constructor(props) {
        super(props);
    }

    render() {
        const {state: {params: {data, rowId}}} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{data.title}</Text>
                <View style={styles.listOfContentViewStyle}>
                    <View style={styles.listOfBGViewStyle}><Text style={{fontSize: 14}}>摘要</Text></View>
                    <Text>{data.content}</Text>
                </View>
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
        alignItems: 'center',
    },
    titleStyle: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'PingFangSC-regular',
    },
    listOfContentViewStyle: {    //包着摘要内容的View
        borderColor: 'rgba(187, 187, 187, 1)',
        borderWidth: 1,
        marginTop: 44,
        paddingTop: 28,
        paddingLeft: 26,
        paddingRight: 17,
        paddingBottom: 21,
        alignItems: 'center',
    },
    contentStyle: {
        marginTop: 18,
        fontFamily: 'PingFangSC-regular',
    },
    listOfBGViewStyle: {
        width: 93,
        height: 50,
        position: 'absolute',
        top: -25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
