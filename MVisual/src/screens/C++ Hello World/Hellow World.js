import React, {Component} from "react";
import {NativeModules, StyleSheet, Text, View} from "react-native";
const {HelloWorld}  = NativeModules;

export default class HelloWorldC  extends Component {
    state = {
        message: "loading..."
      };
      async componentDidMount(){
          try{
              const message = await HelloWorld.sayHello();
              this.setState({
                  message
              });
          } catch(e) {
              alert(e);
          }
      }
      render(){
          const { message } = this.state;
          return (
              <View style={styles.container}>
                  <Text style={styles.welcome}> Message from Native </Text>
                  <Text style={styles.welcome}> "{message}" </Text>
              </View>
          );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
    }
  })