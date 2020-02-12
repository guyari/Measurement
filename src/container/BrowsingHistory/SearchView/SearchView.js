import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import Picker from "react-native-picker";

//搜索页面
export default class SearchView extends Component {
    static navigationOptions = {
        header: null    //隐藏头部导航栏
    };

    constructor(props) {
        super(props);
        this.state = {
            latestDate: this._getCurrentDate(),
            titleSearch: '',
            contentType: [],
        }
    }

    render() {
        return (
            <SafeAreaView style={SearchStyles.container}>
                <View style={SearchStyles.bgView1Style}>
                    <Text>最晚日期：</Text>
                    <TouchableOpacity style={SearchStyles.dateSelectionStyle} onPress={()=>this._showDatePicker()}><Text>{this.state.latestDate}</Text></TouchableOpacity>
                </View>

                <View style={SearchStyles.bgView2Style}>
                    <Text>标题搜索：</Text>
                    <TextInput style={SearchStyles.textInputStyle} onChangeText={value => (this.setState({titleSearch: value}))} placeholder={'文本输入'} />
                </View>

                <View style={SearchStyles.bgView3Style}>
                    <Text style={SearchStyles.contentTypeTextStyle}>内容类型（多选)：</Text>
                    <View style={{flexDirection: 'row', flex: 1, marginLeft: 11}}>
                        <TouchableOpacity style={[SearchStyles.byMultipleBtnStyle, {backgroundColor: this.state.contentType.indexOf('0')!==-1?'red':'white'}]} onPress={()=>this._typeSelection('0')}><Text>图文型</Text></TouchableOpacity>
                        <TouchableOpacity style={[SearchStyles.alternativeBtnStyle, {backgroundColor: this.state.contentType.indexOf('1')!==-1?'red':'white'}]} onPress={()=>this._typeSelection('1')}><Text>摘要型</Text></TouchableOpacity>
                        <TouchableOpacity style={[SearchStyles.simpleMultipleBtnStyle, {backgroundColor: this.state.contentType.indexOf('2')!==-1?'red':'white'}]} onPress={()=>this._typeSelection('2')}><Text>简单型</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={SearchStyles.bgView4Style}>
                    <TouchableOpacity style={SearchStyles.cancelBtnStyle} onPress={()=>this.props.navigation.goBack()}><Text>取消</Text></TouchableOpacity>
                    <TouchableOpacity style={SearchStyles.doneBtnStyle} onPress={()=>this._doneBtnClick()}><Text>确定</Text></TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    _doneBtnClick() {
        let dateOf = this.state.latestDate;
        let titleSearch = this.state.titleSearch;
        let contentType = this.state.contentType;
        console.log(dateOf+'--'+titleSearch+"--"+contentType)
    }

    // 内容类型多选方法
    _typeSelection(index) {
        let selectArr = this.state.contentType;
        if (selectArr.indexOf(index) !== -1) {
            selectArr.splice(selectArr.indexOf(index),1)
        } else {
            selectArr.push(index);
        }
        this.setState({
            contentType: selectArr
        })
        //console.log(this.state.contentType)
    }


    //获取当前日期  格式如 2018-12-15
    _getCurrentDate() {
        let currDate = new Date();
        let year = currDate.getFullYear();
        let month = (currDate.getMonth() + 1).toString();
        month = month.padStart(2, '0');
        let dateDay = currDate.getDate().toString();
        dateDay = dateDay.padStart(2, '0');
        let time = year + '-' + month + '-' + dateDay;
        return time;
    }

    //组装日期数据
    _createDateData(){
        let date = [];
        let currDate = new Date()
        let year = currDate.getFullYear()
        let month = currDate.getMonth()+1
        for(let i=1970;i<=year;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if(i%4 === 0){
                        day.push(29+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    }

    //打开日期选择 视图
    _showDatePicker() {
        let year = ''
        let month = ''
        let day = ''
        let dateStr = this.state.latestDate
        //console.log('dateStr',dateStr)
        year = dateStr.substring(0, 4)
        month = parseInt(dateStr.substring(5, 7))
        day = parseInt(dateStr.substring(8, 10))
        Picker.init({
            pickerTitleText: '时间选择',
            pickerCancelBtnText: '取消',
            pickerConfirmBtnText: '确定',
            selectedValue: [year + '年', month + '月', day + '日'],
            pickerBg: [255, 255, 255, 1],
            pickerData: this._createDateData(),
            pickerFontColor: [33, 33, 33, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                let year = pickedValue[0].substring(0, pickedValue[0].length - 1)
                let month = pickedValue[1].substring(0, pickedValue[1].length - 1);
                month = month.padStart(2, '0')
                let day = pickedValue[2].substring(0, pickedValue[2].length - 1);
                day = day.padStart(2, '0')
                let str = year + '-' + month + '-' + day
                this.setState({
                    currentDate: str,
                })
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                // console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

}

const SearchStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    bgView1Style: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 84,
        marginRight: 40,
        marginLeft: 58,
    },
    bgView2Style: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 28,
        marginRight: 40,
        marginLeft: 58,
    },
    bgView3Style: {
        height: 58,
        flexDirection: 'row',
        marginTop: 28,
        marginRight: 40,
        marginLeft: 58,
    },
    bgView4Style: {
        width: '100%',
        flexDirection: 'row',
        height: 49,
        position: 'absolute',
        bottom: 30,
    },
    dateSelectionStyle: {
        flex: 1,
        height: 26,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 11,
        borderWidth: 1,
        borderColor: 'rgba(16,16,16,1)',
    },
    textInputStyle: {
        flex: 1,
        height: 26,
        textAlign: 'center',
        marginLeft: 11,
        borderWidth: 1,
        borderColor: 'rgba(16,16,16,1)',
    },
    contentTypeTextStyle: {
        width: 70,
        height: 45,
    },
    byMultipleBtnStyle: {
        width: '46%',
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(16,16,16,1)',
    },
    alternativeBtnStyle: {
        width: '46%',
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(16,16,16,1)',
        position: 'absolute',
        right: 0,
    },
    simpleMultipleBtnStyle: {
        width: '46%',
        height: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(16,16,16,1)',
        position: 'absolute',
        left: 0,
        top: 33,
    },
    cancelBtnStyle: {
        width: '50%',
        height: '100%',
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(16,16,16,1)',
        borderRightColor: 'white',
    },
    doneBtnStyle: {
        width: '50%',
        height: '100%',
        position: 'absolute',
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(16,16,16,1)',
    },

})

