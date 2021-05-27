import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Modal, ScrollView } from 'react-native';
import {Picker} from '@react-native-community/picker';
import i18n from 'i18n-js';
import { getPlants } from '../db/gwp/plants'

// DONE copy new function-based code from QueryComponent.js
// TODO convert "colour" from Picker to Modal
// @deprecated
const Query = (props) => {

  const [filters, setFilters] = useState([]);
  const [colour, setColour] = useState(["*","*"]);
  const [leaf, setLeaf] = useState(["*","*"]);
  const [arrangement, setArrangement] = useState(["*","*"]);
  const [floweringin, setFloweringin] = useState([`${i18n.t("floweringin", {locale: "en"})[new Date().getMonth()]},${i18n.t("floweringin")[new Date().getMonth()]}`]);
  const [speciesname, setSpeciesname] = useState(["*","*"]);
  const [commonname, setCommonname] = useState(["*","*"]);
  const [familyname, setFamilyname] = useState(["*","*"]);
  //const [trail, setTrail] = useState("*");
  const [buttonColor, setButtonColor] = useState("#3A5F0B");
  const [resultsCount, setResultsCount] = useState(`${getPlants().length}`);

  const [coloModalVis, setColoModalVis] = useState(false);
  const [leafModalVis, setLeafModalVis] = useState(false);
  const [arraModalVis, setArraModalVis] = useState(false);
  const [flowModalVis, setFlowModalVis] = useState(false);
  const [specModalVis, setSpecModalVis] = useState(false);
  const [commModalVis, setCommModalVis] = useState(false);
  const [famiModalVis, setFamiModalVis] = useState(false);

  useEffect(() => {
    setResultsCount(getPlants(assembleFilters()).length);
  });

  // get Picker Items  @deprecated
  /*const getPItems = i18nName => {
    const namesEN = i18n.t(i18nName, {locale: "en"});
    return i18n.t(i18nName).map((item, i) => <Picker.Item key={namesEN[i]} value={`${namesEN[i]},${item}`} label={item} />)
  }*/

  // get Picker Items 2
  const getPItems2 = (i18nName, funk, mvGetter, mvSetter) => {
    const allEN = i18n.t('all', {locale: "en"});
    const namesEN = [allEN].concat(i18n.t(i18nName, {locale: "en"}));
    console.log(namesEN);
    return [i18n.t('all')].concat(i18n.t(i18nName)).map((item, i) => <TouchableOpacity
      style={[styles.button, styles.buttonClose]}
      key={namesEN[i]}
      //onPress={() => {setModalVis(!modalVis); funk([namesEN[i],item])}}
      onPress={() => {mvSetter(!mvGetter); funk([namesEN[i] === allEN ? "*" : namesEN[i], item])}}
    >
      <Text style={styles.textStyle}>{item}</Text>
    </TouchableOpacity>)
  }

  // get localized name of the current month (ex: "June")
  const getCurrentMonthName = () => i18n.t("floweringin")[new Date().getMonth()]

  // text must be of the form:  [{"colour":"red"}]
  // this function MUST use arrow notation
  const handleFiltersInput = (text) => text ? setFilters(text) : null

  const assembleFilters = () => {
    const fltr = [];
    colour[0] != "*" ? fltr.push({colour: colour[0]}) : null;
    leaf[0] != "*" ? fltr.push({leaf: leaf[0]}) : null;
    arrangement[0] != "*" ? fltr.push({arrangement: arrangement[0]}) : null;
    floweringin[0] != "*" ? fltr.push({floweringin: floweringin[0]}) : null;
    speciesname[0] != "*" ? fltr.push({speciesname: speciesname[0]}) : null;
    commonname[0] != "*" ? fltr.push({commonname: commonname}[0]) : null;
    familyname[0] != "*" ? fltr.push({familyname: familyname[0]}) : null;
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
          style={styles.button}
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

      <View style={styles.containerfilters}>
      {/* colour */}
      <View style={styles.pickerview}>
        <Modal
          animationType="none"
          transparent={true}
          visible={coloModalVis}
          onRequestClose={() => {
            setColoModalVis(!coloModalVis);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textsearch2}>{i18n.t('queryfiltername.0')}</Text>
              <ScrollView>
              {getPItems2("colour", setColour, coloModalVis, setColoModalVis)}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginLeft: 20}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setColoModalVis(true)}
          >
            <Text style={styles.textsearch2}>{i18n.t('queryfiltername.0')}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1}}>   </Text>
          <Text style={styles.textStyle}>{colour[1] === "*" ? i18n.t('all') : colour[1]}</Text>
        </View>
      </View>

      {/* leaf */}
      <View style={styles.pickerview}>
        <Modal
          animationType="none"
          transparent={true}
          visible={leafModalVis}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            setLeafModalVis(!leafModalVis);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textsearch2}>{i18n.t('queryfiltername.1')}</Text>
              <ScrollView>
              {getPItems2("leaf", setLeaf, leafModalVis, setLeafModalVis)}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginLeft: 20}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setLeafModalVis(true)}
          >
            <Text style={styles.textsearch2}>{i18n.t('queryfiltername.1')}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1}}>   </Text>
          <Text style={styles.textStyle}>{leaf[1] === "*" ? i18n.t('all') : leaf[1]}</Text>
        </View>
      </View>

      {/* arrangement */}
      {/*<View style={styles.pickerview}>
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
      </View>*/}
      <View style={styles.pickerview}>
        <Modal
          animationType="none"
          transparent={true}
          visible={arraModalVis}
          onRequestClose={() => {
            setArraModalVis(!arraModalVis);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textsearch2}>{i18n.t('queryfiltername.2')}</Text>
              <ScrollView>
              {getPItems2("arrangement", setArrangement, arraModalVis, setArraModalVis)}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginLeft: 20}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setArraModalVis(true)}
          >
            <Text style={styles.textsearch2}>{i18n.t('queryfiltername.2')}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1}}>   </Text>
          <Text style={styles.textStyle}>{arrangement[1] === "*" ? i18n.t('all') : arrangement[1]}</Text>
        </View>
      </View>

      {/* floweringin */}
      {/*<View style={styles.pickerview}>
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
      </View>*/}
      <View style={styles.pickerview}>
        <Modal
          animationType="none"
          transparent={true}
          visible={flowModalVis}
          onRequestClose={() => {
            setFlowModalVis(!flowModalVis);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textsearch2}>{i18n.t('queryfiltername.3')}</Text>
              <ScrollView>
              {getPItems2("floweringin", setFloweringin, flowModalVis, setFlowModalVis)}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginLeft: 20}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setFlowModalVis(true)}
          >
            <Text style={styles.textsearch2}>{i18n.t('queryfiltername.3')}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1}}>   </Text>
          <Text style={styles.textStyle}>{floweringin[1] === "*" ? i18n.t('all') : floweringin[1]}</Text>
        </View>
      </View>

      {/* speciesname */}
      {/*<View style={styles.pickerview}>
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
      </View>*/}
      <View style={styles.pickerview}>
        <Modal
          animationType="none"
          transparent={true}
          visible={specModalVis}
          onRequestClose={() => {
            setSpecModalVis(!specModalVis);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textsearch2}>{i18n.t('queryfiltername.4')}</Text>
              <ScrollView>
              {getPItems2("speciesname", setSpeciesname, specModalVis, setSpecModalVis)}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginLeft: 20}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setSpecModalVis(true)}
          >
            <Text style={styles.textsearch2}>{i18n.t('queryfiltername.4')}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1}}>   </Text>
          <Text style={styles.textStyle}>{speciesname[1] === "*" ? i18n.t('all') : speciesname[1]}</Text>
        </View>
      </View>

      {/* commonname */}
      {/*<View style={styles.pickerview}>
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
      </View>*/}
      <View style={styles.pickerview}>
        <Modal
          animationType="none"
          transparent={true}
          visible={commModalVis}
          onRequestClose={() => {
            setCommModalVis(!commModalVis);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textsearch2}>{i18n.t('queryfiltername.5')}</Text>
              <ScrollView>
              {getPItems2("commonname", setCommonname, commModalVis, setCommModalVis)}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginLeft: 20}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setCommModalVis(true)}
          >
            <Text style={styles.textsearch2}>{i18n.t('queryfiltername.5')}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1}}>   </Text>
          <Text style={styles.textStyle}>{commonname[1] === "*" ? i18n.t('all') : commonname[1]}</Text>
        </View>
      </View>

      {/* familyname */}
      {/*<View style={styles.pickerview}>
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
      </View>*/}
      <View style={styles.pickerview}>
        <Modal
          animationType="none"
          transparent={true}
          visible={famiModalVis}
          onRequestClose={() => {
            setFamiModalVis(!famiModalVis);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textsearch2}>{i18n.t('queryfiltername.6')}</Text>
              <ScrollView>
              {getPItems2("familyname", setFamilyname, famiModalVis, setFamiModalVis)}
              </ScrollView>
            </View>
          </View>
        </Modal>
        <View style={{flexDirection: "row", justifyContent: 'space-between', marginLeft: 20}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setFamiModalVis(true)}
          >
            <Text style={styles.textsearch2}>{i18n.t('queryfiltername.6')}</Text>
          </TouchableOpacity>
          <Text style={{flex: 1}}>   </Text>
          <Text style={styles.textStyle}>{familyname[1] === "*" ? i18n.t('all') : familyname[1]}</Text>
        </View>
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
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: '#3A5F0B',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  containerfilters: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    //alignItems: 'flex-start',
    paddingBottom: 10,
    backgroundColor: 'white'
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
    paddingTop: 40,
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
    fontSize: 18,
    //color: "black",
    fontWeight: "bold",
    color: '#3A5F0B'
  },

  // Modal styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  button: {
    borderRadius: 0,
    padding: 0,
    margin: 0,
  },
  buttonOpen: {
    backgroundColor: "white" //"#F194FF",
  },
  buttonClose: {
    backgroundColor: "white" //"#2196F3",
  },
  textStyle: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    //margin: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Query;
