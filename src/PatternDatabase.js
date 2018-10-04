let names = [];
let data = {};

export default class PatternDatabase {
    static register(name, parameters, pattern) {
        names.push(name);
        data[name] = {
            "parameters": parameters,
            "pattern": pattern
        };
    }

    static getPatternNames() {
        return names;
    }

    static getPattern(name) {
        return data[name];
    }
}
