import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import {cstyles} from '../styles/styles';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const PhotoZoomPan = (props) => {
  //console.log("PhotoZoomPan pressed"); // OK
  //console.log(props); // props.navigation props.route.params.photo
  const item = props.route.params.photo;
  //console.log(item);

  return (
    <View style={styles.container}>
      <View style={styles.plantimageZoom}>
        <ReactNativeZoomableView
         zoomEnabled={true} // I added this; no difference
         maxZoom={2.5}
         minZoom={0.5}
         zoomStep={0.5}
         initialZoom={1}
         bindToBorders={true}
        >
          <Image
            source={
              item.imageLink
            }
            style={styles.plantimage}
            resizeMode= 'contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
          />
        </ReactNativeZoomableView>
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
  /*containerphotos: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
  },*/
  /*flatlistfltr: {
    flex: 1,
    flexDirection: 'row',
  },*/
  plantimage: {
    flex: 1,
    width: null,
    height: '100%'
    //width: 350, //400, //500, //'100%',
    //height: 275,
    //marginHorizontal: 6,
    //padding: 5
  },
  plantimageZoom: {
    flex: 1,
    //overflow: 'hidden' // I added this; no difference
  },
});

export default PhotoZoomPan;
