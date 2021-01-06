import { isFunction, noop } from 'lodash'

// 默认配置HTTP返回格式
const DEFAULT_RESPONSE_CONSTRUCTOR = {
    success: 'success',
    message: 'message',
    data: 'data',
}

// https://github.github.io/fetch/
class HttpFetchJson {
    constructor() {
        // 兜底赋值，防止未执行initFetch函数
        this.responseConstructor = DEFAULT_RESPONSE_CONSTRUCTOR
        this.interceptor = noop
    }

    initFetch = ({ responseConstructor = DEFAULT_RESPONSE_CONSTRUCTOR, interceptor = noop }) => {
        const {
            success = DEFAULT_RESPONSE_CONSTRUCTOR.success,
            message = DEFAULT_RESPONSE_CONSTRUCTOR.message,
            data = DEFAULT_RESPONSE_CONSTRUCTOR.data,
        } = responseConstructor


        if (!Object.keys(responseConstructor).every(String)) {
            throw new Error('All of initFetch options must be Sting!')
        }
        if (!isFunction(interceptor)) {
            throw new Error('interceptor options must be Function!')
        }

        this.responseConstructor = {
            ...this.responseConstructor,
            success,
            message,
            data,
        }

        this.interceptor = interceptor
    }

    fetchJson = (url, params = {}) => {
        const { success, message, data } = this.responseConstructor
        return fetch(url, params)
            .then(
                (response) => {
                    this.interceptor(response)
                    return response
                },
            )
            .then(
                (response) => {
                    if (response.status === 200) {
                        return response.json()
                    }
                    throw new Error(`请求返回状态🐴错误：${response.status}`)
                },
            ).then(
                (response) => {
                    if (response[success]) {
                        return response[data]
                    }
                    throw new Error(response[message])
                },
            )
            .catch(
                (error) => {
                    throw new Error(error)
                },
            )
    }
}

const newHttpFetchJson = new HttpFetchJson()

export const { fetchJson, initFetch } = newHttpFetchJson
