import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//图文详情
export default class GraphicListDetails extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '图文详情'
    });

    constructor(props) {
        super(props);
    }

    render() {
        const {state: {params: {data, rowId}}} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{data.title}</Text>
                <View style={styles.authorBGViewStyle}>
                    <Text style={styles.authorStyle}>{data.author}</Text>
                    <Text style={styles.dateOfStyle}>{data.dateOf}</Text>
                </View>
                <Image style={styles.imageStyle} source={{uri: ''+data.image}}/>
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
    authorBGViewStyle: {     // 包裹着作者与时间
        flexDirection: 'row',
        marginTop: 12,
    },
    authorStyle: {
        fontSize: 14,
    },
    dateOfStyle: {
        fontSize: 14,
        paddingLeft: 66,
    },
    imageStyle: {
        width: 200,
        height: 120,
        backgroundColor: 'red',
        marginTop: 24,
    },
    contentStyle: {
        marginTop: 24,
    },
})
