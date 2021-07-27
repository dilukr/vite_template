import post from '../utils/request'


export function getuserid(userId){
    return post(`/api/test.json?`,userId)
}