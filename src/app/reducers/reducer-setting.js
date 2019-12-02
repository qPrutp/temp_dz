const updateSetting = (state, action) => {
    if (state === undefined) {
        
        return {
            title: 'setting',
            isMobile: null
        }
    }

    switch (action.type) {
        case 'PRINT_GLOBAL_PROPS':
            console.log('PRINT_GLOBAL_PROPS: ', state)
            return {
                ...state.setting
            }
        case 'SCREEN_RESIZE':
            console.log('is mobile: ', action.payload)
            return {
                ...state.setting,
                isMobile: action.payload
            }

        default:
            return state.setting
    }
}
    
export default updateSetting
