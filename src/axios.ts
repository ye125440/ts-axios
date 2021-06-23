import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxiosInstance {
  const context = new Axios()
  console.log('debug ~ file: axios.ts ~ line 7 ~ createInstance ~ context', context);
  const instance = Axios.prototype.request.bind(context)
  console.log('debug ~ file: axios.ts ~ line 8 ~ createInstance ~ instance', instance);

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
