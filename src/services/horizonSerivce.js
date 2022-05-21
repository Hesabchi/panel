import {HorizonApi} from './API'

export const getAccountService = (publicKey)=>{
    return new Promise((resolve, reject)=>{
        HorizonApi.get(`/accounts/${publicKey}`)
        .then((result) => {
            resolve(result.data)
        }).catch((err) => {
            reject(err)
        });
    })
}