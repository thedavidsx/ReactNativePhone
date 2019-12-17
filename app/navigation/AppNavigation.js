import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import {  createDrawerNavigator,createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import { SignIn, SignUp, Forgotpassword, Home, Drawer, Settings, Call,Wallet } from "../containers";
import { Colors, Screens } from "../constants";
import Contacts from '../containers/Contacts';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Svgicon from '../components/Svgicon';
import { Icon } from 'react-native-elements';
// import { Icon } from 'native-base';


const transitionConfig = () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const width = layout.initWidth;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    });

// drawer stack
// const DrawerStack = createDrawerNavigator({
//   [Screens.Home.route]: { 
//     screen: Home 
//   },
//   [Screens.Settings.route]: { 
//     screen: Settings 
//   },
//   [Screens.CallScreen.route]:{
//     screen: Call
//   }
// }, {
//   gesturesEnabled: true,
//   // drawerBackgroundColor: 'rgba(255,255,255,.9)',
//   drawerType: 'front',
//   hideStatusBar: false,
//   statusBarAnimation: 'slide',
//   overlayColor: Colors.primaryDark,
//   contentOptions: {
//     activeTintColor: Colors.lightBlack,
//     activeBackgroundColor: Colors.primaryLight,
//   },
//   transitionConfig: transitionConfig,
//   contentComponent: (props) => <Drawer {...props} />,
// });




const AppTabs = createBottomTabNavigator(
  {
    [Screens.Home.route]: { 
      screen: (props => <Home  showHeaderDetail = {true} />)
    },
    [Screens.CallScreen.route]:{
      screen: Call
    },
    [Screens.ContactScreen.route]:{
      screen: Contacts
    },
    [Screens.WalletScreen.route]:{
      screen:  (props => <Wallet showHeaderDetail = {false} />)
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Svgicon;
        let iconName;
        if (routeName === 'Home') {
          iconName = "ios-home";//!focused ? "ios-add" :  "ios-add-circle"; // "home${focused ? '' : 'check'}";
        } else if (routeName === 'Settings') {
          iconName = "ios-star"; //!focused ? "ios-add" :  "ios-add-circle"; 
        }else if (routeName === 'Call') {
          iconName = "ios-call"; //!focused ? "ios-call" :  "ios-add-circle";
        }else if (routeName === 'Contacts') {
          iconName = "ios-contacts"; //!focused ? "ios-contacts" :  "ios-add-circle"; 
        }else if (routeName === 'Wallet'){
          iconName = "ios-wallet"; //!focused ? "ios-wallet" :  "ios-add-circle"; 
        }
        return  <Icon  name={iconName} type="ionicon" size={32}/>;
        //<Icon  name={iconName} type="ionicon" size={32}/>;
        //<Ionicons name="md-home"/>
      },
    }),
    tabBarOptions: {
      activeTintColor: '#426BA6',
      inactiveTintColor: 'gray',
    },
  }
);



const DrawerNavigation = createStackNavigator({
  [Screens.DrawerStack.route]: { screen: createAppContainer(AppTabs)}

}, {
  headerMode: 'none',
  transitionConfig: transitionConfig
});

/*, {
  headerMode: 'none',
  transitionConfig: transitionConfig
} */

// login stack
const LoginStack = createStackNavigator({
  [Screens.SignIn.route]: { screen: SignIn },
  [Screens.SignUp.route]: { screen: SignUp},
  [Screens.ForgotPassword.route]: { screen: Forgotpassword },
}, {
  headerMode: 'none',
  initialRouteName: Screens.SignIn.route,
  transitionConfig: transitionConfig
});

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  [Screens.SignOutStack.route]: { screen: LoginStack },
  [Screens.SignInStack.route]: { screen: DrawerNavigation },
  [Screens.CallScreen.route]: { screen: Call }
}, {
  headerMode: 'none',
  title: Screens.Title,
  initialRouteName: Screens.SignOutStack.route,
});

export default PrimaryNav