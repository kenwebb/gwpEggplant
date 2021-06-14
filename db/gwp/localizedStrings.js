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
    screen: "Home,Recherche,Resultats,Détails,À propos,Contact,Liens,Copyright,Query Picker".split(','),
    homebutton: 'Requête,À propos,Contact,Liens,Copyright'.split(','),
    all: "ANYFR",
    colour: "blanc,jaune,rouge,violet,vert,brun,orange,bleu,rose".split(","),
    leaf: "simple,composée,aucun".split(","),
    arrangement: "alternes,basales,verticillées,opposées,aucune".split(','),
    floweringin: 'janvier,février,mars,avril,mai,juin,juillet,août,septembre,octobre,novembre,décembre'.split(','),
    /*commonname:  OLD
`Achillée millefeuille,Actée blanche,Actée rouge,Agripaume cardiaque,Aigremoine à sépales crochus,Ail des bois,Alliaire officinale,Amphicarpe bractéolée,
Ancolie du Canada,Antennaire négligée,Anémone du Canada,Apocyn à feuilles d'androsème,Aralie à grappes,Aralie à tige nue,Arisème petit-prêcheur,Asaret du Canada,
Asclépiade commune,Asclépiade incarnate,Aster acuminé,Aster boréal,Aster ciliolé,Aster de Nouvelle-Angleterre,Aster des tourbières,Aster lancéolé,
Aster ponceau,Aster à feuilles cordées,Aster à fleurs latérales,Aster à grandes feuilles,Aster à ombelles,Barbarée vulgaire,Bardane majeure,Benoîte commune,
Benoîte d'Alep,Benoîte du Canada,Berle douce,Berteroa blanc,Bident feuillu,Bident penché,Brasénie de Schreber,Brunelle commune,
Calla des marais,Campanule fausse-raiponce,Campanule faux-gaillet,Campanule à feuilles rondes,Carotte sauvage,Caulophylle géant,Chardon des champs,Chardon vulgaire,
Chicorée sauvage,Chimaphile à ombelles,Chèvrefeuille du Canada,Chénopode blanc,Cicutaire bulbifère,Circée du Canada,Claytonie feuille-large,Clinopode commun,
Clintonie boréale,Clématite de Virginie,Coronille bigarée,Corydale toujours verte,Cryptoténie du Canada,Cypripède jaune,Cypripède rose,Dentaire à deux feuilles,
Desmodie glutineuse,Dicentre capuchon-jaune,Dicentre du Canada,Dièreville chèvrefeuille,Eupatoire maculée,Eupatoire perfoliée,Eupatoire rugueuse,Euphorbe cyprès,
Euphraise des bois,Fraisier des bois,Fraisier des champs,Gaillet mollugine,Gaillet palustre,Gaillet à trois fleurs,Galane glabre,Galéopside à tige carrée,
Germandrée du Canada,Gesse aphylle,Gesse à feuilles larges,Grand nénuphar jaune,Grande molène,Grande ortie,Géranium de Robert,Gérardie à feuilles ténues,
Hydrophylle de Virginie,Hydrophylle du Canada,Hélianthe à feuilles étalées,Hémérocalle fauve,Hépatique à lobes aigus,Hépatique à lobes ronds,Immortelle blanche,Impatiente du Cap,
Impatiente pâle,Inule aunée,Iris versicolore,Julienne des dames,Laiteron des champs,Laitue du Canada,Laportéa du Canada,Lierre terrestre,
Linaire vulgaire,Linnée boréale,Liseron des haies,Lobélie cardinale,Lobélie gonflée,Lotier corniculé,Luzerne cultivée,Lycope à une fleur,
Lysimaque ciliée,Lysimaque terrestre,Lysimaque thyrsiflore,Marguerite blanche,Mauve musquée,Mauve négligée,Maïanthème du Canada,Mélampyre linéaire,Menthe des champs,
Millepertuis commun,Millepertuis de Fraser,Millepertuis elliptique,Mimule à fleurs entrouvertes,Mitrelle à deux feuilles,Molène blattaire,Monotrope uniflore,Morelle douce-amère,
Moutarde des champs,Myosotis laxiflore,Myosoton aquatique,Médéole de Virginie,Mélilot blanc,Nymphéa odorant,Onagre bisannuelle,Onagre parviflore,
Onagre piloselle,Orchis grenouille,Osmorhize de Clayton,Oursin à têtes rondes,Oxalide cornue,Oxalide de Dillenius,Panais sauvage,Penstémon pâle,
Petite herbe à poux,Phryma à épis grêles,Pigamon dioïque,Pigamon pubescent,Pissenlit officinal,Plantain majeur,Platanthère papillon,Pontédérie à feuilles en cur,
Populage des marais,Potentille argentée,Potentille de Norvège,Potentille dressée,Potentille simple,Pyrole elliptique,Pédiculaire du Canada,Quatre-temps,
Quenouille à feuilles larges,Quenouille à feuilles étroites,Renoncule abortive,Renoncule rampante,Renoncule à bec recourbé,Renoncule âcre,Renouée de Pennsylvanie,Renouée sagittée,Renouée à noeuds ciliés,
Rosier aciculaire,Rubanier émergé,Rudbeckie laciniée,Rudbeckie tardive,Sagittaire à larges feuilles,Salicaire commune,Salsifis des prés,Salsifis majeur,
Sanguinaire du Canada,Sanicle du Maryland,Saponaire officinale,Sarriette acinos,Saxifrage de Virginie,Sceau-de-Salomon biflora,Sceau-de-Salomon pubescent,Scrofulaire du Maryland,
Scutellaire à feuilles dépilobe,Silène blanc,Silène enflé,Silène noctiflore,Smilacine à grappes,Spiranthe penchée,Spirée blanche,Spirée tormenteuse,
Streptope rose,Streptope à feuilles embrassantes,Tanaisie vulgaire,Thé des bois,Tiarelle cordifoliée,Trientale boréale,Trille blanc,Trille ondulé,
Trille rouge,Trioste perfolié,Trèfle blanc,Trèfle doré,Trèfle rouge,Tussilage pas dâne,Utriculaire vulgaire,Uvulaire perfoliée,
Uvulaire à grandes fleurs,Valériane officinale,Verge d'or bleuâtre,Verge d'or du Canada,Verge d'or rugueuse,Verge d'or squarreuse,Verge d'or à feuilles de graminée,Verge d'or à tige zigzagante,
Vergerette de Philadelphie,Vergerette rude,Verveine hastée,Vesce jargeau,Violette du Canada,Violette du Labrador,Violette parente,Violette pubescente,
Violette trousse-dents,Viorne bois doriginal,Vipérine commune,Véronique officinale,illet arméria,Égopode podagraire,Épervière des prés,Épervière en ombelle,
Épervière orangée,Épervière paniculée,Épiaire à feuilles minces,Épifage de Virginie,Épigée rampante,Épilobe hirsute,Épilobe à feuilles étroites,Épipactis petit-hellébore,
Érythrone dAmérique,`.split(',').map(item => item.trim()),*/
    commonname:
