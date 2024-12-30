const reactElement = {
    type: 'a',
    props: {
        href: 'https://apoorvpathak.com',
        target: '_blank'
    },
    children: "Apoorv's website"
}

const para = {
    type: 'p',
    props:{},
    children: 'This is a Para'
}

const root = document.querySelector('#root')

function Render(element, container){
    // const domElement = document.createElement(element.type);
    // domElement.innerHTML = element.children;
    // domElement.setAttribute('href', element.props.href);
    // domElement.setAttribute('target', element.props.target);
    // container.appendChild(domElement)

    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElement)
}

Render(reactElement, root);
Render(para, root)