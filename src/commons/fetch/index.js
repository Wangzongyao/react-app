import { message } from 'antd'

// https://github.github.io/fetch/
const fetchJson = (url, params = {}) => {
    return fetch(url, params).then(
        function (response) {
            if (response.status !== 404) {
                return response.json()
            } else {
                return message.error('地址不存在!')
            }
        },
        function (e) {
            return message.error(`${e.message}`)
        }
    )
}

export default fetchJson;
