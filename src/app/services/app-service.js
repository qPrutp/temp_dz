import { restapiexampleApi } from '../config'

export default class AppService {
    async getEmployee(id = 1) {
        try {
            const response = await fetch(`${restapiexampleApi}/api/v1/employee/${id}`)
            
            if (!response.ok) {
                throw Error(response.statusText)
            }

            const json = await response.json()
            return json

        } catch(error) {
            console.error('Щось пішло не так із AppService getEmployee!')
            throw error
        }
    }
}
