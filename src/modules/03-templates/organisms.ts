var style = require('../../style/globalStyle.scss');

import * as ActionBar from '../02-organisms/menus/action-bar';
import * as ListMenu from '../02-organisms/menus/list-menu';
import * as Card from '../02-organisms/cards/card';
import * as Grid from '../01-molecules/sections/grid';


export default function(){

	return ` 
	<h2>Menus</h2>
	<h3>List menu</h3>
	${ListMenu.getModule({
		id: 'list-menu1',
		listItems: [
		{
			title: 'List item with subtitle',
			subTitle: 'This is a subtitle',
			buttonRow: {
				id: 'list-menu-button-row1',
				buttons: [
				{
					id: 'list-menu-buttonrow-button1',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button2',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button3',
					iconClass: 'fa fa-list'
				}
				]
			}
		},
		{
			title: 'List item without subtitle',
			buttonRow: {
				id: 'list-menu-button-row2',
				buttons: [
				{
					id: 'list-menu-buttonrow-button4',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button5',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button6',
					iconClass: 'fa fa-list'
				}
				]
			}
		},
		{
			title: 'List item with icon',
			iconClass: 'fa fa-user',
			buttonRow: {
				id: 'list-menu-button-row1',
				buttons: [
				{
					id: 'list-menu-buttonrow-button1',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button2',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button3',
					iconClass: 'fa fa-list'
				}
				]
			}
		},
		{
			title: 'List item with subtitle and icon',
			subTitle: 'This is a subtitle',
			iconClass: 'fa fa-user',
			buttonRow: {
				id: 'list-menu-button-row1',
				buttons: [
				{
					id: 'list-menu-buttonrow-button1',
					iconClass: 'fa fa-home'
				},
				{
					id: 'list-menu-buttonrow-button2',
					iconClass: 'fa fa-cog'
				},
				{
					id: 'list-menu-buttonrow-button3',
					iconClass: 'fa fa-list'
				}
				]
			}
		}
		]
	})}
	<h3>Action bar</h3>
	${ActionBar.getModule({
		theme: 'primary',
		actionButton:{
			id: 'actionbutton1',
			theme: 'primary',
			iconClass: 'fa fa-info'
		},
		actionBarMenu: {
			id: 'action-bar1',
			toggleButtons: [
			{
				id: 'togglebutton2',
				toggleType: '',
				title: '',
				targetClass: 'src-style-globalStyle---box',
				theme: 'primary',
				iconClass: 'fa fa-home'
			},
			{
				id: 'togglebutton3',
				toggleType: '',
				title: '',
				targetClass: 'src-style-globalStyle---box',
				theme: 'primary',
				iconClass: 'fa fa-search'
			},
			{
				id: 'togglebutton4',
				toggleType: '',
				title: '',
				targetClass: 'src-style-globalStyle---box',
				theme: 'primary',
				iconClass: 'fa fa-list'
			}
			]
		}
	})}

	<h2>Cards</h2>
	<h3>Card</h3>
	${Grid.getModule({
		gridItems:[
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Default card',
				content: ListMenu.getModule({
					id: 'card-list-menu1',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Primary card',
				theme: 'primary',
				content: ListMenu.getModule({
					id: 'card-list-menu2',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Info card',
				theme: 'info',
				content: ListMenu.getModule({
					id: 'card-list-menu3',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Success card',
				theme: 'success',
				content: ListMenu.getModule({
					id: 'card-list-menu4',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Warning card',
				theme: 'warning',
				content: ListMenu.getModule({
					id: 'card-list-menu5',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		},
		{
			sizes: {
				phone: 12,
				tablet: 6,
				tabletLandscape: 4,
				screen: 4
			},
			content: Card.getModule({
				title: 'Danger card',
				theme: 'danger',
				content: ListMenu.getModule({
					id: 'card-list-menu6',
					hover: true,
					listItems: [
					{
						title: 'List item with subtitle',
						subTitle: 'This is a subtitle',
					},
					{
						title: 'List item without subtitle',
					},
					{
						title: 'List item with link and subtitle',
						subTitle: 'This is a subtitle',
						link: '#'
					},
					{
						title: 'List item with link',
						link: '#'
					},
					]
				})
			})
		}
		]
	})}
	`	
}

