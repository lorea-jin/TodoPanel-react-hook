import axios from 'axios'

const baseURL='http://localhost:8888/todos'
const service=axios.create({
	baseURL
})

service.interceptors.response.use(config=>config.data,error=>console.log(error))
export default service