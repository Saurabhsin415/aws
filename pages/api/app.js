
import useSWR from "swr";
import axios from "../../components/lib/axios";

export const GuessingFormGet = () => {
  const address = 'guessing-forum?page=2';
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data:result, error } = useSWR(address, fetcher);
  return { result, error }
}

export const GuessingFormPost = (data) => {
    const address = 'guessing-forum';
    const result =axios.post(address,data);
    return result
  }
  export const UserRegistation = (data) => {
    const address = 'registration';
    const result =axios.post(address,data);
    return result
  }
  export const UserLogin = (data) => {
    const address = 'login';
    const result =axios.post(address,data);
    return result
  }

  export const Logout = () => {
    const address = 'logout';
    const result =  axios.get(address);
    return result
  }

  //like 
  export const Like = (data) => {
    const address = 'like';
    const result =axios.post(address,data);
    return result
  }

  // Dislike
  export const Dislike = (data) => {
    const address = 'dislike';
    const result =axios.post(address,data);
    return result
  }

  //top 10 users
  export const TopUsers = () => {
    const address = 'top-users';
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data:result, error } = useSWR(address, fetcher);
    return { result, error }
  }

  // export const getUser = (username) => axios.get({
  //   baseUrl: `https://api.github.com/users/`,
  //   responseType: 'json',
  //   })
 

  
  // export const ReturnsPost= (data) => {
  //   const address = AppSetting.API_ACTION.RETURNS;
  //   const result =axios.post(address,data);
  //   // const { data:result, error } = useSWR(address, fetcher);
  //   return result
  // }


