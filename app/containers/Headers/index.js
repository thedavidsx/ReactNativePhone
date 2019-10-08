import React from 'react'
import { connect } from "react-redux";
import { StyleSheet, View, ImageBackground, Image, Alert } from 'react-native'
import { Avatar } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Layout, Colors, Screens } from '../../constants';
import { Header, Body, Title } from 'native-base';

class Headers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saldoPersona: "204.48",
            monedaApp: "CLP",
            simboloMonedaApp: "$"
        }
    }

    HandlerAddBalance = () => {
        alert("aca va la pantalla de billetera");
    }

    HandlerGoToSentings = () => {
        alert("aca va la pantalla de settings");
    }

    render() {
        return (

            <View>
                <Header style={{ backgroundColor: Colors.primary, height: 100 }} >
                    <Body style={{ padding: 0, flex: 1 }}>
                        <Title style={{ fontSize: 14 }}>{'Saldo actual en tu cuenta'}</Title>
                        <Title style={{ fontSize: 24 }} onPress={() => { this.HandlerAddBalance() }}>{this.state.simboloMonedaApp + " " + this.state.saldoPersona + " " + this.state.monedaApp + " "}
                            <Ionicons name={"ios-add-circle"} type="ionicon" size={24} /></Title> 
                              <Avatar
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                            onPress={() => { this.HandlerGoToSentings()}}
                            size = {60}
                            // avatarStyle={{width: 200, height: 200}}
                        />
                    </Body>
                </Header>
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Headers);