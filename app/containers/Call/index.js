import React from 'react'
import { Platform, View, Picker, Modal } from 'react-native'
import _ from 'lodash';
import { Colors, Layout, ActionTypes } from '../../constants';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import * as Animatable from 'react-native-animatable';
import {
  Container,
  Content,
  Icon,
  Spinner,
  Button,
  Text,
  Form,
  Header, Left, Body, Title, Right, Input
} from 'native-base';
import { connect } from "react-redux";
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';
import { Endpoint } from 'react-native-pjsip'

import ModalCall from "./modalCall"


class Call extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      mobileNumber: '584246153554',
      country: 'CHL'
    };
    this.endp = new Endpoint();

    this.onClic = this.onClic.bind(this);
  }

    async onClic(){
    const endpoint = new Endpoint();
    const state = await endpoint.start({
      service: {
        ua: Platform.select({ios: "RnSIP iOS", android: "RnSIP Android"})
      },
      network: {
        useWifi: true,
        useOtherNetworks: true
      }
    }).then(res => console.log(res))
    .catch(err => console.log(err));
    console.log(endpoint);
    console.log(state);
    let configuration = {
      "name": "Jean Robles",
      "username": "7980108960",
      "domain": "sip.locutorios.cl",
      "password": "25779gqd8iq0biy27270",
      "proxy": null,
      "transport": null, // Default TCP
      "regServer": null, // Default wildcard
      "regTimeout": null // Default 3600
    };

    let acc = await endpoint.createAccont(configuration);

    // List of available accounts and calls when RN context is started, could not be empty because Background service is working on Android
    let { accounts, calls, settings, connectivity } = state;

    console.log(endpoint);
    // Subscribe to endpoint events
    endpoint.on("registration_changed", (account) => { });
    endpoint.on("connectivity_changed", (online) => { });
    endpoint.on("call_received", (call) => { });
    endpointon("call_changed", (call) => { });
    endpoint.on("call_terminated", (call) => { });
    endpoint.on("call_screen_locked", (call) => { }); // Android only

    endpoint.createAccount().then((account) => {
      console.log("Account created", account);
    });
    //alert(this.state.mobileNumber)
    console.log(endpoint);
    this.props.showModal();
    let options = {
      headers: {}
    };

    let call = endpoint.makeCall(acc, this.state.mobileNumber, options);
    call.getId() // Use this id to detect changes and make actions

    endpoint.addListener("call_changed", (newCall) => {
      if (call.getId() === newCall.getId()) {
        // Our call changed, do smth.
      }
    });
    endpoint.addListener("call_terminated", (newCall) => {
      if (call.getId() === newCall.getId()) {
        // Our call terminated
      }
    });
  }

  changeText(val) {
    this.setState({ mobileNumber: val });
  }
  render() {
    return (

      <Container style={{ marginTop: 26 }} enableOnAndroid>
        <Header style={{ backgroundColor: Colors.primary, height: 140 }}>
          <Body style={{ paddingLeft: 10, textAlign: 'center' }}>
            <Title>{this.state.country + ' ' + (this.state.country === 'CHL' ? '(+56) ' : '(+58) ') + this.state.mobileNumber}</Title>
          </Body>
        </Header>
        <Content>
          <View style={{ width: Layout.window.width, paddingBottom: 160 }}>
            <VirtualKeyboard color='gray' style={{ height: 250 }} cellStyle={{ padding: 25 }} rowStyle={{ borderColor: 'gray', borderLeft: 1, borderRight: 1 }} applyBackspaceTint={false} pressMode='string' onPress={(val) => this.changeText(val)} />
          </View>
          <View>
            <Animatable.View
              animation="fadeIn"
              delay={1000}
              style={{ flex: 0.2, height: 100, alignContent: "center" }}>
              {this.props.isLoading ?
                <Spinner color={Colors.secondary} /> :
                <Button
                  block
                  primary
                  style={{ backgroundColor: Colors.primary, height: '70%' }}
                  onPress={async () => {await this.onClic()}}
                >
                  <Text>Llamar</Text>
                </Button>
              }
            </Animatable.View>
          </View>
          <ModalCall />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showModalCall: state.call.showModal,
    dataCall: state.call.setDataCall
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: () => dispatch({ type: ActionTypes.SHOWMODALCALL, showModal: true }),//
    setDataCall: (data) => dispatch({ type: ActionTypes.SETDATACALL, setDataCall: data }),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Call);