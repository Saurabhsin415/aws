import Cookies from "js-cookie";

export const getToken = () => {
  // if (typeof window === undefined) {
  //   return null;
  // }

  // let token=localStorage.getItem('token');
  // return token;
// return localStorage.getItem('token');
if (process.browser) { 
  if (localStorage != undefined) {
  const token = Cookies.get("auth_token");
  return token;
}
}
};
