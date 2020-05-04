export function getModelValue(model: any, property: string) {
    const arr = property.split('.');
    while (arr.length && (model = model[arr.shift()])) {
        ;
    }
    return model;
}