import { WpApiConfigOptions } from '../common/interfaces';
import { WPAPI_TOKEN, createWpApiClient } from '../common';

export function createWpApiProviders(options: WpApiConfigOptions) {
    return {
        provide: WPAPI_TOKEN,
        useValue: createWpApiClient(options),
    };
}
