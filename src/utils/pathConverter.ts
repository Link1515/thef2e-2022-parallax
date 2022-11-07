export const pathConverter = (path) => {
  if (import.meta.env.MODE === 'production') {
    return '/thef2e-2022-parallax' + path
  }
  return path
}