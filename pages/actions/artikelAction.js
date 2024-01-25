import axios from "axios";

export const GET_LIST_ARTIKEL = "GET_LIST_ARTIKEL";

export const getListArtikel = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET_LIST_ARTIKEL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get api list artikel
    axios({
      method: "GET",
      url: `/data/exploreKuliner.json`,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: GET_LIST_ARTIKEL,
          payload: {
            loading: false,
            data: res.data.artikel,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_ARTIKEL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
