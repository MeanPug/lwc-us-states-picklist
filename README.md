# Lightning Web Component to Render US States as a Picklist
Just a dead simple LWC for a dead simple use case :dog:

## Usage
Simply download or clone this repo and copy the `picklistUsStates` folder to your apps' `lwc` directory then include as normal.

## Example
1. Render the US States picklist in a form

```html
<div class="slds-form-element slds-p-vertical_medium">        
  <div class="slds-form-element__control">
    <c-picklist-us-states
        label="US States"
        placeholder="Select a State"
        onvalueselect={handleStateSelect}>
</c-picklist-us-states>
```

```javascript
handleStateSelect(event) {
  const selectedState = event.detail.value;
  console.log(selectedState);
}
```
