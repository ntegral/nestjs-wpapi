import { Test } from '@nestjs/testing';
import { WpApiModule } from './wpapi.module';
import {
    WpApiConfigOptions,
    WpApiConfigOptionsFactory,
} from './common/interfaces';
import WPAPI = require('wpapi');
import { WPAPI_TOKEN } from './common';

describe('WpApiModule', () => {
    let config: WpApiConfigOptions = {
        endpoint: 'http://wp.com/wp-json',
        username: 'D****',
        password: '*********',
        auth: true,
    };

    class TestService implements WpApiConfigOptionsFactory {
        createWpApiConfigOptions(): WpApiConfigOptions {
            return config;
        }
    }

    describe('forRoot 1.0', () => {
        it('should provide the jsforce client', async () => {
            const mod = await Test.createTestingModule({
                imports: [WpApiModule.forRoot(config)],
            }).compile();

            const client = mod.get<WPAPI>(WPAPI_TOKEN);
            console.log('client:', client);
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(WPAPI);
        });
    });

    describe('forRootAsync 1.0', () => {
        describe('when the `useFactory` option is used', () => {
            it('should provide the wpapi client', async () => {
                const mod = await Test.createTestingModule({
                    imports: [
                        WpApiModule.forRootAsync({
                            useFactory: () => config,
                        }),
                    ],
                }).compile();

                const client = mod.get<WPAPI>(WPAPI_TOKEN);
                expect(client).toBeDefined();
                expect(client).toBeInstanceOf(WPAPI);
            });
        });
    });

    describe('when the `useClass` option is used', () => {
        it('should provide the wpapi client', async () => {
            const mod = await Test.createTestingModule({
                imports: [
                    WpApiModule.forRootAsync({
                        useClass: TestService,
                    }),
                ],
            }).compile();

            const client = mod.get<WPAPI>(WPAPI_TOKEN);
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(WPAPI);
        });
    });

    describe('forRoot', () => {
        it('should be DynamicModule', () => {
            const dynamicModule = WpApiModule.forRoot(config);

            expect(dynamicModule).toBeDefined();
        });

        it('should be DynamicModule', () => {
            const dynamicModule = WpApiModule.forRootAsync({
                useFactory: () => config,
            });

            expect(dynamicModule).toBeDefined();
        });
    });
});
