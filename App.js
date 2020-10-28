import { createAppContainer, createSwitchContainer, createSwitchNavigator, navigationOptions } from 'react-navigation';

import { createDrawerNavigator} from 'react-navigation-drawer';
//import {Feather} from '@expo/vector-icons';
//import {Dimensions} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import Registration from './app/components/Registration';
import Log_in from './app/components/Log_in';
//import Firstp from './app/components/Firstp';
import Home from './app/components/Home';
import Login_signup from './app/components/Login_signup';
import LoadingScreen from './app/components/LoadingScreen';


//import * as firebase from 'firebase';

/*const Navigator = createStackNavigator({
  Firstp: { screen: Firstp },
  Login_signup: { screen: Login_signup },
  Registration: { screen: Registration },
  Log_in: { screen: Log_in },
  Home: { screen: Home },
});*/


const AppStack = createStackNavigator(
  {
  Home: Home,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerShown: false,
      headerLeft: null,
      gesturesEnabled: false,
    }
  },
)
const AuthStack = createStackNavigator(
  {
    Login_signup: Login_signup,
    Log_in: Log_in,
    Registration: Registration,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerShown: false,
    }
  },
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    }
  )
)
