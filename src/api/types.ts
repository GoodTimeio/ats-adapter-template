export type Response<T> = T extends (infer E)[] ? PaginatedResponse<E> : SingleResponse<T>;

interface PaginatedResponse<E> {
    message: string;
    data: E[];
    pagination: {
        next: number | null;
        maxResults: number;
    };
}

interface SingleResponse<T> {
    message: string;
    data: T;
    error?: unknown;
}
