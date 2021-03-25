import { Application } from 'src/entities/application';
import { Email, File, Link, PhoneNumbers } from 'src/entities/common';

export interface Candidate {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    givenName: string;
    familyName: string;
    nickname?: string;
    title?: string;
    company?: string;
    photoUrl?: string;
    emails: Email[];
    phoneNumbers?: PhoneNumbers[];
    links?: Link[];
    status: 'active' | 'archived';
    atsUrl: string;
    applications: Application[];
    files?: File[];
    recruiterId?: string;
    coordinatorId?: string;
    raw: unknown;
    customFields?: unknown;
}
