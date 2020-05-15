"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function scrollIntoView(selectors, options) {
    const element = document.querySelector(selectors);
    if (element) {
        element.scrollIntoView(options);
    }
}
exports.scrollIntoView = scrollIntoView;
