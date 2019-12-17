import React from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Layout, Colors, Screens } from '../../constants';
import { Logo, Svgicon } from '../../components';
import imgs from '../../assets/images';
import {
  Container,
  Content,
  Icon,
  Spinner,
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
  // constructor(props) {
  //   super(props);

  // }
  // state = {
  //   isVisible: false, //state of modal default false
  // };

  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  render() {
    return (
      <Container style={{ marginTop: 22}}>
         <Headers showHeaderDetail={this.props.showHeaderDetail}/>
        <Content enableOnAndroid >
          <View >
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
    "CONTACTOS": { screen: (props => <Contacts callFrom='1' />)},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    lazy :true,
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