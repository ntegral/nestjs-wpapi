import { Global, Module, DynamicModule, Provider, Type } from '@nestjs/common';
import { createWpApiProviders } from './providers';
import {
    WpApiConfigOptions,
    WpApiConfigAsyncOptions,
    WpApiConfigOptionsFactory,
} from './common/interfaces';
import { WPAPI_MODULE_OPTIONS, WPAPI_TOKEN, createWpApiClient } from './common';

@Global()
@Module({})
export class WpApiCoreModule {
    public static forRoot(options: WpApiConfigOptions): DynamicModule {
        const provider = createWpApiProviders(options);

        return {
            exports: [provider],
            module: WpApiCoreModule,
            providers: [provider],
        };
    }

    public static forRootAsync(
        options: WpApiConfigAsyncOptions,
    ): DynamicModule {
        const provider: Provider = {
            inject: [WPAPI_MODULE_OPTIONS],
            provide: WPAPI_TOKEN,
            useFactory: (options: WpApiConfigOptions) =>
                createWpApiClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: WpApiCoreModule,
            providers: [...this.createAsyncProviders(options), provider],
        };
    }

    private static createAsyncProviders(
        options: WpApiConfigAsyncOptions,
    ): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<WpApiConfigOptionsFactory>;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            },
        ];
    }

    private static createAsyncOptionsProvider(
        options: WpApiConfigAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: WPAPI_MODULE_OPTIONS,
                useFactory: options.useFactory,
            };
        }
        const inject = [
            (options.useClass || options.useExisting) as Type<
                WpApiConfigOptionsFactory
            >,
        ];
        return {
            provide: WPAPI_MODULE_OPTIONS,
            useFactory: async (optionsFactory: WpApiConfigOptionsFactory) =>
                await optionsFactory.createWpApiConfigOptions(),
            inject,
        };
    }
}
