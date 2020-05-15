export function scrollIntoView(selectors: string, options: ScrollIntoViewOptions) {
    const element = document.querySelector(selectors);
    if(element){
        element.scrollIntoView(options);
    }
};