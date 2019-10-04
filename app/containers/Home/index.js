import React from 'react'
import { StyleSheet, View, ImageBackground, Image } from 'react-native'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import { Layout, Colors, Screens } from '../../constants';
import { Logo, Svgicon } from '../../components';
import imgs from '../../assets/images';
import {
  Container,
  Content,
  Icon,
  Spinner,
  Button,
  Text,
  Header, Left, Body, Title, Right
} from 'native-base';
import { connect } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';
import RecentCall from '../RecentCall'
import Contacts from '../Contacts'
import Headers from '../Headers'



class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container style={{marginTop:22}}>
          <Content enableOnAndroid>
            <View>
              <Headers/>
              <TabNavigator/>
            </View>
          </Content>
      </Container>
    );
  }
}


const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
  {
    "LLAMADAS RECIENTES": { screen: RecentCall },
    "CONTACTOS": { screen: Contacts },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: '#AEAEAE',
      style: {
        backgroundColor: '#FFFFFF',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
      },
    },
  }
));


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(userActions.logoutUser()),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Home);