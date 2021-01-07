export interface Stage {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    status: 'open' | 'closed' | 'draft';
    type?: string;
    jobId?: string;
    raw: unknown;
}
