export interface File
{
    id: number,
    fileName?: string,
    path?: string,
    fileType?: string,
    createdDate?: Date,
    selected?: boolean
    isProgress?: boolean,
    progressValue?: number
}