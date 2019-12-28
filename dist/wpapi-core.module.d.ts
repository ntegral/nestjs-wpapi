import { DynamicModule } from '@nestjs/common';
import { WpApiConfigOptions, WpApiConfigAsyncOptions } from './common/interfaces';
export declare class WpApiCoreModule {
    static forRoot(options: WpApiConfigOptions): DynamicModule;
    static forRootAsync(options: WpApiConfigAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
