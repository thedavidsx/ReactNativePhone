import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    Container,
    Content,
    Icon,
    Spinner,
    Button,
    Text,
    List,
    ListItem,
    Header, Left, Body, Title, Right
  } from 'native-base';
import * as Permissions from 'expo-permissions';
import * as Contacts_ from 'expo-contacts';
import {Modal, TouchableHighlight, View, Alert} from 'react-native';
import appStyles from '../../theme/appStyles';
import Strings from '../../constants/Strings';
import { Colors } from '../../constants';
import Statusbar from "../../components/Statusbar";


class Contacts extends Component {

constructor(props) {
    super(props);

    this.state = { 
        dataContacts:[],
        modalVisible: false,
    };
}

async componentWillMount() {
    const { permissions } = await Permissions.askAsync(Permissions.CONTACTS);
    alert(permissions);
    if (permissions.status !== 'granted') {
        //alert('Hey! You might want to enable notifications for my app, they are good.');
    }

    const { data } = await Contacts_.getContactsAsync({
        fields: [ 
            Contacts.PHONE_NUMBERS,
            Contacts.EMAILS
        ],
    });

    this.setState({dataContacts : data});
}

async componentDidMount() {
   
}

setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

render() {
    return (
      <Container style={{marginTop:22}}>
         <Header style={{backgroundColor: Colors.primary}}>
            <Left>
              <Button transparent>
                <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>
              </Button>
            </Left>
            <Body>
              <Title>{'Contactos'}</Title>
            </Body>
          </Header>
        <Content>
            {(this.state.dataContacts.length > 0) ? 
            this.state.dataContacts.map((x) => {
                return(
                    <List>
                        <ListItem onPress={() => {
                            Alert.alert('Llamar', '¿Desea Llamar a '+x.name+'? ');
                        }}>
                            <Text>{x.name}</Text>
                        </ListItem>
                    </List>)
                })
                :
                <View style={appStyles.containerCall}>
                    <Text style={appStyles.callTitle}>Cargando...</Text>
                </View>
              
            }
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
  export default connect(mapStateToProps, mapDispatchToProps)(Contacts);