import axios from 'axios'
import isp from './isp'
import auth from './auth'
import qos from './qos'

const ispApi = isp(axios)
const authApi = auth(axios)
const qosApi = qos(axios)

export { ispApi, authApi, qosApi }