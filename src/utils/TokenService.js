const tokenKey = "Token"
const ROLE = "ROLE"
import Cookies from 'js-cookie';
//token
export function getToken() {
    // return Cookies.get(tokenKey)
    return localStorage.getItem(tokenKey)
}

export function setToken(token) {
    // Cookies.set(tokenKey, token)
    localStorage.setItem(tokenKey, token)
}

export function removeToken() {
    // return Cookies.remove(tokenKey)
    return localStorage.removeItem(tokenKey)
}

//role
export function getRole() {
    // return Cookies.get(ROLE)
    return localStorage.getItem(ROLE)
}

export function setRole(role) {
    // Cookies.set(ROLE, role)
    localStorage.setItem(ROLE, role)
}

export function removeRole() {
    // return Cookies.remove(ROLE)
    return localStorage.removeItem(ROLE)
}
