export async function getInformationFromServer(api) {
    try {
        const dataJson = await fetch(api)
        const dataJS = await dataJson.json()
        return dataJS;

    } catch (err) {
        console.error('Произошла ошибка!', err)
    }
}