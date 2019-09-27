import React from 'react'
import { View,Picker} from 'react-native'
import _ from 'lodash'; 
import { Colors,Layout } from '../../constants';
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
  Header, Left, Body, Title, Right,Input
} from 'native-base';
import { connect } from "react-redux";
import * as userActions from "../../actions/user";
import appStyles from '../../theme/appStyles';
import styles from './styles';


class Call extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      mobileNumber: '',
      country:'CHL'
    };

  }

  onClic = () =>{
    alert(this.state.mobileNumber)
  }

  changeText(val) {
		this.setState({mobileNumber: val});
	}
  render(){
    return (
      
      <Container style={appStyles.containerCall}>
        <Content enableOnAndroid>
          <View style={{flexDirection: 'column', flex:1}}>
            <View style={{flex: 0.8, height: 250, marginTop:20}}>
              <Animatable.View 
                animation="fadeInDown"
                delay={500}
                style={styles.loginBox}>
                <Form  style={styles.loginForm}>
                <Animatable.Text 
                  animation="fadeInDown"
                  style={appStyles.callTitle}>Seleccione su país</Animatable.Text>
                  <Picker style={styles.callTitle}  
                        selectedValue={this.state.country}  
                         onValueChange={(itemValue) =>  
                            this.setState({country: itemValue})}  
                    >  
                    <Picker.Item label="Chile" value="CHL" />  
                    <Picker.Item label="Venezuela" value="VZL" />  
                </Picker> 
                <Text style={{textAlign:'center', width:Layout.window.width / 2}}>{(this.state.country === 'CHL' ? '+56' : '+58') + this.state.mobileNumber}</Text>
                </Form>
              </Animatable.View>
            </View>  
            <Animatable.View 
              animation="fadeIn"
              delay={1000}
              style={{flex: 0.2,height: 80,}}> 
              { this.props.isLoading ? 
                 <Spinner color={Colors.secondary} /> : 
                  <Button
                    full
                    primary
                    style={appStyles.btnCall}
                    onPress={this.onClic}
                  >
                    <Text>Aceptar</Text>
                  </Button>
              }
              <Text style={{fontSize:10, color:'gray', textAlign:'center'}}>Terminos & Condiciones</Text>
            </Animatable.View> 
          </View>  
               
        </Content>
        <Content>
        <View style={{flex:1, width:Layout.window.width}}>
          <VirtualKeyboard color='gray' applyBackspaceTint={true} pressMode='string' onPress={(val) => this.changeText(val)} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Call);