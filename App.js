import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from './src/publics/redux/store';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfilScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      header: null,
    }
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detail',
      header: null,
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: 'Cart',
      header: null,
    }
  },
  Checkout: {
    screen: CheckoutScreen,
    navigationOptions: {
      title: 'Checkout',
      header: null,
    }
  }
});

const ProfilStack = createStackNavigator({
  
  Profil: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      header: null,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      header: null,
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      header: null,
    }
  },
});

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        // tabBarVisible: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#fff" />
        )
      },
    },
    Profil: {
      screen: ProfilStack,
      navigationOptions: {
        tabBarVisible: false,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={24} color="#fff" />
        )
      },
    },
  },
  {
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showIcon: true,
      labelStyle: {
        fontSize: 10,
        color: '#fff'
      },
      style: {
        backgroundColor: '#000',
      },
      tabStyle: {
        height: 49,
      },
      iconStyle: {
        flexGrow: 0,
        marginTop: 1.5
      }
    }
  }
));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}