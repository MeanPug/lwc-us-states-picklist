import { LightningElement, api } from 'lwc';

export default class PicklistUsStates extends LightningElement {
    @api label;
    @api placeholder;

    get choices() {
        return this.states.map(s => ({ label: s, value: s.toLowerCase() }));
    }

    get states() {
        return [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana',
            'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
            'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
            'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }

    handleSelect(event) {
        this.dispatchEvent(
            new CustomEvent('valueselect', {
                detail: {                
                    value: event.detail.value
                }
            })
        );
    }
}
