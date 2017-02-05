const initialState = {
  text: '',
  items: [],
  images: [],
  titles: ['', '' ,'' ,'' ,'' ,'' ,'' ,'' ,'' ,''],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_ITEMS':
      return Object.assign({}, state, {
        text: action.text,
        items: action.items,
        images: action.finalImgs,
      });
    case 'TRANSLATE_TEXT':
      return Object.assign({}, state, {
        titles: state.titles.map((e, i) => {
          if (i === action.index) {
            return action.eng;
          }
          return e;
        }),
      });
    default:
      return state;
  }
};

export default reducers;
