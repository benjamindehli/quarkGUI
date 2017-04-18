"use strict";
exports.__esModule = true;
var Image = require("../../00-atoms/media/image");
var Style = require('../../../../src/modules/02-organisms/global/footer.scss');
var Footer = (function () {
    function Footer(footer) {
        this.theme = "default";
        this.content = "";
        if (footer.theme !== undefined)
            this.theme = footer.theme;
        if (footer.content !== undefined)
            this.content = footer.content;
        if (footer.logo !== undefined)
            this.logo = footer.logo;
    }
    Footer.prototype.getThemeClass = function (theme) {
        var themeClass = Style.footerThemeDefault;
        if (theme == 'primary')
            themeClass = Style.footerThemePrimary;
        if (theme == 'dark')
            themeClass = Style.footerThemeDark;
        return themeClass;
    };
    Footer.prototype.createModuleElement = function () {
        var themeClass = this.getThemeClass(this.theme);
        var logoImage = "";
        var logoUrl = "";
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        return "\n\t\t\t<footer class=\"" + Style.footer + " " + themeClass + "\">\n\t\t\t\t<a href=\"" + logoUrl + "\" class=\"" + Style.logo + "\">\n\t\t\t\t\t" + logoImage + "\n\t\t\t\t</a>\n\t\t\t\t" + this.content + "\n\t\t\t</footer>\n\t\t";
    };
    return Footer;
}());
exports.Footer = Footer;
function getModule(footer) {
    return new Footer(footer).createModuleElement();
}
exports.getModule = getModule;