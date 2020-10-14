/*
 * @Author: xie yanpeng
 * @Date: 2020-10-10 09:08:52
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-12 17:40:38
 * @Description: 
 */
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Body = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Body = /** @class */ (function () {
        function Body() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a body';
            document.body.appendChild(elem);
        }
        return Body;
    }());
    exports.Body = Body;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Page = void 0;
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Body();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.Page = Page;
});
