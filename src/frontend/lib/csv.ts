class SeparatedValue {
  separatorChar: string
  newlineChar: string

  public constructor(separatorChar: string, newlineChar) {
    this.separatorChar = separatorChar
    this.newlineChar = newlineChar
  }

  public arrayToString(data: string[][]): string {
    return data
      .map((line) => {
        return line.join(this.separatorChar)
      })
      .join(this.newlineChar)
  }

  public exportToFile(data: string[][], fileName: string = '') {
    const bom = new Uint8Array([0xef, 0xbb, 0xbf])
    const blob = new Blob([bom, this.arrayToString(data)], { type: 'text/csv' })
    const url = window.URL || window.webkitURL
    const blobURL = url.createObjectURL(blob)

    const fn =
      fileName === ''
        ? document.title === ''
          ? 'output'
          : document.title
        : fileName

    const a = document.createElement('a')
    a.download = decodeURI(`${fn}.csv`)
    a.href = blobURL
    a.type = 'text/csv'
    a.click()
  }
}

const SEPARATOR_CHAR = ','
const NEWLINE_CHAR = '\n'
export const csv = new SeparatedValue(SEPARATOR_CHAR, NEWLINE_CHAR)
