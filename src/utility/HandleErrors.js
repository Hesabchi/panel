import {message} from 'antd'

export function HandleErrors(err) {
	try {
		
		const lang = 'fa'
		if (err.response) {
			if (err.response.data.meta && !err.response.data.meta.success && err.response.data.message[lang]) {
				message.error(err.response.data.message[lang])
				return;
			}else if(err.response.data.meta && !err.response.data.meta.success && err.response.data.message){
				message.error(err.response.data.message)
				return;
			} else if(err.response.data.title === 'Transaction Failed'){
				message.error(err.response.data.detail)
				return;
			}  else {
				throw err;
			}
		} else {
			throw err;
		}
	} catch (error) {
		const lang = 'fa'
		message.error('خطایی پیش آمده، لطفا دوباره تلاش کنید');
	}
}