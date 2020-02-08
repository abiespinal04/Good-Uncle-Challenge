import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import Home from '../Home';
import ShoppingCart from '../ShoppingCart';
import Setting from '../Settings';

const TabScreens = createBottomTabNavigator({
    ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#b5b5b5',
        labelStyle: {
          fontSize: 12,
          opacity: 0.6,
        },
        showIcon: false,
        style: {
          backgroundColor: 'black',
        },
      },
    },
    headerStyle:{
      backgroundColor:'white',
  },
  headerTitleStyle:{
      color:'white'
  }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#b5b5b5',
        labelStyle: {
          fontSize: 12,
          opacity: 0.6,
        },
        showIcon: false,
        style: {
          backgroundColor: 'black',
        },
      },
    },
    headerStyle:{
      backgroundColor:'white',
  },
  headerTitleStyle:{
      color:'white'
  }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#b5b5b5',
        labelStyle: {
          fontSize: 12,
          opacity: 0.6,
        },
        showIcon: false,
        // headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        style: {
          backgroundColor: 'black',
        },
      },
    },
    headerStyle:{
      backgroundColor:'white',
  },
  headerTitleStyle:{
      color:'white'
  }
  },
},
{
  initialRouteName: "Home"
}
);

export default createAppContainer(TabScreens);
