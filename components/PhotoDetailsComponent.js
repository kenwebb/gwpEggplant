import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import {cstyles} from '../styles/styles';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const PhotoDetails = (props) => {

  //const zoomableViewRef = createRef(<ReactNativeZoomableView>);

  return (
    <View style={styles.container}>
      <View style={styles.containerphotos}>

        <ScrollView horizontal={true} style={styles.flatlistfltr}>
          {
            props.photos.filter(item => item.photo_id).map(
              item => {
                console.log("1 " + item.photo_id);
                return (
                <View key={item.photo_id} style={{ flex: 1 }}>

                <ReactNativeZoomableView
                 maxZoom={2.5}
                 minZoom={0.5}
                 zoomStep={0.5}
                 initialZoom={1.5}
                 //ref={zoomableViewRef}
                 bindToBorders={true}
                 //onZoomAfter={this.logOutZoomState}
                 /*style={{
                    padding: 10,
                    backgroundColor: 'red',
                 }}*/
                >
                  {/*<Text>ReactNativeZoomableView t</Text>*/}
                  <Image
                    source={
                      item.imageLink
                    }
                    style={styles.plantimageZoom}
                    resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
                  />
                  {/*<Text>ReactNativeZoomableView b</Text>*/}
                  </ReactNativeZoomableView>
                </View>
              )}
            )
          }
        </ScrollView>

      </View>

      {/*<ReactNativeZoomableView
       maxZoom={1.5}
       minZoom={0.5}
       zoomStep={0.5}
       initialZoom={1}
       bindToBorders={true}
       onZoomAfter={this.logOutZoomState}
       style={{
          padding: 10,
          backgroundColor: 'red',
       }}
      >
       <Text>This is a test of ReactNativeZoomableView.</Text>
       <Image style={{ flex: 1, width: null, height: '100%' }}
              source={require('../assets/gwp/images/P6150366.jpg')}
              resizeMode="contain" />
      </ReactNativeZoomableView>*/}

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
    width: null, //350, //400, //500, //'100%',
    height: '100%',
    marginHorizontal: 6,
    padding: 5
  },
});

export default PhotoDetails;
