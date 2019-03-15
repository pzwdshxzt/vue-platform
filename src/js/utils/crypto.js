/**
 * 工具类
 */
import CryptoJS from 'crypto-js'
const keyStr = 'abcdef0123456789'
export default {
  encrypt (word) {
    let key = CryptoJS.enc.Utf8.parse(keyStr)
    let srcs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
  },
  decrypt (word) {
    let key = CryptoJS.enc.Utf8.parse(keyStr)
    let decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    })
    return CryptoJS.enc.Utf8.stringify(decrypt).toString()
  }
}
