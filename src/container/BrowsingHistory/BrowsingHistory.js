import React, {Component} from 'react';
import {View, Text, Image, SectionList, TouchableOpacity, Dimensions, Button} from 'react-native';

import {GraphicListStyles} from "../ContentMarket/GraphicList/GraphicList";
import {ListOfStyles} from "../ContentMarket/ListOf/ListOf";
import {ABriefListOfStyles} from '../ContentMarket/ABriefListOf/ABriefListOf';


let _this = null;

//浏览记录
export default class BrowsingHistory extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '移动端Demo',
        headerRight: <Button title='搜索' onPress={() => {
            navigation.navigate('SearchView', {_returnData: _this._returnData.bind(_this)})
        }}/>
    });

    constructor(props) {
        super(props);
        this.state = {
            latestDate: '',
            titleSearch: '',
            contentType: '',
        };

        _this = this;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SectionList
                    renderItem={(item, index, section) => (this._renderItem(item, index, section))}
                    renderSectionHeader={this._renderSectionHeader}
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    ItemSeparatorComponent={this._renderSeparator}
                />
            </View>
        );
    }

    // 下一页面goBack返回的值
    _returnData(latestDate, titleSearch, contentType) {
        // console.log(latestDate, titleSearch, contentType);
        this.setState({latestDate: latestDate, titleSearch: titleSearch, contentType: contentType});
    }

    _renderItem(item, index, section) {
        if (item.item.type === 'graphic') {
            return this._graphicRenderRow(item.item, index)
        } else if (item.item.type === 'abstract') {
            return this._listOfRenderRow(item.item, index)
        } else if (item.item.type === 'aBrief') {
            return this._ABriefRenderRow(item.item, index)
        } else {
            return <Text>错误</Text>
        }
    }

    _renderSectionHeader(info) {
        return <View style={{
            height: 30,
            width: Dimensions.get('window').width,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{fontWeight: "bold", fontSize: 14}}>
                {info.section.title}
            </Text>
        </View>
    }

    // 图文列表cell
    _graphicRenderRow(rowData, rowId) {
        return (
            <TouchableOpacity key={rowId} style={GraphicListStyles.cellStyle}
                              onPress={() => this.props.navigation.navigate('GraphicListDetails', {
                                  data: rowData,
                                  rowId: rowId
                              })}>
                <Image source={{uri: 'trained.png'}} style={GraphicListStyles.imageStyle}/>
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

    // 摘要列表cell
    _listOfRenderRow(rowData, rowId) {
        return (
            <TouchableOpacity key={rowId} style={ListOfStyles.cellStyle}
                              onPress={() => this.props.navigation.navigate('ListOfDetails', {
                                  data: rowData,
                                  rowId: rowId
                              })}>
                <Text style={ListOfStyles.titleStyle} numberOfLines={1} ellipsizeMode='tail'>
                    {rowData.title}
                </Text>
                <Text style={ListOfStyles.contentStyle} numberOfLines={3} ellipsizeMode='tail'>{rowData.content}</Text>
            </TouchableOpacity>
        );
    };

    // 简略列表cell
    _ABriefRenderRow(rowData, rowId) {
        return (
            <TouchableOpacity key={rowId} style={ABriefListOfStyles.cellStyle}
                              onPress={() => this.props.navigation.navigate('ABriefListDetails', {
                                  data: rowData,
                                  rowId: rowId
                              })}>
                <Text style={ABriefListOfStyles.titleStyle} numberOfLines={1} ellipsizeMode='tail'>
                    {rowData.title}
                </Text>
            </TouchableOpacity>
        );
    };

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

const DATA = [
    {
        title: '2020-01-02',
        data: [{
            subtitle: '副标题占位符',
            author: '普益标准',
            content: '我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
            title: '标题一标题一占占占',
            dateOf: '2017-01-02 ',
            image: 'trained',
            type: 'graphic' //图文
        },
            {
                subtitle: '副标题占位符',
                author: '普益标准',
                content: '我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
                title: '标题一标题一占占占',
                dateOf: '2017-01-02 ',
                image: 'trained',
                type: 'abstract' //摘要
            },
            {
                subtitle: '副标题占位符',
                author: '普益标准',
                content: '我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
                title: '标题一标题一占占占',
                dateOf: '2017-01-02 ',
                image: 'trained',
                type: 'aBrief' //简略
            }
        ]
    },

    {
        title: '2019-12-11',
        data: [{
            subtitle: '副标题占位符',
            author: '普益标准',
            content: '我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
            title: '标题一标题一占占占',
            dateOf: '2017-01-02 ',
            image: 'trained',
            type: 'graphic' //图文
        },
            {
                subtitle: '副标题占位符',
                author: '普益标准',
                content: '我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
                title: '标题一标题一占占占',
                image: 'trained',
                type: 'aBrief' //简略
            },
            {
                subtitle: '副标题占位符',
                author: '普益标准',
                content: '我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了我不知道说什么！想说什么然后想想又不知道说什么了！希望最底层的孩子都有梦想，都能有承载梦想的力量！谢谢捐款的朋友，不要忘记那些被忘记的孩子',
                title: '标题一标题一占占占',
                dateOf: '2017-01-02 ',
                image: 'trained',
                type: 'abstract', //摘要
            },
        ]
    },
]



