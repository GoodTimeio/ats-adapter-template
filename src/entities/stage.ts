export interface Stage {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    raw?: unknown;
    name: string;
    status: 'open' | 'closed' | 'draft';
    type?: string;
    jobId?: string;
}
