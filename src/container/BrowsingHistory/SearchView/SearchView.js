import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';

//搜索页面
export default class SearchView extends Component {
    static navigationOptions = {
        header: null    //隐藏头部导航栏
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={SearchStyles.container}>
                <View>
                    <Text>最晚日期：</Text>
                    <TouchableOpacity><Text>日期选择</Text></TouchableOpacity>
                </View>

                <View>
                    <Text>标题搜索：</Text>
                    <TextInput>文本输入</TextInput>
                </View>

                <View>
                    <Text>内容类型(多选)：</Text>
                    <View>
                        <TouchableOpacity><Text>图文型</Text></TouchableOpacity>
                        <TouchableOpacity><Text>摘要型</Text></TouchableOpacity>
                        <TouchableOpacity><Text>简单型</Text></TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View><Text>取消</Text></View>
                    <View><Text>确定</Text></View>
                </View>
            </SafeAreaView>
        );
    }
}

export const SearchStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

