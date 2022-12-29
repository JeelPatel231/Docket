export const serializeNonPOJO = (object : any) => {
    return JSON.parse(JSON.stringify(object))
}