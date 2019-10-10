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
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import * as Contacts_ from 'expo-contacts';
import {Modal, TouchableHighlight, View, Alert, ScrollView, TextInput} from 'react-native';
import appStyles from '../../theme/appStyles';
import Strings from '../../constants/Strings';
// import SearchBar from 'react-native-search-bar';
import { Colors, Layout } from '../../constants';
import Statusbar from "../../components/Statusbar";
import { InputBox } from '../../components';


class Contacts extends Component {
constructor(props) {
    super(props);

    this.state = { 
        dataContacts:[],
        contactFind:[],
        modalVisible: false,
        search:''
    };
}

async componentWillMount() {
    const { permissions } = await Permissions.askAsync(Permissions.CONTACTS);
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

changeSearch = (text) =>{
    this.setState({search: text})
}

setModalVisible(visible) {
    this.setState({modalVisible: visible});
}

updateList = (text) =>{
    this.setState({contactFind : this.state.dataContacts})
    const persona = this.state.search;
    let objeto = _.find(this.state.dataContacts, function(o) { return o.name === persona; });
    // this.setState({
    //     dataContacts : objeto
    // })
    

    if(persona === ''){
        this.setState({dataContacts : contactFind})
    }

}

render() {
    return (
      <Container >
        {
            this.props.callFrom !== '1' ? 
            <Header style={{backgroundColor: Colors.primary}}>
            <Body>
            <Title>{'Contactos'}</Title>
            </Body>
            </Header> : <TextInput
            style={{ height: 40, borderColor: '#f5f5f5', borderWidth: 1, padding:5, backgroundColor: '#f5f5f5' }}
            onChangeText={text => this.changeSearch(text)}
            value={this.state.search}
            placeholder="Buscar"
            onBlur={text => this.updateList(text)}
            inlineImageLeft="search_icon"
            />
        }
        <Content style={ this.props.callFrom !== '1' ? {height: Layout.window.height} : {height : Layout.window.height }}>
            <ScrollView>
            {(this.state.dataContacts.length > 0) ? 
            this.state.dataContacts.map((x) => {
                return(
                    <List>
                        <ListItem onPress={() => {
                            Alert.alert('Llamar',  'a ' + x.name);
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
            </ScrollView>
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

  componentwillreceiveprops = (nextProps) => {
    //Alert(nextProps);
  }
  
  // Exports
  export default connect(mapStateToProps, mapDispatchToProps)(Contacts);