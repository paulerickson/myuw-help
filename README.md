# myuw-help

This component provides a way to present help/feedback resources and information in a dialog so users can get help quickly, without leaving the page.

## Getting started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-help@^1?module"></script>
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-help@^1"></script>
```

Include the component's markup on your page:

```html
    <myuw-help
        myuw-help-title="Get help"
        show-button
        show-default-content
        open>
        <div class="your-div-here" slot="myuw-help-content">
            Your custom content
        </div>
    </myuw-help>
```

### Trigger dialog manually 

If you aren't using the top bar button (via the `show-button` attribute), fire the `show-myuw-help` event on the `document` when you want the dialog to display (e.g. when your "help" button is clicked):

```js
function showHelpDialog() {
    var event = new Event('show-myuw-help');
    document.dispatchEvent(event);
}
```

### Set up custom positioning

If you want to control the exact positioning of the dialog, you can dispatch a `CustomEvent` called `set-myuw-help-position` with position data like so:

```js
function showHelpDialog() {
    var event = new CustomEvent('show-myuw-help', {
      detail: { // required by CustomEvent spec
        position: { // "position" required by myuw-help component
          top: '100px', // "top" required by myuw-help component
          left: '100px', // "left" required by myuw-help component
        }
      }
    });
    document.dispatchEvent(event);
}
```

*Note: It is important that you use that exact event name and dispatch the event from the document scope. The component listens for the* `show-myuw-help`  *and* `set-myuw-help-position` *events.*

### Configurable properties via attributes

- **myuw-help-title**: The title to display at the top of the help dialog
- **show-button**: Include this attribute if you want the help icon button to appear the the top bar. If you want to trigger the dialog some other way, you're free to omit this attribute.
- **show-default-content**: Include this attribute if you want to include the default UW-Madison-flavored help links. At this time we do not recommend showing the default content, as it is still a work in progress.
- **open**: Only include this attribute if the dialog should be open by default

### Slots

- **myuw-help-content**: Use this slot to insert your own content into the dialog (with whatever markup and styling you want).

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
