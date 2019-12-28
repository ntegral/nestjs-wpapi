import { WpApiConfigOptions } from './interfaces';
import WPAPI = require('wpapi');

export function createWpApiClient(options: WpApiConfigOptions) {
    const client = new WPAPI(options);
    return client;
}
