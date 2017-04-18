"use strict";
exports.__esModule = true;
var ListNavigation = require("./list-navigation");
var Style = require('../../../../src/modules/01-molecules/navigation/primary-navigation.scss');
var PrimaryNavigation = (function () {
    function PrimaryNavigation(primaryNavigation) {
        this.id = "";
        this.theme = "default";
        this.listItems = [];
        if (primaryNavigation.id !== undefined)
            this.id = primaryNavigation.id;
        if (primaryNavigation.theme !== undefined)
            this.theme = primaryNavigation.theme;
        if (primaryNavigation.listItems !== undefined)
            this.listItems = primaryNavigation.listItems;
    }
    PrimaryNavigation.prototype.getThemeClass = function (theme) {
        var themeClass = Style.listThemeDefault;
        if (theme == 'primary')
            themeClass = Style.listThemePrimary;
        if (theme == 'dark')
            themeClass = Style.listThemeDark;
        return themeClass;
    };
    PrimaryNavigation.prototype.createListElements = function (listItems) {
        var listElements = "";
        if (this.listItems.length) {
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                var dropdownContent = '';
                var dropdownClass = '';
                var listElement = '';
                var hasDropdown = listItem.dropdownContent !== undefined;
                if (hasDropdown) {
                    dropdownContent = "<div class=\"" + Style.dropdownContent + "\">" + ListNavigation.getModule(listItem.dropdownContent) + "<div>";
                    dropdownClass = "" + Style.hasDropdown;
                    listElement = " <li class=\"overlay-element " + dropdownClass + "\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"" + Style.dropdownTitle + "\">" + listItem.name + "</span>\n\t\t\t\t\t\t\t\t\t\t" + dropdownContent + "\n\t\t\t\t\t\t\t\t\t</li>";
                }
                else {
                    listElement = "<li><a href=\"" + listItem.link + "\">" + listItem.name + "</a></li>";
                }
                listElements += listElement;
            }
        }
        return listElements;
    };
    PrimaryNavigation.prototype.addListener = function () {
        document.addEventListener('DOMContentLoaded', function () {
            var navigationElements = document.getElementsByClassName(Style.hasDropdown) !== undefined ? document.getElementsByClassName(Style.hasDropdown) : false;
            if (navigationElements) {
                for (var i = 0; i < navigationElements.length; i++) {
                    var navigationElement = navigationElements[i];
                    var dropdownElements = navigationElement.getElementsByClassName(Style.dropdownContent);
                    var dropdownElement = dropdownElements[0];
                    var navigationElementWidth = navigationElements[i].offsetWidth;
                    var dropdownElementWidth = dropdownElements[0].offsetWidth;
                    var dropdownElementHeight = dropdownElements[0].offsetHeight;
                    var widthDif = navigationElementWidth - dropdownElementWidth;
                    dropdownElement.style.marginLeft = widthDif / 2 + 'px';
                }
            }
        }, false);
    };
    PrimaryNavigation.prototype.createModuleElement = function () {
        this.addListener();
        var listItemElements = this.createListElements(this.listItems);
        var themeClass = this.getThemeClass(this.theme);
        return "<ul id=\"" + this.id + "\"\" class=\"" + Style.list + " " + themeClass + "\">" + listItemElements + "</ul>";
    };
    return PrimaryNavigation;
}());
exports.PrimaryNavigation = PrimaryNavigation;
function getModule(primaryNavigation) {
    return new PrimaryNavigation(primaryNavigation).createModuleElement();
}
exports.getModule = getModule;