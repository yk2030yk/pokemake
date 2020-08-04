import _variables from '~/assets/scss/global/_export.scss'

const getVariables = (): Array<{ [key: string]: string }> => {
  return _variables
}

const getValue = (keys: Array<string> | string): string | undefined => {
  let key
  if (typeof keys === 'string') {
    key = keys
  } else {
    key = keys.join('-')
  }

  if (!_variables[key]) return undefined
  return _variables[key]
}

const getColor = (name: string): string | undefined => {
  return getValue(['colors', name])
}

interface Scss {
  getVariables: () => Array<{ [key: string]: string }>
  getValue: (keys: Array<string> | string) => string | undefined
  getColor: (name: string) => string | undefined
}

export const scss: Scss = {
  getVariables,
  getValue,
  getColor
}
