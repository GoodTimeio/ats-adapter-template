export interface InterviewStep {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    raw?: unknown;
    stageId?: string;
    name: string;
    status: 'active' | 'archived';
    duration?: number;
    groupId?: string;
    groupName?: string;
}
