import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Container,
  Content,
  Icon,
  Spinner,
  Text,
  List,
  Header, Left, Body, Title, Right
} from 'native-base';
// import * as Permissions from 'expo-permissions';
// import * as Contacts_ from 'expo-contacts';
import { Modal, TouchableHighlight, View, Alert, Image, Button } from 'react-native';
import { ListItem,Avatar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Layout, Colors, Screens, ActionTypes } from '../../constants';
import appStyles from '../../theme/appStyles';
import Strings from '../../constants/Strings';
import Statusbar from "../../components/Statusbar";
import imgs from '../../assets/images';
//import ActionTypes from '../../actions/common';//../constants/


const list = [
  {
    name: 'Amy Farha',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Jean Jackson',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice Coal'
  },
  {
    name: 'Tonny Dammon',
    avatar_url: imgs.contacWhite,
    subtitle: 'Tonny President'
  }
  ,
  {
    name: 'Lean Tranck',
    avatar_url: imgs.contacWhite,
    subtitle: 'Coal Chris'
  }
];




class RecentCall extends Component {

  constructor(props) {
    super(props);

    // this.state = { 
    //     dataContacts:[],
    //     modalVisible: false,
    // };
  }

  state = {
    modalVisible: false,
    avatarSelect : '',
    nameSelect : ''
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  async componentDidMount() {

  }


  handlerCallContact = (data) =>{
    //alert('LLAMO A ->' + data.name);
    //dispatch({ type: ActionTypes.SHOWMODAL, showModal: true });
    this.setState(
      { 
        modalVisible: true,
        avatarSelect : data.avatar_url,
        nameSelect : data.name
      });
  }

  handlerCall = () => {
    alert('Realizar LLamada');
  }

  render() {
    return (
      <Container style={{ marginTop: 22 }}>
        <Content>
            {
              list.length > 0 ?
                list.map((data, index) => {
                  return (
                    <List>
                      <ListItem
                        title={data.name}
                        subtitle={data.subtitle}
                        leftAvatar={
                          { source: data.avatar_url }
                        }
                        bottomDivider
                        onPress={ () => this.handlerCallContact(data)}
                      />
                    </List>
                  )
                })
              :
              <Image source={imgs.recentCall} resizeMode="contain" /> 
            }
          <View style={{ marginTop: 22}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!this.state.activeModal);
              }}
              onShow={() => {
                this.setModalVisible(!this.state.activeModal);
              }}
            >
              <View style={{ backgroundColor: 'black', height: '50%', opacity: 0.7 }}>
                <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style = {{height:'100%'}}
                    >
                    <Text></Text>
                  </TouchableHighlight>
              </View>
              <View style={{ backgroundColor: '#FFFFFF' , height: '100%',padding:30}}>
                <View style={{flex: 3,flexDirection: 'row',top:'10%',borderColor:'red'}}>
                  <View style={{width:'33%'}}>
                    <Avatar
                      rounded
                      source={this.state.avatarSelect}
                      size={64}
                    />
                  </View>
                  <View style={{width:'33%'}}>
                    <Title style={{ fontSize: 14 }}>{this.state.nameSelect}</Title>
                  </View>
                  <View style={{width:'33%'}}>
                    <Ionicons name={"md-star-outline"} type="ionicon" size={24} />
                  </View>
                </View>
              </View>
              <View>
                <Button
                    title="Llamar"
                    onPress={() => this.handlerCall()}
                  />
              </View>
            </Modal>
          </View>
        </Content>
      </Container>
    );
  }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(RecentCall);