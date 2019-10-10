import React from 'react'
import { connect } from "react-redux";
import { StyleSheet, View, ImageBackground, Image, Alert } from 'react-native'
import { Avatar } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Layout, Colors, Screens } from '../../constants';
import { Header, Body, Title, Container, Right } from 'native-base';
import img from '../../assets/images'
import styles from './styles';

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
                <Header style={styles.header} >
                    <Body>
                        <View style={styles.rows}>
                            <View style={styles.titleOne}>
                                <Title style={{ fontSize: 14 }}>{'Saldo actual en tu cuenta'}</Title>
                            </View>
                        </View>
                        <View style={styles.rows}>
                            <View style={styles.titleTwo}>
                                <Title style={{ fontSize: 24 }} onPress={() => { this.HandlerAddBalance() }}>{this.state.simboloMonedaApp + " " + this.state.saldoPersona + " " + this.state.monedaApp + " "}
                                    <Ionicons name={"ios-add-circle"} type="ionicon" size={24} /></Title>
                            </View>
                            <View style={styles.avatar}>
                                <Avatar
                                    rounded
                                    source={img.contacWhite}
                                    onPress={() => { this.HandlerGoToSentings() }}
                                    size={60}
                                // avatarStyle={{width: 200, height: 200}}
                                />
                            </View>
                        </View>
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