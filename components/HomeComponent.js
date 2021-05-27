import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Image, Linking } from 'react-native';
import {Picker} from '@react-native-community/picker';

// expo Localization
import i18n from 'i18n-js';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonColor: "#3A5F0B",
      languageSelected: 'en'
    }
  }

  changeLanguage(languageSelected) {
    this.setState({
      languageSelected
    })
    i18n.locale = languageSelected
  }

  render() {

    // https://en.wikipedia.org/wiki/Regional_indicator_symbol
    /*const lang = () => [
      {key:'en',label:'🇬🇧'},
      {key:'fr',label:'🇫🇷'},
      {key:'es',label:'🇪🇸'},
      {key:'de',label:'🇩🇪'},
      {key:'la',label:'🇻🇦'},
      {key:'ru',label:'🇷🇺'}
    ]*/
    const lang = () => [
      {key:'en',label:'FR'},
      {key:'fr',label:'EN'}
      /*{key:'en',label:'EN'},
      {key:'fr',label:'FR'}
      {key:'es',label:'ES'},
      {key:'de',label:'DE'},
      {key:'la',label:'LA'},
      {key:'ru',label:'РУ'}*/
    ]

    const {languageSelected} = this.state

    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('About')}>
            <Text style={styles.buttontext}>{i18n.t('homebutton.1')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Contact')}>
            <Text style={styles.buttontext}>{i18n.t('homebutton.2')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Links')}>
            <Text style={styles.buttontext}>{i18n.t('homebutton.3')}</Text>
          </TouchableOpacity>
          {/*}<DropdownLanguage
            style={styles.dropdownLanguage}
            language={languageSelected}
            onChangeLanguage={this.onChangeLanguage.bind(this)}
            listLanguage={lang()}
          />*/}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.changeLanguage(languageSelected === 'en' ? 'fr' : 'en')}
            >
            {/*<Text>{languageSelected}</Text>*/}
            <Text style={styles.buttontext}>{lang()[languageSelected === 'en' ? 0 : 1].label}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Query')}>
          <Image
            source={require('../assets/gwp/GWP_WebPage_HomePage.png')}
            style = {styles.image}
            //style = {{flex: 1, height: 450, width: 315}}
            //style={styles.plantimage}
          />
        </TouchableOpacity>

        <View style={styles.copyright}>
          <Text style={styles.copyrighttext}>© {i18n.t('homebutton.4')} 2021</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={ ()=>{ Linking.openURL('https://www.primordion.com/Xholon/gwt/ShirkingPixies.html')}}
            >
            <Text style={styles.copyrighttext}>Shirking Pixies</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/*class DropdownLanguage extends Component
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.dropdownLanguage}>
        <Picker
          mode="dropdown"
          iosHeader={''}
          style={styles.dropdownLanguagePicker}
          color="#3A5F0B"
          selectedValue={this.props.language}
          onValueChange={this.props.onChangeLanguage.bind(this)}
        >
          {this.props.listLanguage.map((item, i) => {
            return <Picker.Item key={i} value={item.key} label={item.label} />
          })}
        </Picker>
      </View>
    )
  }
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'white' //'#d1f4a4'
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  button: {
    paddingBottom: 5,
    textTransform: 'none',
  },
  buttontext: {
    fontSize:18
  },
  copyright: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  copyrighttext: {
    fontSize: 9,
    color: "grey"
  },
  image: {
    height: 450,
    width: 315
  }
});
