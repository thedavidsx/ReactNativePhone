import React from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { View } from "react-native";
import { connect } from "react-redux";
import { Form, Item, Input, Title, Button, Text } from 'native-base';
import { required, email, length, confirmation } from 'redux-form-validators';
import { InputBox } from '../../components';
import styles from './styles';

class SignUpForm extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount() {
  //   GoogleSignin.configure({"installed":{"client_id":"561797948923-8pa4rto7qpeispniag0huqplhsbvcli0.apps.googleusercontent.com","project_id":"locutorios-2f39f","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"cD05_Y9EsjOgcZL0D7zMrMuR","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}});
  // }

  // _signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     alert(userInfo);
  //     //this.setState({ userInfo: userInfo, loggedIn: true });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };


  render(){
    const { handleSubmit, onSubmit, language } = this.props;
    return (
      <Form onSubmit={handleSubmit(onSubmit)} style={styles.loginForm}>
        <Field 
          name="name" 
          component={InputBox} 
          placeholder={language.name}
          keyboardType={'default'}
          icon='user'
          iconStyle={{top:5,paddingLeft:15}}
          validate={[required({msg: `${language.name} ${language.required}`})]}
        />
        <Field 
          name="email" 
          component={InputBox} 
          placeholder={language.email}
          keyboardType={'email-address'}
          icon='mail'
          iconStyle={{top:5,paddingLeft:15}}
          validate={[required({msg: `${language.email} ${language.required}`}), email({msg: `${language.email} ${language.notValid}`})]}
        />
        <Field 
          name="numberPhone" 
          component={InputBox} 
          placeholder={'Número de Telefono'}
          keyboardType={'numeric'}
          icon='user'
          iconStyle={{top:5,paddingLeft:15}}
          validate={[required({msg: `${language.email} ${language.required}`}), email({msg: `${language.email} ${language.notValid}`})]}
        />
        <Field 
          name="password" 
          component={InputBox} 
          placeholder={language.password}
          secureTextEntry={true}
          icon='lock'
          iconStyle={{top:5,paddingLeft:15}}
          validate={[required({msg: `${language.password} ${language.required}`}),length({ minimum: 4,msg: `${language.tooShort}` })]}
        />
        <Field 
          name="confirmpass" 
          component={InputBox} 
          placeholder={language.confirmPassword}
          secureTextEntry={true}
          icon='lock'
          iconStyle={{top:5,paddingLeft:15}}
          validate={[confirmation({ field: 'password', msg: `${language.password} ${language.doesntMatch}` })]}
        />
      </Form>
    )
  }
}


const signupform = reduxForm({
  form: 'signupForm',
})(SignUpForm);

const mapStateToProps = (state) => {
  return {
    language: state.auth.language,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(signupform);