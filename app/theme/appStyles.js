import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../constants/';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    marginTop:20
  },
  containerCall:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  statusBar:{
    flex: 1,
    height:Layout.statusBarHeight
  },
  row: {
    flex: 1,
  },
  rowXYcenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowXcenter: {
    flex: 1,
    alignItems: 'center'
  },
  rowYcenter: {
    flex: 1,
    justifyContent: 'center',
  },
  fontRegular:{
    fontFamily: 'Font-Regular',
  },
  btnSecontary:{
    backgroundColor: Colors.secondary,
    fontFamily: 'Font-Regular',
  },
  content:{
    marginTop: Layout.indent
  },
  contentBg:{
    backgroundColor: Colors.white,
    height: '100%',
    padding: Layout.indent,
    flex:1
  },

  setLanguage: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius:0
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  introLangBtn:{
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '50%',
    marginLeft: '25%',
    marginBottom: Layout.halfIndent,
  },
  introLangBtnActive:{
    backgroundColor: Colors.secondary,
  },
  // Slider
  slide:{
    backgroundColor: Colors.primary,
    flex:1
  },
  slideTitle:{
    color: Colors.white,
    fontSize: 30,
    textAlign:'center',
  },
  slideText:{
    textAlign:'center',
    color: Colors.lightWhite
  },
  slideImage: {
    width: 300,
    height: 300,
  },
  slideIcon: {
    backgroundColor: 'transparent', 
    color: Colors.white
  },
  buttonCircle: {
    width: 40,
    height: 40,
    color: Colors.white,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDotStyle:{
    backgroundColor: Colors.secondary
  },

  menuBtn:{
    padding: Layout.indent
  },
  drawerList:{
    margin:0,
    paddingLeft:0
  },
  drawerItem:{
    margin:0,
    padding:0
  },
  drawerIcon:{
    paddingRight: Layout.indent,
  },
  drawerText:{
    fontSize: 17, 
    fontWeight: '600', 
    color: Colors.black,
    paddingLeft: Layout.indent
  },
  profileName:{
    color: Colors.white,
    fontSize: 22
  },
  profileEmail:{
    color: Colors.lightWhite,
    fontSize: 14
  },
  activeDrawerItem:{
    // backgroundColor: Colors.primaryLight
  },
  logo: {

  },
  headerLogo:{
    height: 40, 
    width: 120
  },
  loaderLogo: {
    height: 68, 
    width: 220
  },
  loginLogo: {
    marginTop: Layout.sixIndent,
    height: 68, 
    width: 220
  },
  loginMidText:{
    fontSize: 16,
    fontFamily: 'Font-Light',
    marginLeft: 40,
    marginRight: 40,
    marginTop: -Layout.doubleIndent,
    color:Colors.lightWhite
  },
  loginTitle:{
    fontSize: 30,
    color:Colors.white,
    marginLeft: Layout.indent,
    textAlign:'center',
    fontFamily: 'Font-Regular',
  },
  callTitle:{
    fontSize: 12,
    color:Colors.black,
    marginLeft: Layout.indent,
    marginTop: Layout.window.height / 2 - 120,
    textAlign:'center',
    fontFamily: 'Font-Regular',
  },
  loginBack:{
    marginTop:Layout.doubleIndent,
    justifyContent:'flex-start',
  },
  loginBackIcon:{
    color: Colors.white
  },

  // Input
  itemInput:{
    marginTop:15,
    color: Colors.black,
    width:Layout.window.width,
    paddingLeft:Layout.indent,
    paddingRight:Layout.indent,
    fontFamily: 'Font-Regular',
    fontSize:14
  },
  textbox:{
    marginTop:15,
    color: Colors.white,
    width:100,
    paddingLeft:Layout.indent,
    paddingRight:Layout.indent,
    fontFamily: 'Font-Regular',
    fontSize:14
  },
  inputError:{
    color: Colors.red,
    top:20,
    fontSize:12
  },
  CallText:{
    textAlign:'center',
    fontSize:20,
    color: Colors.lightBlack
  },
  btnCall:{
    backgroundColor: Colors.primary,
    fontFamily: 'Font-Regular',
    borderRadius:100,
    marginLeft:Layout.indent,
    marginRight:Layout.indent,
    textAlign:'center',
    width:Layout.window.width / 2
  },
  panelContactHome:{
      height: Layout.window.height / 2 + 20
  },
  panelContact:{
      //height:Layout.window.height,
      backgroundColor: Colors.primary
  }
  // ,
  // titleSub:{
  //   position: "absolute",
  //   width: "261px",
  //   height: "26px",
  //   left: "0px",
  //   top: "0px",
  //   fontFamily: "Font-Regular",
  //   fontSize: 22,
  //   lineHeight: 26,
  //   display: "flex",
  //   alignItems: "flex-end",
  //   color: "#FFFFFF",
  //   opacity: 0.8
  // }
});