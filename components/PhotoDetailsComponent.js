import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import {cstyles} from '../styles/styles';

const PhotoDetails = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerphotos}>

        <ScrollView horizontal={true} style={styles.flatlistfltr}>
          {
            props.photos.filter(item => item.photo_id).map(
              item => (
                <View key={item.photo_id}>
                  <Image
                    source={
                      item.imageLink
                    }
                    style={styles.plantimage}
                    resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
                  />
                </View>
              )
            )
          }
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  containerphotos: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  flatlistfltr: {
    flex: 1,
    flexDirection: 'row',
  },
  plantimage: {
    width: 350, //400, //500, //'100%',
    height: 275,
    marginHorizontal: 6,
    padding: 5
  },
});

export default PhotoDetails;
