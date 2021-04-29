import{S as e,i as t,s as n,c as a,a as r,k as s,g as o,p as i,n as $,r as m,u as g,v as c,j as l,t as p,e as f,h as u,d as h,q as d}from"./start-b48a7065.js";import{P as w,a as v}from"./Post-Contents.svelte-1675712b.js";import{P as b}from"./Post-Section.svelte-2d21e682.js";import{P as N}from"./PrismJS.svelte-010aca92.js";import"./Post-Tags-Projects.svelte-aa0372bf.js";import"./Icon.svelte-bc85ecd4.js";import"./free-solid-svg-icons-650f6a7f.js";function j(e){let t,n,w,v,b,j,P,R,x,y;return n=new N({props:{language:"csharp",inline:!0,code:"RunPrivateMethod()"}}),P=new N({props:{language:"csharp",code:'public static class TestHelpers\n{\n    public static object RunPrivateMethod(this object obj, string methodName, params object[] args)\n    {\n        var method = obj\n            .GetType()\n            .GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);\n        if (method == null)\n        {\n            throw new ArgumentException(\n                $"{obj.GetType()} does not contain the method {methodName}", \n                "methodName"\n            );\n        }\n        return method.Invoke(obj, args);\n    }\n}'}}),x=new N({props:{language:"csharp",code:'var res1 = obj.RunPrivateMethod("SecretInternalMethod");\nvar res2 = obj.RunPrivateMethod("SecretInternalMethodWithArgs", arg1, arg2);'}}),{c(){t=p("This extension will allow any object to invoke a private method "),a(n.$$.fragment),w=p(".\r\n    "),v=f("br"),b=f("br"),j=r(),a(P.$$.fragment),R=p("\r\nUse it like this\r\n"),a(x.$$.fragment)},l(e){t=u(e,"This extension will allow any object to invoke a private method "),s(n.$$.fragment,e),w=u(e,".\r\n    "),v=h(e,"BR",{}),b=h(e,"BR",{}),j=o(e),s(P.$$.fragment,e),R=u(e,"\r\nUse it like this\r\n"),s(x.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),$(e,w,a),$(e,v,a),$(e,b,a),$(e,j,a),i(P,e,a),$(e,R,a),i(x,e,a),y=!0},p:d,i(e){y||(m(n.$$.fragment,e),m(P.$$.fragment,e),m(x.$$.fragment,e),y=!0)},o(e){g(n.$$.fragment,e),g(P.$$.fragment,e),g(x.$$.fragment,e),y=!1},d(e){e&&l(t),c(n,e),e&&l(w),e&&l(v),e&&l(b),e&&l(j),c(P,e),e&&l(R),c(x,e)}}}function P(e){let t,n,r,o,w,v,b,j,P,R,x,y;return n=new N({props:{language:"csharp",inline:!0,code:"BindingFlags.NonPublic | BindingFlags.Instance"}}),o=new N({props:{language:"csharp",inline:!0,code:"MethodInfo"}}),P=new N({props:{language:"csharp",inline:!0,code:"using System;"}}),x=new N({props:{language:"csharp",inline:!0,code:"using System.Reflection;"}}),{c(){t=p("The magic happens mainly with "),a(n.$$.fragment),r=p(" \r\nwhich allows us to use reflection to get the "),a(o.$$.fragment),w=p(" for the specified private method.\r\n\r\n"),v=f("br"),b=f("br"),j=p("\r\nDon't forget to include using statemnets "),a(P.$$.fragment),R=p(" and "),a(x.$$.fragment)},l(e){t=u(e,"The magic happens mainly with "),s(n.$$.fragment,e),r=u(e," \r\nwhich allows us to use reflection to get the "),s(o.$$.fragment,e),w=u(e," for the specified private method.\r\n\r\n"),v=h(e,"BR",{}),b=h(e,"BR",{}),j=u(e,"\r\nDon't forget to include using statemnets "),s(P.$$.fragment,e),R=u(e," and "),s(x.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),$(e,r,a),i(o,e,a),$(e,w,a),$(e,v,a),$(e,b,a),$(e,j,a),i(P,e,a),$(e,R,a),i(x,e,a),y=!0},p:d,i(e){y||(m(n.$$.fragment,e),m(o.$$.fragment,e),m(P.$$.fragment,e),m(x.$$.fragment,e),y=!0)},o(e){g(n.$$.fragment,e),g(o.$$.fragment,e),g(P.$$.fragment,e),g(x.$$.fragment,e),y=!1},d(e){e&&l(t),c(n,e),e&&l(r),c(o,e),e&&l(w),e&&l(v),e&&l(b),e&&l(j),c(P,e),e&&l(R),c(x,e)}}}function R(e){let t,n,r;return n=new N({props:{language:"csharp",code:'public class Person\n{\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n\n    private string GetFullName() // <-- Private Method\n    {\n        return $"{FirstName} {LastName}";\n    }\n\n    private string GetFullNameWithNickname(string nickname) // <-- Private Method with argument\n    {\n        return $"{FirstName} \'{nickname}\' {LastName}";\n    }\n}\n\n[Fact]\npublic void GetFullName__Should_Return_ExpectedResult()\n{\n    // ARRANGE\n    var test = new Person { FirstName = "Ace", LastName = "Rimmer" };\n\n    // ACT\n    var name = test.RunPrivateMethod("GetFullName"); // <-- without args\n    var nickname = test.RunPrivateMethod("GetFullNameWithNickname", "what a guy!"); // <-- with args\n    \n    // ASSERT\n    name.Should().Be("Ace Rimmer");\n    nickname.Should().Be("Ace \'what a guy!\' Rimmer");\n}'}}),{c(){t=p("The following usage example shows how this could be used in a unit test\r\n\r\n"),a(n.$$.fragment)},l(e){t=u(e,"The following usage example shows how this could be used in a unit test\r\n\r\n"),s(n.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),r=!0},p:d,i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){e&&l(t),c(n,e)}}}function x(e){let t,n,p,f,u,h;return t=new b({props:{title:"TL;DR",$$slots:{default:[j]},$$scope:{ctx:e}}}),p=new b({props:{title:"Explanation",$$slots:{default:[P]},$$scope:{ctx:e}}}),u=new b({props:{title:"Usage",$$slots:{default:[R]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=r(),a(p.$$.fragment),f=r(),a(u.$$.fragment)},l(e){s(t.$$.fragment,e),n=o(e),s(p.$$.fragment,e),f=o(e),s(u.$$.fragment,e)},m(e,a){i(t,e,a),$(e,n,a),i(p,e,a),$(e,f,a),i(u,e,a),h=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:e}),p.$set(r);const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),u.$set(s)},i(e){h||(m(t.$$.fragment,e),m(p.$$.fragment,e),m(u.$$.fragment,e),h=!0)},o(e){g(t.$$.fragment,e),g(p.$$.fragment,e),g(u.$$.fragment,e),h=!1},d(e){c(t,e),e&&l(n),c(p,e),e&&l(f),c(u,e)}}}function y(e){let t,n,p,f;return t=new w({props:{title:F,tags:e[0],projects:e[1]}}),p=new v({props:{$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=r(),a(p.$$.fragment)},l(e){s(t.$$.fragment,e),n=o(e),s(p.$$.fragment,e)},m(e,a){i(t,e,a),$(e,n,a),i(p,e,a),f=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),p.$set(n)},i(e){f||(m(t.$$.fragment,e),m(p.$$.fragment,e),f=!0)},o(e){g(t.$$.fragment,e),g(p.$$.fragment,e),f=!1},d(e){c(t,e),e&&l(n),c(p,e)}}}const F="Test Private Methods with C#";function T(e){return[["unit test","c-sharp"],[]]}export default class extends e{constructor(e){super(),t(this,e,T,y,n,{})}}
//# sourceMappingURL=test-private-methods.svelte-34b307d5.js.map
