export function getPlants( filters ) {

  const plants =
  [
   {
     "clazz": {
       "en_CA": "Paleoherb",
       "fr_CA": "Paléoherbe"
     },
     "family": {
       "en_CA": "Cabombaceae",
       "fr_CA": "Cabombacées"
     },
     "sub_family": {
       "en_CA": "water-shield family",
       "fr_CA": "water-shield family"
     },
     "species": "Brasenia schreberi",
     "name": {
       "en_CA": "Watershield",
       "fr_CA": "Brasénie de Schreber"
     },
     "native": true,
     "colour": "red",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6150366",
         imageLink: require('../../assets/gwp/images/P6150366.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-06-15"}
       },
       {
         "photo_id": "P9070383",
         imageLink: require('../../assets/gwp/images/P9070383.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-09-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Paleoherb",
       "fr_CA": "Paléoherbe"
     },
     "family": {
       "en_CA": "Nymphaeaceae",
       "fr_CA": "Nymphéacées"
     },
     "sub_family": {
       "en_CA": "water-lily family",
       "fr_CA": "water-lily family"
     },
     "species": "Nuphar variegata",
     "name": {
       "en_CA": "Variegated pond-lily",
       "fr_CA": "Grand nénuphar jaune"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8160372",
         imageLink: require('../../assets/gwp/images/P8160372.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "9",
         "date": {"$date": "2017-08-16"}
       },
       {
         "photo_id": "P6170383",
         imageLink: require('../../assets/gwp/images/P6170383.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2015-06-17"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Paleoherb",
       "fr_CA": "Paléoherbe"
     },
     "family": {
       "en_CA": "Nymphaeaceae",
       "fr_CA": "Nymphéacées"
     },
     "sub_family": {
       "en_CA": "water-lily family",
       "fr_CA": "water-lily family"
     },
     "species": "Nymphaea odorata",
     "name": {
       "en_CA": "Fragrant water-lily",
       "fr_CA": "Nymphéa odorant"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7240405",
         imageLink: require('../../assets/gwp/images/P7240405.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "998",
         "date": {"$date": "2019-07-24"}
       },
       {
         "photo_id": "P7130350",
         imageLink: require('../../assets/gwp/images/P7130350.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2020-07-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Alismataceae",
       "fr_CA": "Alismatacées"
     },
     "sub_family": {
       "en_CA": "water-plantain family",
       "fr_CA": "water-plantain family"
     },
     "species": "Sagittaria latifolia",
     "name": {
       "en_CA": "Broad-leaved arrowhead",
       "fr_CA": "Sagittaire à larges feuilles"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8040379",
         imageLink: require('../../assets/gwp/images/P8040379.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "55",
         "date": {"$date": "2016-08-04"}
       },
       {
         "photo_id": "P7310389",
         imageLink: require('../../assets/gwp/images/P7310389.jpg'),
         "trailhead": "Keogan",
         "trail": "17",
         "date": {"$date": "2019-07-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Alliaceae",
       "fr_CA": "Alliacées"
     },
     "sub_family": {
       "en_CA": "onion family",
       "fr_CA": "onion family"
     },
     "species": "Allium tricoccum",
     "name": {
       "en_CA": "Wild leek",
       "fr_CA": "Ail des bois"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P5110385",
         imageLink: require('../../assets/gwp/images/P5110385.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "36",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "P7310397",
         imageLink: require('../../assets/gwp/images/P7310397.jpg'),
         "trailhead": "Keogan",
         "trail": "14",
         "date": {"$date": "2019-07-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Araceae",
       "fr_CA": "Aracées"
     },
     "sub_family": {
       "en_CA": "arum family",
       "fr_CA": "arum family"
     },
     "species": "Arisaema triphyllum",
     "name": {
       "en_CA": "Jack-in-the-pulpit",
       "fr_CA": "Arisème petit-prêcheur"
     },
     "native": true,
     "colour": "brown",
     "leaf": "compound",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P5140252",
         imageLink: require('../../assets/gwp/images/P5140252.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-14"}
       },
       {
         "photo_id": "P5140363",
         imageLink: require('../../assets/gwp/images/P5140363.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "999",
         "date": {"$date": "2018-05-14"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Araceae",
       "fr_CA": "Aracées"
     },
     "sub_family": {
       "en_CA": "arum family",
       "fr_CA": "arum family"
     },
     "species": "Calla palustris",
     "name": {
       "en_CA": "Wild calla",
       "fr_CA": "Calla des marais"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6100388",
         imageLink: require('../../assets/gwp/images/P6100388.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "P6200401",
         imageLink: require('../../assets/gwp/images/P6200401.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Colchiaceae",
       "fr_CA": "Colchicacées"
     },
     "sub_family": {
       "en_CA": "colchicum family",
       "fr_CA": "colchicum family"
     },
     "species": "Uvularia grandiflora",
     "name": {
       "en_CA": "Large-flowered  bellwort",
       "fr_CA": "Uvulaire à grandes fleurs"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5110371",
         imageLink: require('../../assets/gwp/images/P5110371.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "P5160373",
         imageLink: require('../../assets/gwp/images/P5160373.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2018-05-16"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Colchiaceae",
       "fr_CA": "Colchicacées"
     },
     "sub_family": {
       "en_CA": "colchicum family",
       "fr_CA": "colchicum family"
     },
     "species": "Uvularia perfoliata",
     "name": {
       "en_CA": "Perfoliate bellwort",
       "fr_CA": "Uvulaire perfoliée"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5250373",
         imageLink: require('../../assets/gwp/images/P5250373.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-25"}
       },
       {
         "photo_id": "P5280341",
         imageLink: require('../../assets/gwp/images/P5280341.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-05-28"}
       }
     ],
     "notes": {
       "en_CA": "2nd photo added on 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Hemerocallidaceae",
       "fr_CA": "Hémérocallidacées"
     },
     "sub_family": {
       "en_CA": "day-lily family",
       "fr_CA": "day-lily family"
     },
     "species": "Hemerocallis fulva",
     "name": {
       "en_CA": "Orange day-lily",
       "fr_CA": "Hémérocalle fauve"
     },
     "native": false,
     "colour": "orange",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7110401",
         imageLink: require('../../assets/gwp/images/P7110401.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P7110398",
         imageLink: require('../../assets/gwp/images/P7110398.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Iridaceae",
       "fr_CA": "Iridacées"
     },
     "sub_family": {
       "en_CA": "iris family",
       "fr_CA": "iris family"
     },
     "species": "Iris versicolor",
     "name": {
       "en_CA": "Harlequin blue flag",
       "fr_CA": "Iris versicolore"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6170376",
         imageLink: require('../../assets/gwp/images/P6170376.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "23",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P7030365",
         imageLink: require('../../assets/gwp/images/P7030365.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2017-07-03"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Liliaceae",
       "fr_CA": "Liliacées"
     },
     "sub_family": {
       "en_CA": "lily family",
       "fr_CA": "lily family"
     },
     "species": "Clintonia borealis",
     "name": {
       "en_CA": "Yellow clintonia",
       "fr_CA": "Clintonie boréale"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5280325",
         imageLink: require('../../assets/gwp/images/P5280325.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-05-28"}
       },
       {
         "photo_id": "P7280365",
         imageLink: require('../../assets/gwp/images/P7280365.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Liliaceae",
       "fr_CA": "Liliacées"
     },
     "sub_family": {
       "en_CA": "lily family",
       "fr_CA": "lily family"
     },
     "species": "Erythronium americanum",
     "name": {
       "en_CA": "Yellow trout lily",
       "fr_CA": "Érythrone dAmérique"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5040380",
         imageLink: require('../../assets/gwp/images/P5040380.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2016-05-04"}
       },
       {
         "photo_id": "P5150365",
         imageLink: require('../../assets/gwp/images/P5150365.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2019-05-15"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Liliaceae",
       "fr_CA": "Liliacées"
     },
     "sub_family": {
       "en_CA": "lily family",
       "fr_CA": "lily family"
     },
     "species": "Medeola virginiana",
     "name": {
       "en_CA": "Indian cucumber-root",
       "fr_CA": "Médéole de Virginie"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6100375",
         imageLink: require('../../assets/gwp/images/P6100375.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "P6100381",
         imageLink: require('../../assets/gwp/images/P6100381.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-10"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Liliaceae",
       "fr_CA": "Liliacées"
     },
     "sub_family": {
       "en_CA": "lily family",
       "fr_CA": "lily family"
     },
     "species": "Streptopus amplexifolius",
     "name": {
       "en_CA": "Clasping-leaved twisted-stalk",
       "fr_CA": "Streptope à feuilles embrassantes"
     },
     "native": true,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6110374",
         imageLink: require('../../assets/gwp/images/P6110374.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2018-06-11"}
       },
       {
         "photo_id": "P6110375",
         imageLink: require('../../assets/gwp/images/P6110375.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2018-06-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Liliaceae",
       "fr_CA": "Liliacées"
     },
     "sub_family": {
       "en_CA": "lily family",
       "fr_CA": "lily family"
     },
     "species": "Streptopus lanceolatus",
     "name": {
       "en_CA": "Rose twisted-stalk",
       "fr_CA": "Streptope rose"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P5140258",
         imageLink: require('../../assets/gwp/images/P5140258.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-14"}
       },
       {
         "photo_id": "P6060397",
         imageLink: require('../../assets/gwp/images/P6060397.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2019-06-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Melanthiaceae",
       "fr_CA": "Mélanthiacées"
     },
     "sub_family": {
       "en_CA": "bunchflower family",
       "fr_CA": "bunchflower family"
     },
     "species": "Trillium erectum",
     "name": {
       "en_CA": "Red trillium",
       "fr_CA": "Trille rouge"
     },
     "native": true,
     "colour": "red",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5060221",
         imageLink: require('../../assets/gwp/images/P5060221.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2015-05-06"}
       },
       {
         "photo_id": "P5070367",
         imageLink: require('../../assets/gwp/images/P5070367.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "8",
         "date": {"$date": "2018-05-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Melanthiaceae",
       "fr_CA": "Mélanthiacées"
     },
     "sub_family": {
       "en_CA": "bunchflower family",
       "fr_CA": "bunchflower family"
     },
     "species": "Trillium grandiflorum",
     "name": {
       "en_CA": "White trillium",
       "fr_CA": "Trille blanc"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5060241",
         imageLink: require('../../assets/gwp/images/P5060241.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2015-05-06"}
       },
       {
         "photo_id": "P5140369",
         imageLink: require('../../assets/gwp/images/P5140369.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "999",
         "date": {"$date": "2018-05-14"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Melanthiaceae",
       "fr_CA": "Mélanthiacées"
     },
     "sub_family": {
       "en_CA": "bunchflower family",
       "fr_CA": "bunchflower family"
     },
     "species": "Trillium undulatum",
     "name": {
       "en_CA": "Painted trillium",
       "fr_CA": "Trille ondulé"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5060237",
         imageLink: require('../../assets/gwp/images/P5060237.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2015-05-06"}
       },
       {
         "photo_id": "P5060238",
         imageLink: require('../../assets/gwp/images/P5060238.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2015-05-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Orchidaceae",
       "fr_CA": "Orchidacées"
     },
     "sub_family": {
       "en_CA": "orchid family",
       "fr_CA": "orchid family"
     },
     "species": "Coeloglossum viride",
     "name": {
       "en_CA": "Frog orchid",
       "fr_CA": "Orchis grenouille"
     },
     "native": true,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7060416",
         imageLink: require('../../assets/gwp/images/P7060416.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "25",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "P7060419",
         imageLink: require('../../assets/gwp/images/P7060419.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "25",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Orchidaceae",
       "fr_CA": "Orchidacées"
     },
     "sub_family": {
       "en_CA": "orchid family",
       "fr_CA": "orchid family"
     },
     "species": "Cypripedium acaule",
     "name": {
       "en_CA": "Pink lady's-slipper",
       "fr_CA": "Cypripède rose"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P5280329",
         imageLink: require('../../assets/gwp/images/P5280329.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-05-28"}
       },
       {
         "photo_id": "P6010354",
         imageLink: require('../../assets/gwp/images/P6010354.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-06-01"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Orchidaceae",
       "fr_CA": "Orchidacées"
     },
     "sub_family": {
       "en_CA": "orchid family",
       "fr_CA": "orchid family"
     },
     "species": "Cypripedium parviflorum",
     "name": {
       "en_CA": "Yellow lady's-slipper",
       "fr_CA": "Cypripède jaune"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6080318",
         imageLink: require('../../assets/gwp/images/P6080318.jpg'),
         "trailhead": "Lac Pink",
         "trail": "998",
         "date": {"$date": "2020-06-08"}
       },
       {
         "photo_id": "P6080316",
         imageLink: require('../../assets/gwp/images/P6080316.jpg'),
         "trailhead": "Lac Pink",
         "trail": "999",
         "date": {"$date": "2020-06-08"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Orchidaceae",
       "fr_CA": "Orchidacées"
     },
     "sub_family": {
       "en_CA": "orchid family",
       "fr_CA": "orchid family"
     },
     "species": "Epipactis helleborine",
     "name": {
       "en_CA": "Broad-leaved helleborine",
       "fr_CA": "Épipactis petit-hellébore"
     },
     "native": false,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7290393",
         imageLink: require('../../assets/gwp/images/P7290393.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-07-29"}
       },
       {
         "photo_id": "P7310379",
         imageLink: require('../../assets/gwp/images/P7310379.jpg'),
         "trailhead": "Keogan",
         "trail": "1",
         "date": {"$date": "2019-07-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Orchidaceae",
       "fr_CA": "Orchidacées"
     },
     "sub_family": {
       "en_CA": "orchid family",
       "fr_CA": "orchid family"
     },
     "species": "Platanthera psycodes",
     "name": {
       "en_CA": "Small purple fringed orchid",
       "fr_CA": "Platanthère papillon"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7150376",
         imageLink: require('../../assets/gwp/images/P7150376.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "P7150374",
         imageLink: require('../../assets/gwp/images/P7150374.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Orchidaceae",
       "fr_CA": "Orchidacées"
     },
     "sub_family": {
       "en_CA": "orchid family",
       "fr_CA": "orchid family"
     },
     "species": "Spiranthes cernua",
     "name": {
       "en_CA": "Nodding ladies'-tresses",
       "fr_CA": "Spiranthe penchée"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9020366",
         imageLink: require('../../assets/gwp/images/P9020366.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2016-09-02"}
       },
       {
         "photo_id": "P9070369",
         imageLink: require('../../assets/gwp/images/P9070369.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-09-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Pontederiaceae",
       "fr_CA": "Pontédériacées"
     },
     "sub_family": {
       "en_CA": "pickerel-weed family",
       "fr_CA": "pickerel-weed family"
     },
     "species": "Pontederia cordata",
     "name": {
       "en_CA": "Pickerelweed",
       "fr_CA": "Pontédérie à feuilles en cur"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8210366",
         imageLink: require('../../assets/gwp/images/P8210366.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2015-08-21"}
       },
       {
         "photo_id": "P7110414",
         imageLink: require('../../assets/gwp/images/P7110414.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Ruscaceae",
       "fr_CA": "Ruscacées"
     },
     "sub_family": {
       "en_CA": "butcher's broom family",
       "fr_CA": "butcher's broom family"
     },
     "species": "Maianthemum canadense",
     "name": {
       "en_CA": "Wild lily-of-the-valley",
       "fr_CA": "Maïanthème du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5210307",
         imageLink: require('../../assets/gwp/images/P5210307.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       },
       {
         "photo_id": "P6110398",
         imageLink: require('../../assets/gwp/images/P6110398.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "21",
         "date": {"$date": "2018-06-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Ruscaceae",
       "fr_CA": "Ruscacées"
     },
     "sub_family": {
       "en_CA": "butcher's broom family",
       "fr_CA": "butcher's broom family"
     },
     "species": "Maianthemum racemosum",
     "name": {
       "en_CA": "Large false Solomon's seal",
       "fr_CA": "Smilacine à grappes"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6010344",
         imageLink: require('../../assets/gwp/images/P6010344.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-06-01"}
       },
       {
         "photo_id": "P6110401",
         imageLink: require('../../assets/gwp/images/P6110401.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2018-06-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Ruscaceae",
       "fr_CA": "Ruscacées"
     },
     "sub_family": {
       "en_CA": "butcher's broom family",
       "fr_CA": "butcher's broom family"
     },
     "species": "Polygonatum biflorum",
     "name": {
       "en_CA": "Giant Solomon's seal",
       "fr_CA": "Sceau-de-Salomon biflora"
     },
     "native": true,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5250377",
         imageLink: require('../../assets/gwp/images/P5250377.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-25"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Ruscaceae",
       "fr_CA": "Ruscacées"
     },
     "sub_family": {
       "en_CA": "butcher's broom family",
       "fr_CA": "butcher's broom family"
     },
     "species": "Polygonatum pubescens",
     "name": {
       "en_CA": "Hairy Solomon's seal",
       "fr_CA": "Sceau-de-Salomon pubescent"
     },
     "native": true,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5160387",
         imageLink: require('../../assets/gwp/images/P5160387.jpg'),
         "trailhead": "Lauriault",
         "trail": "998",
         "date": {"$date": "2018-05-16"}
       },
       {
         "photo_id": "P5160389",
         imageLink: require('../../assets/gwp/images/P5160389.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2018-05-16"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Typhaceae",
       "fr_CA": "Typhacées"
     },
     "sub_family": {
       "en_CA": "cattail family",
       "fr_CA": "cattail family"
     },
     "species": "Sparganium emersum",
     "name": {
       "en_CA": "Green-fruited burreed",
       "fr_CA": "Rubanier émergé"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7110410",
         imageLink: require('../../assets/gwp/images/P7110410.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P7110409",
         imageLink: require('../../assets/gwp/images/P7110409.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Typhaceae",
       "fr_CA": "Typhacées"
     },
     "sub_family": {
       "en_CA": "cattail family",
       "fr_CA": "cattail family"
     },
     "species": "Typha angustifolia",
     "name": {
       "en_CA": "Narrow-leaved cattail",
       "fr_CA": "Quenouille à feuilles étroites"
     },
     "native": true,
     "colour": "brown",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7060463",
         imageLink: require('../../assets/gwp/images/P7060463.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Monocot",
       "fr_CA": "Monocotylédone"
     },
     "family": {
       "en_CA": "Typhaceae",
       "fr_CA": "Typhacées"
     },
     "sub_family": {
       "en_CA": "cattail family",
       "fr_CA": "cattail family"
     },
     "species": "Typha latifolia",
     "name": {
       "en_CA": "Broad-leaved cattail",
       "fr_CA": "Quenouille à feuilles larges"
     },
     "native": true,
     "colour": "brown",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7110406",
         imageLink: require('../../assets/gwp/images/P7110406.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P7060445",
         imageLink: require('../../assets/gwp/images/P7060445.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Magnoliid",
       "fr_CA": "Magnoliidée"
     },
     "family": {
       "en_CA": "Aristolochiaceae",
       "fr_CA": "Aristolochiacées"
     },
     "sub_family": {
       "en_CA": "Dutchman's-pipe family",
       "fr_CA": "Dutchman's-pipe family"
     },
     "species": "Asarum canadense",
     "name": {
       "en_CA": "Canada wild ginger",
       "fr_CA": "Asaret du Canada"
     },
     "native": true,
     "colour": "brown",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5160365",
         imageLink: require('../../assets/gwp/images/P5160365.jpg'),
         "trailhead": "Lauriault",
         "trail": "998",
         "date": {"$date": "2018-05-16"}
       },
       {
         "photo_id": "P5160377",
         imageLink: require('../../assets/gwp/images/P5160377.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2018-05-16"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Adoxaceae",
       "fr_CA": "Adoxacées"
     },
     "sub_family": {
       "en_CA": "moschatel family",
       "fr_CA": "moschatel family"
     },
     "species": "Viburnum lantanoides",
     "name": {
       "en_CA": "Hobblebush",
       "fr_CA": "Viorne bois doriginal"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5140276",
         imageLink: require('../../assets/gwp/images/P5140276.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-14"}
       },
       {
         "photo_id": "P5140275",
         imageLink: require('../../assets/gwp/images/P5140275.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-14"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Amaranthaceae",
       "fr_CA": "Amaranthacées"
     },
     "sub_family": {
       "en_CA": "amaranth family",
       "fr_CA": "amaranth family"
     },
     "species": "Chenopodium album",
     "name": {
       "en_CA": "Common lamb's quarters",
       "fr_CA": "Chénopode blanc"
     },
     "native": false,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6240368",
         imageLink: require('../../assets/gwp/images/P6240368.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-24"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Aegopodium podagraria",
     "name": {
       "en_CA": "Goutweed",
       "fr_CA": "Égopode podagraire"
     },
     "native": false,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7060448",
         imageLink: require('../../assets/gwp/images/P7060448.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Cicuta bulbifera",
     "name": {
       "en_CA": "Bulbous water-hemlock",
       "fr_CA": "Cicutaire bulbifère"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8170367",
         imageLink: require('../../assets/gwp/images/P8170367.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-08-17"}
       },
       {
         "photo_id": "P8170363",
         imageLink: require('../../assets/gwp/images/P8170363.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-08-17"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Cryptotaenia canadensis",
     "name": {
       "en_CA": "Canada honewort",
       "fr_CA": "Cryptoténie du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9170377",
         imageLink: require('../../assets/gwp/images/P9170377.jpg'),
         "trailhead": "Lac Pink",
         "trail": "998",
         "date": {"$date": "2015-09-17"}
       },
       {
         "photo_id": "P8240372",
         imageLink: require('../../assets/gwp/images/P8240372.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2017-08-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Daucus carota",
     "name": {
       "en_CA": "Wild carrot",
       "fr_CA": "Carotte sauvage"
     },
     "native": false,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010380",
         imageLink: require('../../assets/gwp/images/P8010380.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P7240368",
         imageLink: require('../../assets/gwp/images/P7240368.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "50",
         "date": {"$date": "2019-07-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Osmorhiza claytonii",
     "name": {
       "en_CA": "Hairy sweet cicely",
       "fr_CA": "Osmorhize de Clayton"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6100378",
         imageLink: require('../../assets/gwp/images/P6100378.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "P6110369",
         imageLink: require('../../assets/gwp/images/P6110369.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2018-06-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Pastinaca sativa",
     "name": {
       "en_CA": "Wild parsnip",
       "fr_CA": "Panais sauvage"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7080369",
         imageLink: require('../../assets/gwp/images/P7080369.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Sanicula marilandica",
     "name": {
       "en_CA": "Maryland sanicle",
       "fr_CA": "Sanicle du Maryland"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6150363",
         imageLink: require('../../assets/gwp/images/P6150363.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-06-15"}
       },
       {
         "photo_id": "P6110365",
         imageLink: require('../../assets/gwp/images/P6110365.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2018-06-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apiaceae",
       "fr_CA": "Apiacées"
     },
     "sub_family": {
       "en_CA": "carrot family",
       "fr_CA": "carrot family"
     },
     "species": "Sium suave",
     "name": {
       "en_CA": "Common water-parsnip",
       "fr_CA": "Berle douce"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7080381",
         imageLink: require('../../assets/gwp/images/P7080381.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P6300331",
         imageLink: require('../../assets/gwp/images/P6300331.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2020-06-30"}
       }
     ],
     "notes": {
       "en_CA": "2nd photo added on 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apocynaceae",
       "fr_CA": "Apocynacées"
     },
     "sub_family": {
       "en_CA": "milkweed family",
       "fr_CA": "milkweed family"
     },
     "species": "Apocynum androsaemifolium",
     "name": {
       "en_CA": "Spreading dogbane",
       "fr_CA": "Apocyn à feuilles d'androsème"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7080391",
         imageLink: require('../../assets/gwp/images/P7080391.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7060456",
         imageLink: require('../../assets/gwp/images/P7060456.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apocynaceae",
       "fr_CA": "Apocynacées"
     },
     "sub_family": {
       "en_CA": "milkweed family",
       "fr_CA": "milkweed family"
     },
     "species": "Asclepias incarnata",
     "name": {
       "en_CA": "Swamp milkweed",
       "fr_CA": "Asclépiade incarnate"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7130349",
         imageLink: require('../../assets/gwp/images/P7130349.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2020-07-13"}
       },
       {
         "photo_id": "P7130379",
         imageLink: require('../../assets/gwp/images/P7130379.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "999",
         "date": {"$date": "2019-07-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Apocynaceae",
       "fr_CA": "Apocynacées"
     },
     "sub_family": {
       "en_CA": "milkweed family",
       "fr_CA": "milkweed family"
     },
     "species": "Asclepias syriaca",
     "name": {
       "en_CA": "Common milkweed",
       "fr_CA": "Asclépiade commune"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7080401",
         imageLink: require('../../assets/gwp/images/P7080401.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7150366",
         imageLink: require('../../assets/gwp/images/P7150366.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "53",
         "date": {"$date": "2019-07-15"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Araliaceae",
       "fr_CA": "Araliacées"
     },
     "sub_family": {
       "en_CA": "ginseng family",
       "fr_CA": "ginseng family"
     },
     "species": "Aralia nudicaulis",
     "name": {
       "en_CA": "Wild sarsaparilla",
       "fr_CA": "Aralie à tige nue"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6010353",
         imageLink: require('../../assets/gwp/images/P6010353.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-06-01"}
       },
       {
         "photo_id": "P6110399",
         imageLink: require('../../assets/gwp/images/P6110399.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "21",
         "date": {"$date": "2018-06-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Araliaceae",
       "fr_CA": "Araliacées"
     },
     "sub_family": {
       "en_CA": "ginseng family",
       "fr_CA": "ginseng family"
     },
     "species": "Aralia racemosa",
     "name": {
       "en_CA": "American spikenard",
       "fr_CA": "Aralie à grappes"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "PA070363",
         imageLink: require('../../assets/gwp/images/PA070363.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "24",
         "date": {"$date": "2016-10-12"}
       },
       {
         "photo_id": "P8230372",
         imageLink: require('../../assets/gwp/images/P8230372.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "54",
         "date": {"$date": "2018-08-23"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Achillea millefolium",
     "name": {
       "en_CA": "Common yarrow",
       "fr_CA": "Achillée millefeuille"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8240375",
         imageLink: require('../../assets/gwp/images/P8240375.jpg'),
         "trailhead": "Champlain",
         "trail": "2",
         "date": {"$date": "2017-08-24"}
       },
       {
         "photo_id": "P9080461",
         imageLink: require('../../assets/gwp/images/P9080461.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "999",
         "date": {"$date": "2020-09-08"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Ageratina altissima",
     "name": {
       "en_CA": "White snakeroot",
       "fr_CA": "Eupatoire rugueuse"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8200426",
         imageLink: require('../../assets/gwp/images/P8200426.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2020-08-20"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Ambrosia artemisiiafolia",
     "name": {
       "en_CA": "Common ragweed",
       "fr_CA": "Petite herbe à poux"
     },
     "native": true,
     "colour": "green",
     "leaf": "compound",
     "arrangement": "opposite",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7150368",
         imageLink: require('../../assets/gwp/images/P7150368.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Anaphalis margaritacea",
     "name": {
       "en_CA": "Pearly everlasting",
       "fr_CA": "Immortelle blanche"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9170366",
         imageLink: require('../../assets/gwp/images/P9170366.jpg'),
         "trailhead": "Lac Pink",
         "trail": "998",
         "date": {"$date": "2015-09-17"}
       },
       {
         "photo_id": "P8230368",
         imageLink: require('../../assets/gwp/images/P8230368.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "54",
         "date": {"$date": "2018-08-23"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Antennaria neglecta",
     "name": {
       "en_CA": "Field pussytoes",
       "fr_CA": "Antennaire négligée"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P5250363",
         imageLink: require('../../assets/gwp/images/P5250363.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-25"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Arctium lappa",
     "name": {
       "en_CA": "Great burdock",
       "fr_CA": "Bardane majeure"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010387",
         imageLink: require('../../assets/gwp/images/P8010387.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P8060420",
         imageLink: require('../../assets/gwp/images/P8060420.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "1",
         "date": {"$date": "2020-08-06"}
       }
     ],
     "notes": {
       "en_CA": "2nd photo added on 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Bidens cernua",
     "name": {
       "en_CA": "Nodding beggarticks",
       "fr_CA": "Bident penché"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9100383",
         imageLink: require('../../assets/gwp/images/P9100383.jpg'),
         "trailhead": "Champlain",
         "trail": "9",
         "date": {"$date": "2015-10-09"}
       },
       {
         "photo_id": "P8310379",
         imageLink: require('../../assets/gwp/images/P8310379.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Bidens frondosa",
     "name": {
       "en_CA": "Devil's beggarticks",
       "fr_CA": "Bident feuillu"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "opposite",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8310374",
         imageLink: require('../../assets/gwp/images/P8310374.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       },
       {
         "photo_id": "P9070384",
         imageLink: require('../../assets/gwp/images/P9070384.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Chicorium intybus",
     "name": {
       "en_CA": "Wild chicory",
       "fr_CA": "Chicorée sauvage"
     },
     "native": false,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7080368",
         imageLink: require('../../assets/gwp/images/P7080368.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7060414",
         imageLink: require('../../assets/gwp/images/P7060414.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Cirsium arvense",
     "name": {
       "en_CA": "Canada thistle",
       "fr_CA": "Chardon des champs"
     },
     "native": false,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7040376",
         imageLink: require('../../assets/gwp/images/P7040376.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2016-07-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Cirsium vulgare",
     "name": {
       "en_CA": "Bull thistle",
       "fr_CA": "Chardon vulgaire"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010395",
         imageLink: require('../../assets/gwp/images/P8010395.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Doellingeria umbellata",
     "name": {
       "en_CA": "Flat-top white aster",
       "fr_CA": "Aster à ombelles"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9020372",
         imageLink: require('../../assets/gwp/images/P9020372.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2016-09-02"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Echinops sphaerocephalus",
     "name": {
       "en_CA": "Great globe-thistle",
       "fr_CA": "Oursin à têtes rondes"
     },
     "native": false,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7150378",
         imageLink: require('../../assets/gwp/images/P7150378.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "P8240382",
         imageLink: require('../../assets/gwp/images/P8240382.jpg'),
         "trailhead": "Champlain",
         "trail": "1",
         "date": {"$date": "2017-08-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Erigeron philadelphicus",
     "name": {
       "en_CA": "Philadelphia fleabane",
       "fr_CA": "Vergerette de Philadelphie"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6240362",
         imageLink: require('../../assets/gwp/images/P6240362.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-24"}
       },
       {
         "photo_id": "P6200362",
         imageLink: require('../../assets/gwp/images/P6200362.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Erigeron strigosus",
     "name": {
       "en_CA": "Rough fleabane",
       "fr_CA": "Vergerette rude"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7080398",
         imageLink: require('../../assets/gwp/images/P7080398.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7060458",
         imageLink: require('../../assets/gwp/images/P7060458.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Eupatorium perfoliatum",
     "name": {
       "en_CA": "Common boneset",
       "fr_CA": "Eupatoire perfoliée"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8170371",
         imageLink: require('../../assets/gwp/images/P8170371.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-08-17"}
       },
       {
         "photo_id": "P7280375",
         imageLink: require('../../assets/gwp/images/P7280375.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Eurybia macrophylla",
     "name": {
       "en_CA": "Large-leaved aster",
       "fr_CA": "Aster à grandes feuilles"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8220365",
         imageLink: require('../../assets/gwp/images/P8220365.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "15",
         "date": {"$date": "2016-08-22"}
       },
       {
         "photo_id": "P9210374",
         imageLink: require('../../assets/gwp/images/P9210374.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "999",
         "date": {"$date": "2016-09-21"}
       }
     ],
     "notes": {
       "en_CA": "2nd photo added on 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Euthamia graminifolia",
     "name": {
       "en_CA": "Grass-leaved goldenrod",
       "fr_CA": "Verge d'or à feuilles de graminée"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010391",
         imageLink: require('../../assets/gwp/images/P8010391.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P7280388",
         imageLink: require('../../assets/gwp/images/P7280388.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Eutrochium maculatum",
     "name": {
       "en_CA": "Spotted Joe Pye weed",
       "fr_CA": "Eupatoire maculée"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010373",
         imageLink: require('../../assets/gwp/images/P8010373.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P8010370",
         imageLink: require('../../assets/gwp/images/P8010370.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Helianthus divaricatus",
     "name": {
       "en_CA": "Woodland sunflower",
       "fr_CA": "Hélianthe à feuilles étalées"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7290376",
         imageLink: require('../../assets/gwp/images/P7290376.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-07-29"}
       },
       {
         "photo_id": "P7130385",
         imageLink: require('../../assets/gwp/images/P7130385.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2020-07-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Hieracium aurantiacum",
     "name": {
       "en_CA": "Orange hawkweed",
       "fr_CA": "Épervière orangée"
     },
     "native": false,
     "colour": "orange",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6170379",
         imageLink: require('../../assets/gwp/images/P6170379.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "23",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6200366",
         imageLink: require('../../assets/gwp/images/P6200366.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Hieracium caespitosum",
     "name": {
       "en_CA": "Meadow hawkweed",
       "fr_CA": "Épervière des prés"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6170367",
         imageLink: require('../../assets/gwp/images/P6170367.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "31",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6150325",
         imageLink: require('../../assets/gwp/images/P6150325.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2020-06-15"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Hieracium paniculatum",
     "name": {
       "en_CA": "Panicled hawkweed",
       "fr_CA": "Épervière paniculée"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7080384",
         imageLink: require('../../assets/gwp/images/P7080384.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P6200388",
         imageLink: require('../../assets/gwp/images/P6200388.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Hieracium umbellatum",
     "name": {
       "en_CA": "Umbellate hawkweed",
       "fr_CA": "Épervière en ombelle"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6170361",
         imageLink: require('../../assets/gwp/images/P6170361.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "31",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6170362",
         imageLink: require('../../assets/gwp/images/P6170362.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "31",
         "date": {"$date": "2015-06-17"}
       }
     ],
     "notes": {
       "en_CA": "2nd photo revised on 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Inula helenium",
     "name": {
       "en_CA": "Elecampane",
       "fr_CA": "Inule aunée"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7310413",
         imageLink: require('../../assets/gwp/images/P7310413.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2020-07-31"}
       },
       {
         "photo_id": "P7310412",
         imageLink: require('../../assets/gwp/images/P7310412.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2020-07-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Lactuca canadensis",
     "name": {
       "en_CA": "Canada lettuce",
       "fr_CA": "Laitue du Canada"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7060460",
         imageLink: require('../../assets/gwp/images/P7060460.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "P7060461",
         imageLink: require('../../assets/gwp/images/P7060461.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Leucanthemum vulgare",
     "name": {
       "en_CA": "Oxeye daisy",
       "fr_CA": "Marguerite blanche"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6170381",
         imageLink: require('../../assets/gwp/images/P6170381.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "23",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6200380",
         imageLink: require('../../assets/gwp/images/P6200380.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Oclemena acuminata",
     "name": {
       "en_CA": "Whorled wood aster",
       "fr_CA": "Aster acuminé"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7150387",
         imageLink: require('../../assets/gwp/images/P7150387.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "P7280367",
         imageLink: require('../../assets/gwp/images/P7280367.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Oclemena nemoralis",
     "name": {
       "en_CA": "Bog aster",
       "fr_CA": "Aster des tourbières"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9160366",
         imageLink: require('../../assets/gwp/images/P9160366.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "53",
         "date": {"$date": "2016-09-16"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Rudbeckia hirta",
     "name": {
       "en_CA": "Black-eyed Susan",
       "fr_CA": "Rudbeckie tardive"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7080362",
         imageLink: require('../../assets/gwp/images/P7080362.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7280374",
         imageLink: require('../../assets/gwp/images/P7280374.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Rudbeckia laciniata",
     "name": {
       "en_CA": "Cut-leaved coneflower",
       "fr_CA": "Rudbeckie laciniée"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9080453",
         imageLink: require('../../assets/gwp/images/P9080453.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "998",
         "date": {"$date": "2020-09-08"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Solidago caesia",
     "name": {
       "en_CA": "Blue-stemmed goldenrod",
       "fr_CA": "Verge d'or bleuâtre"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9100369",
         imageLink: require('../../assets/gwp/images/P9100369.jpg'),
         "trailhead": "Champlain",
         "trail": "9",
         "date": {"$date": "2015-10-09"}
       },
       {
         "photo_id": "P8310363",
         imageLink: require('../../assets/gwp/images/P8310363.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Solidago canadensis",
     "name": {
       "en_CA": "Canada goldenrod",
       "fr_CA": "Verge d'or du Canada"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010393",
         imageLink: require('../../assets/gwp/images/P8010393.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P9080479",
         imageLink: require('../../assets/gwp/images/P9080479.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "999",
         "date": {"$date": "2020-09-08"}
       }
     ],
     "notes": {
       "en_CA": "2nd photo added on 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Solidago flexicaulis",
     "name": {
       "en_CA": "Zigzag goldenrod",
       "fr_CA": "Verge d'or à tige zigzagante"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 243,
       "end": 303
     },
     "photos": [
       {
         "photo_id": "P9070403",
         imageLink: require('../../assets/gwp/images/P9070403.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2018-09-07"}
       },
       {
         "photo_id": "P9070404",
         imageLink: require('../../assets/gwp/images/P9070404.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-09-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Solidago rugosa",
     "name": {
       "en_CA": "Rough-stemmed goldenrod",
       "fr_CA": "Verge d'or rugueuse"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8310366",
         imageLink: require('../../assets/gwp/images/P8310366.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       },
       {
         "photo_id": "P8310367",
         imageLink: require('../../assets/gwp/images/P8310367.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Solidago squarrosa",
     "name": {
       "en_CA": "Squarrose goldenrod",
       "fr_CA": "Verge d'or squarreuse"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9020384",
         imageLink: require('../../assets/gwp/images/P9020384.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2016-09-02"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Sonchus arvensis",
     "name": {
       "en_CA": "Field sow-thistle",
       "fr_CA": "Laiteron des champs"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9080455",
         imageLink: require('../../assets/gwp/images/P9080455.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "998",
         "date": {"$date": "2020-09-08"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Symphyotrichum boreale",
     "name": {
       "en_CA": "Rush aster",
       "fr_CA": "Aster boréal"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9020380",
         imageLink: require('../../assets/gwp/images/P9020380.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2016-09-02"}
       },
       {
         "photo_id": "P9070370",
         imageLink: require('../../assets/gwp/images/P9070370.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-09-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Symphyotrichum ciliolatum",
     "name": {
       "en_CA": "Lindley's aster",
       "fr_CA": "Aster ciliolé"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010385",
         imageLink: require('../../assets/gwp/images/P8010385.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Symphyotrichum cordifolium",
     "name": {
       "en_CA": "Heart-leaved aster",
       "fr_CA": "Aster à feuilles cordées"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9100363",
         imageLink: require('../../assets/gwp/images/P9100363.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2015-09-10"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Symphyotrichum lanceolatum",
     "name": {
       "en_CA": "White panicled aster",
       "fr_CA": "Aster lancéolé"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210399",
         imageLink: require('../../assets/gwp/images/P9210399.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Symphyotrichum lateriflorum",
     "name": {
       "en_CA": "Calico aster",
       "fr_CA": "Aster à fleurs latérales"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210362",
         imageLink: require('../../assets/gwp/images/P9210362.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Symphyotrichum novae-angliae Andrea made me do this HAH",
     "name": {
       "en_CA": "New England aster",
       "fr_CA": "Aster de Nouvelle-Angleterre"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8220368",
         imageLink: require('../../assets/gwp/images/P8220368.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "29",
         "date": {"$date": "2016-08-22"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Symphyotrichum puniceum",
     "name": {
       "en_CA": "Purple-stemmed aster",
       "fr_CA": "Aster ponceau"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8220373",
         imageLink: require('../../assets/gwp/images/P8220373.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "29",
         "date": {"$date": "2016-08-22"}
       },
       {
         "photo_id": "P8230373",
         imageLink: require('../../assets/gwp/images/P8230373.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "54",
         "date": {"$date": "2018-08-23"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Tanacetum vulgare",
     "name": {
       "en_CA": "Common tansy",
       "fr_CA": "Tanaisie vulgaire"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210389",
         imageLink: require('../../assets/gwp/images/P9210389.jpg'),
         "trailhead": "Pionniers",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "P8200430",
         imageLink: require('../../assets/gwp/images/P8200430.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "25",
         "date": {"$date": "2020-08-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Taraxacum officinale",
     "name": {
       "en_CA": "Common dandelion",
       "fr_CA": "Pissenlit officinal"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P5110384",
         imageLink: require('../../assets/gwp/images/P5110384.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "36",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Tragopogon dubius",
     "name": {
       "en_CA": "Yellow goatsbeard",
       "fr_CA": "Salsifis majeur"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8230363",
         imageLink: require('../../assets/gwp/images/P8230363.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "54",
         "date": {"$date": "2018-08-23"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Tragopogon pratensis",
     "name": {
       "en_CA": "Meadow goatsbeard",
       "fr_CA": "Salsifis des prés"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6150390",
         imageLink: require('../../assets/gwp/images/P6150390.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-06-15"}
       },
       {
         "photo_id": "P6270368",
         imageLink: require('../../assets/gwp/images/P6270368.jpg'),
         "trailhead": "Champlain",
         "trail": "1",
         "date": {"$date": "2019-06-27"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Asteraceae",
       "fr_CA": "Astéracées"
     },
     "sub_family": {
       "en_CA": "aster family",
       "fr_CA": "aster family"
     },
     "species": "Tussilago farfara",
     "name": {
       "en_CA": "Coltsfoot",
       "fr_CA": "Tussilage pas dâne"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5040398",
         imageLink: require('../../assets/gwp/images/P5040398.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2016-05-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Balsaminaceae",
       "fr_CA": "Balsaminacées"
     },
     "sub_family": {
       "en_CA": "touch-me-not family",
       "fr_CA": "touch-me-not family"
     },
     "species": "Impatiens capensis",
     "name": {
       "en_CA": "Spotted jewelweed",
       "fr_CA": "Impatiente du Cap"
     },
     "native": true,
     "colour": "orange",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8120362",
         imageLink: require('../../assets/gwp/images/P8120362.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "P8240370",
         imageLink: require('../../assets/gwp/images/P8240370.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2017-08-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Balsaminaceae",
       "fr_CA": "Balsaminacées"
     },
     "sub_family": {
       "en_CA": "touch-me-not family",
       "fr_CA": "touch-me-not family"
     },
     "species": "Impatiens pallida",
     "name": {
       "en_CA": "Pale jewelweed",
       "fr_CA": "Impatiente pâle"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9100381",
         imageLink: require('../../assets/gwp/images/P9100381.jpg'),
         "trailhead": "Champlain",
         "trail": "9",
         "date": {"$date": "2015-10-09"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Berberidaceae",
       "fr_CA": "Berbéridacées"
     },
     "sub_family": {
       "en_CA": "barberry family",
       "fr_CA": "barberry family"
     },
     "species": "Caulophyllum giganteum",
     "name": {
       "en_CA": "Giant blue cohosh",
       "fr_CA": "Caulophylle géant"
     },
     "native": true,
     "colour": "purple",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P4250367",
         imageLink: require('../../assets/gwp/images/P4250367.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "8",
         "date": {"$date": "2016-04-25"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Boraginaceae",
       "fr_CA": "Boraginacées"
     },
     "sub_family": {
       "en_CA": "borage family",
       "fr_CA": "borage family"
     },
     "species": "Echium vulgare",
     "name": {
       "en_CA": "Common viper's bugloss",
       "fr_CA": "Vipérine commune"
     },
     "native": false,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7040400",
         imageLink: require('../../assets/gwp/images/P7040400.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2016-07-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Boraginaceae",
       "fr_CA": "Boraginacées"
     },
     "sub_family": {
       "en_CA": "borage family",
       "fr_CA": "borage family"
     },
     "species": "Myosotis laxa",
     "name": {
       "en_CA": "Small forget-me-not",
       "fr_CA": "Myosotis laxiflore"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7040373",
         imageLink: require('../../assets/gwp/images/P7040373.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2016-07-04"}
       },
       {
         "photo_id": "P6110380",
         imageLink: require('../../assets/gwp/images/P6110380.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2018-06-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Brassicaceae",
       "fr_CA": "Brassicacées"
     },
     "sub_family": {
       "en_CA": "mustard family",
       "fr_CA": "mustard family"
     },
     "species": "Alliaria petiolata",
     "name": {
       "en_CA": "Garlic mustard",
       "fr_CA": "Alliaire officinale"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6220379",
         imageLink: require('../../assets/gwp/images/P6220379.jpg'),
         "trailhead": "Champlain",
         "trail": "2",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "P5240390",
         imageLink: require('../../assets/gwp/images/P5240390.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2017-05-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Brassicaceae",
       "fr_CA": "Brassicacées"
     },
     "sub_family": {
       "en_CA": "mustard family",
       "fr_CA": "mustard family"
     },
     "species": "Barbarea vulgaris",
     "name": {
       "en_CA": "Bitter wintercress",
       "fr_CA": "Barbarée vulgaire"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5280342",
         imageLink: require('../../assets/gwp/images/P5280342.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-05-28"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Brassicaceae",
       "fr_CA": "Brassicacées"
     },
     "sub_family": {
       "en_CA": "mustard family",
       "fr_CA": "mustard family"
     },
     "species": "Berteroa incana",
     "name": {
       "en_CA": "Hoary alyssum",
       "fr_CA": "Berteroa blanc"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210428",
         imageLink: require('../../assets/gwp/images/P9210428.jpg'),
         "trailhead": "Gamelin (P3)",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "P6200374",
         imageLink: require('../../assets/gwp/images/P6200374.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Brassicaceae",
       "fr_CA": "Brassicacées"
     },
     "sub_family": {
       "en_CA": "mustard family",
       "fr_CA": "mustard family"
     },
     "species": "Cardamine diphylla",
     "name": {
       "en_CA": "Two-leaved toothwort",
       "fr_CA": "Dentaire à deux feuilles"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5110361",
         imageLink: require('../../assets/gwp/images/P5110361.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "P5140364",
         imageLink: require('../../assets/gwp/images/P5140364.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "999",
         "date": {"$date": "2018-05-14"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Brassicaceae",
       "fr_CA": "Brassicacées"
     },
     "sub_family": {
       "en_CA": "mustard family",
       "fr_CA": "mustard family"
     },
     "species": "Hesperis matronalis",
     "name": {
       "en_CA": "Dame's rocket",
       "fr_CA": "Julienne des dames"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6170364",
         imageLink: require('../../assets/gwp/images/P6170364.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "31",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Brassicaceae",
       "fr_CA": "Brassicacées"
     },
     "sub_family": {
       "en_CA": "mustard family",
       "fr_CA": "mustard family"
     },
     "species": "Synapis arvensis",
     "name": {
       "en_CA": "Corn mustard",
       "fr_CA": "Moutarde des champs"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P5250388",
         imageLink: require('../../assets/gwp/images/P5250388.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-25"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Campanulaceae",
       "fr_CA": "Campanulacées"
     },
     "sub_family": {
       "en_CA": "bellflower family",
       "fr_CA": "bellflower family"
     },
     "species": "Campanula aparinoides",
     "name": {
       "en_CA": "Marsh bellflower",
       "fr_CA": "Campanule faux-gaillet"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8040373",
         imageLink: require('../../assets/gwp/images/P8040373.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "55",
         "date": {"$date": "2016-08-04"}
       },
       {
         "photo_id": "P7240382",
         imageLink: require('../../assets/gwp/images/P7240382.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "55",
         "date": {"$date": "2019-07-24"}
       }
     ],
     "notes": {
       "en_CA": "2nd photo added on 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Campanulaceae",
       "fr_CA": "Campanulacées"
     },
     "sub_family": {
       "en_CA": "bellflower family",
       "fr_CA": "bellflower family"
     },
     "species": "Campanula rapunculoides",
     "name": {
       "en_CA": "Creeping bellflower",
       "fr_CA": "Campanule fausse-raiponce"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7150370",
         imageLink: require('../../assets/gwp/images/P7150370.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Campanulaceae",
       "fr_CA": "Campanulacées"
     },
     "sub_family": {
       "en_CA": "bellflower family",
       "fr_CA": "bellflower family"
     },
     "species": "Campanula rotundifolia",
     "name": {
       "en_CA": "Bluebell of Scotland",
       "fr_CA": "Campanule à feuilles rondes"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P9100367",
         imageLink: require('../../assets/gwp/images/P9100367.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2015-09-10"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Campanulaceae",
       "fr_CA": "Campanulacées"
     },
     "sub_family": {
       "en_CA": "bellflower family",
       "fr_CA": "bellflower family"
     },
     "species": "Lobelia cardinalis",
     "name": {
       "en_CA": "Cardinal flower",
       "fr_CA": "Lobélie cardinale"
     },
     "native": true,
     "colour": "red",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8040363",
         imageLink: require('../../assets/gwp/images/P8040363.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "55",
         "date": {"$date": "2016-08-04"}
       },
       {
         "photo_id": "P7240371",
         imageLink: require('../../assets/gwp/images/P7240371.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "999",
         "date": {"$date": "2019-07-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Campanulaceae",
       "fr_CA": "Campanulacées"
     },
     "sub_family": {
       "en_CA": "bellflower family",
       "fr_CA": "bellflower family"
     },
     "species": "Lobelia inflata",
     "name": {
       "en_CA": "Indian tobacco",
       "fr_CA": "Lobélie gonflée"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8120396",
         imageLink: require('../../assets/gwp/images/P8120396.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "P8240377",
         imageLink: require('../../assets/gwp/images/P8240377.jpg'),
         "trailhead": "Champlain",
         "trail": "2",
         "date": {"$date": "2017-08-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caprifoliaceae",
       "fr_CA": "Caprifoliacées"
     },
     "sub_family": {
       "en_CA": "honeysuckle family",
       "fr_CA": "honeysuckle family"
     },
     "species": "Diervilla lonicera",
     "name": {
       "en_CA": "Northern bush-honeysuckle",
       "fr_CA": "Dièreville chèvrefeuille"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6170384",
         imageLink: require('../../assets/gwp/images/P6170384.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6200394",
         imageLink: require('../../assets/gwp/images/P6200394.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caprifoliaceae",
       "fr_CA": "Caprifoliacées"
     },
     "sub_family": {
       "en_CA": "honeysuckle family",
       "fr_CA": "honeysuckle family"
     },
     "species": "Linnaea borealis",
     "name": {
       "en_CA": "Twinflower",
       "fr_CA": "Linnée boréale"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6170386",
         imageLink: require('../../assets/gwp/images/P6170386.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P7030370",
         imageLink: require('../../assets/gwp/images/P7030370.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2017-07-03"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caprifoliaceae",
       "fr_CA": "Caprifoliacées"
     },
     "sub_family": {
       "en_CA": "honeysuckle family",
       "fr_CA": "honeysuckle family"
     },
     "species": "Lonicera canadensis",
     "name": {
       "en_CA": "Canada fly-honeysuckle",
       "fr_CA": "Chèvrefeuille du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P5180367",
         imageLink: require('../../assets/gwp/images/P5180367.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2016-05-18"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caprifoliaceae",
       "fr_CA": "Caprifoliacées"
     },
     "sub_family": {
       "en_CA": "honeysuckle family",
       "fr_CA": "honeysuckle family"
     },
     "species": "Triosteum perfoliatum",
     "name": {
       "en_CA": "Perfoliate horse-gentian",
       "fr_CA": "Trioste perfolié"
     },
     "native": true,
     "colour": "red",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6080320",
         imageLink: require('../../assets/gwp/images/P6080320.jpg'),
         "trailhead": "Lac Pink",
         "trail": "998",
         "date": {"$date": "2020-06-08"}
       },
       {
         "photo_id": "P6080321",
         imageLink: require('../../assets/gwp/images/P6080321.jpg'),
         "trailhead": "Lac Pink",
         "trail": "999",
         "date": {"$date": "2020-06-08"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caprifoliaceae",
       "fr_CA": "Caprifoliacées"
     },
     "sub_family": {
       "en_CA": "honeysuckle family",
       "fr_CA": "honeysuckle family"
     },
     "species": "Valeriana officinalis",
     "name": {
       "en_CA": "Common valerian",
       "fr_CA": "Valériane officinale"
     },
     "native": false,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7040365",
         imageLink: require('../../assets/gwp/images/P7040365.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2016-07-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caryophyllaceae",
       "fr_CA": "Caryophyllacées"
     },
     "sub_family": {
       "en_CA": "pink family",
       "fr_CA": "pink family"
     },
     "species": "Dianthus armeria",
     "name": {
       "en_CA": "Deptford pink",
       "fr_CA": "illet arméria"
     },
     "native": false,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7110385",
         imageLink: require('../../assets/gwp/images/P7110385.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caryophyllaceae",
       "fr_CA": "Caryophyllacées"
     },
     "sub_family": {
       "en_CA": "pink family",
       "fr_CA": "pink family"
     },
     "species": "Myosoton aquaticum",
     "name": {
       "en_CA": "Giant chickweed",
       "fr_CA": "Myosoton aquatique"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7310400",
         imageLink: require('../../assets/gwp/images/P7310400.jpg'),
         "trailhead": "Keogan",
         "trail": "3",
         "date": {"$date": "2019-07-31"}
       },
       {
         "photo_id": "P8310365",
         imageLink: require('../../assets/gwp/images/P8310365.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caryophyllaceae",
       "fr_CA": "Caryophyllacées"
     },
     "sub_family": {
       "en_CA": "pink family",
       "fr_CA": "pink family"
     },
     "species": "Saponaria officinalis",
     "name": {
       "en_CA": "Bouncing-bet",
       "fr_CA": "Saponaire officinale"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8120376",
         imageLink: require('../../assets/gwp/images/P8120376.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caryophyllaceae",
       "fr_CA": "Caryophyllacées"
     },
     "sub_family": {
       "en_CA": "pink family",
       "fr_CA": "pink family"
     },
     "species": "Silene latifolia",
     "name": {
       "en_CA": "White campion",
       "fr_CA": "Silène blanc"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8240385",
         imageLink: require('../../assets/gwp/images/P8240385.jpg'),
         "trailhead": "Champlain",
         "trail": "24",
         "date": {"$date": "2017-08-24"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caryophyllaceae",
       "fr_CA": "Caryophyllacées"
     },
     "sub_family": {
       "en_CA": "pink family",
       "fr_CA": "pink family"
     },
     "species": "Silene noctiflora",
     "name": {
       "en_CA": "Night-flowering catchfly",
       "fr_CA": "Silène noctiflore"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6220382",
         imageLink: require('../../assets/gwp/images/P6220382.jpg'),
         "trailhead": "Champlain",
         "trail": "1",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "P8240374",
         imageLink: require('../../assets/gwp/images/P8240374.jpg'),
         "trailhead": "Champlain",
         "trail": "2",
         "date": {"$date": "2017-08-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Caryophyllaceae",
       "fr_CA": "Caryophyllacées"
     },
     "sub_family": {
       "en_CA": "pink family",
       "fr_CA": "pink family"
     },
     "species": "Silene vulgaris",
     "name": {
       "en_CA": "Bladder campion",
       "fr_CA": "Silène enflé"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6220363",
         imageLink: require('../../assets/gwp/images/P6220363.jpg'),
         "trailhead": "Champlain",
         "trail": "1",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "P6200405",
         imageLink: require('../../assets/gwp/images/P6200405.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Convolvulaceae",
       "fr_CA": "Convolvulacées"
     },
     "sub_family": {
       "en_CA": "bindweed family",
       "fr_CA": "bindweed family"
     },
     "species": "Calystegia sepium",
     "name": {
       "en_CA": "Hedge false bindweed",
       "fr_CA": "Liseron des haies"
     },
     "native": false,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8210395",
         imageLink: require('../../assets/gwp/images/P8210395.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "9",
         "date": {"$date": "2015-08-21"}
       },
       {
         "photo_id": "P7060437",
         imageLink: require('../../assets/gwp/images/P7060437.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Cornaceae",
       "fr_CA": "Cornacées"
     },
     "sub_family": {
       "en_CA": "dogwood family",
       "fr_CA": "dogwood family"
     },
     "species": "Chamaepericlymenum canadense",
     "name": {
       "en_CA": "Bunchberry",
       "fr_CA": "Quatre-temps"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6170372",
         imageLink: require('../../assets/gwp/images/P6170372.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "23",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6100392",
         imageLink: require('../../assets/gwp/images/P6100392.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "9",
         "date": {"$date": "2016-06-10"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ericaceae",
       "fr_CA": "Éricacées"
     },
     "sub_family": {
       "en_CA": "heath family",
       "fr_CA": "heath family"
     },
     "species": "Chimaphila umbellata",
     "name": {
       "en_CA": "Common pipsissewa",
       "fr_CA": "Chimaphile à ombelles"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P5140393",
         imageLink: require('../../assets/gwp/images/P5140393.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "998",
         "date": {"$date": "2018-05-14"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ericaceae",
       "fr_CA": "Éricacées"
     },
     "sub_family": {
       "en_CA": "heath family",
       "fr_CA": "heath family"
     },
     "species": "Epigaea repens",
     "name": {
       "en_CA": "Trailing arbutus",
       "fr_CA": "Épigée rampante"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5140389",
         imageLink: require('../../assets/gwp/images/P5140389.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "998",
         "date": {"$date": "2018-05-14"}
       },
       {
         "photo_id": "P7120379",
         imageLink: require('../../assets/gwp/images/P7120379.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "9",
         "date": {"$date": "2019-07-12"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ericaceae",
       "fr_CA": "Éricacées"
     },
     "sub_family": {
       "en_CA": "heath family",
       "fr_CA": "heath family"
     },
     "species": "Gaultheria procumbens",
     "name": {
       "en_CA": "Eastern teaberry",
       "fr_CA": "Thé des bois"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8050375",
         imageLink: require('../../assets/gwp/images/P8050375.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "998",
         "date": {"$date": "2019-08-05"}
       },
       {
         "photo_id": "P8050377",
         imageLink: require('../../assets/gwp/images/P8050377.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "1",
         "date": {"$date": "2019-08-05"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ericaceae",
       "fr_CA": "Éricacées"
     },
     "sub_family": {
       "en_CA": "heath family",
       "fr_CA": "heath family"
     },
     "species": "Monotropa uniflora",
     "name": {
       "en_CA": "Indian pipe",
       "fr_CA": "Monotrope uniflore"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8120374",
         imageLink: require('../../assets/gwp/images/P8120374.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "P7030386",
         imageLink: require('../../assets/gwp/images/P7030386.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2017-07-03"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ericaceae",
       "fr_CA": "Éricacées"
     },
     "sub_family": {
       "en_CA": "heath family",
       "fr_CA": "heath family"
     },
     "species": "Pyrola elliptica",
     "name": {
       "en_CA": "Shinleaf",
       "fr_CA": "Pyrole elliptique"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7110376",
         imageLink: require('../../assets/gwp/images/P7110376.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P7150377",
         imageLink: require('../../assets/gwp/images/P7150377.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2019-07-15"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Euphorbiaceae",
       "fr_CA": "Euphorbiacées"
     },
     "sub_family": {
       "en_CA": "spurge family",
       "fr_CA": "spurge family"
     },
     "species": "Euphorbia cyparissias",
     "name": {
       "en_CA": "Cypress spurge",
       "fr_CA": "Euphorbe cyprès"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7040392",
         imageLink: require('../../assets/gwp/images/P7040392.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2016-07-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Amphicarpaea bracteata",
     "name": {
       "en_CA": "American hog peanut",
       "fr_CA": "Amphicarpe bractéolée"
     },
     "native": true,
     "colour": "purple",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8220362",
         imageLink: require('../../assets/gwp/images/P8220362.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "15",
         "date": {"$date": "2016-08-22"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Hylodesmum glutinosum",
     "name": {
       "en_CA": "Large tick-trefoil",
       "fr_CA": "Desmodie glutineuse"
     },
     "native": true,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7060390",
         imageLink: require('../../assets/gwp/images/P7060390.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "15",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Lathyrus aphaca",
     "name": {
       "en_CA": "Yellow vetchling",
       "fr_CA": "Gesse aphylle"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6220383",
         imageLink: require('../../assets/gwp/images/P6220383.jpg'),
         "trailhead": "Champlain",
         "trail": "1",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Lathyrus latifolius",
     "name": {
       "en_CA": "Everlasting pea",
       "fr_CA": "Gesse à feuilles larges"
     },
     "native": false,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7080388",
         imageLink: require('../../assets/gwp/images/P7080388.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7060425",
         imageLink: require('../../assets/gwp/images/P7060425.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Lotus corniculatus",
     "name": {
       "en_CA": "Garden bird's-foot-trefoil",
       "fr_CA": "Lotier corniculé"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7080363",
         imageLink: require('../../assets/gwp/images/P7080363.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P6200376",
         imageLink: require('../../assets/gwp/images/P6200376.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Medicago sativa",
     "name": {
       "en_CA": "Alfalfa",
       "fr_CA": "Luzerne cultivée"
     },
     "native": false,
     "colour": "purple",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7060434",
         imageLink: require('../../assets/gwp/images/P7060434.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "P9080462",
         imageLink: require('../../assets/gwp/images/P9080462.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "999",
         "date": {"$date": "2020-09-08"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Melilotus albus",
     "name": {
       "en_CA": "White sweet-clover",
       "fr_CA": "Mélilot blanc"
     },
     "native": false,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7080370",
         imageLink: require('../../assets/gwp/images/P7080370.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7310368",
         imageLink: require('../../assets/gwp/images/P7310368.jpg'),
         "trailhead": "Keogan",
         "trail": "1",
         "date": {"$date": "2019-07-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Securigera varia",
     "name": {
       "en_CA": "Purple crown-vetch",
       "fr_CA": "Coronille bigarée"
     },
     "native": false,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210381",
         imageLink: require('../../assets/gwp/images/P9210381.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "P9080481",
         imageLink: require('../../assets/gwp/images/P9080481.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "999",
         "date": {"$date": "2020-09-08"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Trifolium aureum",
     "name": {
       "en_CA": "Yellow clover",
       "fr_CA": "Trèfle doré"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8210381",
         imageLink: require('../../assets/gwp/images/P8210381.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2015-08-21"}
       },
       {
         "photo_id": "P6200384",
         imageLink: require('../../assets/gwp/images/P6200384.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Trifolium pratense",
     "name": {
       "en_CA": "Red clover",
       "fr_CA": "Trèfle rouge"
     },
     "native": false,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6240364",
         imageLink: require('../../assets/gwp/images/P6240364.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-24"}
       },
       {
         "photo_id": "P6260362",
         imageLink: require('../../assets/gwp/images/P6260362.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2017-06-26"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Trifolium repens",
     "name": {
       "en_CA": "White clover",
       "fr_CA": "Trèfle blanc"
     },
     "native": false,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210416",
         imageLink: require('../../assets/gwp/images/P9210416.jpg'),
         "trailhead": "Gamelin (P3)",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Fabaceae",
       "fr_CA": "Fabacées"
     },
     "sub_family": {
       "en_CA": "legume family",
       "fr_CA": "legume family"
     },
     "species": "Vicia cracca",
     "name": {
       "en_CA": "Tufted vetch",
       "fr_CA": "Vesce jargeau"
     },
     "native": false,
     "colour": "purple",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7030364",
         imageLink: require('../../assets/gwp/images/P7030364.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "P6250378",
         imageLink: require('../../assets/gwp/images/P6250378.jpg'),
         "trailhead": "Champlain",
         "trail": "1",
         "date": {"$date": "2018-06-25"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Geraniaceae",
       "fr_CA": "Géraniacées"
     },
     "sub_family": {
       "en_CA": "geranium family",
       "fr_CA": "geranium family"
     },
     "species": "Geranium robertianum",
     "name": {
       "en_CA": "Herb-Robert",
       "fr_CA": "Géranium de Robert"
     },
     "native": true,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6220366",
         imageLink: require('../../assets/gwp/images/P6220366.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "P6270367",
         imageLink: require('../../assets/gwp/images/P6270367.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2019-06-27"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Hydrophyllaceae",
       "fr_CA": "Hydrophyllacées"
     },
     "sub_family": {
       "en_CA": "waterleaf family",
       "fr_CA": "waterleaf family"
     },
     "species": "Hydrophyllum canadense",
     "name": {
       "en_CA": "Bluntleaf waterleaf",
       "fr_CA": "Hydrophylle du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P7240383",
         imageLink: require('../../assets/gwp/images/P7240383.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "998",
         "date": {"$date": "2019-07-24"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Hydrophyllaceae",
       "fr_CA": "Hydrophyllacées"
     },
     "sub_family": {
       "en_CA": "waterleaf family",
       "fr_CA": "waterleaf family"
     },
     "species": "Hydrophyllum virginianum",
     "name": {
       "en_CA": "Virginia waterleaf",
       "fr_CA": "Hydrophylle de Virginie"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6100407",
         imageLink: require('../../assets/gwp/images/P6100407.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "1",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "P6270370",
         imageLink: require('../../assets/gwp/images/P6270370.jpg'),
         "trailhead": "Champlain",
         "trail": "18",
         "date": {"$date": "2019-06-27"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Hypericaceae",
       "fr_CA": "Hypéricacées"
     },
     "sub_family": {
       "en_CA": "St. Johns-wort family",
       "fr_CA": "St. Johns-wort family"
     },
     "species": "Hypericum ellipticum",
     "name": {
       "en_CA": "Pale St. John's-wort",
       "fr_CA": "Millepertuis elliptique"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7040391",
         imageLink: require('../../assets/gwp/images/P7040391.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2016-07-04"}
       },
       {
         "photo_id": "P7060366",
         imageLink: require('../../assets/gwp/images/P7060366.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Hypericaceae",
       "fr_CA": "Hypéricacées"
     },
     "sub_family": {
       "en_CA": "St. Johns-wort family",
       "fr_CA": "St. Johns-wort family"
     },
     "species": "Hypericum perforatum",
     "name": {
       "en_CA": "Common St. John's-wort",
       "fr_CA": "Millepertuis commun"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010383",
         imageLink: require('../../assets/gwp/images/P8010383.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P7310375",
         imageLink: require('../../assets/gwp/images/P7310375.jpg'),
         "trailhead": "Keogan",
         "trail": "1",
         "date": {"$date": "2019-07-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Hypericaceae",
       "fr_CA": "Hypéricacées"
     },
     "sub_family": {
       "en_CA": "St. Johns-wort family",
       "fr_CA": "St. Johns-wort family"
     },
     "species": "Triadenum fraseri",
     "name": {
       "en_CA": "Fraser's St. John's-wort",
       "fr_CA": "Millepertuis de Fraser"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P9090370",
         imageLink: require('../../assets/gwp/images/P9090370.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2016-09-09"}
       },
       {
         "photo_id": "P8310376",
         imageLink: require('../../assets/gwp/images/P8310376.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Clinopodium acinos",
     "name": {
       "en_CA": "Basil thyme",
       "fr_CA": "Sarriette acinos"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010378",
         imageLink: require('../../assets/gwp/images/P8010378.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P9070395",
         imageLink: require('../../assets/gwp/images/P9070395.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-09-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Clinopodium vulgare",
     "name": {
       "en_CA": "Wild basil",
       "fr_CA": "Clinopode commun"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7110368",
         imageLink: require('../../assets/gwp/images/P7110368.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P9130384",
         imageLink: require('../../assets/gwp/images/P9130384.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2018-09-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Galeopsis tetrahit",
     "name": {
       "en_CA": "Common hemp-nettle",
       "fr_CA": "Galéopside à tige carrée"
     },
     "native": false,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7290387",
         imageLink: require('../../assets/gwp/images/P7290387.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-07-29"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Glechoma hederacea",
     "name": {
       "en_CA": "Ground ivy",
       "fr_CA": "Lierre terrestre"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6170365",
         imageLink: require('../../assets/gwp/images/P6170365.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "31",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Leonurus cardiaca",
     "name": {
       "en_CA": "Common motherwort",
       "fr_CA": "Agripaume cardiaque"
     },
     "native": false,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7060374",
         imageLink: require('../../assets/gwp/images/P7060374.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "P7060376",
         imageLink: require('../../assets/gwp/images/P7060376.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2018-07-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Lycopus uniflorus",
     "name": {
       "en_CA": "Northern water-horehound",
       "fr_CA": "Lycope à une fleur"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8210375",
         imageLink: require('../../assets/gwp/images/P8210375.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2015-08-21"}
       },
       {
         "photo_id": "P8230374",
         imageLink: require('../../assets/gwp/images/P8230374.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "54",
         "date": {"$date": "2018-08-23"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Mentha arvensis",
     "name": {
       "en_CA": "Field mint",
       "fr_CA": "Menthe des champs"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8170372",
         imageLink: require('../../assets/gwp/images/P8170372.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-08-17"}
       },
       {
         "photo_id": "P9210411",
         imageLink: require('../../assets/gwp/images/P9210411.jpg'),
         "trailhead": "Gamelin (P3)",
         "trail": "999",
         "date": {"$date": "2016-09-21"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Prunella vulgaris",
     "name": {
       "en_CA": "Common self-heal",
       "fr_CA": "Brunelle commune"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7080376",
         imageLink: require('../../assets/gwp/images/P7080376.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P6200408",
         imageLink: require('../../assets/gwp/images/P6200408.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Scutellaria galericulata",
     "name": {
       "en_CA": "Marsh skullcap",
       "fr_CA": "Scutellaire à feuilles dépilobe"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7110416",
         imageLink: require('../../assets/gwp/images/P7110416.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P8210386",
         imageLink: require('../../assets/gwp/images/P8210386.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "9",
         "date": {"$date": "2015-08-21"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Stachys tenuifolia",
     "name": {
       "en_CA": "Smooth hedge-nettle",
       "fr_CA": "Épiaire à feuilles minces"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7080400",
         imageLink: require('../../assets/gwp/images/P7080400.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lamiaceae",
       "fr_CA": "Lamiacées"
     },
     "sub_family": {
       "en_CA": "mint family",
       "fr_CA": "mint family"
     },
     "species": "Teucrium canadense",
     "name": {
       "en_CA": "Canada germander",
       "fr_CA": "Germandrée du Canada"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8040385",
         imageLink: require('../../assets/gwp/images/P8040385.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "73",
         "date": {"$date": "2016-08-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lentibulariaceae",
       "fr_CA": "Lentibulariacées"
     },
     "sub_family": {
       "en_CA": "bladderwort family",
       "fr_CA": "bladderwort family"
     },
     "species": "Utricularia vulgaris",
     "name": {
       "en_CA": "Common bladderwort",
       "fr_CA": "Utriculaire vulgaire"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "none",
     "arrangement": "none",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6240371",
         imageLink: require('../../assets/gwp/images/P6240371.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "P7240407",
         imageLink: require('../../assets/gwp/images/P7240407.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "999",
         "date": {"$date": "2019-07-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Lythraceae",
       "fr_CA": "Lythracées"
     },
     "sub_family": {
       "en_CA": "loosestrife family",
       "fr_CA": "loosestrife family"
     },
     "species": "Lythrum salicaria",
     "name": {
       "en_CA": "Purple loosestrife",
       "fr_CA": "Salicaire commune"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010374",
         imageLink: require('../../assets/gwp/images/P8010374.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P7280381",
         imageLink: require('../../assets/gwp/images/P7280381.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Malvaceae",
       "fr_CA": "Malvacées"
     },
     "sub_family": {
       "en_CA": "mallow family",
       "fr_CA": "mallow family"
     },
     "species": "Malva moschata",
     "name": {
       "en_CA": "Musk mallow",
       "fr_CA": "Mauve musquée"
     },
     "native": false,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210447",
         imageLink: require('../../assets/gwp/images/P9210447.jpg'),
         "trailhead": "Gamelin (P3)",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "P6300333",
         imageLink: require('../../assets/gwp/images/P6300333.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2020-06-30"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Malvaceae",
       "fr_CA": "Malvacées"
     },
     "sub_family": {
       "en_CA": "mallow family",
       "fr_CA": "mallow family"
     },
     "species": "Malva neglecta",
     "name": {
       "en_CA": "Common mallow",
       "fr_CA": "Mauve négligée"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210424",
         imageLink: require('../../assets/gwp/images/P9210424.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Montiaceae",
       "fr_CA": "Montiacées"
     },
     "sub_family": {
       "en_CA": "montia family",
       "fr_CA": "montia family"
     },
     "species": "Claytonia caroliniana",
     "name": {
       "en_CA": "Carolina spring beauty",
       "fr_CA": "Claytonie feuille-large"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5060216",
         imageLink: require('../../assets/gwp/images/P5060216.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2015-05-06"}
       },
       {
         "photo_id": "P5070382",
         imageLink: require('../../assets/gwp/images/P5070382.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-05-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Onagraceae",
       "fr_CA": "Onagracées"
     },
     "sub_family": {
       "en_CA": "evening-primrose family",
       "fr_CA": "evening-primrose family"
     },
     "species": "Chamaenerion angustifolium",
     "name": {
       "en_CA": "Fireweed",
       "fr_CA": "Épilobe à feuilles étroites"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8050388",
         imageLink: require('../../assets/gwp/images/P8050388.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "1",
         "date": {"$date": "2019-08-05"}
       },
       {
         "photo_id": "P8050366",
         imageLink: require('../../assets/gwp/images/P8050366.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "1",
         "date": {"$date": "2019-08-05"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Onagraceae",
       "fr_CA": "Onagracées"
     },
     "sub_family": {
       "en_CA": "evening-primrose family",
       "fr_CA": "evening-primrose family"
     },
     "species": "Circaea canadensis",
     "name": {
       "en_CA": "Broad-leaved enchanter's-nightshade",
       "fr_CA": "Circée du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7150381",
         imageLink: require('../../assets/gwp/images/P7150381.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "P7110370",
         imageLink: require('../../assets/gwp/images/P7110370.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2016-07-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Onagraceae",
       "fr_CA": "Onagracées"
     },
     "sub_family": {
       "en_CA": "evening-primrose family",
       "fr_CA": "evening-primrose family"
     },
     "species": "Epilobium hirsutum",
     "name": {
       "en_CA": "Hairy willowherb",
       "fr_CA": "Épilobe hirsute"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7310408",
         imageLink: require('../../assets/gwp/images/P7310408.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2020-07-31"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Onagraceae",
       "fr_CA": "Onagracées"
     },
     "sub_family": {
       "en_CA": "evening-primrose family",
       "fr_CA": "evening-primrose family"
     },
     "species": "Oenothera biennis",
     "name": {
       "en_CA": "Common evening-primrose",
       "fr_CA": "Onagre bisannuelle"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7110390",
         imageLink: require('../../assets/gwp/images/P7110390.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Onagraceae",
       "fr_CA": "Onagracées"
     },
     "sub_family": {
       "en_CA": "evening-primrose family",
       "fr_CA": "evening-primrose family"
     },
     "species": "Oenothera parviflora",
     "name": {
       "en_CA": "Small-flowered evening-primrose",
       "fr_CA": "Onagre parviflore"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010382",
         imageLink: require('../../assets/gwp/images/P8010382.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Onagraceae",
       "fr_CA": "Onagracées"
     },
     "sub_family": {
       "en_CA": "evening-primrose family",
       "fr_CA": "evening-primrose family"
     },
     "species": "Oenothera pilosella",
     "name": {
       "en_CA": "Meadow evening-primrose",
       "fr_CA": "Onagre piloselle"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8010376",
         imageLink: require('../../assets/gwp/images/P8010376.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Orobanchaceae",
       "fr_CA": "Orobanchacées"
     },
     "sub_family": {
       "en_CA": "broomrape family",
       "fr_CA": "broomrape family"
     },
     "species": "Agalinis tenuifolia",
     "name": {
       "en_CA": "Slender-leaved false foxglove",
       "fr_CA": "Gérardie à feuilles ténues"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8200431",
         imageLink: require('../../assets/gwp/images/P8200431.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "25",
         "date": {"$date": "2020-08-20"}
       },
       {
         "photo_id": "P8210377",
         imageLink: require('../../assets/gwp/images/P8210377.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2015-08-21"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Orobanchaceae",
       "fr_CA": "Orobanchacées"
     },
     "sub_family": {
       "en_CA": "broomrape family",
       "fr_CA": "broomrape family"
     },
     "species": "Epifagus virginiana",
     "name": {
       "en_CA": "Beechdrops",
       "fr_CA": "Épifage de Virginie"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 212,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9070402",
         imageLink: require('../../assets/gwp/images/P9070402.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "8",
         "date": {"$date": "2018-09-07"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Orobanchaceae",
       "fr_CA": "Orobanchacées"
     },
     "sub_family": {
       "en_CA": "broomrape family",
       "fr_CA": "broomrape family"
     },
     "species": "Euphrasia nemorosa",
     "name": {
       "en_CA": "Common eyebright",
       "fr_CA": "Euphraise des bois"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9090373",
         imageLink: require('../../assets/gwp/images/P9090373.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2016-09-09"}
       },
       {
         "photo_id": "P8210389",
         imageLink: require('../../assets/gwp/images/P8210389.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "9",
         "date": {"$date": "2015-08-21"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Orobanchaceae",
       "fr_CA": "Orobanchacées"
     },
     "sub_family": {
       "en_CA": "broomrape family",
       "fr_CA": "broomrape family"
     },
     "species": "Pedicularis canadensis",
     "name": {
       "en_CA": "Canada lousewort",
       "fr_CA": "Pédiculaire du Canada"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P5210319",
         imageLink: require('../../assets/gwp/images/P5210319.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       },
       {
         "photo_id": "P5210318",
         imageLink: require('../../assets/gwp/images/P5210318.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Oxalidaceae",
       "fr_CA": "Oxalidacées"
     },
     "sub_family": {
       "en_CA": "wood-sorrel family",
       "fr_CA": "wood-sorrel family"
     },
     "species": "Oxalis corniculata",
     "name": {
       "en_CA": "Creeping wood-sorrel",
       "fr_CA": "Oxalide cornue"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8220377",
         imageLink: require('../../assets/gwp/images/P8220377.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "29",
         "date": {"$date": "2016-08-22"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Oxalidaceae",
       "fr_CA": "Oxalidacées"
     },
     "sub_family": {
       "en_CA": "wood-sorrel family",
       "fr_CA": "wood-sorrel family"
     },
     "species": "Oxalis dillenii",
     "name": {
       "en_CA": "Slender yellow wood-sorrel",
       "fr_CA": "Oxalide de Dillenius"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6150388",
         imageLink: require('../../assets/gwp/images/P6150388.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-06-15"}
       },
       {
         "photo_id": "P7310401",
         imageLink: require('../../assets/gwp/images/P7310401.jpg'),
         "trailhead": "Keogan",
         "trail": "1",
         "date": {"$date": "2019-07-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Papaveraceae",
       "fr_CA": "Papavéracées"
     },
     "sub_family": {
       "en_CA": "poppy family",
       "fr_CA": "poppy family"
     },
     "species": "Capnoides sempervirens",
     "name": {
       "en_CA": "Pink corydalis",
       "fr_CA": "Corydale toujours verte"
     },
     "native": true,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P5280326",
         imageLink: require('../../assets/gwp/images/P5280326.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-05-28"}
       },
       {
         "photo_id": "PA130373",
         imageLink: require('../../assets/gwp/images/PA130373.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "6",
         "date": {"$date": "2018-10-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Papaveraceae",
       "fr_CA": "Papavéracées"
     },
     "sub_family": {
       "en_CA": "poppy family",
       "fr_CA": "poppy family"
     },
     "species": "Dicentra canadensis",
     "name": {
       "en_CA": "Squirrel-corn",
       "fr_CA": "Dicentre du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P5210320",
         imageLink: require('../../assets/gwp/images/P5210320.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       },
       {
         "photo_id": "P5140264",
         imageLink: require('../../assets/gwp/images/P5140264.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-14"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Papaveraceae",
       "fr_CA": "Papavéracées"
     },
     "sub_family": {
       "en_CA": "poppy family",
       "fr_CA": "poppy family"
     },
     "species": "Dicentra cucullaria",
     "name": {
       "en_CA": "Dutchman's breeches",
       "fr_CA": "Dicentre capuchon-jaune"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P4290205",
         imageLink: require('../../assets/gwp/images/P4290205.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2015-04-29"}
       },
       {
         "photo_id": "P5150368",
         imageLink: require('../../assets/gwp/images/P5150368.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2019-05-15"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Papaveraceae",
       "fr_CA": "Papavéracées"
     },
     "sub_family": {
       "en_CA": "poppy family",
       "fr_CA": "poppy family"
     },
     "species": "Sanguinaria canadensis",
     "name": {
       "en_CA": "Bloodroot",
       "fr_CA": "Sanguinaire du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P4290204",
         imageLink: require('../../assets/gwp/images/P4290204.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2015-04-29"}
       },
       {
         "photo_id": "P5040377",
         imageLink: require('../../assets/gwp/images/P5040377.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2016-05-04"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Phrymaceae",
       "fr_CA": "Phrymacées"
     },
     "sub_family": {
       "en_CA": "lopseed family",
       "fr_CA": "lopseed family"
     },
     "species": "Mimulus ringens",
     "name": {
       "en_CA": "Square-stemmed monkeyflower",
       "fr_CA": "Mimule à fleurs entrouvertes"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8040376",
         imageLink: require('../../assets/gwp/images/P8040376.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "55",
         "date": {"$date": "2016-08-04"}
       },
       {
         "photo_id": "P8160375",
         imageLink: require('../../assets/gwp/images/P8160375.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "9",
         "date": {"$date": "2017-08-16"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Phrymaceae",
       "fr_CA": "Phrymacées"
     },
     "sub_family": {
       "en_CA": "lopseed family",
       "fr_CA": "lopseed family"
     },
     "species": "Phryma leptostachya",
     "name": {
       "en_CA": "Lopseed",
       "fr_CA": "Phryma à épis grêles"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7150388",
         imageLink: require('../../assets/gwp/images/P7150388.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "P8240367",
         imageLink: require('../../assets/gwp/images/P8240367.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2017-08-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Plantaginaceae",
       "fr_CA": "Plantaginacées"
     },
     "sub_family": {
       "en_CA": "plantain family",
       "fr_CA": "plantain family"
     },
     "species": "Chelone glabra",
     "name": {
       "en_CA": "White turtlehead",
       "fr_CA": "Galane glabre"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8120380",
         imageLink: require('../../assets/gwp/images/P8120380.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "P8240388",
         imageLink: require('../../assets/gwp/images/P8240388.jpg'),
         "trailhead": "Champlain",
         "trail": "24",
         "date": {"$date": "2017-08-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Plantaginaceae",
       "fr_CA": "Plantaginacées"
     },
     "sub_family": {
       "en_CA": "plantain family",
       "fr_CA": "plantain family"
     },
     "species": "Linaria vulgaris",
     "name": {
       "en_CA": "Butter-and-eggs",
       "fr_CA": "Linaire vulgaire"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9090384",
         imageLink: require('../../assets/gwp/images/P9090384.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2016-09-09"}
       },
       {
         "photo_id": "P8310377",
         imageLink: require('../../assets/gwp/images/P8310377.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-08-31"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Plantaginaceae",
       "fr_CA": "Plantaginacées"
     },
     "sub_family": {
       "en_CA": "plantain family",
       "fr_CA": "plantain family"
     },
     "species": "Penstemon pallidus",
     "name": {
       "en_CA": "Pale beardtongue",
       "fr_CA": "Penstémon pâle"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7060401",
         imageLink: require('../../assets/gwp/images/P7060401.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "15",
         "date": {"$date": "2018-07-06"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Plantaginaceae",
       "fr_CA": "Plantaginacées"
     },
     "sub_family": {
       "en_CA": "plantain family",
       "fr_CA": "plantain family"
     },
     "species": "Plantago major",
     "name": {
       "en_CA": "Common plantain",
       "fr_CA": "Plantain majeur"
     },
     "native": false,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 303
     },
     "photos": [
       {
         "photo_id": "P7280394",
         imageLink: require('../../assets/gwp/images/P7280394.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       },
       {
         "photo_id": "P8230365",
         imageLink: require('../../assets/gwp/images/P8230365.jpg'),
         "trailhead": "Lac Renaud",
         "trail": "54",
         "date": {"$date": "2018-08-23"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Plantaginaceae",
       "fr_CA": "Plantaginacées"
     },
     "sub_family": {
       "en_CA": "plantain family",
       "fr_CA": "plantain family"
     },
     "species": "Veronica officinalis",
     "name": {
       "en_CA": "Common speedwell",
       "fr_CA": "Véronique officinale"
     },
     "native": false,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6150384",
         imageLink: require('../../assets/gwp/images/P6150384.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-06-15"}
       },
       {
         "photo_id": "P6260372",
         imageLink: require('../../assets/gwp/images/P6260372.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2017-06-26"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Polygonaceae",
       "fr_CA": "Polygonacées"
     },
     "sub_family": {
       "en_CA": "buckwheat family",
       "fr_CA": "buckwheat family"
     },
     "species": "Fallopia cilinodis",
     "name": {
       "en_CA": "Fringed black bindweed",
       "fr_CA": "Renouée à noeuds ciliés"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7150384",
         imageLink: require('../../assets/gwp/images/P7150384.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "28",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Polygonaceae",
       "fr_CA": "Polygonacées"
     },
     "sub_family": {
       "en_CA": "buckwheat family",
       "fr_CA": "buckwheat family"
     },
     "species": "Persicaria pensylvanica",
     "name": {
       "en_CA": "Pennsylvania smartweed",
       "fr_CA": "Renouée de Pennsylvanie"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P9210394",
         imageLink: require('../../assets/gwp/images/P9210394.jpg'),
         "trailhead": "Pionniers",
         "trail": "998",
         "date": {"$date": "2016-09-21"}
       },
       {
         "photo_id": "P9130390",
         imageLink: require('../../assets/gwp/images/P9130390.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2018-09-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Polygonaceae",
       "fr_CA": "Polygonacées"
     },
     "sub_family": {
       "en_CA": "buckwheat family",
       "fr_CA": "buckwheat family"
     },
     "species": "Persicaria sagittata",
     "name": {
       "en_CA": "Arrow-leaved smartweed",
       "fr_CA": "Renouée sagittée"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8170368",
         imageLink: require('../../assets/gwp/images/P8170368.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "32",
         "date": {"$date": "2016-08-17"}
       },
       {
         "photo_id": "P9130398",
         imageLink: require('../../assets/gwp/images/P9130398.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2018-09-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Primulaceae",
       "fr_CA": "Primulacées"
     },
     "sub_family": {
       "en_CA": "primrose family",
       "fr_CA": "primrose family"
     },
     "species": "Lysimachia ciliata",
     "name": {
       "en_CA": "Fringed yellow loosestrife",
       "fr_CA": "Lysimaque ciliée"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8010389",
         imageLink: require('../../assets/gwp/images/P8010389.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2015-08-01"}
       },
       {
         "photo_id": "P7280372",
         imageLink: require('../../assets/gwp/images/P7280372.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Primulaceae",
       "fr_CA": "Primulacées"
     },
     "sub_family": {
       "en_CA": "primrose family",
       "fr_CA": "primrose family"
     },
     "species": "Lysimachia terrestris",
     "name": {
       "en_CA": "Swamp yellow loosestrife",
       "fr_CA": "Lysimaque terrestre"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7110404",
         imageLink: require('../../assets/gwp/images/P7110404.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "72",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P7130390",
         imageLink: require('../../assets/gwp/images/P7130390.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2020-07-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Primulaceae",
       "fr_CA": "Primulacées"
     },
     "sub_family": {
       "en_CA": "primrose family",
       "fr_CA": "primrose family"
     },
     "species": "Lysimachia thyrsiflora",
     "name": {
       "en_CA": "Tufted yellow loosestrife",
       "fr_CA": "Lysimaque thyrsiflore"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6200407",
         imageLink: require('../../assets/gwp/images/P6200407.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "998",
         "date": {"$date": "2018-06-20"}
       },
       {
         "photo_id": "P6200406",
         imageLink: require('../../assets/gwp/images/P6200406.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Primulaceae",
       "fr_CA": "Primulacées"
     },
     "sub_family": {
       "en_CA": "primrose family",
       "fr_CA": "primrose family"
     },
     "species": "Trientalis borealis",
     "name": {
       "en_CA": "Northern starflower",
       "fr_CA": "Trientale boréale"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6100383",
         imageLink: require('../../assets/gwp/images/P6100383.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "P5280337",
         imageLink: require('../../assets/gwp/images/P5280337.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-05-28"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Actaea pachypoda",
     "name": {
       "en_CA": "White baneberry",
       "fr_CA": "Actée blanche"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5210310",
         imageLink: require('../../assets/gwp/images/P5210310.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       },
       {
         "photo_id": "P5210315",
         imageLink: require('../../assets/gwp/images/P5210315.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Actaea rubra",
     "name": {
       "en_CA": "Red baneberry",
       "fr_CA": "Actée rouge"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5140261",
         imageLink: require('../../assets/gwp/images/P5140261.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-14"}
       },
       {
         "photo_id": "P5240381",
         imageLink: require('../../assets/gwp/images/P5240381.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2017-05-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Anemone acutiloba",
     "name": {
       "en_CA": "Sharp-lobed hepatica",
       "fr_CA": "Hépatique à lobes aigus"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P4210374",
         imageLink: require('../../assets/gwp/images/P4210374.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2016-04-21"}
       },
       {
         "photo_id": "P4220367",
         imageLink: require('../../assets/gwp/images/P4220367.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2019-04-22"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Anemone americana",
     "name": {
       "en_CA": "Round-lobed hepatica",
       "fr_CA": "Hépatique à lobes ronds"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5110388",
         imageLink: require('../../assets/gwp/images/P5110388.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "36",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "P5070391",
         imageLink: require('../../assets/gwp/images/P5070391.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-05-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Anemone canadensis",
     "name": {
       "en_CA": "Canada anemone",
       "fr_CA": "Anémone du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6220376",
         imageLink: require('../../assets/gwp/images/P6220376.jpg'),
         "trailhead": "Champlain",
         "trail": "2",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "P6260366",
         imageLink: require('../../assets/gwp/images/P6260366.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2017-06-26"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Aquilegia canadensis",
     "name": {
       "en_CA": "Red columbine",
       "fr_CA": "Ancolie du Canada"
     },
     "native": true,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6100397",
         imageLink: require('../../assets/gwp/images/P6100397.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "9",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "P6010310",
         imageLink: require('../../assets/gwp/images/P6010310.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "1",
         "date": {"$date": "2020-06-01"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Caltha palustris",
     "name": {
       "en_CA": "Yellow marsh marigold",
       "fr_CA": "Populage des marais"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5140279",
         imageLink: require('../../assets/gwp/images/P5140279.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-14"}
       },
       {
         "photo_id": "P6250380",
         imageLink: require('../../assets/gwp/images/P6250380.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-06-25"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Clematis virginiana",
     "name": {
       "en_CA": "Virginia clematis",
       "fr_CA": "Clématite de Virginie"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8120385",
         imageLink: require('../../assets/gwp/images/P8120385.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "P8200433",
         imageLink: require('../../assets/gwp/images/P8200433.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "5",
         "date": {"$date": "2020-08-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Ranunculus abortivus",
     "name": {
       "en_CA": "Kidney-leaved buttercup",
       "fr_CA": "Renoncule abortive"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5210312",
         imageLink: require('../../assets/gwp/images/P5210312.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       },
       {
         "photo_id": "P6060409",
         imageLink: require('../../assets/gwp/images/P6060409.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2019-06-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Ranunculus acris",
     "name": {
       "en_CA": "Common buttercup",
       "fr_CA": "Renoncule âcre"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6170363",
         imageLink: require('../../assets/gwp/images/P6170363.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "31",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6200385",
         imageLink: require('../../assets/gwp/images/P6200385.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Ranunculus repens",
     "name": {
       "en_CA": "Creeping buttercup",
       "fr_CA": "Renoncule rampante"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6250392",
         imageLink: require('../../assets/gwp/images/P6250392.jpg'),
         "trailhead": "Champlain",
         "trail": "998",
         "date": {"$date": "2018-06-25"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Thalictrum dioicum",
     "name": {
       "en_CA": "Early meadow-rue",
       "fr_CA": "Pigamon dioïque"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 150
     },
     "photos": [
       {
         "photo_id": "P5160370",
         imageLink: require('../../assets/gwp/images/P5160370.jpg'),
         "trailhead": "Lauriault",
         "trail": "998",
         "date": {"$date": "2018-05-16"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "buttercup family"
     },
     "species": "Thalictrum pubescens",
     "name": {
       "en_CA": "Tall meadow-rue",
       "fr_CA": "Pigamon pubescent"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7080379",
         imageLink: require('../../assets/gwp/images/P7080379.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "P7150371",
         imageLink: require('../../assets/gwp/images/P7150371.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2019-07-15"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Agrimonia gryposepala",
     "name": {
       "en_CA": "Hooked agrimony",
       "fr_CA": "Aigremoine à sépales crochus"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8120364",
         imageLink: require('../../assets/gwp/images/P8120364.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "P7130387",
         imageLink: require('../../assets/gwp/images/P7130387.jpg'),
         "trailhead": "O'Brien (P11)",
         "trail": "36",
         "date": {"$date": "2020-07-13"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Fragaria vesca",
     "name": {
       "en_CA": "Woodland strawberry",
       "fr_CA": "Fraisier des bois"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P5070398",
         imageLink: require('../../assets/gwp/images/P5070398.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2018-05-07"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Fragaria virginiana",
     "name": {
       "en_CA": "Wild strawberry",
       "fr_CA": "Fraisier des champs"
     },
     "native": true,
     "colour": "white",
     "leaf": "compound",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P5110393",
         imageLink: require('../../assets/gwp/images/P5110393.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Geum aleppicum",
     "name": {
       "en_CA": "Yellow avens",
       "fr_CA": "Benoîte d'Alep"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7080372",
         imageLink: require('../../assets/gwp/images/P7080372.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Geum canadense",
     "name": {
       "en_CA": "Canada avens",
       "fr_CA": "Benoîte du Canada"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7150362",
         imageLink: require('../../assets/gwp/images/P7150362.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2015-07-15"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Geum urbanum",
     "name": {
       "en_CA": "Wood avens",
       "fr_CA": "Benoîte commune"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6010361",
         imageLink: require('../../assets/gwp/images/P6010361.jpg'),
         "trailhead": "Blanchet (P13)",
         "trail": "62",
         "date": {"$date": "2015-06-01"}
       },
       {
         "photo_id": "P6250382",
         imageLink: require('../../assets/gwp/images/P6250382.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-06-25"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Potentilla argentea",
     "name": {
       "en_CA": "Silvery cinquefoil",
       "fr_CA": "Potentille argentée"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6170390",
         imageLink: require('../../assets/gwp/images/P6170390.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Potentilla norvegica",
     "name": {
       "en_CA": "Norwegian cinquefoil",
       "fr_CA": "Potentille de Norvège"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7080393",
         imageLink: require('../../assets/gwp/images/P7080393.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2015-07-08"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Potentilla recta",
     "name": {
       "en_CA": "Sulphur cinquefoil",
       "fr_CA": "Potentille dressée"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P7110419",
         imageLink: require('../../assets/gwp/images/P7110419.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "P7240418",
         imageLink: require('../../assets/gwp/images/P7240418.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "50",
         "date": {"$date": "2019-07-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Potentilla simplex",
     "name": {
       "en_CA": "Old field cinquefoil",
       "fr_CA": "Potentille simple"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 303
     },
     "photos": [
       {
         "photo_id": "P9080465",
         imageLink: require('../../assets/gwp/images/P9080465.jpg'),
         "trailhead": "Lac des Fées",
         "trail": "998",
         "date": {"$date": "2020-09-08"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Rosa acicularis",
     "name": {
       "en_CA": "Prickly rose",
       "fr_CA": "Rosier aciculaire"
     },
     "native": true,
     "colour": "pink",
     "leaf": "compound",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7030365",
         imageLink: require('../../assets/gwp/images/P7030365.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2015-06-17"}
       },
       {
         "photo_id": "P6200409",
         imageLink: require('../../assets/gwp/images/P6200409.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Spiraea alba",
     "name": {
       "en_CA": "White meadowsweet",
       "fr_CA": "Spirée blanche"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7290374",
         imageLink: require('../../assets/gwp/images/P7290374.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-07-29"}
       },
       {
         "photo_id": "P8220381",
         imageLink: require('../../assets/gwp/images/P8220381.jpg'),
         "trailhead": "Relais Plein Air (P2)",
         "trail": "15",
         "date": {"$date": "2016-08-22"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rosaceae",
       "fr_CA": "Rosacées"
     },
     "sub_family": {
       "en_CA": "rose family",
       "fr_CA": "rose family"
     },
     "species": "Spiraea tomentosa",
     "name": {
       "en_CA": "Steeplebush",
       "fr_CA": "Spirée tormenteuse"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8120368",
         imageLink: require('../../assets/gwp/images/P8120368.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2015-08-12"}
       },
       {
         "photo_id": "P8160364",
         imageLink: require('../../assets/gwp/images/P8160364.jpg'),
         "trailhead": "Fortune (P10)",
         "trail": "9",
         "date": {"$date": "2017-08-16"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rubiaceae",
       "fr_CA": "Rubiacées"
     },
     "sub_family": {
       "en_CA": "bedstraw family",
       "fr_CA": "bedstraw family"
     },
     "species": "Galium mollugo",
     "name": {
       "en_CA": "Smooth bedstraw",
       "fr_CA": "Gaillet mollugine"
     },
     "native": false,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 120,
       "end": 211
     },
     "photos": [
       {
         "photo_id": "P6220361",
         imageLink: require('../../assets/gwp/images/P6220361.jpg'),
         "trailhead": "Champlain",
         "trail": "1B",
         "date": {"$date": "2015-06-22"}
       },
       {
         "photo_id": "P6300329",
         imageLink: require('../../assets/gwp/images/P6300329.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2020-06-30"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rubiaceae",
       "fr_CA": "Rubiacées"
     },
     "sub_family": {
       "en_CA": "bedstraw family",
       "fr_CA": "bedstraw family"
     },
     "species": "Galium palustre",
     "name": {
       "en_CA": "Common marsh bedstraw",
       "fr_CA": "Gaillet palustre"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P8040382",
         imageLink: require('../../assets/gwp/images/P8040382.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "55",
         "date": {"$date": "2016-08-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Rubiaceae",
       "fr_CA": "Rubiacées"
     },
     "sub_family": {
       "en_CA": "bedstraw family",
       "fr_CA": "bedstraw family"
     },
     "species": "Galium triflorum",
     "name": {
       "en_CA": "Three-flowered bedstraw",
       "fr_CA": "Gaillet à trois fleurs"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "whorled",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P6250373",
         imageLink: require('../../assets/gwp/images/P6250373.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2018-06-25"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Saxifragaceae",
       "fr_CA": "Saxifragacées"
     },
     "sub_family": {
       "en_CA": "saxifrage family",
       "fr_CA": "saxifrage family"
     },
     "species": "Micranthes virginiensis",
     "name": {
       "en_CA": "Early saxifrage",
       "fr_CA": "Saxifrage de Virginie"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5040384",
         imageLink: require('../../assets/gwp/images/P5040384.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "24",
         "date": {"$date": "2016-05-04"}
       },
       {
         "photo_id": "P5070389",
         imageLink: require('../../assets/gwp/images/P5070389.jpg'),
         "trailhead": "Mont-King",
         "trail": "999",
         "date": {"$date": "2018-05-07"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Saxifragaceae",
       "fr_CA": "Saxifragacées"
     },
     "sub_family": {
       "en_CA": "saxifrage family",
       "fr_CA": "saxifrage family"
     },
     "species": "Mitella diphylla",
     "name": {
       "en_CA": "Two-leaved miterwort",
       "fr_CA": "Mitrelle à deux feuilles"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5210313",
         imageLink: require('../../assets/gwp/images/P5210313.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "40",
         "date": {"$date": "2015-05-21"}
       },
       {
         "photo_id": "P5140371",
         imageLink: require('../../assets/gwp/images/P5140371.jpg'),
         "trailhead": "Luskville Falls",
         "trail": "999",
         "date": {"$date": "2018-05-14"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Saxifragaceae",
       "fr_CA": "Saxifragacées"
     },
     "sub_family": {
       "en_CA": "saxifrage family",
       "fr_CA": "saxifrage family"
     },
     "species": "Tiarella cordifolia",
     "name": {
       "en_CA": "Heart-leaved foamflower",
       "fr_CA": "Tiarelle cordifoliée"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5210316",
         imageLink: require('../../assets/gwp/images/P5210316.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "38",
         "date": {"$date": "2015-05-21"}
       },
       {
         "photo_id": "P6060366",
         imageLink: require('../../assets/gwp/images/P6060366.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2019-06-06"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Scrophulariaceae",
       "fr_CA": "Scrofulariacées"
     },
     "sub_family": {
       "en_CA": "figwort family",
       "fr_CA": "figwort family"
     },
     "species": "Scrophularia marilandica",
     "name": {
       "en_CA": "Carpenter's  figwort",
       "fr_CA": "Scrofulaire du Maryland"
     },
     "native": true,
     "colour": "pink",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P6250388",
         imageLink: require('../../assets/gwp/images/P6250388.jpg'),
         "trailhead": "Champlain",
         "trail": "1",
         "date": {"$date": "2018-06-25"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Scrophulariaceae",
       "fr_CA": "Scrofulariacées"
     },
     "sub_family": {
       "en_CA": "figwort family",
       "fr_CA": "figwort family"
     },
     "species": "Verbascum blattaria",
     "name": {
       "en_CA": "Moth mullein",
       "fr_CA": "Molène blattaire"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7110383",
         imageLink: require('../../assets/gwp/images/P7110383.jpg'),
         "trailhead": "Wakefield (P17)",
         "trail": "52",
         "date": {"$date": "2016-07-11"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Scrophulariaceae",
       "fr_CA": "Scrofulariacées"
     },
     "sub_family": {
       "en_CA": "figwort family",
       "fr_CA": "figwort family"
     },
     "species": "Verbascum thapsus",
     "name": {
       "en_CA": "Common mullein",
       "fr_CA": "Grande molène"
     },
     "native": false,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7040386",
         imageLink: require('../../assets/gwp/images/P7040386.jpg'),
         "trailhead": "Kingsmere (P7)",
         "trail": "15",
         "date": {"$date": "2016-07-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Solanaceae",
       "fr_CA": "Solanacées"
     },
     "sub_family": {
       "en_CA": "nightshade family",
       "fr_CA": "nightshade family"
     },
     "species": "Solanum dulcamara",
     "name": {
       "en_CA": "Bittersweet nightshade",
       "fr_CA": "Morelle douce-amère"
     },
     "native": false,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P7030368",
         imageLink: require('../../assets/gwp/images/P7030368.jpg'),
         "trailhead": "Mont-King",
         "trail": "998",
         "date": {"$date": "2015-07-03"}
       },
       {
         "photo_id": "P6200381",
         imageLink: require('../../assets/gwp/images/P6200381.jpg'),
         "trailhead": "Chelsea",
         "trail": "999",
         "date": {"$date": "2018-06-20"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Urticaceae",
       "fr_CA": "Urticacées"
     },
     "sub_family": {
       "en_CA": "nettle family",
       "fr_CA": "nettle family"
     },
     "species": "Laportea canadensis",
     "name": {
       "en_CA": "Canada wood nettle",
       "fr_CA": "Laportéa du Canada"
     },
     "native": true,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7280370",
         imageLink: require('../../assets/gwp/images/P7280370.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2017-07-28"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Urticaceae",
       "fr_CA": "Urticacées"
     },
     "sub_family": {
       "en_CA": "nettle family",
       "fr_CA": "nettle family"
     },
     "species": "Urtica dioica",
     "name": {
       "en_CA": "Stinging nettle",
       "fr_CA": "Grande ortie"
     },
     "native": true,
     "colour": "green",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P7290368",
         imageLink: require('../../assets/gwp/images/P7290368.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-07-29"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Verbenaceae",
       "fr_CA": "Verbénacées"
     },
     "sub_family": {
       "en_CA": "vervain family",
       "fr_CA": "vervain family"
     },
     "species": "Verbena hastata",
     "name": {
       "en_CA": "Blue vervain",
       "fr_CA": "Verveine hastée"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 151,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8040375",
         imageLink: require('../../assets/gwp/images/P8040375.jpg'),
         "trailhead": "Lac Philippe (P19)",
         "trail": "55",
         "date": {"$date": "2016-08-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Violaceae",
       "fr_CA": "Violacées"
     },
     "sub_family": {
       "en_CA": "violet family",
       "fr_CA": "violet family"
     },
     "species": "Viola canadensis",
     "name": {
       "en_CA": "Canada violet",
       "fr_CA": "Violette du Canada"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "PA070378",
         imageLink: require('../../assets/gwp/images/PA070378.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2016-10-12"}
       },
       {
         "photo_id": "P5240362",
         imageLink: require('../../assets/gwp/images/P5240362.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2017-05-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Violaceae",
       "fr_CA": "Violacées"
     },
     "sub_family": {
       "en_CA": "violet family",
       "fr_CA": "violet family"
     },
     "species": "Viola conspersa",
     "name": {
       "en_CA": "Labrador violet",
       "fr_CA": "Violette du Labrador"
     },
     "native": true,
     "colour": "blue",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P5240372",
         imageLink: require('../../assets/gwp/images/P5240372.jpg'),
         "trailhead": "Lauriault",
         "trail": "998",
         "date": {"$date": "2017-05-24"}
       },
       {
         "photo_id": "P5160375",
         imageLink: require('../../assets/gwp/images/P5160375.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2018-05-16"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Violaceae",
       "fr_CA": "Violacées"
     },
     "sub_family": {
       "en_CA": "violet family",
       "fr_CA": "violet family"
     },
     "species": "Viola pubescens",
     "name": {
       "en_CA": "Downy yellow violet",
       "fr_CA": "Violette pubescente"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P5180369",
         imageLink: require('../../assets/gwp/images/P5180369.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "50",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "P5240369",
         imageLink: require('../../assets/gwp/images/P5240369.jpg'),
         "trailhead": "Lauriault",
         "trail": "999",
         "date": {"$date": "2017-05-24"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Violaceae",
       "fr_CA": "Violacées"
     },
     "sub_family": {
       "en_CA": "violet family",
       "fr_CA": "violet family"
     },
     "species": "Viola renifolia",
     "name": {
       "en_CA": "Kidney-leaved violet",
       "fr_CA": "Violette trousse-dents"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "basal",
     "flowering": {
       "start": 120,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P5110390",
         imageLink: require('../../assets/gwp/images/P5110390.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "36",
         "date": {"$date": "2016-05-11"}
       },
       {
         "photo_id": "P5110389",
         imageLink: require('../../assets/gwp/images/P5110389.jpg'),
         "trailhead": "Vallée Meech (P16)",
         "trail": "36",
         "date": {"$date": "2016-05-11"}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Violaceae",
       "fr_CA": "Violacées"
     },
     "sub_family": {
       "en_CA": "violet family",
       "fr_CA": "violet family"
     },
     "species": "Viola sororia",
     "name": {
       "en_CA": "Woolly blue violet",
       "fr_CA": "Violette parente"
     },
     "native": true,
     "colour": "purple",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 120,
       "end": 242
     },
     "photos": [
       {
         "photo_id": "P5040392",
         imageLink: require('../../assets/gwp/images/P5040392.jpg'),
         "trailhead": "Meech (P12)",
         "trail": "2",
         "date": {"$date": "2016-05-04"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "en notes",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Orobanchaceae",
       "fr_CA": "Orobanchacées "
     },
     "sub_family": {
       "en_CA": "broomrape family",
       "fr_CA": "broomrape family"
     },
     "species": "Melampyrum lineare",
     "name": {
       "en_CA": "American cow-wheat",
       "fr_CA": "Mélampyre linéaire"
     },
     "native": true,
     "colour": "white",
     "leaf": "simple",
     "arrangement": "opposite",
     "flowering": {
       "start": 181,
       "end": 272
     },
     "photos": [
       {
         "photo_id": "P8050379",
         imageLink: require('../../assets/gwp/images/P8050379.jpg'),
         "trailhead": "Luskville Falls (P12)",
         "trail": "1",
         "date": {"$date": "2019-08-05"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "Record added 2021-06-10",
       "fr_CA": "fr notes"
     }
   },
   {
     "clazz": {
       "en_CA": "Eudicot",
       "fr_CA": "Eudicotylédone"
     },
     "family": {
       "en_CA": "Ranunculaceae",
       "fr_CA": "Renonculacées"
     },
     "sub_family": {
       "en_CA": "buttercup family",
       "fr_CA": "violet family"
     },
     "species": "Ranunculus recurvatus",
     "name": {
       "en_CA": "Hooked buttercup",
       "fr_CA": "Renoncule à bec recourbé"
     },
     "native": true,
     "colour": "yellow",
     "leaf": "simple",
     "arrangement": "alternate",
     "flowering": {
       "start": 90,
       "end": 180
     },
     "photos": [
       {
         "photo_id": "P6100376",
         imageLink: require('../../assets/gwp/images/P6100376.jpg'),
         "trailhead": "Étienne Brûlé",
         "trail": "3",
         "date": {"$date": "2016-06-10"}
       },
       {
         "photo_id": "",
         "trailhead": "",
         "trail": "999",
         "date": {"$date": ""}
       }
     ],
     "notes": {
       "en_CA": "Record added 2021-06-10",
       "fr_CA": "fr notes"
     }
   }
  ]

  if (filters) {
    //console.log(filters)
    if (Array.isArray(filters)) {
      return processFilters(filters, plants);
    }

    // UNKNOWN FILTER
    else {
      return plants;
    }
  }
  // NO FILTER
  else {
    return plants;
  }
};

const MAX_COUNT = 250;

// FP approach
// [Object] -> [Object] -> [Object]
const processFilters = ( filtersArr, plants ) => {
  //console.log(filtersArr);

  // convert filters from an Array of Objects to an Object of Objects
  const filters = filtersArr.reduce((acc, curr) => Object.assign(acc, curr), {});

  const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

  // COLOUR  Object -> [Object] -> [Object]
  const fcolour = filters => plants =>
    filters.colour ? plants.filter(plant => (plant.colour === filters.colour.split(",")[0])) : plants

  // LEAF TYPE  Object -> [Object] -> [Object]
  const fleaf = filters => plants =>
    filters.leaf ? plants.filter(plant => (plant.leaf === filters.leaf.split(",")[0])) : plants

  // LEAF ARRANGEMENT  Object -> [Object] -> [Object]
  const farrangement = filters => plants =>
    filters.arrangement ? plants.filter(plant => (plant.arrangement === filters.arrangement.split(",")[0])) : plants

  // SPECIES NAME  Object -> [Object] -> [Object]
  const fspeciesname = filters => plants =>
    filters.speciesname ? plants.filter(plant => (plant.species === filters.speciesname.split(",")[0])) : plants

  // COMMON NAME  Object -> [Object] -> [Object]
  const fcommonname = filters => plants =>
    filters.commonname ? plants.filter(plant => {
      const arr = filters.commonname.split(",")
      const lang = arr[0] === arr[1] ? "en_CA" : "fr_CA"
      const index = arr[0] === arr[1] ? 0 : 1
      return (plant.name[lang] === filters.commonname.split(",")[index])
    }) : plants

  // FAMILY NAME  Object -> [Object] -> [Object]
  const ffamilyname = filters => plants =>
    filters.familyname ? plants.filter(plant => (plant.family.en_CA === filters.familyname.split(",")[0])) : plants

  // FLOWERING IN  Object -> [Object] -> [Object]
  const ffloweringin = filters => plants =>
    filters.floweringin ? plants.filter(plant => {
      const mnths = {January:15,February:45,March:75,April:105,May:135,June:165,July:195,August:225,September:255,October:285,November:315,December:345};
      const ffin = filters.floweringin.split(",")[0];
      return ((mnths[ffin] >= plant.flowering.start) && (mnths[ffin] <= plant.flowering.end))
    }) : plants

  // TRAIL  Object -> [Object] -> [Object]
  const ftrail = filters => plants => {
    if (filters.trail) {
      var arr = [];
      for (var i = 0; i < plants.length; i++) {
        if (plants[i].photos[0].trail === filters.trail.split(",")[0]) {
          arr.push(plants[i]);
        }
        if (plants[i].photos[1].trail === filters.trail.split(",")[0]) {
          arr.push(plants[i]);
        }
      }
      //console.log("filtering  " + plants.length + " for trail " + filters.trail + ", found " + arr.length);
      return arr;
    }
    else {
      return plants;
    }
  }

  // QUANTITY  Object -> [Object] -> [Object]
  const fquantity = filters => plants =>
    filters.quantity ? plants.slice(0, filters.quantity) : plants

  // SORT
  const fsort = plants => {
    plants.sort((a, b) =>
      a.name.en_CA < b.name.en_CA ? -1 : a.name.en_CA > b.name.en_CA ? 1 : 0
    )
    return plants;
  }

  // TRACE
  const ftrace = plants => {
    //console.log(plants);
    return plants;
  }

  // TRACE
  const ftracelen = plants => {
    //console.log(plants.length);
    return plants;
  }

  // pipeline of filters
  return filters ? pipe(
    //ftracelen,
    fcolour(filters),
    //ftracelen,
    fleaf(filters),
    farrangement(filters),
    ffloweringin(filters),
    fspeciesname(filters),
    fcommonname(filters),
    ffamilyname(filters),
    ftrail(filters),
    //ftracelen,
    fquantity({quantity: MAX_COUNT}),
    fsort
    //ftracelen,
    //ftrace
  )(plants) : plants
}
