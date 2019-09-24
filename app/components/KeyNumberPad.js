import React from "react";
import {
  Icon,
  Text,
  Button,
} from 'native-base';
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import appStyles from '../theme/appStyles';

export default class keyNumberPad extends React.Component {
    render() {
        const keys = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['*', '0', '#']
          ]
      
          const desc = [
            ['', 'ABC', 'DEF'],
            ['GHI', 'JKL', 'MNO'],
            ['PQRS', 'TUV', 'WXYZ'],
            ['', '+', '']
          ]

          const keypad = []

          for (let i = 0; i < keys.length; i++) {
            keypad.push((
              <View key={keys[i].join("|")} style={s.row}>
                <View style={s.outerLineOffset}/>
                {this.renderKey(keys[i][0], desc[i][0])}
                <View style={s.innerLineOffset}/>
                {this.renderKey(keys[i][1], desc[i][1])}
                <View style={s.innerLineOffset}/>
                {this.renderKey(keys[i][2], desc[i][2])}
                <View style={s.outerLineOffset}/>
              </View>
            ))
      
            if (i !== keys.length - 1) {
              keypad.push((
                <View key={"split" + i} style={{flex: 0.006 * this.state.heightRatio}}/>
              ))
            }
          }
      
      return (
        <View style={this.props.style}>
            {keypad}
        </View>
      );
    }
  }