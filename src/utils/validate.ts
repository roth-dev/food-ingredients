const Validate = {
  /**
   * @return may return boolean if it's not undefined
   */
  isset: (variable: any) => variable !== undefined,

  /**
   * @return may return boolean if it's not empty
   */
  isNull: (variable: any) => variable === null,

  /**
   * @return may return boolean if it's not empty
   */
  isEmpty: (variable: any) => !Validate.isset(variable) || variable === null || variable.toString().trim() === '',

  isEmail: (email: any) => {
    const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return exp.test(String(email).toLowerCase())
  },

  /**
   * @param {String | Number} number - is an interger
   * @returns may return number if it's number or false
   */
  isNumber: (number: any) => {
    return !/[^0-9]/.test(number)
  },

  /**
   * @param {String | Number} number - is an decimal
   * @returns may return number if it's number or false
   */
  isDecimal: (number: any) => {
    if (!Validate.isEmpty(number)) {
      const format = number.toString().replace(',', '.')
      if (!/^\d+[.]?\d*$/.test(format)) {
        return false
      }
    }
    return number
  },

  isPermute: (number: string) => {
    return number.includes('.')
  },

  isInvalid: (variable: any, replace: any = null) => {
    return Validate.isEmpty(variable) ? replace : variable
  },

  /**
   * @param {String | Number} currency - 1234567.123456
   * @return currency 1,234,567.123,456
   */
  getCurrency: (currency: any) => {
    if (!Validate.isEmpty(currency)) {
      // return currency.toString().toLocaleString('en-IN')
      return currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return currency
  },
  getFraction: (number: any) => {
    if (number) {
      return parseFloat(number)
        .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        .toString()
    }
    return '0.00'
  },
  getId: (number: any) => {
    return `000000${number.toString()}`.slice(-7)
  },
  getTitle: (title: any) => {
    let obj = { en: '', km: '', zh: '' }
    const json = typeof title === 'string' ? JSON.parse(title) : title
    return { ...obj, ...json }
  },
  /**
   * @param {String | Number} number - is an decimal
   * @param {Number} precision - is an interger
   * @returns {Number} - may return number
   */
  round: (number: any, precision: number) => {
    if (number !== null && number !== '') {
      const factor = Math.pow(10, precision)
      const result = Math.round(number * factor) / factor
      return result
    }
    return 0
  },
  isPhone: (phone: string) => {
    const ph = phone.toString().substring(0, 1)
    return ph == '0' || ph == '+' ? phone : `0${phone}`
  },
  random: () => Math.floor(Math.random() * 10),

  shuffle: (data: any[]) => data.sort(() => Math.random() - 0.5),

  roundSpace: (str: string) => {
    return str.replace(/^(.{2})(.{3})(.*)$/, "$1 $2 $3")
  }
}

export default Validate
