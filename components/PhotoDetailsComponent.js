import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native';
import {cstyles} from '../styles/styles';

const PhotoDetails = (props) => {

  //console.log(props); // photos

  const calcNumPhotos = photos => photos.reduce((acc, curr) => curr.photo_id?.length > 0 ? acc += 1 : acc, 0)

  function RenderImage({item}) {
    //console.log(item, item[0], item[0].imageLink)
    return (
      <Image
        source={item[0].imageLink} // maybe prepend "/gwp/" NO
        //source={{uri: "/gwp" + item[0].imageLink}}
        //source={"http://localhost:19006/static/media/P5060221.8626d1a7.jpg"}
        style={styles.plantimage}
        resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
      />
    )
  }

  //console.log(RenderImage({photos: props.photos, index: 0}))

  // TODO maybe surround with SafeAreaView ?
  return (
    <View style={styles.container}>
      <View style={styles.containerphotos}>

        {/*}<Image
          source={
            //calcNumPhotos(props.photos) >= 2 ? props.photos[1].imageLink : props.photos[0].imageLink
            props.photos[0].imageLink
          }
          style={styles.plantimage}
          resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
        />
        <Image
          source={
            calcNumPhotos(props.photos) >= 2 ? props.photos[1].imageLink : null //props.photos[0].imageLink
          }
          style={styles.plantimage}
          resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
        />*/}

        <ScrollView horizontal={true} style={styles.flatlistfltr}>
          {
            props.photos.filter(item => item.photo_id).map(
              item => (
                <View key={item.photo_id}>
                  <Image
                    source={
                      //calcNumPhotos(props.photos) >= 2 ? props.photos[1].imageLink : props.photos[0].imageLink
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

        {/*<FlatList
          style={styles.flatlistfltr}
          data={props.photos} // Plant photos
          //renderItem={renderImage({photos: props.photos, index: 0})} // sort-of works
          renderItem={({item}) => <RenderImage item={props.photos} />}
          //keyExtractor={(item, index) => Number(index).toString()} // NO
          keyExtractor={(item, index) => {
            console.log("keyExtractor", item, index, item.photo_id);
            const obj = {item: item.photo_id, index: index}
            console.log(obj)
            //return obj.item;
            return Number(index).toString();
          }}
          horizontal={true}
        />*/}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerXXX: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    //backgroundColor: Colors.backgroundColors.white, //'white',
  },
  containerphotosXXX: {
    flexDirection: "row",
    justifyContent: 'center',
    //alignItems: 'center',
  },
  flatlistfltrXXX: {
    flex: 1,
    flexDirection: 'row',
    //flexWrap: 'wrap',
    //overflow: 'scroll'
  },
  plantimage: {
    width: 350, //400, //500, //'100%',
    height: 275,
    marginHorizontal: 6,
    padding: 5
  },
});

export default PhotoDetails;
