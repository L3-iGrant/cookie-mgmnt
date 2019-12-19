export const isMobile = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );

export const isFunction = value =>
    value &&
    (Object.prototype.toString.call(value) === "[object Function]" ||
        "function" === typeof value ||
        value instanceof Function);

export const isString = value => {
    return toString.call(value) === '[object String]';
};

export const isArray = value => {
    return Object.prototype.toString.call(value) === '[object Array]';
};

export const isObject = value => Object.prototype.toString.call(value) === '[object Object]';

export const checkPropertiesPresent = (properties, obj) => {
    properties.forEach(prop => {
        if (!(prop in obj)) {
            return false
        }
    });

    return true
};