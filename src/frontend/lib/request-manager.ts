interface Status {
  BEFORE_REQUEST: string
  WHILE_REQUEST: string
  FINISH_REQUEST: string
}

interface Error {
  message: string
}

interface ErrorJson {
  status: string
  result: {
    errors: Array<Error>
  }
}

const REQUEST_STATUS: Status = {
  BEFORE_REQUEST: 'BEFORE_REQUEST',
  WHILE_REQUEST: 'WHILE_REQUEST',
  FINISH_REQUEST: 'FINISH_REQUEST'
}

const responseJsonUnexpectedError: ErrorJson = {
  status: 'failed',
  result: {
    errors: [
      {
        message: '予期せぬエラーが発生しました。'
      }
    ]
  }
}

export const parseErrorResponse = (error): Promise<ErrorJson> => {
  return new Promise((resolve) => {
    if (error.response) {
      const data = error.response.data

      if (data instanceof Blob) {
        const reader = new FileReader()

        reader.addEventListener('loadend', (e) => {
          if (e.srcElement) {
            const text = e.srcElement.result
            resolve(JSON.parse(text))
          } else {
            resolve(responseJsonUnexpectedError)
          }
        })

        reader.readAsText(data)
      } else if (data.result) {
        resolve(data)
      } else {
        resolve(responseJsonUnexpectedError)
      }
    } else {
      resolve(responseJsonUnexpectedError)
    }
  })
}

export class RequestManager {
  status: string
  error: ErrorJson | undefined

  public constructor() {
    this.status = REQUEST_STATUS.BEFORE_REQUEST
    this.error = undefined
  }

  public setBeforeRequest(): void {
    this.status = REQUEST_STATUS.BEFORE_REQUEST
  }

  public setWhileRequest(): void {
    this.status = REQUEST_STATUS.WHILE_REQUEST
  }

  public setFinishRequest(): void {
    this.status = REQUEST_STATUS.FINISH_REQUEST
  }

  public get isBeforeRequest(): boolean {
    return this.status === REQUEST_STATUS.BEFORE_REQUEST
  }

  public get isWhileRequest(): boolean {
    return this.status === REQUEST_STATUS.WHILE_REQUEST
  }

  public get isFinishRequest(): boolean {
    return this.status === REQUEST_STATUS.FINISH_REQUEST
  }

  public async setErrorResponse(errorResponse) {
    const errorJson = await parseErrorResponse(errorResponse)
    this.setError(errorJson)
  }

  public setError(error: ErrorJson): void {
    this.error = error
  }

  public resetError(): void {
    this.error = undefined
  }

  public get hasError(): boolean {
    return this.error !== undefined
  }

  public get errorMessages(): Array<Error> {
    if (this.error) {
      return this.error.result.errors
    } else {
      return []
    }
  }
}
