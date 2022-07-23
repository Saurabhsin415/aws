
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

  // export const ReturnsPost= (data) => {
  //   const address = AppSetting.API_ACTION.RETURNS;
  //   const result =axios.post(address,data);
  //   // const { data:result, error } = useSWR(address, fetcher);
  //   return result
  // }


