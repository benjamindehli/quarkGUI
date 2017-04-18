"use strict";
exports.__esModule = true;
var InputField = require("./input-field");
var Style = require("../../../../src/modules/00-atoms/form-elements/select-list.scss");
var SelectList = (function () {
    function SelectList(selectList) {
        this.searchable = false;
        this.type = "text";
        this.value = "";
        this.placeholder = "";
        this.labelElement = "";
        this.optionElements = "";
        this.id = selectList.id;
        this.name = selectList.name;
        if (selectList.searchable !== undefined)
            this.searchable = selectList.searchable;
        if (selectList.type !== undefined)
            this.type = selectList.type;
        if (selectList.value !== undefined)
            this.value = selectList.value;
        if (selectList.placeholder !== undefined)
            this.placeholder = selectList.placeholder;
        if (selectList.labelElement !== undefined)
            this.labelElement = selectList.labelElement;
        if (selectList.options !== undefined)
            this.optionElements = this.createOptionElements(selectList.options);
    }
    SelectList.prototype.updateDropdownListHeight = function (dropdownListElement) {
        var dropdownElementHeight = dropdownListElement.offsetHeight;
        dropdownListElement.style.marginBottom = 0 - dropdownElementHeight + 'px';
    };
    SelectList.prototype.elementIsNotNullOrUndefinedById = function (id) {
        return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
    };
    SelectList.prototype.elementIsNotNullOrUndefinedByTagName = function (containerElement, tagName) {
        return containerElement.getElementsByTagName(tagName).length > 0;
    };
    SelectList.prototype.addListener = function (selectList, inputField, dropdownList) {
        document.addEventListener("module-lazy-loaded", function (e) {
            var selectListElementIsDefined = selectList.elementIsNotNullOrUndefinedById(selectList.id);
            var inputFieldElementIsDefined = selectList.elementIsNotNullOrUndefinedById(inputField.id);
            var dropdownListElementIsDefined = selectList.elementIsNotNullOrUndefinedById(dropdownList.id);
            if (selectListElementIsDefined && inputFieldElementIsDefined && dropdownListElementIsDefined) {
                var selectListElement_1 = document.getElementById(selectList.id);
                var inputFieldElement_1 = document.getElementById(inputField.id);
                var dropdownListElement = document.getElementById(dropdownList.id);
                var labelElementIsDefined = selectList.elementIsNotNullOrUndefinedByTagName(selectListElement_1, "LABEL");
                if (labelElementIsDefined) {
                    var labelElementList = selectListElement_1.getElementsByTagName("LABEL");
                    var labelElement = labelElementList.item(0);
                    labelElement.onclick = function () {
                        if (inputFieldElementIsDefined) {
                            inputFieldElement_1.focus();
                        }
                    };
                }
                inputFieldElement_1.value ? inputFieldElement_1.classList.add("is-not-empty") : inputFieldElement_1.classList.remove("is-not-empty");
                if (selectList.searchable) {
                    inputFieldElement_1.addEventListener("keyup", function (e) {
                        inputFieldElement_1.value.length ? inputFieldElement_1.classList.add("is-not-empty") : inputFieldElement_1.classList.remove("is-not-empty");
                        var filter = inputFieldElement_1.value.toUpperCase();
                        var listItems = dropdownListElement.getElementsByTagName('li');
                        for (var i = 0; i < listItems.length; i++) {
                            if (listItems[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                                listItems[i].style.display = "";
                            }
                            else {
                                listItems[i].style.display = "none";
                            }
                        }
                        selectList.updateDropdownListHeight(dropdownListElement);
                    });
                }
                else {
                    inputFieldElement_1.readOnly = true;
                    inputFieldElement_1.addEventListener("keydown", function (e) {
                        e.preventDefault();
                        return false;
                    });
                }
                inputFieldElement_1.onfocus = function () {
                    selectListElement_1.classList.add("active");
                    dropdownListElement.classList.add("active");
                    dropdownListElement.classList.remove("transparent");
                    selectList.updateDropdownListHeight(dropdownListElement);
                };
                inputFieldElement_1.onblur = function (event) {
                    selectListElement_1.classList.remove("active");
                    dropdownListElement.classList.add("transparent");
                    setTimeout(function () {
                        if (inputFieldElement_1 !== document.activeElement) {
                            dropdownListElement.classList.remove("active");
                            dropdownListElement.classList.remove("transparent");
                        }
                    }, 1000);
                };
                if (dropdownListElementIsDefined) {
                    dropdownListElement.addEventListener('click', function (e) {
                        var target = e.target; // Clicked element
                        while (target && target.parentNode !== dropdownListElement) {
                            target = target.parentNode; // If the clicked element isn't a direct child
                            if (!target) {
                                return;
                            } // If element doesn't exist
                        }
                        if (target.tagName === 'LI') {
                            var optionValue = target.getAttribute("data-value");
                            inputFieldElement_1.value = optionValue;
                            inputFieldElement_1.classList.add("is-not-empty");
                        }
                    });
                }
            }
        }, false);
    };
    SelectList.prototype.createOptionElements = function (options) {
        var optionElements = "";
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            optionElements += "<li data-value=\"" + option.value + "\">" + option.name + "</li>";
        }
        return optionElements;
    };
    SelectList.prototype.createModuleElement = function () {
        var inputField = {
            id: this.id + '-input',
            name: this.name,
            type: this.type,
            value: this.value,
            placeholder: this.placeholder
        };
        var dropdownList = {
            id: this.id + '-dropdownList'
        };
        this.addListener(this, inputField, dropdownList);
        return "\n\t\t\t<div id=\"" + this.id + "\" class=\"" + Style.dropdownContainer + "\">\n\t\t\t\t" + InputField.getModule(inputField) + " " + this.labelElement + "\n\t\t\t\t<ul id=\"" + dropdownList.id + "\" class=\"" + Style.dropdownList + "\">\n\t\t\t\t\t" + this.optionElements + "\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t";
    };
    return SelectList;
}());
exports.SelectList = SelectList;
function getModule(selectList) {
    return new SelectList(selectList).createModuleElement();
}
exports.getModule = getModule;