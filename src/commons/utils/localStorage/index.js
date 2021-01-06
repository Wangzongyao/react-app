export function setLocal(key, value) {
    localStorage.setItem(key, value)
}

export function getLocal(key) {
    return localStorage.getItem(key)
}

export function rmLocal(key) {
    localStorage.removeItem(key)
}

export default {
    setLocal,
    getLocal,
    rmLocal,
}
