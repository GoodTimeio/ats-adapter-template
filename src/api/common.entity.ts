export interface Email {
    isPrimary: boolean;
    type: 'personal' | 'school' | 'work' | 'other';
    email: string;
    optInForContact?: boolean;
    optInTimeStamp?: string;
}

export interface PhoneNumbers {
    isPrimary: boolean;
    type: 'home' | 'mobile' | 'work' | 'other';
    phoneNumber: string;
    formattedNumber?: string;
    optInForContact?: boolean;
    optInTimeStamp?: string;
}

export type File = FileUrl | FileContent;
type FileCategory =
    | 'resume'
    | 'cover_letter'
    | 'other'
    | 'admin_only'
    | 'public'
    | 'offer_packet'
    | 'offer_letter'
    | 'take_home_test';
interface FileUrl {
    filename: string;
    fileurl: string;
    category: FileCategory;
}
interface FileContent {
    filename: string;
    fileContent: string;
    fileContentEncoding:
        | 'ascii'
        | 'utf8'
        | 'utf-8'
        | 'utf16le'
        | 'ucs2'
        | 'ucs-2'
        | 'base64'
        | 'latin1'
        | 'binary'
        | 'hex';
    fileContentType: string;
    category: FileCategory;
}

export interface Link {
    type: string;
    value: string;
}
