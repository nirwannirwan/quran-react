import {
  RETRIEVE_DATA
} from "../actions/types";
const initialState = [];
function quranReducer(qurans = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_DATA:
      return payload;
    default:
      return qurans;
  }
};
export default quranReducer;
