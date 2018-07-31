(function () {
    'use strict';

    var tpl = " <style> :host {\n        display: block;\n        font-style: inherit;\n        font-variant: inherit;\n        font-family: inherit;\n    }\n\n    :host([hidden]) {\n        display: none;\n    }\n\n    :host([show-default-content]) #myuw-help__default-content {\n        display: block;\n    }\n\n    :host([open]) #myuw-help__dialog {\n        opacity: 1;\n        right: 0;\n        top: 20%;\n        transform: translate(-50%,20%) scale(1);\n    }\n\n    :host([open]) #myuw-help__shadow {\n        opacity: 1;\n        height: 100%;\n    }\n\n    #myuw-help__dialog {\n        max-height: 80%;\n        max-width: 80%;\n        min-width: 300px;\n        height: auto;\n        -webkit-box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n        box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15), 0 13px 25px 0 rgba(0, 0, 0, 0.3);\n        background-color: #FFFFFF;\n        padding: 22px 24px 12px;\n        margin-top: 0;\n        margin-bottom: 0;\n        margin-left: auto;\n        margin-right: auto;\n        border-radius: 5px;\n        font-family: 'Roboto', Arial, sans-serif; /* TODO: use styles variables */\n        position: absolute;\n        opacity: 0;\n        top: 0;\n        right: 0;\n        -webkit-transition: all .4s cubic-bezier(.25,.8,.25,1);\n        transition: all .4s cubic-bezier(.25,.8,.25,1);\n        z-index: 101;\n    }\n\n    #myuw-help__heading {\n        display: flex;\n        align-content: center;\n        justify-content: space-between;\n    }\n\n    #myuw-help__title {\n        color: rgba(0,0,0,0.8);\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 24px;\n        letter-spacing: 0.03px;\n    }\n\n    #myuw-help__content {\n        font-weight: 400;\n        font-size: 16px;\n        color: rgba(0,0,0,.5);\n        line-height: 24px;\n        text-align: left;\n        letter-spacing: 0.03px;\n        padding: 8px 0 16px;\n    }\n\n    #myuw-help__default-content {\n        display: none;\n    }\n\n    #myuw-help__default-content ul {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    #myuw-help__default-content ul li {\n        transition: background 0.4s cubic-bezier(.25,.8,.25,1);\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        min-height: 38px;\n        height: auto;\n        padding: 0 16px 0 6px;\n    }\n    #myuw-help__default-content ul li:hover {\n        background: rgba(158,158,158,0.2);\n    }\n    #myuw-help__default-content a {\n        text-decoration: none;\n        color: #0479a8; /* TODO: use styles variables */\n        min-height: 38px;\n        line-height: 38px;\n        flex: auto;\n        display: flex;\n        align-items: center;\n    }\n\n    #myuw-help__default-content .material-icons {\n        width: 24px;\n        min-height: 24px;\n        min-width: 24px;\n        margin-right: 12px;\n        color: #434343;\n    }\n\n    #myuw-help__shadow {\n        position: fixed;\n        top: 64px;\n        left: 0;\n        width: 100%;\n        height: 0;\n        opacity: 0;\n        background: rgba(0,0,0,0.3);\n        transition: opacity 0.3s cubic-bezier(.25,.8,.25,1);\n        z-index: 100;\n    }\n\n    #myuw-help__close-button {\n        min-width: 48px;\n        margin: 0;\n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n        min-height: 36px;\n        line-height: 36px;\n        text-align: center;\n        border-radius: 3px;\n        box-sizing: border-box;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 0;\n        padding: 0 6px;\n        background: transparent;\n        white-space: nowrap;\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: 14px;\n        text-decoration: none;\n        overflow: hidden;\n        -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n        transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n        border-radius: 50%;\n    }\n    #myuw-help__close-button:hover {\n        background-color: rgba(158,158,158,0.2);\n    }\n    #myuw-help__close-button:focus {\n        outline: none;\n    }\n\n    @media all and (min-width: 481px) and (max-width: 840px) {\n        #myuw-help__dialog {\n            width: 400px;\n        }\n    }\n\n    @media all and (min-width: 841px) {\n        #myuw-help__dialog {\n            width: 600px;\n        }\n    } </style> <div id=\"myuw-help__dialog\"> <div id=\"myuw-help__heading\"> <h1 id=\"myuw-help__title\"></h1> <button id=\"myuw-help__close-button\" aria-label=\"close dialog\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </button> </div> <div id=\"myuw-help__content\"> <slot name=\"myuw-help-content\"></slot> <div id=\"myuw-help__default-content\"> <ul> <li> <a href=\"tel:608-264-4357\">Call the help desk</a> </li> <li> <a href=\"mailto:help@doit.wisc.edu\">Email the help desk</a> </li> <li> <a href=\"https://it.wisc.edu\">Get help another way</a> </li> <li> <a href=\"https://outages.doit.wisc.edu/\">Check the Outages page</a> </li> <li> <a href=\"https://kb.wisc.edu/\">Search the KnowledgeBase</a> </li> </ul> </div> </div> </div> <div id=\"myuw-help__shadow\"></div> ";

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

}());
