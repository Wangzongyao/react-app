import { message } from 'antd'

// https://github.github.io/fetch/
const fetchJson = (url, params = {}) => fetch(url, params).then(
    (response) => {
        if (response.status !== 404) {
            return response.json()
        }
        return message.error('地址不存在!')
    },
    e => message.error(`${e.message}`),
)

export default fetchJson
