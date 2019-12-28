import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

export interface WpApiConfigOptions {
    endpoint: string; // The endpoint URI for the invoking WPAPI instance
    username: string; // A username for authenticating API requests
    password: string; // A password for authenticating API requests
    auth?: true | false; // Authenticate all requests for a WPAPI instance
    nonce?: string; // use a nonce for cookie authentication
}

export interface WpApiConfigOptionsFactory {
    createWpApiConfigOptions():
        | Promise<WpApiConfigOptions>
        | WpApiConfigOptions;
}

export interface WpApiConfigAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<WpApiConfigOptionsFactory>;
    useExisting?: Type<WpApiConfigOptionsFactory>;
    useFactory?: (
        ...args: any[]
    ) => Promise<WpApiConfigOptions> | WpApiConfigOptions;
}
