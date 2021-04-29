import CryptoJS from 'crypto-js'
import { SECRET_KEY } from 'constants/Secret'

export const encrypt = (data) => {
	return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY, {
		keySize: 128 / 8,
		iv: SECRET_KEY,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7,
	}).toString()
}
export const encryptString = (data) => {
	return CryptoJS.AES.encrypt(data, SECRET_KEY).toString()
}
export const decryptString = (data) => {
	return CryptoJS.AES.encrypt(data, SECRET_KEY).toString()
}
export const decrypt = (data) => {
	return JSON.parse(
		CryptoJS.enc.Utf8.stringify(
			CryptoJS.AES.decrypt(data, SECRET_KEY, {
				keySize: 128 / 8,
				iv: SECRET_KEY,
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7,
			})
		)
	)
}
