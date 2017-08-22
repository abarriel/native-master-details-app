import { LOAD_CHARACTERS, CHARACTERS_LOADED } from '../actions/';

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case CHARACTERS_LOADED:
    {
      const { payload: characters } = action;
      console.log('CHARACTERE');
      characters.map(character => {
        console.log(character.id, character.name);
      });
      console.log('FIN DE CHARACTERE');      
      return state;
    }
    default:
      return state;
  }
};

export default todosReducer;
