import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import i18n from 'i18n-js';
import { getPlants } from '../db/gwp/plants'

const Query = (props) => {

  const [filters, setFilters] = useState([]);
  const [colour, setColour] = useState("*");
  const [leaf, setLeaf] = useState("*");
  const [arrangement, setArrangement] = useState("*");
  const [floweringin, setFloweringin] = useState(`${i18n.t("floweringin")[new Date().getMonth()]}`);
  const [speciesname, setSpeciesname] = useState("*");
  const [commonname, setCommonname] = useState("*");
  const [familyname, setFamilyname] = useState("*");
  //const [trail, setTrail] = useState("*");
  const [buttonColor, setButtonColor] = useState("#3A5F0B");
  const [resultsCount, setResultsCount] = useState(`${getPlants().length}`);

  useEffect(() => {
    setResultsCount(getPlants(assembleFilters()).length);
  });

  // get Picker Items
  const getPItems = i18nName => {
    const namesEN = i18n.t(i18nName, {locale: "en"});
    return i18n.t(i18nName).map((item, i) => <Picker.Item key ={namesEN[i]} value={`${namesEN[i]},${item}`} label={item} />)
  }

  // get localized name of the current month (ex: "June")
  const getCurrentMonthName = () => i18n.t("floweringin")[new Date().getMonth()]

  // text must be of the form:  [{"colour":"red"}]
  // this function MUST use arrow notation
  const handleFiltersInput = (text) => text ? setFilters(text) : null

  const assembleFilters = () => {
    const fltr = [];
    colour != "*" ? fltr.push({colour: colour}) : null;
    leaf != "*" ? fltr.push({leaf: leaf}) : null;
    arrangement != "*" ? fltr.push({arrangement: arrangement}) : null;
    floweringin != "*" ? fltr.push({floweringin: floweringin}) : null;
    speciesname != "*" ? fltr.push({speciesname: speciesname}) : null;
    commonname != "*" ? fltr.push({commonname: commonname}) : null;
    familyname != "*" ? fltr.push({familyname: familyname}) : null;
    //trail != "*" ? fltr.push({trail: trail}) : null;
    return fltr;
  }

  return (
    <View style={styles.container}>

      <View style={styles.containertop}>
        <View style={styles.view2}>
          <Text style={styles.textsearch1}>{i18n.t('querytitle')}</Text>
          <Text style={styles.textsearch1b}>{`${resultsCount} ${i18n.t('queryresults')}`}</Text>
        </View>
        <TouchableOpacity
          //style={styles.button}
          onPress={() => {
            const fltr = assembleFilters();
            props.navigation.navigate('Flowers', {
              filters: fltr
            });
          }}
          >
          <Text> </Text>
          <Text style={styles.textsearch1c}>{i18n.t('querydone')}</Text>
        </TouchableOpacity>
      </View>

      {/* colour */}
      <View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.0')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={colour}
          onValueChange={(itemValue, itemIndex) => {
            setColour(itemValue);
          }}
        >
          <Picker.Item label={i18n.t('all')} value="*" />
          {getPItems("colour")}
        </Picker>
      </View>

      {/* leaf */}
      <View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.1')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={leaf}
          onValueChange={(itemValue, itemIndex) => {
            setLeaf(itemValue);
          }}
        >
          <Picker.Item label={i18n.t('all')} value="*" />
          {getPItems("leaf")}
        </Picker>
      </View>

      {/* arrangement */}
      <View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.2')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={arrangement}
          onValueChange={(itemValue, itemIndex) => {
            setArrangement(itemValue);
          }}
        >
          <Picker.Item label={i18n.t('all')} value="*" />
          {getPItems("arrangement")}
        </Picker>
      </View>

      {/* floweringin */}
      <View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.3')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={floweringin}
          onValueChange={(itemValue, itemIndex) => {
            setFloweringin(itemValue);
          }}
        >
          <Picker.Item label={getCurrentMonthName()} value={getCurrentMonthName()} />
          <Picker.Item label={i18n.t('all')} value="*" />
          {getPItems("floweringin")}
        </Picker>
      </View>

      {/* speciesname */}
      <View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.4')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={speciesname}
          onValueChange={(itemValue, itemIndex) => {
            setSpeciesname(itemValue);
          }}
        >
          <Picker.Item label={i18n.t('all')} value="*" />
          {getPItems("speciesname")}
        </Picker>
      </View>

      {/* commonname */}
      <View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.5')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={commonname}
          onValueChange={(itemValue, itemIndex) => {
            setCommonname(itemValue);
          }}
        >
          <Picker.Item label={i18n.t('all')} value="*" />
          {getPItems("commonname")}
        </Picker>
      </View>

      {/* familyname */}
      <View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.6')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={familyname}
          onValueChange={(itemValue, itemIndex) => {
            setFamilyname(itemValue);
          }}
        >
          <Picker.Item label={i18n.t('all')} value="*" />
          {getPItems("familyname")}
        </Picker>
      </View>

      {/* trail */}
      {/*<View style={styles.pickerview}>
        <Text style={styles.textsearch2}>{i18n.t('queryfiltername.7')}</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.trail}
          onValueChange={(itemValue, itemIndex) => this.setState({trail: itemValue}, () =>
            this.setState({resultsCount: `${getPlants(this.assembleFilters()).length}`})
          )}
        >
          <Picker.Item label={i18n.t('all')} value="*" />
          {this.getPItems("trail")}
        </Picker>
      </View>*/}

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  containertop: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#3A5F0B',
  },
  view2: {
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  picker: {
    height: 50,
    width: 200,
    margin: 5,
    padding: 0
  },
  pickerview: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingLeft: 15,
    paddingRight: 15
  },
  textsearch1: {
    fontSize: 18,
    color: 'white'
  },
  textsearch1b: {
    color: 'white'
  },
  textsearch1c: {
    color: 'white'
  },
  textsearch2: {
    color: '#3A5F0B'
  }
});

export default Query;
