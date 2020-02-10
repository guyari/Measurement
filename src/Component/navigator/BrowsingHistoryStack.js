import {createStackNavigator} from 'react-navigation-stack';

import BrowsingHistory from "../../container/BrowsingHistory/BrowsingHistory";
import GraphicListDetails from "../../container/ContentMarket/GraphicList/GraphicListDetails";
import ListOfDetails from "../../container/ContentMarket/ListOf/ListOfDetails";
import ABriefListDetails from "../../container/ContentMarket/ABriefListOf/ABriefListDetails";

const BrowsingHistoryStack = createStackNavigator({
    BrowsingHistory: BrowsingHistory,
    GraphicListDetails: GraphicListDetails, //图文详情类
    ListOfDetails: ListOfDetails,  //摘要详情类
    ABriefListDetails: ABriefListDetails,   //简略详情
}, {
    initialRouteName: 'BrowsingHistory',
    navigationOptions: ({navigation}) => ({
        tabBarVisible: navigation.state.index === 0
    })
});


export default BrowsingHistoryStack;
