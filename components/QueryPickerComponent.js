import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import i18n from 'i18n-js';
import {cstyles} from '../styles/styles';

const QueryPicker = (props) => {

  const [postText, setPostText] = useState(["*","*"]);

  useEffect(() => {
    // pass params back to Query screen
    if (postText[1] != "*") {
      props.navigation.navigate('Query', {post: postText, pitems: props.route.params.pitems});
    }
  });

  const getPItems = (i18nName, funk) => {
    const allEN = i18n.t('all', {locale: "en"});
    const namesEN = [allEN].concat(i18n.t(i18nName, {locale: "en"}));
    return [i18n.t('all')].concat(i18n.t(i18nName)).map((item, i) => <TouchableOpacity
      style={[styles.button, styles.buttonClose]}
      key={namesEN[i]}
      onPress={() => {funk([namesEN[i] === allEN ? "*" : namesEN[i], item])}}
    >
      <Text style={styles.textStyle3}>{item}</Text>
    </TouchableOpacity>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView>
          {getPItems(props.route.params.pitems[0], setPostText)}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
  },
  modalView: {
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    padding: 0,
    margin: 0,
    borderRadius: 0,
  },
  buttonClose: {
    backgroundColor: "white"
  },
  textStyle3: {
    margin: 10,
    fontSize: 18,
  },
});

export default QueryPicker;
