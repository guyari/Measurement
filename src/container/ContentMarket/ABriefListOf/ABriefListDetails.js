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
        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>标题一占位文字</Text>
                <Text style={styles.contentStyle}>
                    正文部分的内容，正文部分的内容，正文部分的内
                    容，正文部分的内容，正文部分的内容，正文部分
                    的内容
                    正文部分的内容，正文部分的内容，正文部分的内
                    容，正文部分的内容，正文部分的内容，正文部分
                    的内容
                    正文部分的内容，正文部分的内容，正文部分的内
                    容，正文部分的内容，正文部分的内容，正文部分
                    的内容
                </Text>
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
