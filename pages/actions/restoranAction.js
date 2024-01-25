import axios from "axios";

export const GET_LIST_RESTORAN = "GET_LIST_RESTORAN";

export const getListRestoran = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET_LIST_RESTORAN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get api list restoran
    axios({
      method: "GET",
      url: `/data/explorekuliner.json`,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: GET_LIST_RESTORAN,
          payload: {
            loading: false,
            data: res.data.restoran,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_RESTORAN,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
