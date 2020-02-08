import React from 'react';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import UserAuth from './src/components/UserAuth';
import LoginScreen from './src/components/LoginScreen';
import Home from './src/components/Home';
import ItemScreen from './src/components/ItemScreen';
import RegisterScreen from './src/components/RegisterScreen';
import ShoppingCartScreen from './src/components/ShoppingCart';
import rootReducers from './src/redux/reducers';

const middleware = [thunk];
const store = createStore(rootReducers, applyMiddleware(...middleware));

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    ShoppingCart: {
      screen: ShoppingCartScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    ItemScreen: {
      screen: ItemScreen,
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerLeft: () => null,
        gestureEnabled: false,
      },
    },
    UserAuth: {
      screen: UserAuth,
      navigationOptions: {
        title: 'Welcome',
        headerLeft: () => null,
        gestureEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'UserAuth',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppNavigator = createAppContainer(AuthStack);

const App = () => {
  return (
    <Provider store={store} middleware={middleware}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
