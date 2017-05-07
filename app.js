import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import * as simpleAuthProviders from 'react-native-simple-auth';

const configs = {
  facebook: {
        appId: '1945815635652325',
        appSecret: 'f5638047a74faae2250f6436a065f26c',
        callback: 'fb1945815635652325://authorize',
        scope: 'user_friends',
        fields: ['email', 'first_name', 'last_name']
    },
    twitter: {
        appId: 'RpQDj4XFdHRvHp4l3uOKkyDJq',
        appSecret: 'qqOILC0EPMvOFdsYXbE5zkgccU5Dsuo8P7PwcDR3cGoRLRm21c',
        callback: 'com.pedometer3://authorize',
        fields: ['email', 'name']
    }
}

class Login extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to MobileCenterAndroidDemo!
        </Text>
        
       <Button
         onPress={this.onBtnPressed.bind(this,'facebook', configs['facebook'])} 
         title = 'LOGIN VIA FACEBOOK'>
        </Button>
        {/*test*/}
        <Button
          onPress = {this.onBtnPressed.bind(this,'twitter', configs['twitter'])}
          title = 'LOGIN VIA TW'>
        </Button>
      </View>
    )
  }
onBtnPressed(provider, opts) {
    const _this = this;
    this.setState({
      loading: true
    });
    simpleAuthProviders[provider](opts)
      .then((info) => {
        Alert.alert(provider);
        //DoMethod(info)
        if(provider == 'facebook'){
          console.log('!!!!');
          console.log(info.user);
          console.log(info.credentials)
        }
      })
      .catch((error) => {
        Alert.alert(
          'Authorize Error',
          error.message
        );
      });
  }
}

export default class pedometer3 extends Component {
  render() {
    return (
            <Login/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center'
  },
  google: {
    backgroundColor: '#ccc'
  },
  facebook: {
    backgroundColor: '#3b5998'
  },
  twitter: {
    backgroundColor: '#48BBEC'
  },
});
