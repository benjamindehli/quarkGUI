import * as AtomCheckbox from '../../00-atoms/form-elements/checkbox'
const Style = require<any>("./checkbox.scss");

export class Checkbox extends AtomCheckbox.Checkbox{
	label: string = "";
	constructor(checkbox: ICheckbox) {
		super({id: checkbox.id, name: checkbox.name, value: checkbox.value});
		if(checkbox.label !== undefined) this.label = checkbox.label;
	}

	public createModuleElement() {
		let checkbox = {
			id: this.id,
			name: this.name,
			value: this.value
		};
		return `
			<div class="${Style.inputGroup}">
				${AtomCheckbox.getModule(checkbox)}
				<label for="${this.id}" class="${Style.label}">${this.label}</label>
			</div>
		`;
	}
}

export interface ICheckbox extends AtomCheckbox.ICheckbox{
	label?: string;
}

export function getModule(checkbox: ICheckbox){
	return new Checkbox(checkbox).createModuleElement();
}
