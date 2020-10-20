import cls from 'cls-hooked';

let namespace: cls.Namespace;

export const setClsNameSpace = (namespaceParam: cls.Namespace) => {
    namespace = namespaceParam;
    return namespace;
};

export const getClsNameSpace = (): cls.Namespace => {
    return namespace;
};

export const getClsValue = (key: string): unknown => {
    if (namespace) {
        return namespace.get(key);
    }
};

export const setClsValue = <T>(key: string, value: T): void => {
    if (namespace) {
        namespace.set(key, value);
    }
};
