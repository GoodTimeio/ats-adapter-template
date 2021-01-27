export interface InterviewStep {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    stageId?: string;
    name: string;
    status: 'active' | 'archived';
    duration?: number;
    groupId?: string;
    groupName?: string;
    raw: unknown;
    unschedulable?: boolean;
}
