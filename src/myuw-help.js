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
      'show-default-content',
      'show-bar-button'
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
  *   get its defined attributes and set up listeners
  */
  connectedCallback() {
    // Get all attributes
    this['myuw-help-title']       = this.getAttribute('myuw-help-title');
    this['open']                  = this.getAttribute('open');
    this['show-default-content']  = this.getAttribute('show-default-content');
    this['show-bar-button']       = this.getAttribute('show-bar-button');

    this.$button            = this.shadowRoot.getElementById('help-button');
    this.$dialog            = this.shadowRoot.getElementById('myuw-help__dialog');
    this.$dialogTitle       = this.shadowRoot.getElementById('myuw-help__title');
    this.$backdrop          = this.shadowRoot.getElementById('myuw-help__shadow');
    this.$dialogCloseButton = this.shadowRoot.getElementById('myuw-help__close-button');
    
    // Listen for open events
    this.$button.addEventListener('click', () => {
      this.setDialogState();
    });
    document.addEventListener('show-myuw-help', () => {
      this.setDialogState();
    });

    // Listen for close events
    this.$backdrop.addEventListener('click', () => {
      this.setDialogState(false);
    });
    this.$dialogCloseButton.addEventListener('click', () => {
      this.setDialogState(false);
    });
  }

  /**
  *   Update the component state
  */
  updateComponent() {
    this.shadowRoot.getElementById('myuw-help__title').innerHTML = this['myuw-help-title'];
  }

  /**
   * Open or close the dialog, focus it if opened
   * @param {string} newState Optional parameter, either 'open' or 'closed'
   */
  setDialogState(newState) {
    switch(newState) {
      case false:
        // close the dialog
        this.removeAttribute('open');
        this.resetDialogPosition();
        break;
      case true:
        // open the dialog
        this.setAttribute('open', '');
        this.setDialogPosition();
        this.$dialog.focus();
        break;
      default:
        if (this.hasAttribute('open')) {
          // close the dialog
          this.removeAttribute('open');
          this.resetDialogPosition();
        } else {
          // open the dialog
          this.setAttribute('open', '');
          this.setDialogPosition();
          this.$dialog.focus();
        }
        break;
    }
  }

  /**
   * Position the dialog off-screen
   */
  resetDialogPosition() {
    this.$dialog.style.top = 0;
    this.$dialog.style.left = 'auto';
    this.$dialog.style.right = '-1000px';
  }

  /**
   * Position the dialog in the middle of the screen
   */
  setDialogPosition() {
    // Dialog dimensions
    var dialogWidth = this.$dialog.offsetWidth;
    var dialogHeight = this.$dialog.offsetHeight;

    // Screen dimensions
    var cssWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var cssHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // Dialog position
    var topPosition = ((cssHeight - dialogHeight) / 3);
    var leftPosition = ((cssWidth - dialogWidth) / 2);;

    // Set positioning
    this.$dialog.style.left = leftPosition;
    this.$dialog.style.right = 'auto';
    this.$dialog.style.top = topPosition;
  }
}

MyUWHelp.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-help', MyUWHelp);
