import _ from 'lodash'
export function MaskNumber(input) {
  if (input === '' || input === undefined) {
    return 0
  }

  let str = input
  str = str.toString()

  if (_.isNaN(parseFloat(str))) {
    return 0
  }

  str = parseFloat(str)
  //str = ExponentsToDecimal(str)
  str = str.toString()

  const parts = str.split('.')
  str = parts[0]

  str = str.replace(/\,/g, '')
  const objRegex = new RegExp('(-?[0-9]+)([0-9]{3})')

  while (objRegex.test(str)) {
    str = str.replace(objRegex, '$1,$2')
  }

  if (parts[1] && parts[1].length > 7) {
    parts[1] = parts[1].substr(0, 7)
  }

  if (parts[1] !== undefined) {
    //&& parseInt(parts[1]) != 0
    str += `.${parts[1]}`
  }

  return str
}
