import { Inject } from '@nestjs/common';
import { WPAPI_TOKEN } from './wpapi.constants';

export function InjectWpApi() {
    return Inject(WPAPI_TOKEN);
}
