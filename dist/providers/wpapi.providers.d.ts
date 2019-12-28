/// <reference types="wpapi" />
import { WpApiConfigOptions } from '../common/interfaces';
export declare function createWpApiProviders(options: WpApiConfigOptions): {
    provide: string;
    useValue: import("wpapi");
};
