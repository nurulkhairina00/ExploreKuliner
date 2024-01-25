import { GET_LIST_RESTORAN } from "../../actions/restoranAction";

const initialState = {
  getListRestoranResult: false,
  getListRestoranLoading: false,
  getListRestoranError: false,
};

const restoran = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_RESTORAN:
      return {
        ...state,
        getListRestoranResult: action.payload.data,
        getListRestoranLoading: action.payload.loading,
        getListRestoranError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default restoran;
