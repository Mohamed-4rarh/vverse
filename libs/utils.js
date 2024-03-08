
export async function getUserData(targetPoint, options) {
    try {
        const response = await fetch(targetPoint, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}