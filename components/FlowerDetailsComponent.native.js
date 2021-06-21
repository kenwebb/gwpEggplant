import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {cstyles} from '../styles/styles';

// expo Localization
import i18n from 'i18n-js';

const FlowerDetails = (props) => {

  const Plant = props.route.params.plant; // the entire JSON for one plant
  //console.log(Plant);
  const language = i18n.locale === 'fr' ? 'fr_CA' : 'en_CA'; // en-CA fr
  //console.log(i18n.locale, language) // en_CA fr_CA

  /**
   * Convert a Day-of-the-year to a month name
   * @param doy the start day, zero-indexed
   * @param start whether doy is the start of the month (true) or the end (false)
   * @param lang "en_CA" or "fr_CA"
   */
  const dayOfYear2monthName = (doy, start, lang) => {
    const doysStart = [0,31,59,90,120,151,181,212,243,273,304,334];
    const doysEnd = [30,58,89,119,150,180,211,242,272,303,333,364];
    const monthsEN = i18n.t('floweringin', {locale: "en"}); //["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthsFR = i18n.t('floweringin'); //["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"]
    // floweringin

    const months = lang == "en_CA" ? monthsEN : monthsFR;
    const doys = start ? doysStart : doysEnd;

    let mnth = "Unknown";
    if (doy == doys[0]) {mnth = months[0]}
    switch (doy) {
      case doys[0]: mnth = months[0]; break;
      case doys[1]: mnth = months[1]; break;
      case doys[2]: mnth = months[2]; break;
      case doys[3]: mnth = months[3]; break;
      case doys[4]: mnth = months[4]; break;
      case doys[5]: mnth = months[5]; break;
      case doys[6]: mnth = months[6]; break;
      case doys[7]: mnth = months[7]; break;
      case doys[8]: mnth = months[8]; break;
      case doys[9]: mnth = months[9]; break;
      case doys[10]: mnth = months[10]; break;
      case doys[11]: mnth = months[11]; break;
      default: break;
    }
    return mnth;
  }

  const en2other = (enarr, otherarr, enstr) => otherarr[enarr.indexOf(enstr)]
  //console.log(i18n.t('colour', {locale: "en"}))
  //console.log(i18n.t('colour'))
  //console.log(en2other(i18n.t('colour', {locale: "en"}), i18n.t('colour'), Plant.colour))

  const calcNumPhotos = photos => photos.reduce((acc, curr) => curr.photo_id?.length > 0 ? acc += 1 : acc, 0)

  return (
    <View style={styles.container}>

      <View style={styles.containerphotos}>
        <Image
          source={
            calcNumPhotos(Plant.photos) >= 2 ? Plant.photos[1].imageLink : Plant.photos[0].imageLink
          }
          style={styles.plantimage}
          resizeMode='contain' // enum('DEFAULTcover', 'BESTcontain', 'NOstretch', 'NOrepeat', 'GOODcenter')
        />
      </View>

      <View style={styles.containerlabel}>
        <Text style={cstyles.imagelabel}>{Plant.species}</Text>
      </View>

      <View style={styles.containerdetails}>

        <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.0')}   </Text>
          <Text style={cstyles.bodytext}>{Plant.name[language]}</Text>
        </View>

        <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.1')}   </Text>
          <Text style={cstyles.bodytext}>{Plant.family[language]}</Text>
        </View>

         <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.2')}</Text>
          <Text style={cstyles.bodytext}>{Plant.native === true ? i18n.t("yes") : i18n.t("no")}</Text>
        </View>

         <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.3')}</Text>
          <Text style={cstyles.bodytext}>{en2other(i18n.t('colour', {locale: "en"}), i18n.t('colour'), Plant.colour)}</Text>
        </View>

         <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.4')}</Text>
          <Text style={cstyles.bodytext}>{en2other(i18n.t('leaf', {locale: "en"}), i18n.t('leaf'), Plant.leaf)}</Text>
        </View>

         <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.5')}</Text>
          <Text style={cstyles.bodytext}>{en2other(i18n.t('arrangement', {locale: "en"}), i18n.t('arrangement'), Plant.arrangement)}</Text>
        </View>

        <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.6')}   </Text>
          <Text style={cstyles.bodytext}>{dayOfYear2monthName(Plant.flowering.start, true, language)}–{dayOfYear2monthName(Plant.flowering.end, false, language)}</Text>
        </View>

         <View style={styles.detailview}>
          <Text style={cstyles.bodytext}>{i18n.t('flowerdetailslabels.7')}</Text>
          <Text style={cstyles.bodytext}>{calcNumPhotos(Plant.photos)}</Text>
        </View>

       </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  containerphotos: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerlabel: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  containerdetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailview: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  plantimage: {
    width: '100%',
    height: 275
  },
});

export default FlowerDetails;
