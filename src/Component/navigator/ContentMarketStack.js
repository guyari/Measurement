import {createStackNavigator} from 'react-navigation-stack';

import ContentMarket from "../../container/ContentMarket/ContentMarket";
import GraphicListDetails from "../../container/ContentMarket/GraphicList/GraphicListDetails";
import GraphicList from '../../container/ContentMarket/GraphicList/GraphicList';
import ListOf from "../../container/ContentMarket/ListOf/ListOf";
import ListOfDetails from "../../container/ContentMarket/ListOf/ListOfDetails";
import ABriefListOf from "../../container/ContentMarket/ABriefListOf/ABriefListOf";
import ABriefListDetails from "../../container/ContentMarket/ABriefListOf/ABriefListDetails";

//内容市场导航
const ContentMarketStack = createStackNavigator({
    ContentMarket: ContentMarket,  //内容市场类
    GraphicList: GraphicList,      //图文列表类
    GraphicListDetails: GraphicListDetails, //图文详情类
    ListOf: ListOf,                //摘要列表类
    ListOfDetails: ListOfDetails,  //摘要详情类
    ABriefListOf: ABriefListOf,    //简略列表
    ABriefListDetails: ABriefListDetails,   //简略详情
}, {
    initialRouteName: 'ContentMarket',
    navigationOptions: ({navigation}) => ({
        tabBarVisible: navigation.state.index === 0
    })
});


export default ContentMarketStack;