`Achillée millefeuille,Actée blanche,Actée rouge,Agripaume cardiaque,Aigremoine à sépales crochus,Ail des bois,Alliaire officinale,Amphicarpe bractéolée,
Ancolie du Canada,Anémone du Canada,Antennaire négligée,Apocyn à feuilles d'androsème,Aralie à grappes,Aralie à tige nue,Arisème petit-prêcheur,Asaret du Canada,
Asclépiade commune,Asclépiade incarnate,Aster à feuilles cordées,Aster à fleurs latérales,Aster à grandes feuilles,Aster à ombelles,
Aster acuminé,Aster boréal,Aster ciliolé,Aster de Nouvelle-Angleterre,Aster des tourbières,Aster lancéolé,
Aster ponceau,Barbarée vulgaire,Bardane majeure,Benoîte commune,Benoîte d'Alep,
Benoîte du Canada,Berle douce,Berteroa blanc,Bident feuillu,Bident penché,Brasénie de Schreber,Brunelle commune,
Calla des marais,Campanule à feuilles rondes,Campanule fausse-raiponce,Campanule faux-gaillet,Carotte sauvage,Caulophylle géant,Chardon des champs,Chardon vulgaire,
Chénopode blanc,Chèvrefeuille du Canada,
Chicorée sauvage,Chimaphile à ombelles,Cicutaire bulbifère,Circée du Canada,Claytonie feuille-large,Clématite de Virginie,Clinopode commun,
Clintonie boréale,Coronille bigarée,Corydale toujours verte,Cryptoténie du Canada,Cypripède jaune,Cypripède rose,Dentaire à deux feuilles,
Desmodie glutineuse,Dicentre capuchon-jaune,Dicentre du Canada,Dièreville chèvrefeuille,
Égopode podagraire,Épervière des prés,Épervière en ombelle,Épervière orangée,Épervière paniculée,Épiaire à feuilles minces,Épifage de Virginie,Épigée rampante,
Épilobe à feuilles étroites,Épilobe hirsute,Épipactis petit-hellébore,Érythrone d’Amérique,Eupatoire maculée,Eupatoire perfoliée,Eupatoire rugueuse,Euphorbe cyprès,
Euphraise des bois,Fraisier des bois,Fraisier des champs,Gaillet à trois fleurs,Gaillet mollugine,Gaillet palustre,Galane glabre,Galéopside à tige carrée,
Géranium de Robert,Gérardie à feuilles ténues,
Germandrée du Canada,Gesse à feuilles larges,Gesse aphylle,Grand nénuphar jaune,Grande molène,Grande ortie,Hélianthe à feuilles étalées,Hémérocalle fauve,Hépatique à lobes aigus,
Hépatique à lobes ronds,
Hydrophylle de Virginie,Hydrophylle du Canada,Immortelle blanche,Impatiente du Cap,
Impatiente pâle,Inule aunée,Iris versicolore,Julienne des dames,Laiteron des champs,Laitue du Canada,Laportéa du Canada,Lierre terrestre,
Linaire vulgaire,Linnée boréale,Liseron des haies,Lobélie cardinale,Lobélie gonflée,Lotier corniculé,Luzerne cultivée,Lycope à une fleur,Lysimaque ciliée,
Lysimaque terrestre,Lysimaque thyrsiflore,Maïanthème du Canada,Marguerite blanche,Mauve musquée,Mauve négligée,Médéole de Virginie,Mélampyre linéaire,Mélilot blanc,Menthe des champs,
Millepertuis commun,Millepertuis de Fraser,Millepertuis elliptique,Mimule à fleurs entrouvertes,Mitrelle à deux feuilles,Molène blattaire,Monotrope uniflore,Morelle douce-amère,
Moutarde des champs,Myosotis laxiflore,Myosoton aquatique,Nymphéa odorant,Œillet arméria,Onagre bisannuelle,Onagre parviflore,
Onagre piloselle,Orchis grenouille,Osmorhize de Clayton,Oursin à têtes rondes,Oxalide cornue,Oxalide de Dillenius,Panais sauvage,Pédiculaire du Canada,Penstémon pâle,
Petite herbe à poux,Phryma à épis grêles,Pigamon dioïque,Pigamon pubescent,Pissenlit officinal,Plantain majeur,Platanthère papillon,Pontédérie à feuilles en cœur,
Populage des marais,Potentille argentée,Potentille de Norvège,Potentille dressée,Potentille simple,Pyrole elliptique,Quatre-temps,
Quenouille à feuilles étroites,Quenouille à feuilles larges,Renoncule à bec recourbé,Renoncule abortive,Renoncule âcre,Renoncule rampante,Renouée à noeuds ciliés,
Renouée de Pennsylvanie,Renouée sagittée,
Rosier aciculaire,Rubanier émergé,Rudbeckie laciniée,Rudbeckie tardive,Sagittaire à larges feuilles,Salicaire commune,Salsifis des prés,Salsifis majeur,
Sanguinaire du Canada,Sanicle du Maryland,Saponaire officinale,Sarriette acinos,Saxifrage de Virginie,Sceau-de-Salomon biflora,Sceau-de-Salomon pubescent,Scrofulaire du Maryland,
Scutellaire à feuilles d’épilobe,Silène blanc,Silène enflé,Silène noctiflore,Smilacine à grappes,Spiranthe penchée,Spirée blanche,Spirée tormenteuse,Streptope à feuilles embrassantes,
Streptope rose,Tanaisie vulgaire,Thé des bois,Tiarelle cordifoliée,Trèfle blanc,Trèfle doré,Trèfle rouge,Trientale boréale,Trille blanc,Trille ondulé,
Trille rouge,Trioste perfolié,Tussilage pas d’âne,Utriculaire vulgaire,
Uvulaire à grandes fleurs,Uvulaire perfoliée,Valériane officinale,Verge d'or à feuilles de graminée,Verge d'or à tige zigzagante,Verge d'or bleuâtre,Verge d'or du Canada,
Verge d'or rugueuse,Verge d'or squarreuse,
Vergerette de Philadelphie,Vergerette rude,Véronique officinale,Verveine hastée,Vesce jargeau,Violette du Canada,Violette du Labrador,Violette parente,Violette pubescente,
Violette trousse-dents,Viorne bois d’original,Vipérine commune,`.split(',').map(item => item.trim()),

    familyname: `
Adoxacées,Alismatacées,Alliacées,Amaranthacées,Apiacées,Apocynacées,Aracées,Araliacées,Aristolochiacées,Astéracées,
Balsaminacées,Berbéridacées,Boraginacées,Brassicacées,
Cabombacées,Campanulacées,Caprifoliacées,Caryophyllacées,Colchicacées,Convolvulacées,Cornacées,
Éricacées,Euphorbiacées,Fabacées,Géraniacées,Hémérocallidacées,Hydrophyllacées,Hypéricacées,
Iridacées,Lamiacées,Lentibulariacées,Liliacées,Lythracées,Malvacées,Mélanthiacées,Montiacées,
Nymphéacées,Onagracées,Orchidacées,Orobanchacées,Oxalidacées,
Papavéracées,Phrymacées,Plantaginacées,Polygonacées,Pontédériacées,Primulacées,
Renonculacées,Rosacées,Rubiacées,Ruscacées,Saxifragacées,Scrofulariacées,Solanacées,
Typhacées,Urticacées,Verbénacées,Violacées`.split(',').map(item => item.trim()),
    abouttitle: "À propos",
    abouttext: [
      "Qu'aimeriez-vous savoir sur le Projet de fleurs sauvages de Gatineau?",
      "Où est la Gatineau?",
      "Qu'est-ce qu'une fleur sauvage?"
    ],
    querytitle: "Recherche de fleurs",
    queryresults: "résultats",
    queryfiltername: "Couleur de la fleur,Type de feuille,Disposition des feuilles,Floraison,Espèce,Nom,Famille,Numéro du sentier".split(","),
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
    colour: "blanco,amarillo,rojo,violeta,verde,marrón,naranja,azul,rosa".split(','),
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
    colour: "weiß,gelb,rot,lila,grün,braun,orange,blau,pink".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember'.split(','),
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
    gwp: "Проект Полевой цветок Гатино",
    welcome: "Здравствуйте",
    homebutton: "Запрос, О нас, Контакт, Ссылки, Авторские права".split(','),
    all: "ВСЕ",
    screen: "Главная, Запрос, Цветы, Детали Цветка, О нас, Контакт, Ссылки, Авторские права".split(','),
    colour: "белый,желтый,красный,фиолетовый,зеленый,коричневый,оранжевый,синий,розовый".split(','),
    leaf: "simple,compound,none".split(','),
    arrangement: "alternate,basal,whorled,opposite,none".split(','),
    floweringin: 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(','),
    familyname: null,
    abouttitle: "насчет",
    abouttext: [
    "Что бы вы хотели знать о проекте Gatineau Wildflower?",
       "Где Гатино?",
       "Что такое полевой цветок?",
       "Чего пытается достичь проект?"
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
