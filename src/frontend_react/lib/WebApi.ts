import axios, { AxiosResponse, AxiosError } from 'axios'

interface ApiResponseJson<T> {
  status: number
  result: T
}

export class ApiResponse<T> {
  status: number
  result: T

  public constructor({ status, result }: ApiResponseJson<T>) {
    this.status = status
    this.result = result
  }

  public get isSuccess() {
    return this.status === 1
  }
}

class Api {
  public async get<T>(
    url: string,
    option: Record<string, any>
  ): Promise<ApiResponse<T>> {
    let response: AxiosResponse
    let responseJson: ApiResponseJson<T>

    try {
      response = await axios.get(url, option)
      responseJson = response.data
    } catch (error) {
      responseJson = error.response.data
    }

    const apiResponse: ApiResponse<T> = new ApiResponse(responseJson)

    return apiResponse
  }
}

export const api = new Api()
