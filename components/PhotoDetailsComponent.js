import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import {cstyles} from '../styles/styles';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const PhotoDetails = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerphotos}>

        <ScrollView horizontal={true} style={styles.flatlistfltr}>
          {
            props.photos.filter(item => item.photo_id).map(
              item => {
                return (
                <View key={item.photo_id} style={{ flex: 1 }}>

                <ReactNativeZoomableView
                 maxZoom={2.5}
                 minZoom={0.5}
                 zoomStep={0.5}
                 initialZoom={1.0}
                 bindToBorders={true}
                >
                  <Image
                    source={
                      item.imageLink
                    }
                    style={styles.plantimageZoom}
                    resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
                  />
                  </ReactNativeZoomableView>
                </View>
              )}
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
    flex: 1,
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
  plantimageZoom: {
    flex: 1,
  },
});

export default PhotoDetails;
