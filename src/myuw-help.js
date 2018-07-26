import tpl from './myuw-help.html';
class MyUWHelp extends HTMLElement {

  constructor() {
    super();

    // Create a shadowroot for this element
    this.attachShadow({mode: 'open'});

    // Append the custom HTML to the shadowroot
    this.shadowRoot.appendChild(MyUWHelp.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'myuw-help-title',
      'open',
      'show-default-content'
    ];
  }

  /**
  *   Web component lifecycle hook to update changed properties
  */
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    this.updateComponent();
  }

  /**
  *   When component is first attached to the DOM,
  *   get its defined attributes and listen for
  *   scrolling
  */
  connectedCallback() {
    // Get all attributes
    this['myuw-help-title'] = this.getAttribute('myuw-help-title');
    this['open'] = this.getAttribute('open');
    this['show-default-content'] = this.getAttribute('show-default-content');

    // Listen for close events
    this.shadowRoot.getElementById('myuw-help__shadow').addEventListener('click', () => {
      this.setDialogState(false);
    });
    this.shadowRoot.getElementById('myuw-help__close-button').addEventListener('click', () => {
      this.setDialogState(false);
    });
    // Listen for open event
    document.body.addEventListener('show-myuw-help', () => {
      this.setDialogState();
    });
  }

  /**
  *   Update the component state
  */
  updateComponent() {
    this.shadowRoot.getElementById('myuw-help__title').innerHTML = this['myuw-help-title'];
  }

  setDialogState(newState) {
    switch(newState) {
      case false:
        this.removeAttribute('open');
        break;
      case true:
        this.setAttribute('open', '');
        // Focus the dialog window
        this.shadowRoot.getElementById('myuw-help__dialog').focus();
        break;
      default:
        if (this.hasAttribute('open')) {
          this.removeAttribute('open');
        } else {
          this.setAttribute('open', '');
          // Focus the dialog window
          this.shadowRoot.getElementById('myuw-help__dialog').focus();
        }
        break;
    }
  }
}

MyUWHelp.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-help', MyUWHelp);
