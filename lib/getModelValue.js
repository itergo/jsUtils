export function getModelValue(model, property) {
    var arr = property.split('.');
    while (arr.length && (model = model[arr.shift()])) {
        ;
    }
    return model;
}
