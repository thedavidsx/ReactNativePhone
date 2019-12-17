import React from 'react'
import { connect } from "react-redux";
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, ImageBackground, Image, Alert } from 'react-native'
import { Avatar } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Layout, Colors, Screens } from '../../constants';
import { Header, Body, Title, Container, Right, Text } from 'native-base';
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
        this.props.goToWallet();
    }

    HandlerGoToSentings = () => {
        alert("aca va la pantalla de settings");
    }

    render() {
        const viewDetails = this.props.showHeaderDetail;
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
                                    {
                                        viewDetails ?
                                            <Ionicons name={"ios-add-circle"} type="ionicon" size={24} />
                                          
                                            :
                                            null
                                    }

                                </Title>
                            </View>
                            {
                                viewDetails ?
                                    <View style={styles.avatar}>
                                        <Avatar
                                            rounded
                                            source={img.contacWhite}
                                            onPress={() => { this.HandlerGoToSentings() }}
                                            size={60}
                                        />
                                    </View>
                                    :
                                    <View style={styles.titleWallet}>
                                        <View>
                                            <Text style={{ color: 'white',fontSize:14 }}>{'Tu Numero'}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: 'white',fontSize:18 }}>{'+56 780038277'}</Text>
                                        </View>
                                    </View>
                            }

                        </View>
                    </Body>
                </Header>
            </View>
        );
    }
}

// const styeleT = StyleSheet.create({
//     // container: {
//     //   flex: 1,
//     //   marginTop: Constants.statusBarHeight,
//     // },
//     item: {
//         backgroundColor: '#0C2A4A',
//         opacity: 0.75,
//         //  height: 80,
//         //  width:200,
//        // top: "-5%",
//         left:'73%',
//         right: 0,
//         //  bottom: 25,
//         //width: '50%',
//         height: 68,
//         //left: 100,
//         //bottom: 500,
//         padding:20




//     },
//     // title: {
//     //   fontSize: 32,
//     // },
// });


const mapStateToProps = (state) => {
    return {
       // user: state.auth.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToWallet : () => dispatch(NavigationActions.navigate({ routeName: Screens.WalletScreen.route }))
    };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Headers);