export function getLocalizedStrings( locale, collection ) {
  // ex: getLocalizedStrings("en_CA", "colour")
  // ex: getLocalizedStrings("fr_CA", "ALL")
  // ex: getLocalizedStrings("ALL")

  // English
  const en_CA = {
    gwp: "Gatineau Wildflower Project",
    welcome: "Hello",
    screen: "Home,Search,Results,Details,About,Contact,Links,Copyright,Query Picker".split(','),
    homebutton: 'Query,About,Contact,Links,Copyright'.split(','),
    all: "ANY",
    colour: "white,yellow,red,purple,green,brown,orange,blue,pink".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
    speciesname:
`Achillea millefolium,Actaea pachypoda,Actaea rubra,Aegopodium podagraria,Agalinis tenuifolia,Ageratina altissima,Agrimonia gryposepala,Alliaria petiolata,
Allium tricoccum,Ambrosia artemisiiafolia,Amphicarpaea bracteata,Anaphalis margaritacea,Anemone acutiloba,Anemone americana,Anemone canadensis,Antennaria neglecta,
Apocynum androsaemifolium,Aquilegia canadensis,Aralia nudicaulis,Aralia racemosa,Arctium lappa,Arisaema triphyllum,Asarum canadense,Asclepias incarnata,
Asclepias syriaca,Barbarea vulgaris,Berteroa incana,Bidens cernua,Bidens frondosa,Brasenia schreberi,Calla palustris,Caltha palustris,
Calystegia sepium,Campanula aparinoides,Campanula rapunculoides,Campanula rotundifolia,Capnoides sempervirens,Cardamine diphylla,Caulophyllum giganteum,Chamaenerion angustifolium,
Chamaepericlymenum canadense,Chelone glabra,Chenopodium album,Chicorium intybus,Chimaphila umbellata,Cicuta bulbifera,Circaea canadensis,Cirsium arvense,
Cirsium vulgare,Claytonia caroliniana,Clematis virginiana,Clinopodium acinos,Clinopodium vulgare,Clintonia borealis,Coeloglossum viride,Cryptotaenia canadensis,
Cypripedium acaule,Cypripedium parviflorum,Daucus carota,Dianthus armeria,Dicentra canadensis,Dicentra cucullaria,Diervilla lonicera,Doellingeria umbellata,
Echinops sphaerocephalus,Echium vulgare,Epifagus virginiana,Epigaea repens,Epilobium hirsutum,Epipactis helleborine,Erigeron philadelphicus,Erigeron strigosus,
Erythronium americanum,Eupatorium perfoliatum,Euphorbia cyparissias,Euphrasia nemorosa,Eurybia macrophylla,Euthamia graminifolia,Eutrochium maculatum,Fallopia cilinodis,
Fragaria vesca,Fragaria virginiana,Galeopsis tetrahit,Galium mollugo,Galium palustre,Galium triflorum,Gaultheria procumbens,Geranium robertianum,
Geum aleppicum,Geum canadense,Geum urbanum,Glechoma hederacea,Helianthus divaricatus,Hemerocallis fulva,Hesperis matronalis,Hieracium aurantiacum,
Hieracium caespitosum,Hieracium paniculatum,Hieracium umbellatum,Hydrophyllum canadense,Hydrophyllum virginianum,Hylodesmum glutinosum,Hypericum ellipticum,Hypericum perforatum,
Impatiens capensis,Impatiens pallida,Inula helenium,Iris versicolor,Lactuca canadensis,Laportea canadensis,Lathyrus aphaca,Lathyrus latifolius,
Leonurus cardiaca,Leucanthemum vulgare,Linaria vulgaris,Linnaea borealis,Lobelia cardinalis,Lobelia inflata,Lonicera canadensis,Lotus corniculatus,
Lycopus uniflorus,Lysimachia ciliata,Lysimachia terrestris,Lysimachia thyrsiflora,Lythrum salicaria,Maianthemum canadense,Maianthemum racemosum,Malva moschata,
Malva neglecta,Medeola virginiana,Medicago sativa,Melampyrum lineare,Melilotus albus,Mentha arvensis,Micranthes virginiensis,Mimulus ringens,Mitella diphylla,
Monotropa uniflora,Myosotis laxa,Myosoton aquaticum,Nuphar variegata,Nymphaea odorata,Oclemena acuminata,Oclemena nemoralis,Oenothera biennis,
Oenothera parviflora,Oenothera pilosella,Osmorhiza claytonii,Oxalis corniculata,Oxalis dillenii,Pastinaca sativa,Pedicularis canadensis,Penstemon pallidus,
Persicaria pensylvanica,Persicaria sagittata,Phryma leptostachya,Plantago major,Platanthera psycodes,Polygonatum biflorum,Polygonatum pubescens,Pontederia cordata,
Potentilla argentea,Potentilla norvegica,Potentilla recta,Potentilla simplex,Prunella vulgaris,Pyrola elliptica,Ranunculus abortivus,Ranunculus acris,Ranunculus recurvatus,
Ranunculus repens,Rosa acicularis,Rudbeckia hirta,Rudbeckia laciniata,Sagittaria latifolia,Sanguinaria canadensis,Sanicula marilandica,Saponaria officinalis,
Scrophularia marilandica,Scutellaria galericulata,Securigera varia,Silene latifolia,Silene noctiflora,Silene vulgaris,Sium suave,Solanum dulcamara,
Solidago caesia,Solidago canadensis,Solidago flexicaulis,Solidago rugosa,Solidago squarrosa,Sonchus arvensis,Sparganium emersum,Spiraea alba,
Spiraea tomentosa,Spiranthes cernua,Stachys tenuifolia,Streptopus amplexifolius,Streptopus lanceolatus,Symphyotrichum boreale,Symphyotrichum ciliolatum,Symphyotrichum cordifolium,
Symphyotrichum lanceolatum,Symphyotrichum lateriflorum,Symphyotrichum novae-angliae,Symphyotrichum puniceum,Synapis arvensis,Tanacetum vulgare,Taraxacum officinale,Teucrium canadense,
Thalictrum dioicum,Thalictrum pubescens,Tiarella cordifolia,Tragopogon dubius,Tragopogon pratensis,Triadenum fraseri,Trientalis borealis,Trifolium aureum,
Trifolium pratense,Trifolium repens,Trillium erectum,Trillium grandiflorum,Trillium undulatum,Triosteum perfoliatum,Tussilago farfara,Typha angustifolia,
Typha latifolia,Urtica dioica,Utricularia vulgaris,Uvularia grandiflora,Uvularia perfoliata,Valeriana officinalis,Verbascum blattaria,Verbascum thapsus,
Verbena hastata,Veronica officinalis,Viburnum lantanoides,Vicia cracca,Viola canadensis,Viola conspersa,Viola pubescens,Viola renifolia,
Viola sororia,`.split(',').map(item => item.trim()),
    commonname:
`Alfalfa,American cow-wheat,American hog peanut,American spikenard,Arrow-leaved smartweed,Basil thyme,Beechdrops,Bitter wintercress,Bittersweet nightshade,
Black-eyed Susan,Bladder campion,Bloodroot,Blue vervain,Blue-stemmed goldenrod,Bluebell of Scotland,Bluntleaf waterleaf,Bog aster,
Bouncing-bet,Broad-leaved arrowhead,Broad-leaved cattail,Broad-leaved enchanter's-nightshade,Broad-leaved helleborine,Bulbous water-hemlock,Bull thistle,Bunchberry,
Butter-and-eggs,Calico aster,Canada anemone,Canada avens,Canada fly-honeysuckle,Canada germander,Canada goldenrod,Canada honewort,
Canada lettuce,Canada lousewort,Canada thistle,Canada violet,Canada wild ginger,Canada wood nettle,Cardinal flower,Carolina spring beauty,
Carpenter's  figwort,Clasping-leaved twisted-stalk,Coltsfoot,Common St. John's-wort,Common bladderwort,Common boneset,Common buttercup,Common dandelion,
Common evening-primrose,Common eyebright,Common hemp-nettle,Common lamb's quarters,Common mallow,Common marsh bedstraw,Common milkweed,Common motherwort,
Common mullein,Common pipsissewa,Common plantain,Common ragweed,Common self-heal,Common speedwell,Common tansy,Common valerian,
Common viper's bugloss,Common water-parsnip,Common yarrow,Corn mustard,Creeping bellflower,Creeping buttercup,Creeping wood-sorrel,Cut-leaved coneflower,
Cypress spurge,Dame's rocket,Deptford pink,Devil's beggarticks,Downy yellow violet,Dutchman's breeches,Early meadow-rue,Early saxifrage,
Eastern teaberry,Elecampane,Everlasting pea,Field mint,Field pussytoes,Field sow-thistle,Fireweed,Flat-top white aster,
Fragrant water-lily,Fraser's St. John's-wort,Fringed black bindweed,Fringed yellow loosestrife,Frog orchid,Garden bird's-foot-trefoil,Garlic mustard,Giant Solomon's seal,
Giant blue cohosh,Giant chickweed,Goutweed,Grass-leaved goldenrod,Great burdock,Great globe-thistle,Green-fruited burreed,Ground ivy,
Hairy Solomon's seal,Hairy sweet cicely,Hairy willowherb,Harlequin blue flag,Heart-leaved aster,Heart-leaved foamflower,Hedge false bindweed,Herb-Robert,
Hoary alyssum,Hobblebush,Hooked agrimony,Hooked buttercup,Indian cucumber-root,Indian pipe,Indian tobacco,Jack-in-the-pulpit,Kidney-leaved buttercup,
Kidney-leaved violet,Labrador violet,Large false Solomon's seal,Large tick-trefoil,Large-flowered  bellwort,Large-leaved aster,Lindley's aster,Lopseed,
Marsh bellflower,Marsh skullcap,Maryland sanicle,Meadow evening-primrose,Meadow goatsbeard,Meadow hawkweed,Moth mullein,Musk mallow,
Narrow-leaved cattail,New England aster,Night-flowering catchfly,Nodding beggarticks,Nodding ladies'-tresses,Northern bush-honeysuckle,Northern starflower,Northern water-horehound,
Norwegian cinquefoil,Old field cinquefoil,Orange day-lily,Orange hawkweed,Oxeye daisy,Painted trillium,Pale St. John's-wort,Pale beardtongue,
Pale jewelweed,Panicled hawkweed,Pearly everlasting,Pennsylvania smartweed,Perfoliate bellwort,Perfoliate horse-gentian,Philadelphia fleabane,Pickerelweed,
Pink corydalis,Pink lady's-slipper,Prickly rose,Purple crown-vetch,Purple loosestrife,Purple-stemmed aster,Red baneberry,Red clover,
Red columbine,Red trillium,Rose twisted-stalk,Rough fleabane,Rough-stemmed goldenrod,Round-lobed hepatica,Rush aster,Sharp-lobed hepatica,
Shinleaf,Silvery cinquefoil,Slender yellow wood-sorrel,Slender-leaved false foxglove,Small forget-me-not,Small purple fringed orchid,Small-flowered evening-primrose,Smooth bedstraw,
Smooth hedge-nettle,Spotted Joe Pye weed,Spotted jewelweed,Spreading dogbane,Square-stemmed monkeyflower,Squarrose goldenrod,Squirrel-corn,Steeplebush,
Stinging nettle,Sulphur cinquefoil,Swamp milkweed,Swamp yellow loosestrife,Tall meadow-rue,Three-flowered bedstraw,Trailing arbutus,Tufted vetch,
Tufted yellow loosestrife,Twinflower,Two-leaved miterwort,Two-leaved toothwort,Umbellate hawkweed,Variegated pond-lily,Virginia clematis,Virginia waterleaf,
Watershield,White baneberry,White campion,White clover,White meadowsweet,White panicled aster,White snakeroot,White sweet-clover,
White trillium,White turtlehead,Whorled wood aster,Wild basil,Wild calla,Wild carrot,Wild chicory,Wild leek,
Wild lily-of-the-valley,Wild parsnip,Wild sarsaparilla,Wild strawberry,Wood avens,Woodland strawberry,Woodland sunflower,Woolly blue violet,
Yellow avens,Yellow clintonia,Yellow clover,Yellow goatsbeard,Yellow lady's-slipper,Yellow marsh marigold,Yellow trout lily,Yellow vetchling,
Zigzag goldenrod,`.split(',').map(item => item.trim()),
    familyname:
`Adoxaceae,Alismataceae,Alliaceae,Amaranthaceae,Apiaceae,Apocynaceae,Araceae,Araliaceae,Aristolochiaceae,Asteraceae,
Balsaminaceae,Berberidaceae,Boraginaceae,Brassicaceae,
Cabombaceae,Campanulaceae,Caprifoliaceae,Caryophyllaceae,Colchiaceae,Convolvulaceae,Cornaceae,
Ericaceae,Euphorbiaceae,Fabaceae,Geraniaceae,Hemerocallidaceae,Hydrophyllaceae,Hypericaceae,
Iridaceae,Lamiaceae,Lentibulariaceae,Liliaceae,Lythraceae,Malvaceae,Melanthiaceae,Montiaceae,
Nymphaeaceae,Onagraceae,Orchidaceae,Orobanchaceae,Oxalidaceae,
Papaveraceae,Phrymaceae,Plantaginaceae,Polygonaceae,Pontederiaceae,Primulaceae,
Ranunculaceae,Rosaceae,Rubiaceae,Ruscaceae,Saxifragaceae,Scrophulariaceae,Solanaceae,
Typhaceae,Urticaceae,Verbenaceae,Violaceae`.split(',').map(item => item.trim()),
    trail: "1,1B,2,3,5,6,8,9,14,15,17,18,21,23,24,25,28,29,31,32,36,38,40,50,52,53,54,55,62,72,73".split(','),
    abouttitle: "About",
    abouttext: [
      "What would you like to know about the Gatineau Wildflower Project?",
      "Where is the Gatineau?",
      "What is a wild flower?"
    ],
    querytitle: "Flower Search",
    queryresults: "results",
    queryfiltername: 'Flower colour,Leaf type,Leaf arrangement,Flowering in,Species,Name,Family,Trail number'.split(","),
    querydone: "DONE",
    yes: "yes",
    no: "no",
    flowerdetailslabels: 'Name,Family,Native,Flower colour,Leaf type,Leaf arrangement,Flowering range,# of photos'.split(',')
  }

  //const en-CA = en_CA;

  // French
  const fr_CA = {
    gwp: "Projet de fleurs sauvages de Gatineau",
    welcome: "Bonjour",
    screen: "Home,Recherche,Resultats,D??tails,?? propos,Contact,Liens,Copyright,Query Picker".split(','),
    homebutton: 'Requ??te,?? propos,Contact,Liens,Copyright'.split(','),
    all: "ANYFR",
    colour: "blanc,jaune,rouge,violet,vert,brun,orange,bleu,rose".split(","),
    leaf: "simple,compos??e,aucun".split(","),
    arrangement: "alternes,basales,verticill??es,oppos??es,aucune".split(','),
    floweringin: 'janvier,f??vrier,mars,avril,mai,juin,juillet,ao??t,septembre,octobre,novembre,d??cembre'.split(','),
    /*commonname:  OLD
`Achill??e millefeuille,Act??e blanche,Act??e rouge,Agripaume cardiaque,Aigremoine ?? s??pales crochus,Ail des bois,Alliaire officinale,Amphicarpe bract??ol??e,
Ancolie du Canada,Antennaire n??glig??e,An??mone du Canada,Apocyn ?? feuilles d'andros??me,Aralie ?? grappes,Aralie ?? tige nue,Aris??me petit-pr??cheur,Asaret du Canada,
Ascl??piade commune,Ascl??piade incarnate,Aster acumin??,Aster bor??al,Aster ciliol??,Aster de Nouvelle-Angleterre,Aster des tourbi??res,Aster lanc??ol??,
Aster ponceau,Aster ?? feuilles cord??es,Aster ?? fleurs lat??rales,Aster ?? grandes feuilles,Aster ?? ombelles,Barbar??e vulgaire,Bardane majeure,Beno??te commune,
Beno??te d'Alep,Beno??te du Canada,Berle douce,Berteroa blanc,Bident feuillu,Bident pench??,Bras??nie de Schreber,Brunelle commune,
Calla des marais,Campanule fausse-raiponce,Campanule faux-gaillet,Campanule ?? feuilles rondes,Carotte sauvage,Caulophylle g??ant,Chardon des champs,Chardon vulgaire,
Chicor??e sauvage,Chimaphile ?? ombelles,Ch??vrefeuille du Canada,Ch??nopode blanc,Cicutaire bulbif??re,Circ??e du Canada,Claytonie feuille-large,Clinopode commun,
Clintonie bor??ale,Cl??matite de Virginie,Coronille bigar??e,Corydale toujours verte,Cryptot??nie du Canada,Cyprip??de jaune,Cyprip??de rose,Dentaire ?? deux feuilles,
Desmodie glutineuse,Dicentre capuchon-jaune,Dicentre du Canada,Di??reville ch??vrefeuille,Eupatoire macul??e,Eupatoire perfoli??e,Eupatoire rugueuse,Euphorbe cypr??s,
Euphraise des bois,Fraisier des bois,Fraisier des champs,Gaillet mollugine,Gaillet palustre,Gaillet ?? trois fleurs,Galane glabre,Gal??opside ?? tige carr??e,
Germandr??e du Canada,Gesse aphylle,Gesse ?? feuilles larges,Grand n??nuphar jaune,Grande mol??ne,Grande ortie,G??ranium de Robert,G??rardie ?? feuilles t??nues,
Hydrophylle de Virginie,Hydrophylle du Canada,H??lianthe ?? feuilles ??tal??es,H??m??rocalle fauve,H??patique ?? lobes aigus,H??patique ?? lobes ronds,Immortelle blanche,Impatiente du Cap,
Impatiente p??le,Inule aun??e,Iris versicolore,Julienne des dames,Laiteron des champs,Laitue du Canada,Laport??a du Canada,Lierre terrestre,
Linaire vulgaire,Linn??e bor??ale,Liseron des haies,Lob??lie cardinale,Lob??lie gonfl??e,Lotier cornicul??,Luzerne cultiv??e,Lycope ?? une fleur,
Lysimaque cili??e,Lysimaque terrestre,Lysimaque thyrsiflore,Marguerite blanche,Mauve musqu??e,Mauve n??glig??e,Ma??anth??me du Canada,M??lampyre lin??aire,Menthe des champs,
Millepertuis commun,Millepertuis de Fraser,Millepertuis elliptique,Mimule ?? fleurs entrouvertes,Mitrelle ?? deux feuilles,Mol??ne blattaire,Monotrope uniflore,Morelle douce-am??re,
Moutarde des champs,Myosotis laxiflore,Myosoton aquatique,M??d??ole de Virginie,M??lilot blanc,Nymph??a odorant,Onagre bisannuelle,Onagre parviflore,
Onagre piloselle,Orchis grenouille,Osmorhize de Clayton,Oursin ?? t??tes rondes,Oxalide cornue,Oxalide de Dillenius,Panais sauvage,Penst??mon p??le,
Petite herbe ?? poux,Phryma ?? ??pis gr??les,Pigamon dio??que,Pigamon pubescent,Pissenlit officinal,Plantain majeur,Platanth??re papillon,Pont??d??rie ?? feuilles en cur,
Populage des marais,Potentille argent??e,Potentille de Norv??ge,Potentille dress??e,Potentille simple,Pyrole elliptique,P??diculaire du Canada,Quatre-temps,
Quenouille ?? feuilles larges,Quenouille ?? feuilles ??troites,Renoncule abortive,Renoncule rampante,Renoncule ?? bec recourb??,Renoncule ??cre,Renou??e de Pennsylvanie,Renou??e sagitt??e,Renou??e ?? noeuds cili??s,
Rosier aciculaire,Rubanier ??merg??,Rudbeckie lacini??e,Rudbeckie tardive,Sagittaire ?? larges feuilles,Salicaire commune,Salsifis des pr??s,Salsifis majeur,
Sanguinaire du Canada,Sanicle du Maryland,Saponaire officinale,Sarriette acinos,Saxifrage de Virginie,Sceau-de-Salomon biflora,Sceau-de-Salomon pubescent,Scrofulaire du Maryland,
Scutellaire ?? feuilles d??pilobe,Sil??ne blanc,Sil??ne enfl??,Sil??ne noctiflore,Smilacine ?? grappes,Spiranthe pench??e,Spir??e blanche,Spir??e tormenteuse,
Streptope rose,Streptope ?? feuilles embrassantes,Tanaisie vulgaire,Th?? des bois,Tiarelle cordifoli??e,Trientale bor??ale,Trille blanc,Trille ondul??,
Trille rouge,Trioste perfoli??,Tr??fle blanc,Tr??fle dor??,Tr??fle rouge,Tussilage pas d??ne,Utriculaire vulgaire,Uvulaire perfoli??e,
Uvulaire ?? grandes fleurs,Val??riane officinale,Verge d'or bleu??tre,Verge d'or du Canada,Verge d'or rugueuse,Verge d'or squarreuse,Verge d'or ?? feuilles de gramin??e,Verge d'or ?? tige zigzagante,
Vergerette de Philadelphie,Vergerette rude,Verveine hast??e,Vesce jargeau,Violette du Canada,Violette du Labrador,Violette parente,Violette pubescente,
Violette trousse-dents,Viorne bois doriginal,Vip??rine commune,V??ronique officinale,illet arm??ria,??gopode podagraire,??pervi??re des pr??s,??pervi??re en ombelle,
??pervi??re orang??e,??pervi??re panicul??e,??piaire ?? feuilles minces,??pifage de Virginie,??pig??e rampante,??pilobe hirsute,??pilobe ?? feuilles ??troites,??pipactis petit-hell??bore,
??rythrone dAm??rique,`.split(',').map(item => item.trim()),*/
    commonname:
`Achill??e millefeuille,Act??e blanche,Act??e rouge,Agripaume cardiaque,Aigremoine ?? s??pales crochus,Ail des bois,Alliaire officinale,Amphicarpe bract??ol??e,
Ancolie du Canada,An??mone du Canada,Antennaire n??glig??e,Apocyn ?? feuilles d'andros??me,Aralie ?? grappes,Aralie ?? tige nue,Aris??me petit-pr??cheur,Asaret du Canada,
Ascl??piade commune,Ascl??piade incarnate,Aster ?? feuilles cord??es,Aster ?? fleurs lat??rales,Aster ?? grandes feuilles,Aster ?? ombelles,
Aster acumin??,Aster bor??al,Aster ciliol??,Aster de Nouvelle-Angleterre,Aster des tourbi??res,Aster lanc??ol??,
Aster ponceau,Barbar??e vulgaire,Bardane majeure,Beno??te commune,Beno??te d'Alep,
Beno??te du Canada,Berle douce,Berteroa blanc,Bident feuillu,Bident pench??,Bras??nie de Schreber,Brunelle commune,
Calla des marais,Campanule ?? feuilles rondes,Campanule fausse-raiponce,Campanule faux-gaillet,Carotte sauvage,Caulophylle g??ant,Chardon des champs,Chardon vulgaire,
Ch??nopode blanc,Ch??vrefeuille du Canada,
Chicor??e sauvage,Chimaphile ?? ombelles,Cicutaire bulbif??re,Circ??e du Canada,Claytonie feuille-large,Cl??matite de Virginie,Clinopode commun,
Clintonie bor??ale,Coronille bigar??e,Corydale toujours verte,Cryptot??nie du Canada,Cyprip??de jaune,Cyprip??de rose,Dentaire ?? deux feuilles,
Desmodie glutineuse,Dicentre capuchon-jaune,Dicentre du Canada,Di??reville ch??vrefeuille,
??gopode podagraire,??pervi??re des pr??s,??pervi??re en ombelle,??pervi??re orang??e,??pervi??re panicul??e,??piaire ?? feuilles minces,??pifage de Virginie,??pig??e rampante,
??pilobe ?? feuilles ??troites,??pilobe hirsute,??pipactis petit-hell??bore,??rythrone d???Am??rique,Eupatoire macul??e,Eupatoire perfoli??e,Eupatoire rugueuse,Euphorbe cypr??s,
Euphraise des bois,Fraisier des bois,Fraisier des champs,Gaillet ?? trois fleurs,Gaillet mollugine,Gaillet palustre,Galane glabre,Gal??opside ?? tige carr??e,
G??ranium de Robert,G??rardie ?? feuilles t??nues,
Germandr??e du Canada,Gesse ?? feuilles larges,Gesse aphylle,Grand n??nuphar jaune,Grande mol??ne,Grande ortie,H??lianthe ?? feuilles ??tal??es,H??m??rocalle fauve,H??patique ?? lobes aigus,
H??patique ?? lobes ronds,
Hydrophylle de Virginie,Hydrophylle du Canada,Immortelle blanche,Impatiente du Cap,
Impatiente p??le,Inule aun??e,Iris versicolore,Julienne des dames,Laiteron des champs,Laitue du Canada,Laport??a du Canada,Lierre terrestre,
Linaire vulgaire,Linn??e bor??ale,Liseron des haies,Lob??lie cardinale,Lob??lie gonfl??e,Lotier cornicul??,Luzerne cultiv??e,Lycope ?? une fleur,Lysimaque cili??e,
Lysimaque terrestre,Lysimaque thyrsiflore,Ma??anth??me du Canada,Marguerite blanche,Mauve musqu??e,Mauve n??glig??e,M??d??ole de Virginie,M??lampyre lin??aire,M??lilot blanc,Menthe des champs,
Millepertuis commun,Millepertuis de Fraser,Millepertuis elliptique,Mimule ?? fleurs entrouvertes,Mitrelle ?? deux feuilles,Mol??ne blattaire,Monotrope uniflore,Morelle douce-am??re,
Moutarde des champs,Myosotis laxiflore,Myosoton aquatique,Nymph??a odorant,??illet arm??ria,Onagre bisannuelle,Onagre parviflore,
Onagre piloselle,Orchis grenouille,Osmorhize de Clayton,Oursin ?? t??tes rondes,Oxalide cornue,Oxalide de Dillenius,Panais sauvage,P??diculaire du Canada,Penst??mon p??le,
Petite herbe ?? poux,Phryma ?? ??pis gr??les,Pigamon dio??que,Pigamon pubescent,Pissenlit officinal,Plantain majeur,Platanth??re papillon,Pont??d??rie ?? feuilles en c??ur,
Populage des marais,Potentille argent??e,Potentille de Norv??ge,Potentille dress??e,Potentille simple,Pyrole elliptique,Quatre-temps,
Quenouille ?? feuilles ??troites,Quenouille ?? feuilles larges,Renoncule ?? bec recourb??,Renoncule abortive,Renoncule ??cre,Renoncule rampante,Renou??e ?? noeuds cili??s,
Renou??e de Pennsylvanie,Renou??e sagitt??e,
Rosier aciculaire,Rubanier ??merg??,Rudbeckie lacini??e,Rudbeckie tardive,Sagittaire ?? larges feuilles,Salicaire commune,Salsifis des pr??s,Salsifis majeur,
Sanguinaire du Canada,Sanicle du Maryland,Saponaire officinale,Sarriette acinos,Saxifrage de Virginie,Sceau-de-Salomon biflora,Sceau-de-Salomon pubescent,Scrofulaire du Maryland,
Scutellaire ?? feuilles d?????pilobe,Sil??ne blanc,Sil??ne enfl??,Sil??ne noctiflore,Smilacine ?? grappes,Spiranthe pench??e,Spir??e blanche,Spir??e tormenteuse,Streptope ?? feuilles embrassantes,
Streptope rose,Tanaisie vulgaire,Th?? des bois,Tiarelle cordifoli??e,Tr??fle blanc,Tr??fle dor??,Tr??fle rouge,Trientale bor??ale,Trille blanc,Trille ondul??,
Trille rouge,Trioste perfoli??,Tussilage pas d?????ne,Utriculaire vulgaire,
Uvulaire ?? grandes fleurs,Uvulaire perfoli??e,Val??riane officinale,Verge d'or ?? feuilles de gramin??e,Verge d'or ?? tige zigzagante,Verge d'or bleu??tre,Verge d'or du Canada,
Verge d'or rugueuse,Verge d'or squarreuse,
Vergerette de Philadelphie,Vergerette rude,V??ronique officinale,Verveine hast??e,Vesce jargeau,Violette du Canada,Violette du Labrador,Violette parente,Violette pubescente,
Violette trousse-dents,Viorne bois d???original,Vip??rine commune,`.split(',').map(item => item.trim()),

    familyname: `
Adoxac??es,Alismatac??es,Alliac??es,Amaranthac??es,Apiac??es,Apocynac??es,Arac??es,Araliac??es,Aristolochiac??es,Ast??rac??es,
Balsaminac??es,Berb??ridac??es,Boraginac??es,Brassicac??es,
Cabombac??es,Campanulac??es,Caprifoliac??es,Caryophyllac??es,Colchicac??es,Convolvulac??es,Cornac??es,
??ricac??es,Euphorbiac??es,Fabac??es,G??raniac??es,H??m??rocallidac??es,Hydrophyllac??es,Hyp??ricac??es,
Iridac??es,Lamiac??es,Lentibulariac??es,Liliac??es,Lythrac??es,Malvac??es,M??lanthiac??es,Montiac??es,
Nymph??ac??es,Onagrac??es,Orchidac??es,Orobanchac??es,Oxalidac??es,
Papav??rac??es,Phrymac??es,Plantaginac??es,Polygonac??es,Pont??d??riac??es,Primulac??es,
Renonculac??es,Rosac??es,Rubiac??es,Ruscac??es,Saxifragac??es,Scrofulariac??es,Solanac??es,
Typhac??es,Urticac??es,Verb??nac??es,Violac??es`.split(',').map(item => item.trim()),
    abouttitle: "?? propos",
    abouttext: [
      "Qu'aimeriez-vous savoir sur le Projet de fleurs sauvages de Gatineau?",
      "O?? est la Gatineau?",
      "Qu'est-ce qu'une fleur sauvage?"
    ],
    querytitle: "Recherche de fleurs",
    queryresults: "r??sultats",
    queryfiltername: "Couleur de la fleur,Type de feuille,Disposition des feuilles,Floraison,Esp??ce,Nom,Famille,Num??ro du sentier".split(","),
    querydone: "FINI",
    yes: "oui",
    no: "non",
    flowerdetailslabels: 'Nom,Famille,Native,Couleur de la fleur,Type de feuille,Disposition des feuilles,Floraison range,# de photos'.split(',')
  }

  // Spanish
  const es = {
    gwp: "Proyecto de flores silvestres de Gatineau",
    welcome: "Buenos Dias",
    all: "TODOS",
    colour: "blanco,amarillo,rojo,violeta,verde,marr??n,naranja,azul,rosa".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre'.split(','),
    familyname: null
  }

  // German
  const de = {
    gwp: "Gatineau Wildblumenprojekt",
    welcome: "Guten Tag",
    all: "ALLES",
    colour: "wei??,gelb,rot,lila,gr??n,braun,orange,blau,pink".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'Januar,Februar,M??rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember'.split(','),
    familyname: null
  }

  // Latin
  const la = {
    gwp: "Gatineau flos feram Project",
    welcome: "Salve",
    all: "OMNIS",
    colour: "album,luteus,rubrum,purpura,viridis,brunneis,aureus,caeruleo,rosea".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'Ianuarius,Februarius,Martius,Aprilis,Maius,Iunius,Iulius,Augustus,September,October,November,December'.split(','),
    familyname: null,
    abouttitle: "About",
    abouttext: [
    "Vis scire quid futurum de Gatineau Wildflower Project?",
       "Gatineau Ubi est?",
       "Quod est flos feri!",
       "Quid est, conatur et implerem project?"
    ]
  }

  // Russian
  const ru = {
    gwp: "???????????? ?????????????? ???????????? ????????????",
    welcome: "????????????????????????",
    homebutton: "????????????, ?? ??????, ??????????????, ????????????, ?????????????????? ??????????".split(','),
    all: "??????",
    screen: "??????????????, ????????????, ??????????, ???????????? ????????????, ?? ??????, ??????????????, ????????????, ?????????????????? ??????????".split(','),
    colour: "??????????,????????????,??????????????,????????????????????,??????????????,????????????????????,??????????????????,??????????,??????????????".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: '????????????,??????????????,????????,????????????,??????,????????,????????,????????????,????????????????,??????????????,????????????,??????????????'.split(','),
    familyname: null,
    abouttitle: "????????????",
    abouttext: [
    "?????? ???? ???? ???????????? ?????????? ?? ?????????????? Gatineau Wildflower?",
       "?????? ?????????????",
       "?????? ?????????? ?????????????? ?????????????",
       "???????? ???????????????? ?????????????? ?????????????"
    ]
  }

  const strings = {
    en_CA,
    fr_CA,
    en: en_CA,
    fr: fr_CA,
    es,
    de,
    la,
    ru
  }

  //console.log(JSON.stringify(strings, null, 2));
  //console.log(en_CA.trail);

  if (locale == "All") {return strings}
  if (collection == "All") {return strings[locale]}
  return strings[locale][collection];
}
