import { StackNavigator } from 'react-navigation';
import Home from './component/Home';
import CharacterDetail from './component/DetailCharacter';

const Navigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: (() => ({ title: 'Marvel Characters' })),
  },
  CharacterDetail: {
    screen: CharacterDetail,
    navigationOptions: (({ navigation: { state: { params } } }) => ({ title: params.character.name })),
  },
});
export default Navigator;
