import  { maxMobileWidth } from '../config'

export const isMobile = () =>
                window.innerWidth < maxMobileWidth ? true : false
