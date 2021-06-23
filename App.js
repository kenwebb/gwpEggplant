import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import HomeScreen from './components/HomeComponent'
import QueryScreen from './components/QueryComponent'
import FlowersScreen from './components/FlowersComponent'
import FlowerDetailsScreen from './components/FlowerDetailsComponent'

import AboutScreen from './components/AboutComponent'
import ContactScreen from './components/ContactComponent'
import LinksScreen from './components/LinksComponent'
//import CopyrightScreen from './components/CopyrightComponent'

// picker components(s)
import QueryPickerScreen from './components/QueryPickerComponent'

const Stack = createStackNavigator();

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { getLocalizedStrings } from './db/gwp/localizedStrings'
//import AsyncStorage from '@react-native-async-storage/async-storage';

// see: https://reactnavigation.org/docs/hello-react-navigation
// "Sometimes we might want to pass additional props to a screen."

const LocalizationContext = React.createContext();

const App = (props) => {
  // https://docs.expo.io/versions/v39.0.0/sdk/localization/

  // Set the key-value pairs for the different languages you want to support.
  i18n.translations = getLocalizedStrings("All");

  const [locale, setLocale] = React.useState(Localization.locale);
  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );

  // Set the locale once at the beginning of your app.
  i18n.locale = locale;

  //i18n.locale = "fr";
  // When a value is missing from a language it'll fallback to another language with the key present.
  // see also: https://reactnavigation.org/docs/localization
  i18n.fallbacks = true;
  i18n.defaultLocale = "en";

  const forFadeQ = ({ next }) => ({
    cardStyle: {
      //opacity: current.progress,
      opacity: next.progress, // NO
    },
  });

  const forFadeQP = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
      //opacity: next.progress, NO
    },
  });

  // TODO the screen names do NOT update when a user changes the language
  return (
    <LocalizationContext.Provider value={localizationContext}>
      <NavigationContainer
        //theme={DarkTheme}
      >
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white', //'#3A5F0B',
              // https://stackoverflow.com/questions/51181965/react-navigation-header-has-a-faint-line
              elevation: 0.75, // remove shadow on Android
              //shadowOpacity: 0, // remove shadow on iOS, if needed
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              //fontWeight: 'bold',
              color: 'green',
              //fontSize: 20 // default is 20 ? on Android, web
              fontSize: Platform.OS === 'ios' ? 20 : 20
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: i18n.t('screen.0') }} />
          <Stack.Screen name="Query" component={QueryScreen} options={{ title: i18n.t('screen.1'),
            cardStyleInterpolator: forFadeQP,
            cardOverlay: () => ( <View style={{flex: 1, backgroundColor: 'transparent',}}/> )
          }} />
          <Stack.Screen name="Flowers" component={FlowersScreen} options={{ title: i18n.t('screen.2') }} />
          <Stack.Screen name="FlowerDetails" component={FlowerDetailsScreen} options={{ title: i18n.t('screen.3') }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ title: i18n.t('screen.4') }} />
          <Stack.Screen name="Contact" component={ContactScreen} options={{ title: i18n.t('screen.5') }} />
          <Stack.Screen name="Links" component={LinksScreen} options={{ title: i18n.t('screen.6') }} />
          {/*<Stack.Screen name="Copyright" component={CopyrightScreen} options={{ title: i18n.t('screen.7') }} />*/}

          {/*<Stack.Screen name="QueryPicker" component={QueryPickerScreen} options={{
            //title: i18n.t('screen.8'),
            title: props.route.params.pitems[1], // NO
            //...TransitionPresets.ModalTransition,
            cardStyleInterpolator: forFadeQP,
            cardOverlay: () => ( <View style={{flex: 1, backgroundColor: 'transparent',}}/> ) // 'red' 'transparent'
          }} />*/}
          <Stack.Screen name="QueryPicker" component={QueryPickerScreen}
            options={({ route }) => ({ title: route.params.pitems[1] })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LocalizationContext.Provider>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

//export {LocalizationContext, App};
export default App;
