export interface PaginateType {
    paginate: {
        limit: number,
        offset: number,
        first: number
        last: number,
    }
    filter: {
        sort: string,
        like: string
    }
}