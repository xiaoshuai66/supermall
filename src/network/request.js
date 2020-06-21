import axios from 'axios'

export function request1(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

	instance.interceptors.request.use(config => {
		return config
	})

	instance.interceptors.response.use(res => {
		return res.data
	})

  return instance(config)
}

export function request2(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    timeout: 5000
  });

	instance.interceptors.request.use(config => {
		return config
	})

	instance.interceptors.response.use(res => {
		return res.data
	})

  return instance(config)
}