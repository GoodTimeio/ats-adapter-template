export interface Stage {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    status: 'open' | 'closed' | 'draft' | 'pending' | 'rejected';
    type?: string;
    jobId?: string;
}
