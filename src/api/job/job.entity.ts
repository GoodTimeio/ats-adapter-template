import { User } from '@api/user/user.entity';

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
    status: 'open' | 'closed' | 'draft' | 'pending' | 'rejected';
    name: string;
    offices: Office[];
    departments: Department[];
    keywords?: string[];
    // update docs as well

    jobAdmins?: User[];
    hiringManagers?: User[];
    interviewers?: User[];
    recruiters?: User[];
    coordinators?: User[];
    sourcers?: User[];
}
