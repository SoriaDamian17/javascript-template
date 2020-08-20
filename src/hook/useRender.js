export default function UseRender(view) {
    const divElem = document.createElement('div');
    divElem.innerHTML = view;

    return divElem;
}
