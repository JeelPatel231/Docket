export interface PBError {
    error : boolean,
    details : ErrorDetails
} 

interface ErrorObjectValue {
    code : string,
    message : string
}

interface ErrorDetails {
    url: string,
    status: number,
    data: {
      code: number,
      message: string,
      data: { [key:string] : ErrorObjectValue }
    },
    isAbort: boolean,
    originalError: string | null,
    name: string
}