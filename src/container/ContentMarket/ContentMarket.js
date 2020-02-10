import React, {Component} from 'react';
import {ScrollableTabView, DefaultTabBar} from 'react-native-vtron-scrollable-tab';

import GraphicList from './GraphicList/GraphicList';
import ListOf from './ListOf/ListOf';
import AbriefListOf from './ABriefListOf/ABriefListOf';


//内容市场
export default class ContentMarket extends Component {
    static navigationOptions = ({navigation}) => ({
        title: '移动端Demo'
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView
                onChangeTab={(fromIndex, toIndex) => {
                    this.setState({selectedIndex: toIndex});
                }}
                renderTabBar={() => {
                    return (
                        <DefaultTabBar
                            containerStyle={{borderBottomWidth: 1, borderBottomColor: '#EEEEEE'}}
                            tabContainerStyle={{flex: 1, height: 44, justifyContent: 'space-around'}}
                            activeTabStyle={{paddingHorizontal: 15}}
                            activeTabTitleStyle={{fontSize: 14, color: '#FF6C03'}}
                            inactiveTabStyle={{paddingHorizontal: 15}}
                            inactiveTabTitleStyle={{fontSize: 14, color: '#666666'}}
                            tabBgStyle={{height: 0}}
                        />
                    )
                }}
            >

                <GraphicList tab={{title: '图文列表'}} navigation={this.props.navigation}/>
                <ListOf tab={{title: '摘要列表'}} navigation={this.props.navigation}/>
                <AbriefListOf tab={{title: '简略列表'}} navigation={this.props.navigation}/>
            </ScrollableTabView>
        );
    }


}
