import { Injectable } from '@nestjs/common';
import cls from 'cls-hooked';

/**
 * Store request specific data here.
 *
 * We're using CLS instead of using a REQUEST scoped provider b/c
 * of this page in [the nest docs](https://docs.nestjs.com/fundamentals/injection-scopes).
 *
 * tl;dr Since Logger module would use this provider and pretty much every module
 * depends on the Logger module, if we were to make this class REQUEST scoped,
 * we'd be instanting a lot of classes every request and this might cause a noticeable
 * performance impact.
 * See: https://docs.nestjs.com/fundamentals/injection-scopes#scope-hierarchy
 * See: https://docs.nestjs.com/fundamentals/injection-scopes#performance
 */
@Injectable()
export class ClsService {
    private static namespace = cls.createNamespace('goodtime-ats-adapter');

    getNamespace(): cls.Namespace {
        return ClsService.namespace;
    }

    getClsValue(key: string): unknown {
        return ClsService.namespace.get(key);
    }

    setClsValue<T>(key: string, value: T): void {
        ClsService.namespace.set(key, value);
    }
}
