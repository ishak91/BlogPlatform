import { File } from '../../media/models';

export interface Post {
    id: number,
    postTitle: string,
    permerlink: string
    content: string
    createdDate: Date
    createdBy: number
    lastUpdatedDate: Date
    lastUpdatedBy: number,
    postStatus: string
    coverImage: File
}
