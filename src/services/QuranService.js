import http from "../http-common";
const getAllSurah = () => {
  return http.get("/surahs");
};
const getSurah = nomorSurah => {
  return http.get(`/surahs/${nomorSurah}`);
};
const getAllAyat = nomorSurah => {
  return http.get(`/surahs/${nomorSurah}/ayahs`);
};
const getAyat = (nomorSurah,nomorAyat) => {
  return http.get(`/surahs/${nomorSurah}/ayahs/${nomorAyat}`);
};
const random = () => {
  return http.get(`/random`);
};
const QuranService = {
  getAllSurah,
  getSurah,
  getAllAyat,
  getAyat,
  random
};
export default QuranService;
