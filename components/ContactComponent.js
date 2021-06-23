import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import i18n from 'i18n-js';
import {cstyles} from '../styles/styles';
import {Colors} from '../styles'

const Contact = (props) => {
  return (
    <View style={styles.container}>
      <Text style={cstyles.bodytext}>Contact information will go here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: Colors.backgroundColors.white, //'white',
  },
});

export default Contact;
