import React from 'react';
import {View, Text} from 'react-native';

const { RNSwiftLibraryTemplate } = require('@johndhammcodes/react-native-swift-library-template');

export default class Templates extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      callbackMsg: "",
      promiseResponse: "",
      constant: ""
    }
  }

  componentDidMount() {
    console.log("test", RNSwiftLibraryTemplate)
    RNSwiftLibraryTemplate.callbackMethod(res => {
      console.log("callback response: ", res);
      this.setState({callbackMsg: res});
    })
    this.setState({constant: RNSwiftLibraryTemplate.constant})
    RNSwiftLibraryTemplate.promiseMethod(true)
      .then(res => {
        console.log("promise response: ", res);
        this.setState({promiseResponse: res})
      })
      .catch(e => {
        console.log("promise error: ", e.message, e.code);
        this.setState({promiseResponse: e.message})
      })
  }

  render() {
    return (
      <View>
        <Text>templates:</Text>
        <Text>callback: {this.state.callbackMsg}</Text>
        <Text>constant: {this.state.constant}</Text>
        <Text>promise response: {this.state.promiseResponse}</Text>
      </View>
    )
  }
}