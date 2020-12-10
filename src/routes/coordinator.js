export const goToLogin = (history) => {
  history.push('/login')
}
export const goToSignUp = (history) => {
  history.push('/signup')
}
export const goToHome = (history) => {
  history.push('/home')
}
export const goToProfile = (history) => {
  history.push('/profile')
}

export const goToRestaurantsDetails = (history, id) => {
  history.push(`/restaurants/${id}`)
}

export const goToAdressPage = (history) => {
  history.push('/signup/adress')
}