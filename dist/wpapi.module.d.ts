import { DynamicModule } from '@nestjs/common';
import { WpApiConfigAsyncOptions, WpApiConfigOptions } from './common/interfaces';
export declare class WpApiModule {
    static forRoot(options: WpApiConfigOptions): DynamicModule;
    static forRootAsync(options: WpApiConfigAsyncOptions): DynamicModule;
}
