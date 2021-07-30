import category from './../assets/img/costic/customer-5.jpg'
export const userInitialState = {
    isLoggedIn: false,
    access_token: '',
    email: '',
    name: '',
    phone: null,
    address: [],
    isSeller: false,
    avatar: '',
    defaultLanguage: null,
}


export const categoriesInitialState = {
    id: '',
    name: '',
    description: '',
    colors_hex: '',
    media_cover_id: '',
    media_image_id: '',
    lang_id: ''
}



export const languagesInitialState = {
    id: '',
    name: '',
    direction: '',
    active: '',
    flag: '',
    abbr: '',
}