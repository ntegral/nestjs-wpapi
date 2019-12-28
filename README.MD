[![npm version](http://img.shields.io/npm/v/@ntegral/nestjs-wpapi.svg?style=flat)](https://npmjs.org/package/@ntegral/nestjs-wpapi "View this project on npm")
[![Codecov Coverage](https://img.shields.io/codecov/c/github/ntegral/nestjs-wpapi/master.svg?style=flat-square)](https://codecov.io/gh/ntegral/nestjs-wpapi)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)


<p align="center">
  <h3 align="center">
    @ntegral/nestjs-wpapi
  </h3>

  <p align="center">
    Provides an injectable wordpress client to provide features to the Wordpress API for nestjs projects
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`@ntegral/nestjs-wpapi` implements a module, `WpApiModule`, which when imported into
your nestjs project provides a WordPress Api client to any class that injects it. This
lets WordPress be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Installation

```bash
npm install --save @ntegral/nestjs-wpapi wpapi
```

## Getting Started

The simplest way to use `@ntegral/nestjs-wpapi` is to use `WpApiModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { WpApiModule } from '@ntegral/nestjs-wpapi';

@Module({
  imports: [
    WpApiModule.forRoot({
      endpoint: 'wp.url'
      username: 'some.user@wp.com.sb01',
      password: 'account_password',
      auth: true
    }),
  ],
})
export class AppModule {}
```

You can then inject the JsForce client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectWpApi } from '@ntegral/nestjs-wpapi';
import { wpapi } from 'wpapi';

@Injectable()
export class AppService {
  public constructor(@InjectWpApi private readonly client: Client) {}
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { WpApiModule } from '@ntegral/nestjs-wpapi';

@Module({
  imports: [
    JsForceModule.forRootAsync({
      imports: [ConfigModule],  
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        endpoint: 'wp.url'
        username: 'some.user@wp.com.sb01',
        password: 'account_password',
        auth: true
      }),
    }),
  ],
})
export class AppModule {}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the ISC License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [wpapi](https://github.com/wp-api/node-wpapi)

Copyright &copy; 2019 Ntegral Inc.
