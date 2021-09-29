import { post }  from '../utils/request'


export function getUserid(userId){
    return post(`/api/test.json?`,userId)
}