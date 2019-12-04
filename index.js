/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BasicFlatList from '../FlatList/src/BasicFlatList'
import Picker from './src/Picker'
import Screen from './src/setting/Screen'
import SVG from './src/SVG'

AppRegistry.registerComponent(appName, () => SVG);
