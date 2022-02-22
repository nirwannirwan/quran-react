import {
  RETRIEVE_DATA,
} from "./types";
import QuranService from "../services/QuranService";

export const GetAllSurah = () => async (dispatch) => {
  try {
    const res = await QuranService.getAllSurah();
    dispatch({
      type: RETRIEVE_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSurah = (nomorSurah) => async (dispatch) => {
  try {
    const res = await QuranService.getSurah(nomorSurah);
    dispatch({
      type: RETRIEVE_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllAyat = (nomorSurah) => async (dispatch) => {
  try {
    const res = await QuranService.getAllAyat(nomorSurah);
    dispatch({
      type: RETRIEVE_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAyat = (nomorSurah,nomorAyat) => async (dispatch) => {
  try {
    const res = await QuranService.getAyat(nomorSurah,nomorAyat);
    dispatch({
      type: RETRIEVE_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const random = () => async (dispatch) => {
  try {
    const res = await QuranService.random();
    dispatch({
      type: RETRIEVE_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};