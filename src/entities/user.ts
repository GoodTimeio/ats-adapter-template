import { Email, Link, PhoneNumbers } from 'src/entities/common';

export interface User {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    givenName: string;
    familyName: string;
    nickname?: string;
    title?: string;
    photoUrl?: string;
    atsUrl?: string;
    links?: Link[];
    company?: string;
    emails: Email[];
    phoneNumbers?: PhoneNumbers[];
    status: 'active' | 'archived';
    settings?: Record<string, unknown>;
    raw: unknown;
}
