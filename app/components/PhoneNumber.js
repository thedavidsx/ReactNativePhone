import React from "react";
import {
  Icon,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import appStyles from '../theme/appStyles';

export default class PhoneNumber extends React.Component {
    render() {
      return (
        <View >
            <Text>Hola</Text>
        </View>
      );
    }
  }