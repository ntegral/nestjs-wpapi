import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
export interface WpApiConfigOptions {
    endpoint: string;
    username: string;
    password: string;
    auth?: true | false;
    nonce?: string;
}
export interface WpApiConfigOptionsFactory {
    createWpApiConfigOptions(): Promise<WpApiConfigOptions> | WpApiConfigOptions;
}
export interface WpApiConfigAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<WpApiConfigOptionsFactory>;
    useExisting?: Type<WpApiConfigOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<WpApiConfigOptions> | WpApiConfigOptions;
}
