import updateSetting from './reducer-setting'

const reducer = (state, action) => {
    return {
        setting: updateSetting(state, action),
    }
}

export default reducer
