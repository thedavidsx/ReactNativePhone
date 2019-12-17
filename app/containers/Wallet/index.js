import React from 'react'
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Alert, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native'
import { Layout, Colors, Screens } from '../../constants';
import imgs from '../../assets/images';
import {
  Container,
  Content,
  Icon,
  Spinner,
  Text,

} from 'native-base';
import { connect } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Headers from '../Headers';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


class MyListItemWallet extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={[style.item, {
          backgroundColor: this.props.selected ? 'rgba(66, 107, 166, 0.58)' : '#EFEFEF',
        }]}>
          <Text style={{ color: textColor, fontSize: 18 }}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}




class Wallet extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    selected: (new Map()),
    valueRadio: false,
    formKey: null
  };

  _keyExtractor = (item, index) => item.id


  _onPressItem = (id) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.forEach((x, y, k) => {
        if (y != id) {
          if (selected.get(y)) {
            selected.set(y, false);
          }
        }
      });
      selected.set(id, !selected.get(id));
      return { selected };
    });
  };

  _renderItem = ({ item }) => (
    <MyListItemWallet
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  clear = () => {
    this.setState({
      formKey: Math.random()
    })
    console.log(Layout.window.height);
  }
  render() {
    return (
      <Container style={{ marginTop: 22 }}>
        <Headers showHeaderDetail={this.props.showHeaderDetail} />
        <Content enableOnAndroid >
          <View style={style.container}>
            <Text style={style.titleOne}>{"RECARGAS DE SALDO"}</Text>
            {/* <Content style={{ height: 200 }}> */}
              <ScrollView>
                <FlatList
                  data={DATA}
                  extraData={this.state}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
                  style={{ top: 10 }}
                />
              </ScrollView>
              <View style={{ marginTop: 10 }}>
                <RadioForm
                  key={this.state.formKey}
                  radio_props={[{ label: 'Habiliar recarga automatica ', value: 0 }]}
                  initial={null}
                  onPress={(value) => {
                    this.setState(
                      {
                        value: value,
                        valueRadio: !this.state.valueRadio
                      });

                    if (!this.state.valueRadio) {
                      this.clear();
                    }
                  }} 
                />
              </View>
            {/* </Content> */}
            {/* <View> */}
            <View style={{ marginTop: 30 }}>
                <Text>* Si habilitas la recarga automatica el saldo se cobrara mensuelamente de tu cuenta</Text>
              </View>
            <View style={{ alignSelf:'stretch',marginTop: Layout.window.height - 600 }}>
              <Button
                title="RECARGAR"
                //onPress={() => this.handlerCall(this.state.listNumbersSelect[0])}
                style={{ backgroundColor: Colors.primary }}
              />
            </View>

            </View>
            

          {/* </View> */}
        </Content>
      </Container>
    );
  }

}


const style = StyleSheet.create({
  container: {
    padding: 25
  },
  titleOne: {
    fontSize: 25
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 0,
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'flex-start',
  },
});


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });


const DATA = [
  {
    id: '1',
    title: '$2.000',
  },
  {
    id: '2',
    title: '$5.000',
  },
  {
    id: '3',
    title: '$10.000',
  }
];

const mapStateToProps = (state) => {
  return {
    //user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

