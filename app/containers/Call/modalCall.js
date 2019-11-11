import React from 'react'
import PropTypes from "prop-types";
import { View, Picker, Modal, TouchableHighlight } from 'react-native'
import { Layout, Colors, Screens, ActionTypes } from '../../constants';
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
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

class ModalCall extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        avatarSelect: '',
        nameSelect: '',
        phoneNumber: '',
    }

    // handlerMakeCall = (phoneNumber) => {
    //     console.log('Here it will be called, with this number -> ' + phoneNumber);
    // }

    handlerOnShowModalPreviewCall = () => {
        const data = this.props.dataCall;
        this.setState(
        {
            avatarSelect: data.avatar_url,
            nameSelect: data.name,
            phoneNumber: data.numbers[0]
        });
    }

    render() {
        return (
            <Container style={{ marginTop: 26 }} enableOnAndroid>
                <Content>
                    <View style={{ marginTop: 22 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.props.showModalCall}
                            onShow={() => {
                                this.handlerOnShowModalPreviewCall();
                            }}
                        >
                            <View style={{ backgroundColor: 'black', height: '100%', opacity: 0.9 }}>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        height: '30%',
                                        padding: 0,
                                    }}>
                                    <View style={{ top:'10%',flex: 10 }}>
                                        <Title style={styles.title}>{this.state.nameSelect}</Title>
                                    </View>
                                    <View style={{top:'20%', flex: 10}}>
                                        <Title style={styles.title2}>{this.state.phoneNumber.contryCode + ' ' + this.state.phoneNumber.number}</Title>
                                    </View>
                                    <View style={{top:'15%',flex: 10}}>
                                        <Text style={styles.title3}>Llamando...</Text>
                                    </View>
                                </View>
                                <View style={{top:"50%",alignSelf:"center"}}>
                                    <AntDesign
                                        name='phone'
                                        type='antdesign'
                                        color={"red"}
                                        size={60}
                                        onPress={() => {
                                            this.props.showModal();
                                        }}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>
                </Content>
            </Container>
        )
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
        showModal: () => dispatch({ type: ActionTypes.SHOWMODALCALL, showModal: false })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCall);