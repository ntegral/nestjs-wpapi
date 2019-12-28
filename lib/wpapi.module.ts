import { DynamicModule, Module } from '@nestjs/common';

import { WpApiCoreModule } from './wpapi-core.module';
import {
    WpApiConfigAsyncOptions,
    WpApiConfigOptions,
} from './common/interfaces';

@Module({})
export class WpApiModule {
    public static forRoot(options: WpApiConfigOptions): DynamicModule {
        return {
            module: WpApiModule,
            imports: [WpApiCoreModule.forRoot(options as WpApiConfigOptions)],
        };
    }

    public static forRootAsync(
        options: WpApiConfigAsyncOptions,
    ): DynamicModule {
        return {
            module: WpApiModule,
            imports: [WpApiCoreModule.forRootAsync(options)],
        };
    }
}
