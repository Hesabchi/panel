import { getAccountService } from "../../services/horizonSerivce"
import { getAssetsService } from "../../services/kuknosService";
import { SET_ACCOUNT_BALANCE, SET_IRR } from "./types";


export const getAccountBalance = (publicKey)=>{
    return async dispatch =>{
        try {
            let account = await getAccountService(publicKey);
            const PMNBalance = calculateAvailablePMN(account)
            const assets = await getAssetsService().then(result => result.data);
            const PMNAssesInfo = assets.filter(e => e.code === "PMN")[0];
            
            dispatch({
                type: SET_ACCOUNT_BALANCE,
                payload: PMNBalance
            })

            dispatch({
                type: SET_IRR,
                payload: parseFloat(PMNAssesInfo.irr)
            })

        } catch (error) {
            
        }

    }
}


function calculateAvailablePMN({balances , subentry_count}){
    try {
        let reserve = 1;
        reserve += subentry_count * 0.5
        reserve += parseFloat(balances.filter(e=>e.asset_type === 'native')[0].selling_liabilities)
        return parseFloat(balances.filter(e=>e.asset_type === 'native')[0].balance) - reserve 
   } catch (error) {
       return 0
   }
}