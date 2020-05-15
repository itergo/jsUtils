"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModelValue {
    static get(model, property) {
        const arr = property.split('.');
        while (arr.length && (model = model[arr.shift()])) {
            ;
        }
        return model;
    }
}
exports.ModelValue = ModelValue;
