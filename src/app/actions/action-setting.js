const screenResize = (isMobile) => {
    return {
        type: 'SCREEN_RESIZE',
        payload: isMobile
    }
}

export {
    screenResize,
}
