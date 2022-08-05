import { registerRootComponent } from 'expo';

import './config'
import App from './App';
import {name as appName} from './app.json';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

registerRootComponent(App); 
//AppRegistry.registerComponent(appName, () => App); // isso peguei do seu codigo
