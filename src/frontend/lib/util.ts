export const encodePostData = (data: Object): URLSearchParams => {
  const params = new URLSearchParams()
  Object.keys(data).forEach((key) => {
    let value = data[key]
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    params.append(key, value)
  })
  return params
}
