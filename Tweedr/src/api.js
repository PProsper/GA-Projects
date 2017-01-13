import axios from 'axios';


export function getData (){
  return axios.get('https://tweedr-e87f5.firebaseio.com/.json')
}

export function postData (){
  return axios.post('https://tweedr-e87f5.firebaseio.com/.json')
}
