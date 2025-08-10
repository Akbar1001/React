function customRender(reactelement,conatiner)
{
    const domElement=document.createElement(reactelement.type)
    domElement.innerHTML=reactelement.children
}

const reactelement={
    type:'a',
    props:{
        href:"https://www.google.com/",
        target:"_blank"

    }
}
const container=document.querySelector("#root");