import { GET_LIST_ARTIKEL } from "../../actions/artikelAction";

const initialState = {
  getListArtikelResult: false,
  getListArtikelLoading: false,
  getListArtikelError: false,
};

const artikel = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_ARTIKEL:
      return {
        ...state,
        getListArtikelResult: action.payload.data,
        getListArtikelLoading: action.payload.loading,
        getListArtikelError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default artikel;
