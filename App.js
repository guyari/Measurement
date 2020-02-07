import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ContentMarket from "./src/container/ContentMarket/ContentMarket";
import GraphicList from "./src/container/ContentMarket/GraphicList/GraphicList";
import GraphicListDetails from "./src/container/ContentMarket/GraphicList/GraphicListDetails";
import BrowsingHistory from "./src/container/BrowsingHistory/BrowsingHistory";
import MainTabNavigator from "./src/Component/navigator/MainTabNavigator";

import {Image} from "react-native";

const ContentMarketStack = createStackNavigator();

function ContentMarketStackScreen() {
    return (
        <ContentMarketStack.Navigator
            initialRouteName='ContentMarket'
            screenOptions={({ navigation }) => ({
                lazy: true,
                tabBarVisible: false    //隐藏底部标签栏无效
            })}
        >
            <ContentMarketStack.Screen name="ContentMarket" component={ContentMarket}/>
            <ContentMarketStack.Screen name="GraphicList" component={GraphicList} />
            <ContentMarketStack.Screen name="GraphicListDetails" component={GraphicListDetails}/>
        </ContentMarketStack.Navigator>
    );
}

const BrowsingHistoryStack = createStackNavigator();

function BrowsingHistoryStackScreen() {
    return (
        <BrowsingHistoryStack.Navigator>
            <BrowsingHistoryStack.Screen name="BrowsingHistory" component={BrowsingHistory}/>
        </BrowsingHistoryStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let icon;

                        if (route.name === '内容市场') {
                            icon = focused
                                ? <Image source={require('./src/images/homed.png')} style={{width:26, height: 26}}/>
                                : <Image source={require('./src/images/home.png')} style={{width:26, height: 26}}/>;
                        } else if (route.name === '浏览记录') {
                            icon = focused
                                ? <Image source={require('./src/images/trained.png')} style={{width:26, height: 26}}/>
                                : <Image source={require('./src/images/train.png')} style={{width:26, height: 26}}/>;
                        }
                        return icon;
                    },
                    lazy: true,
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="内容市场" component={ContentMarketStackScreen} />
                <Tab.Screen name="浏览记录" component={BrowsingHistoryStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <MainTabNavigator/>
    );
}
