import {StyleSheet} from 'react-native';
import { Layout, Colors, Screens } from '../../constants';

export default StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  errorText: {
    color: "#FFF"
  },
  initContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  initText: {
    color: "#FFF"
  },
  loginBox: {
    marginTop: -190,
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
  },
  loginForm:{
    paddingRight:Layout.indent
  },
  pickerStyle:{  
    height: 150,  
    width: "80%",  
    color: '#344953',  
    justifyContent: 'center',  
}  
})
