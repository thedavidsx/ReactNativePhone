import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
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
import * as userActions from "../../actions/user";




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
  }

  state = {
    modalVisible: false,
    avatarSelect: '',
    nameSelect: '',
    listNumbersSelect: [],
    addFavorite : false,
    showModalCall : false,
    dataCall : null
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }


  // componentDidMount() {

  // }


  handlerCallContact = (data) => {
    this.props.setDataCall(data);
    this.setState(
      {
        modalVisible: true
      });   
  }

  handlerCall = (data) => {
    this.setState(
      {
        modalVisible: false
      });
      this.props.showModal();
      this.props.goToCall();
  }

  handlerOnShowModalPreviewCall = () => {
    const data = this.props.dataCall;
    this.setState(
      {
        avatarSelect: data.avatar_url,
        nameSelect: data.name,
        listNumbersSelect: data.numbers
      });
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
              list.map((data) => {
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
                this.props.setDataCall(null);
              }}
              onShow={() => {
                this.handlerOnShowModalPreviewCall();
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
                    onPress={() => this.handlerCall(this.state.listNumbersSelect[0])}
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
    showModalCall: state.call.showModal,
    dataCall : state.call.setDataCall
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToCall : () => dispatch(NavigationActions.navigate({ routeName: Screens.CallScreen.route })),
    showModal: () => dispatch({ type: ActionTypes.SHOWMODALCALL, showModal: true }),//
    setDataCall: (data) => dispatch({ type: ActionTypes.SETDATACALL, setDataCall: data }),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(RecentCall);