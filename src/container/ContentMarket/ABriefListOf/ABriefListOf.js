import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

//简略列表
export default class ABriefListOf extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item, index}) => this._renderRow(item, index)}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }

    _renderRow(rowData, rowId) {
        return (
            <TouchableOpacity key={rowId} style={styles.cellStyle} onPress={() => this.props.navigation.navigate('ABriefListDetails', {data: rowData, rowId: rowId})}>
                <Text style={styles.titleStyle} numberOfLines={1} ellipsizeMode='tail'>
                    {rowData.title}
                </Text>
            </TouchableOpacity>
        );
    };

    // cell分割线
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '87%',
                    backgroundColor: "#CED0CE",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            />
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cellStyle: {
        flex: 1,
        height: 50,
    },
    titleStyle: {
        marginLeft: 25,
        marginTop: 13,
        fontSize: 16,
    },
})

const DATA = [
    {
        id: '1',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
        dateOf: '2017-01-02'
    },
    {
        id: '2',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
        dateOf: '2017-01-02'
    },
    {
        id: '3',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
        dateOf: '2017-01-02'
    },
    {
        id: '4',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
        dateOf: '2017-01-02'
    },
    {
        id: '5',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
        dateOf: '2017-01-02'
    },
    {
        id: '6',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
        dateOf: '2017-01-02'
    },
    {
        id: '7',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
        dateOf: '2017-01-02 '
    },
]
