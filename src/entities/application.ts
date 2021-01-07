export interface Application {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    jobName: string;
    jobId: string;
    stageName: string;
    stageId: string;
    status: 'active' | 'hired' | 'rejected' | 'archived' | 'withdrawn';
    appliedAt: string;
    candidateId: string;
    hostId?: string;
    coordinatorId?: string;
    hiringManagerId?: string;
    sourcerId?: string;
    raw: unknown;
}
