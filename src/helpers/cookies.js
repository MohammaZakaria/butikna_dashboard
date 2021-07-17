import Cookies from 'js-cookie'
import { routeLinks, TIMEOUT_BEFORE_REDIRECTING } from '../config/public-variables'


export const getAccessToken = () => Cookies.get('access_token')
// export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !!getAccessToken()

export const removeCookieAndLogout = () => {
    try {
        Cookies.remove('access_token')
        setTimeout(() => {
            redirectToLogin()
        }, TIMEOUT_BEFORE_REDIRECTING);

    } catch (error) {
        console.log(error);
    }

}
export const authenticate = async (token) => {
    try {
        // const tokens = await refreshTokens() // call an API, returns tokens

        const expires = (token.expires_in || 60 * 60) * 1000
        const inOneHour = new Date(new Date().getTime() + expires)

        // you will have the exact same setters in your Login page/app too
        Cookies.set('access_token', token, { expires: inOneHour })
        // Cookies.set('refresh_token', tokens.refresh_token)
        return true
    } catch (error) {
        // redirectToLogin()
        return false
    }
    // redirectToLogin()
    // return false
}

export const getLastPath = () => Cookies.get('lastPath')

export const setNewPath = (path) => {
    Cookies.set('lastPath', path)
}

const redirectToLogin = () => {
    window.location.replace(
        `${routeLinks.defaultLogin}`
    )
    // or history.push('/login') if your Login page is inside the same app
}