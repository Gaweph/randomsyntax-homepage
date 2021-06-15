import{S as e,i as t,s as n,c as a,a as s,k as r,g as o,p as i,n as $,r as m,u as g,v as c,j as l,t as f,e as p,h as u,d as h,q as d}from"./start-ecbf61aa.js";import{P as w,a as v}from"./Post-Contents.svelte-14ba2dac.js";import{P as b}from"./Post-Section.svelte-c9b9ecea.js";import{P as N}from"./PrismJS.svelte-308df895.js";import"./Post-Tags-Projects.svelte-d9ae2f4f.js";import"./Icon.svelte-dd41848c.js";import"./free-solid-svg-icons-650f6a7f.js";function j(e){let t,n,w,v,b,j,P,R,x,y;return n=new N({props:{language:"csharp",inline:!0,code:"RunPrivateMethod()"}}),P=new N({props:{language:"csharp",code:'public static class TestHelpers\n{\n    public static object RunPrivateMethod(this object obj, string methodName, params object[] args)\n    {\n        var method = obj\n            .GetType()\n            .GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);\n        if (method == null)\n        {\n            throw new ArgumentException(\n                $"{obj.GetType()} does not contain the method {methodName}", \n                "methodName"\n            );\n        }\n        return method.Invoke(obj, args);\n    }\n}'}}),x=new N({props:{language:"csharp",code:'var res1 = obj.RunPrivateMethod("SecretInternalMethod");\nvar res2 = obj.RunPrivateMethod("SecretInternalMethodWithArgs", arg1, arg2);'}}),{c(){t=f("This extension will allow any object to invoke a private method "),a(n.$$.fragment),w=f(".\n    "),v=p("br"),b=p("br"),j=s(),a(P.$$.fragment),R=f("\nUse it like this\n"),a(x.$$.fragment)},l(e){t=u(e,"This extension will allow any object to invoke a private method "),r(n.$$.fragment,e),w=u(e,".\n    "),v=h(e,"BR",{}),b=h(e,"BR",{}),j=o(e),r(P.$$.fragment,e),R=u(e,"\nUse it like this\n"),r(x.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),$(e,w,a),$(e,v,a),$(e,b,a),$(e,j,a),i(P,e,a),$(e,R,a),i(x,e,a),y=!0},p:d,i(e){y||(m(n.$$.fragment,e),m(P.$$.fragment,e),m(x.$$.fragment,e),y=!0)},o(e){g(n.$$.fragment,e),g(P.$$.fragment,e),g(x.$$.fragment,e),y=!1},d(e){e&&l(t),c(n,e),e&&l(w),e&&l(v),e&&l(b),e&&l(j),c(P,e),e&&l(R),c(x,e)}}}function P(e){let t,n,s,o,w,v,b,j,P,R,x,y;return n=new N({props:{language:"csharp",inline:!0,code:"BindingFlags.NonPublic | BindingFlags.Instance"}}),o=new N({props:{language:"csharp",inline:!0,code:"MethodInfo"}}),P=new N({props:{language:"csharp",inline:!0,code:"using System;"}}),x=new N({props:{language:"csharp",inline:!0,code:"using System.Reflection;"}}),{c(){t=f("The magic happens mainly with "),a(n.$$.fragment),s=f(" \nwhich allows us to use reflection to get the "),a(o.$$.fragment),w=f(" for the specified private method.\n\n"),v=p("br"),b=p("br"),j=f("\nDon't forget to include using statemnets "),a(P.$$.fragment),R=f(" and "),a(x.$$.fragment)},l(e){t=u(e,"The magic happens mainly with "),r(n.$$.fragment,e),s=u(e," \nwhich allows us to use reflection to get the "),r(o.$$.fragment,e),w=u(e," for the specified private method.\n\n"),v=h(e,"BR",{}),b=h(e,"BR",{}),j=u(e,"\nDon't forget to include using statemnets "),r(P.$$.fragment,e),R=u(e," and "),r(x.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),$(e,s,a),i(o,e,a),$(e,w,a),$(e,v,a),$(e,b,a),$(e,j,a),i(P,e,a),$(e,R,a),i(x,e,a),y=!0},p:d,i(e){y||(m(n.$$.fragment,e),m(o.$$.fragment,e),m(P.$$.fragment,e),m(x.$$.fragment,e),y=!0)},o(e){g(n.$$.fragment,e),g(o.$$.fragment,e),g(P.$$.fragment,e),g(x.$$.fragment,e),y=!1},d(e){e&&l(t),c(n,e),e&&l(s),c(o,e),e&&l(w),e&&l(v),e&&l(b),e&&l(j),c(P,e),e&&l(R),c(x,e)}}}function R(e){let t,n,s;return n=new N({props:{language:"csharp",code:'public class Person\n{\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n\n    private string GetFullName() // <-- Private Method\n    {\n        return $"{FirstName} {LastName}";\n    }\n\n    private string GetFullNameWithNickname(string nickname) // <-- Private Method with argument\n    {\n        return $"{FirstName} \'{nickname}\' {LastName}";\n    }\n}\n\n[Fact]\npublic void GetFullName__Should_Return_ExpectedResult()\n{\n    // ARRANGE\n    var test = new Person { FirstName = "Ace", LastName = "Rimmer" };\n\n    // ACT\n    var name = test.RunPrivateMethod("GetFullName"); // <-- without args\n    var nickname = test.RunPrivateMethod("GetFullNameWithNickname", "what a guy!"); // <-- with args\n    \n    // ASSERT\n    name.Should().Be("Ace Rimmer");\n    nickname.Should().Be("Ace \'what a guy!\' Rimmer");\n}'}}),{c(){t=f("The following usage example shows how this could be used in a unit test\n\n"),a(n.$$.fragment)},l(e){t=u(e,"The following usage example shows how this could be used in a unit test\n\n"),r(n.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),s=!0},p:d,i(e){s||(m(n.$$.fragment,e),s=!0)},o(e){g(n.$$.fragment,e),s=!1},d(e){e&&l(t),c(n,e)}}}function x(e){let t,n,f,p,u,h;return t=new b({props:{title:"TL;DR",$$slots:{default:[j]},$$scope:{ctx:e}}}),f=new b({props:{title:"Explanation",$$slots:{default:[P]},$$scope:{ctx:e}}}),u=new b({props:{title:"Usage",$$slots:{default:[R]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=s(),a(f.$$.fragment),p=s(),a(u.$$.fragment)},l(e){r(t.$$.fragment,e),n=o(e),r(f.$$.fragment,e),p=o(e),r(u.$$.fragment,e)},m(e,a){i(t,e,a),$(e,n,a),i(f,e,a),$(e,p,a),i(u,e,a),h=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a);const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),f.$set(s);const r={};4&n&&(r.$$scope={dirty:n,ctx:e}),u.$set(r)},i(e){h||(m(t.$$.fragment,e),m(f.$$.fragment,e),m(u.$$.fragment,e),h=!0)},o(e){g(t.$$.fragment,e),g(f.$$.fragment,e),g(u.$$.fragment,e),h=!1},d(e){c(t,e),e&&l(n),c(f,e),e&&l(p),c(u,e)}}}function y(e){let t,n,f,p;return t=new w({props:{title:F,tags:e[0],projects:e[1]}}),f=new v({props:{$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=s(),a(f.$$.fragment)},l(e){r(t.$$.fragment,e),n=o(e),r(f.$$.fragment,e)},m(e,a){i(t,e,a),$(e,n,a),i(f,e,a),p=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),f.$set(n)},i(e){p||(m(t.$$.fragment,e),m(f.$$.fragment,e),p=!0)},o(e){g(t.$$.fragment,e),g(f.$$.fragment,e),p=!1},d(e){c(t,e),e&&l(n),c(f,e)}}}const F="Test Private Methods with C#";function T(e){return[["unit test","c-sharp"],[]]}export default class extends e{constructor(e){super(),t(this,e,T,y,n,{})}}
//# sourceMappingURL=test-private-methods.svelte-3648b6cd.js.map
