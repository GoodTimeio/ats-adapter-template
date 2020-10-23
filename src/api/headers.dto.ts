import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

/**
 * Check API docs for detail: https://goodtime-ats-adapter.docs.stoplight.io/api-reference
 *
 * Need to `@Expose` all properties.
 * See: https://github.com/typestack/class-transformer/issues/198
 */
export class BaseHeadersDTO {
    @Expose()
    authorization!: string;

    // TODO: If you are an ATS, delete the following header.
    // Only ATS Adapter built and operated by GoodTime use the following header.
    @IsString({ message: 'atsendpoint header must be set' })
    @Expose({ name: 'atsendpoint' })
    atsEndpoint!: string;

    // TODO: If you are an ATS, delete the following header.
    // Only ATS Adapter built and operated by GoodTime use the following header.
    @IsString({ message: 'atsuibaseurl header must be set' })
    @Expose({ name: 'atsuibaseurl' })
    atsUiBaseUrl!: string;
}

export class BaseHeaderWithOnBehalfOfDTO extends BaseHeadersDTO {
    @IsString({ message: 'on-behalf-of header must be set' })
    @Expose({ name: 'on-behalf-of' })
    onBehalfOf!: string;
}
