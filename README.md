# myuw-help

This component provides a way to present help/feedback resources and information in a dialog so users can get help quickly, without leaving the page.

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```

## Usage

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-help@^1?module"></script>
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-help@^1"></script>
```

Fire the `show-myuw-help` event on the `document.body` when you want the dialog to display (e.g. when your "help" button is clicked):

```js
function showHelpDialog() {
    var event = new Event('show-myuw-help');
    document.body.dispatchEvent(event);
}
```

*Note: It is important that you use that exact event name and dispatch the event from the document body. The component sets a listener on the body that listens for the* `show-myuw-help` *event.*

Use the component's HTML tag wherever you want:

```html
    <myuw-help
        myuw-help-title="Get help"
        show-default-content
        open>
        <div class="your-div-here" slot="myuw-help-content">
            Your custom content
        </div>
    </myuw-help>
```

### Configurable properties via attributes

- **myuw-help-title**: The title to display at the top of the help dialog
- **show-default-content**: Include this attribute if you want to include the default UW-Madison-flavored help links.
- **open**: Only include this attribute if the dialog should be open by default

### Slots

- **myuw-help-content**: Use this slot to insert your own content into the dialog (with whatever markup and styling you want).
