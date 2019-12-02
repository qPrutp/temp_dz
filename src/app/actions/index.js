import {
    screenResize,
} from './action-setting'

const printGlobalProps = () => {
    console.log('printGlobalProps')
    return {
        type: 'PRINT_GLOBAL_PROPS'
    }
}

export {
    screenResize,
    printGlobalProps,
}
