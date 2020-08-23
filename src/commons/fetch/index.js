import { message } from 'antd'

// https://github.github.io/fetch/
const fetchJson = (url, params = {}) => fetch(url, params)
    .then(
        (response) => {
            if (response.status !== 404) {
                return response.json()
            }
            return new Error(`请求返回状态🐴错误：${response.status}`)
        },
    ).catch(
        (error) => {
            message.error(error)
        },
    )

export default fetchJson
