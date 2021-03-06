export default class Utils {
    static classify (key, value) {
        if(!value) {
            return key;
        } else {
            if (value[0] === '-') {
                value = `${key}${value}`;
            }
        }
        return `${key} ${value.split(' -').join(` ${key}-`)}`;
    }
}