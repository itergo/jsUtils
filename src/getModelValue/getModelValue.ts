export class ModelValue{
    static get(model: any, property: string) {
        const arr = property.split('.');
        while (arr.length && (model = model[arr.shift()])) {
            ;
        }
        return model;
    }
}
