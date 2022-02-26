// USING TEMPLAETS
const template=document.createElement('template');
template.innerHTML=`
<style>
h3{
    color:white;
    font-family: 'Courier New', Courier, monospace;
}
.user-card{
    height: fit-content;
    width: 20vh;
    min-width:20vmax;
    background-color: purple;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-radius: 15px;
    padding: 1rem;
    word-break: break-word;
}
button{
    background-color: white;
    color:purple;
    border-radius: 35px;
    cursor:pointer;
}
slot{
    color:bisque;
}
</style>
<div class="user-card">
<h3 id="user-name"></h3>
<slot name="message"/ >
<button id='toggle-info'> Hide Info</button>
</div> 
`

class UserCard extends HTMLElement{
    constructor(){
        super();
        // this.innerHTML="Deepak Singh"
        // this.innerHTML=` <h4>${this.getAttribute('name')}</h4>`
        
        // Defining Property
        this.showInfo=true;

        //Using Shadow Dom
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h3').innerText=this.getAttribute('name')
    }
    toggleInfo(){
        console.log("Toggle Info Called");
        const info= this.shadowRoot.querySelector('#user-name')
        const toggleButton= this.shadowRoot.querySelector('#toggle-info')
        this.showInfo=!this.showInfo
        if(this.showInfo){
            info.style.display='block'
            toggleButton.innerText="Hide Info"
        }
        else
        {info.style.display='none'
        toggleButton.innerText="Show Info"}

         
    }
    // custom elements insert lifecycle hook
    connectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click',()=> this.toggleInfo())
    }
    // custom elements remove lifecycle hook
    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').removeEventListener()
    }
    // Called when attribute is removed, add , updated
    attributeChangedCallback(attributeName,oldVal,newVal){
    }
}
// TO defien a custom element
window.customElements.define('user-card',UserCard)