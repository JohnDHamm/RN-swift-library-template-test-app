import React from 'react';
import {View, Text, Button, NativeEventEmitter, StyleSheet} from 'react-native';

const { RNSwiftLibraryTemplate } = require('@johndhammcodes/react-native-swift-library-template');

const RNSwiftEvents = new NativeEventEmitter(RNSwiftLibraryTemplate)
let RNSwiftEventsSubscription;


export default class Templates extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      callbackMsg: "",
      promiseResponse: "",
      constant: "",
      eventMessage: "waiting for event message..."
    }
  }

  componentDidMount() {
    console.log("RNSwiftLibraryTemplate", RNSwiftLibraryTemplate)
    RNSwiftEventsSubscription = RNSwiftEvents.addListener(
      "eventEmitter",
      res => {
        console.log("event emitted:", res);
        this.setState({eventMessage: res.message});
      }
    )

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

  componentWillUnmount() {
    RNSwiftEventsSubscription.remove();
  }

  onPress() {
    console.log("event button pressed!");
    RNSwiftLibraryTemplate.eventEmitterMethod();
  }

  render() {
    return (
      <View>
        <Text style={styles.subtitle}>templates:</Text>
        <View style={styles.textBlock}>
          <Text style={styles.methodType}>callback: </Text>
          <Text>{this.state.callbackMsg}</Text>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.methodType}>constant: </Text>
          <Text>{this.state.constant}</Text>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.methodType}>promise response: </Text>
          <Text>{this.state.promiseResponse}</Text>
        </View>
        <Button
          title={"press to trigger event"}
          onPress={() => this.onPress()}
          />
        <View style={styles.textBlock}>
          <Text style={styles.methodType}>event emitted: </Text>
          <Text>{this.state.eventMessage}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#BADA55",
    fontStyle: "italic",
  },
  textBlock: {
    flexDirection: "row",
    marginVertical: 10,
  },
  methodType: {
    color: "#AAA",
    fontStyle: "italic",
  }
})