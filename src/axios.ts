import { AxiosRequestConfig, AxiosResponse } from './../types/index'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'
import xhr from './xhr'

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  return xhr(config).then(res => transformResponseData(res) )
}


function transformResponseData(res: AxiosResponse) {
  res.data = transformResponse(res.data)
  return res
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios