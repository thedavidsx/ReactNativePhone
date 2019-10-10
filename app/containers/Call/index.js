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
      
      <Container style={{marginTop:26}} enableOnAndroid>
        <Header style={{backgroundColor: Colors.primary, height: 140}}>
            <Body style={{paddingLeft: 10, textAlign:'center'}}>
              <Title>{this.state.country + ' ' +(this.state.country === 'CHL' ? '(+56) ' : '(+58) ') + this.state.mobileNumber}</Title>
            </Body>
        </Header>
        <Content>
        <View style={{ width:Layout.window.width, paddingBottom: 160}}>
          <VirtualKeyboard color='gray' style={{height:250}} cellStyle={{padding:25}} rowStyle={{borderColor:'gray', borderLeft: 1, borderRight: 1}} applyBackspaceTint={false} pressMode='string' onPress={(val) => this.changeText(val)} />
        </View>   
        <View>
        <Animatable.View 
              animation="fadeIn"
              delay={1000}
              style={{flex: 0.2,height: 100, alignContent: "center"}}> 
              { this.props.isLoading ? 
                 <Spinner color={Colors.secondary} /> : 
                  <Button
                  block 
                    primary
                    style={{backgroundColor: Colors.primary, height:'70%'}}
                    onPress={this.onClic}
                  > 
                  <Text>Llamar</Text>
                  </Button>
              }
            </Animatable.View> 
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