import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal, ScrollView } from 'react-native';
import {Picker} from '@react-native-community/picker';
import i18n from 'i18n-js';
import { getPlants } from '../db/gwp/plants'
import {cstyles} from '../styles/styles';
import {Buttons, Colors} from '../styles'

const Query = (props) => {

  const [filters, setFilters] = useState([]);
  const [colour, setColour] = useState(["*","*"]);
  const [leaf, setLeaf] = useState(["*","*"]);
  const [arrangement, setArrangement] = useState(["*","*"]);
  const [floweringin, setFloweringin] = useState([`${i18n.t("floweringin", {locale: "en"})[new Date().getMonth()]}`,`${i18n.t("floweringin")[new Date().getMonth()]}`]);
  const [speciesname, setSpeciesname] = useState(["*","*"]);
  const [commonname, setCommonname] = useState(["*","*"]);
  const [familyname, setFamilyname] = useState(["*","*"]);
  //const [trail, setTrail] = useState("*");
  const [buttonColor, setButtonColor] = useState("#3A5F0B");
  const [resultsCount, setResultsCount] = useState(`${getPlants().length}`);

  useEffect(() => {
    if (props.route.params?.post) {
      //console.log("QueryComponent.native", props.route.params?.post, props.route.params?.pitems);
      switch (props.route.params?.pitems[0]) {
        case "colour": setColour(props.route.params?.post); break;
        case "leaf": setLeaf(props.route.params?.post); break;
        case "arrangement": setArrangement(props.route.params?.post); break;
        case "floweringin": setFloweringin(props.route.params?.post); break;
        case "speciesname": setSpeciesname(props.route.params?.post); break;
        case "commonname": setCommonname(props.route.params?.post); break;
        case "familyname": setFamilyname(props.route.params?.post); break;
        default: break;
      }
      //setColour(props.route.params?.post);
    }
    setResultsCount(getPlants(assembleFilters()).length);
  }); // NO, [props.route.params?.post]);

  const getPItems = (i18nName, funk, mvGetter, mvSetter) => {
    const allEN = i18n.t('all', {locale: "en"});
    const namesEN = [allEN].concat(i18n.t(i18nName, {locale: "en"}));
    return [i18n.t('all')].concat(i18n.t(i18nName)).map((item, i) => <TouchableOpacity
      style={[styles.button, styles.buttonClose]}
      key={namesEN[i]}
      onPress={() => {mvSetter(!mvGetter); funk([namesEN[i] === allEN ? "*" : namesEN[i], item])}}
    >
      <Text style={styles.textStyle3}>{item}</Text>
    </TouchableOpacity>)
  }

  // get localized name of the current month (ex: "June")
  const getCurrentMonthName = () => i18n.t("floweringin")[new Date().getMonth()]

  // text must be of the form:  [{"colour":"red"}]
  // this function MUST use arrow notation
  const handleFiltersInput = (text) => text ? setFilters(text) : null

  const assembleFilters = () => {
    const fltr = [];
    colour[0] != "*" ? fltr.push({colour: colour.join(",")}) : null;
    leaf[0] != "*" ? fltr.push({leaf: leaf.join(",")}) : null;
    arrangement[0] != "*" ? fltr.push({arrangement: arrangement.join(",")}) : null;
    floweringin[0] != "*" ? fltr.push({floweringin: floweringin.join(",")}) : null;
    speciesname[0] != "*" ? fltr.push({speciesname: speciesname.join(",")}) : null;
    commonname[0] != "*" ? fltr.push({commonname: commonname.join(",")}) : null;
    familyname[0] != "*" ? fltr.push({familyname: familyname.join(",")}) : null;
    //trail != "*" ? fltr.push({trail: trail}) : null;
    return fltr;
  }

  const rightArrow = "❯"; //"ᐳ"; // U+1433 or U+0276F  Linux: Ctrl-Shift u 1433

  const getSelectedVal = val => val === "*" ? "" : val === i18n.t('all') ? "" : val

  return (
    <View style={styles.container}>

      <View style={styles.containertop}>
        <TouchableOpacity
          style={styles.containertopto}
          onPress={() => {
            const fltr = assembleFilters();
            props.navigation.navigate('Flowers', {
              filters: fltr
            });
          }}
          >
          <Text style={styles.textsearch1b}>{`${resultsCount} ${i18n.t('queryresults')}`}</Text>
          <Text style={styles.textsearch1c}>{i18n.t('querydone')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerfilters}>

      {/* colour */}
      <View style={styles.pickerview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, styles.viewto]}
          onPress={() => props.navigation.navigate('QueryPicker', {
            pitems: ["colour", i18n.t('queryfiltername.0')]
          })}
        >
          <Text style={[styles.textsearch2,cstyles.bodytextgreen]}>{i18n.t('queryfiltername.0')}   </Text>
          <Text style={[cstyles.bodytext]}>{getSelectedVal(colour[1])} {rightArrow}</Text>
        </TouchableOpacity>
      </View>

      {/* leaf */}
      <View style={styles.pickerview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, styles.viewto]}
          onPress={() => props.navigation.navigate('QueryPicker', {
            pitems: ["leaf", i18n.t('queryfiltername.1')]
          })}
        >
          <Text style={[styles.textsearch2,cstyles.bodytextgreen]}>{i18n.t('queryfiltername.1')}   </Text>
          <Text style={[cstyles.bodytext]}>{getSelectedVal(leaf[1])} {rightArrow}</Text>
        </TouchableOpacity>
      </View>

      {/* arrangement */}
      <View style={styles.pickerview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, styles.viewto]}
          onPress={() => props.navigation.navigate('QueryPicker', {
            pitems: ["arrangement", i18n.t('queryfiltername.2')]
          })}
        >
          <Text style={[styles.textsearch2,cstyles.bodytextgreen]}>{i18n.t('queryfiltername.2')}   </Text>
          <Text style={[cstyles.bodytext]}>{getSelectedVal(arrangement[1])} {rightArrow}</Text>
        </TouchableOpacity>
      </View>

      {/* floweringin */}
      <View style={styles.pickerview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, styles.viewto]}
          onPress={() => props.navigation.navigate('QueryPicker', {
            pitems: ["floweringin", i18n.t('queryfiltername.3')]
          })}
        >
          <Text style={[styles.textsearch2,cstyles.bodytextgreen]}>{i18n.t('queryfiltername.3')}   </Text>
          <Text style={[cstyles.bodytext]}>{getSelectedVal(floweringin[1])} {rightArrow}</Text>
        </TouchableOpacity>
      </View>

      {/* speciesname */}
      <View style={styles.pickerview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, styles.viewto]}
          onPress={() => props.navigation.navigate('QueryPicker', {
            pitems: ["speciesname", i18n.t('queryfiltername.4')]
          })}
        >
          <Text style={[styles.textsearch2,cstyles.bodytextgreen]}>{i18n.t('queryfiltername.4')}   </Text>
          <Text style={[cstyles.bodytext]}>{getSelectedVal(speciesname[1])} {rightArrow}</Text>
        </TouchableOpacity>
      </View>

      {/* commonname */}
      <View style={styles.pickerview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, styles.viewto]}
          onPress={() => props.navigation.navigate('QueryPicker', {
            pitems: ["commonname", i18n.t('queryfiltername.5')]
          })}
        >
          <Text style={[styles.textsearch2,cstyles.bodytextgreen]}>{i18n.t('queryfiltername.5')}   </Text>
          <Text style={[cstyles.bodytext]}>{getSelectedVal(commonname[1])} {rightArrow}</Text>
        </TouchableOpacity>
      </View>

      {/* familyname */}
      <View style={styles.pickerview}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, styles.viewto]}
          onPress={() => props.navigation.navigate('QueryPicker', {
            pitems: ["familyname", i18n.t('queryfiltername.6')]
          })}
        >
          <Text style={[styles.textsearch2,cstyles.bodytextgreen]}>{i18n.t('queryfiltername.6')}   </Text>
          <Text style={[cstyles.bodytext]}>{getSelectedVal(familyname[1])} {rightArrow}</Text>
        </TouchableOpacity>
      </View>

      {/* trail */}

      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColors.whitish,
  },
  containertop: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 10,
    backgroundColor: Colors.backgroundColors.lightGreen,
    ...Buttons.rounded,
  },
  containertopto: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  containerfilters: {
    flex: 1,
    backgroundColor: Colors.backgroundColors.whitish,
  },
  pickerview: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'baseline',
    marginLeft: 20,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: Colors.borderColors.lightGrey,
  },
  textsearch1b: {
    color: Colors.textColors.blackish,
    fontSize: 20,
  },
  textsearch1c: {
    color: Colors.textColors.blackish,
    fontSize: 20,
  },
  textsearch2: {
    fontSize: 18,
  },
  button: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  buttonOpen: {
    backgroundColor: Colors.backgroundColors.whitish,
  },
  buttonClose: {
    backgroundColor: Colors.backgroundColors.whitish,
  },
  viewto: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  textStyle3: {
    margin: 10,
    fontSize: 18,
  }
});

export default Query;
