export const userIsLogged = () => {
  return !!localStorage.getItem('user')
}