import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from "react-navigation-tabs";

import ContentMarketStack from "./ContentMarketStack";
import BrowsingHistory from "../../container/BrowsingHistory/BrowsingHistory";

// 底部导航
const TABS = {
    ContentMarket: {
        screen: ContentMarketStack,
        navigationOptions: {
            tabBarLabel: '内容市场',
            tabBarIcon: ({focused}) => {
                if(!focused) {
                    return <Image source={require('./../../images/home.png')} style={styles.bottomTabIconStyle}/>
                } else {
                    return <Image source={require('./../../images/homed.png')} style={styles.bottomTabIconStyle}/>
                }
            }
        }
    },
    BrowsingHistory: {
        screen: BrowsingHistory,
        navigationOptions: {
            tabBarLabel: '浏览记录',
            tabBarIcon: ({focused}) => {
                if(!focused) {
                    return <Image source={require('./../../images/train.png')} style={styles.bottomTabIconStyle}/>
                } else {
                    return <Image source={require('./../../images/trained.png')} style={styles.bottomTabIconStyle}/>
                }
            }
        }
    },
};

export default class MainTabNavigator extends Component {
    _tabNavigator() {
        const {ContentMarket, BrowsingHistory} = TABS;
        const tabs = {ContentMarket, BrowsingHistory};
        if(!this.tabNavigator) {
            this.tabNavigator = createAppContainer(createBottomTabNavigator(
                tabs, {
                    tabBarComponent: props => (
                        <BottomTabBar {...props} activeTintColor='rgb(255,141, 45)'/>
                    ),
                }
            ))
        }
        return this.tabNavigator;
    }

    render() {
        const TabNavigator = this._tabNavigator();
        return <TabNavigator/>
    }
}

const styles = StyleSheet.create({
    bottomTabIconStyle: {
        width: 26,
        height: 26
    }
});

