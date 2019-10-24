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
import { ListItem, Avatar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Layout, Colors, Screens, ActionTypes } from '../../constants';
import appStyles from '../../theme/appStyles';
import Strings from '../../constants/Strings';
import Statusbar from "../../components/Statusbar";
import imgs from '../../assets/images';
import styles from './styles';
//import ActionTypes from '../../actions/common';//../constants/


const list = [
  {
    name: 'Amy Farha',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice President',
    numbers: [
      {
        contryCode: '+56',
        number: '986480072'
      },
      {
        contryCode: '+56',
        number: '993621947'
      }
    ],
    addFavorite : false
  },
  {
    name: 'Chris Jackson',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice Chairman',
    numbers: [
      {
        contryCode: '+56',
        number: '993621947'
      }
    ],
    addFavorite : false
  },
  {
    name: 'Jean Jackson',
    avatar_url: imgs.contacWhite,
    subtitle: 'Vice Coal',
    numbers: [
      {
        contryCode: '+56',
        number: '986480072'
      },
      {
        contryCode: '+56',
        number: '993621947'
      }
    ],
    addFavorite : false
  },
  {
    name: 'Tonny Dammon',
    avatar_url: imgs.contacWhite,
    subtitle: 'Tonny President',
    numbers: [
      {
        contryCode: '+52',
        number: '98548007'
      }
    ],
    addFavorite : false
  }
  ,
  {
    name: 'Lean Tranck',
    avatar_url: imgs.contacWhite,
    subtitle: 'Coal Chris',
    numbers: [
      {
        contryCode: '+54',
        number: '986480072'
      },
    ],
    addFavorite : false
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
    avatarSelect: '',
    nameSelect: '',
    listNumbersSelect: [],
    addFavorite : false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  async componentDidMount() {

  }


  handlerCallContact = (data) => {
    this.setState(
      {
        modalVisible: true,
        avatarSelect: data.avatar_url,
        nameSelect: data.name,
        listNumbersSelect: data.numbers
      });
  }

  handlerCall = () => {
    alert('Realizar LLamada');
  }

  HandlerAddFavorite = () => {
    
    this.setState({ addFavorite : !this.state.addFavorite });
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
                      onPress={() => this.handlerCallContact(data)}
                    />
                  </List>
                )
              })
              :
              <Image source={imgs.recentCall} resizeMode="contain" />
          }
          <View style={{ marginTop: 22 }}>
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
                  style={{ height: '100%' }}
                >
                  <Text></Text>
                </TouchableHighlight>
              </View>
              <View style={{ backgroundColor: '#FFFFFF', height: '50%', padding: 10 }}>
                <View style={{ flex: 2, flexDirection: 'column', top: '10%' }}>
                  <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View>
                      <Avatar
                        rounded
                        source={this.state.avatarSelect}
                        size={64}
                      />
                    </View>
                    <View style={{left:20,top:10}}>
                      <Title style={styles.title}>{this.state.nameSelect}</Title>
                    </View>
                    <View style={{left:50,top:10}}>
                      <Ionicons 
                        name={this.state.addFavorite ? "ios-star": "md-star-outline"} 
                        color={"#DAB62F"}
                        type="ionicon" 
                        size={28} onPress={() => { this.HandlerAddFavorite() }} />
                    </View>
                  </View>
                  <View>
                    {
                      this.state.listNumbersSelect.length > 0 ?
                        this.state.listNumbersSelect.map((data, index) => {
                          return (
                            <List >
                              <ListItem
                                title={data.contryCode + ' ' + data.number}
                                bottomDivider
                              //onPress={() => this.handlerCallContact(data)}
                              />
                            </List>
                          )
                        })
                        : null
                    }
                  </View>
                </View>

                <View>
                  <Button
                    title="Llamar"
                    onPress={() => this.handlerCall()}
                    style={{ backgroundColor: Colors.primary }}
                  />
                </View>
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