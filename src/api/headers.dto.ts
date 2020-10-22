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
    @IsString()
    authorization!: string;

    // TODO: If you are an ATS, delete the following header.
    // Only ATS Adapter built and operated by GoodTime use the following header.
    @IsString()
    @Expose({ name: 'atsendpoint' })
    atsEndpoint!: string;

    // TODO: If you are an ATS, delete the following header.
    // Only ATS Adapter built and operated by GoodTime use the following header.
    @IsString()
    @Expose({ name: 'atsuibaseurl' })
    atsUiBaseUrl!: string;
}
