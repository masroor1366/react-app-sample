import { jpAxios } from "../JpAxios";

export const getPostService=()=>{
    return jpAxios.get('/posts');
}