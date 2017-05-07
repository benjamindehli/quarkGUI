import * as ButtonRow from '../../01-molecules/buttons/button-row';

const Style = require<any>('../../../../src/modules/02-organisms/menus/list-menu.scss');

export class ListMenu {
	id: string = "";
	listItems: IListItem[];
	hover: boolean = false;
	constructor(listMenu: IListMenu) {
		if (listMenu.id !== undefined) this.id = listMenu.id;
		if (listMenu.listItems !== undefined) this.listItems = listMenu.listItems;
		if (listMenu.hover !== undefined) this.hover = listMenu.hover;
	}


	private createTitleElement(listItem: IListItem){
		let moduleLinkAttribute = (listItem.moduleLink !== undefined) ? `data-module-target="${listItem.moduleLink}"` : '';
		let singleLineClass = (listItem.title !== undefined && listItem.subTitle == undefined) ? Style.singleLine : '';
		let subTitleElement = (listItem.subTitle !== undefined) ? `<small>${listItem.subTitle}</small>` : '';
		let iconElement = (listItem.iconClass !== undefined) ? `<span class="${Style.listItemIcon} ${listItem.iconClass}"></span>` : '';

		let titleElement = "";
		if (listItem.title !== undefined && listItem.link !== undefined) {
			titleElement = `<a href="${listItem.link}" class="${Style.listItemTitle} ${singleLineClass}">${iconElement}${listItem.title} ${subTitleElement}</a>`;
		}
		else if (listItem.title !== undefined && listItem.moduleLink !== undefined){
			titleElement = `<a ${moduleLinkAttribute} class="loadPage ${Style.listItemTitle} ${singleLineClass}">${iconElement}${listItem.title} ${subTitleElement}</a>`;
		}
		else if (listItem.title !== undefined) {
			titleElement = `<span class="${Style.listItemTitle} ${singleLineClass}" ${moduleLinkAttribute}>${iconElement}${listItem.title} ${subTitleElement}</span>`;
		}
		return titleElement;
	}

	private createButtonRowElement(listItem: IListItem){
		let buttonRowElement = ""
		if (listItem.buttonRow !== undefined) {
			buttonRowElement = `<span class="${Style.listItemButtonRow}">${ButtonRow.getModule(listItem.buttonRow)}</span>`;
		}

		return buttonRowElement;

	}

	public createModuleElement() {
		var listItemElements = "";
		if (this.listItems !== undefined) {
			for (let listItem of this.listItems){
				let title     = this.createTitleElement(listItem);
				let buttonRow = this.createButtonRowElement(listItem);

				listItemElements += `<li class="${Style.listItem}">${title} ${buttonRow}</li>`;
			}
		}


		let hoverClass: string = this.hover ? Style.hover : "";

		return `<ul id="${this.id}" class="${Style.listMenu} ${hoverClass}">${listItemElements}</ul>`
	}
}

export interface IListItem {
	title?: string;
	subTitle?: string;
	link?: string;
	iconClass?: string;
	moduleLink?: string;
	buttonRow?: ButtonRow.IButtonRow;
}

export interface IListMenu {
	id?: string;
	listItems?: IListItem[];
	hover?: boolean;
}


export function getModule(listMenu: IListMenu){
	return new ListMenu(listMenu).createModuleElement();
}
