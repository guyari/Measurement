import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

//图文列表类
export default class GraphicList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={GraphicListStyles.container}>
                <FlatList
                    data={DATA}
                    renderItem = {({item, index})=>this._renderRow(item, index)}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={this._renderSeparator}
                />
            </View>
        );
    }

    _renderRow(rowData, rowId) {
        return  (
            <TouchableOpacity key={rowId} style={GraphicListStyles.cellStyle} onPress={() => this.props.navigation.navigate('GraphicListDetails', {data: rowData, rowId: rowId})}>
                <Image source={require('../../../images/trained.png')} style={GraphicListStyles.imageStyle}/>
                <View style={GraphicListStyles.content}>
                    <Text style={GraphicListStyles.title} numberOfLines={1} ellipsizeMode='tail'>{rowData.title}</Text>
                    <Text style={GraphicListStyles.subtitle}>{rowData.subtitle}</Text>
                    <View style={{flex: 1, flexDirection: 'row', position: 'relative'}}>
                        <Text style={GraphicListStyles.author}>{rowData.author}</Text>
                        <Text style={GraphicListStyles.dateOf}>{rowData.dateOf}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    // cell分割线
    _renderSeparator = () => {
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


export const GraphicListStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    cellStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 121,
    },
    imageStyle: {
        width: 130,
        height: 101,
        marginLeft: 21,
        marginTop: 13
    },
    title: {
        marginLeft: 20,
        marginRight: 28,
        marginTop: 24,
        fontSize: 14,
    },
    subtitle: {
        marginLeft: 20,
        marginRight: 28,
        marginTop: 12,
        fontSize: 14,
    },
    author: {
        marginLeft: 20,
        position: 'absolute',
        bottom: 10,
        fontSize: 14,
    },
    dateOf: {
        position: 'absolute',
        right: 8,
        bottom: 10,
        fontSize: 14,
    }
})


const DATA = [
    {
        id: '1',
        title: '标题一标题一占占占',
        subtitle: '副标题占位符',
        author: '普益标准',
        content: '我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
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
