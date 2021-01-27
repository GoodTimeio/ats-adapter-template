import { User } from 'src/entities/user';

interface Office {
    id?: string;
    address?: string;
    name: string;
}

interface Department {
    id?: string;
    team?: string;
    department: string;
}

export interface Job {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    closedAt?: string;
    status: 'open' | 'closed' | 'draft';
    name: string;
    offices: Office[];
    departments: Department[];
    raw: unknown;
    customFields?: unknown;

    jobAdmins?: User[];
    hiringManagers?: User[];
    interviewers?: User[];
    recruiters?: User[];
    coordinators?: User[];
    sourcers?: User[];
}
