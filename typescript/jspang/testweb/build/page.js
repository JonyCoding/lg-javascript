"use strict";
/*
 * @Author: Jony
 *
 * @Date: 2020-10-09 23:08:28
 * @LastEditTime: 2020-10-09 23:09:14
 * @# Description:
 * @FilePath: /lg-javascript/Typescript/jspang/testweb/src/components.ts
 */
var Components;
(function (Components) {
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Body = /** @class */ (function () {
        function Body() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a body';
            document.body.appendChild(elem);
        }
        return Body;
    }());
    Components.Body = Body;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is a Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
/*
 * @Author: Jony
 *
 * @Date: 2020-10-09 22:56:25
 * @LastEditTime: 2020-10-09 23:09:59
 * @# Description:
 * @FilePath: /lg-javascript/Typescript/jspang/testweb/src/page.ts
 */
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            new Components.Header();
            new Components.Body();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
