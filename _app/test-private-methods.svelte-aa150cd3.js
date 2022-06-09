import{S as e,i as t,s as n,m as a,l as s,q as r,o,u as i,f as $,v as m,w as g,x as c,d as l,t as p,k as f,p as u,c as h,n as d}from"./start-cda467e4.js";import{P as w}from"./Post-Top.svelte-ba2d504c.js";import{P as v}from"./Post-Contents.svelte-f4446df8.js";import{P as b}from"./Post-Section.svelte-0744c0a4.js";import{P}from"./PrismJS.svelte-1cb6560b.js";import"./Post-Tags-Projects.svelte-7ecc9d92.js";import"./free-solid-svg-icons-c5993be3.js";function N(e){let t,n,w,v,b,N,j,R,x,T;return n=new P({props:{language:"csharp",inline:!0,code:"RunPrivateMethod()"}}),j=new P({props:{language:"csharp",code:'public static class TestHelpers\n{\n    public static object RunPrivateMethod(this object obj, string methodName, params object[] args)\n    {\n        var method = obj\n            .GetType()\n            .GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);\n        if (method == null)\n        {\n            throw new ArgumentException(\n                $"{obj.GetType()} does not contain the method {methodName}", \n                "methodName"\n            );\n        }\n        return method.Invoke(obj, args);\n    }\n}'}}),x=new P({props:{language:"csharp",code:'var res1 = obj.RunPrivateMethod("SecretInternalMethod");\nvar res2 = obj.RunPrivateMethod("SecretInternalMethodWithArgs", arg1, arg2);'}}),{c(){t=p("This extension will allow any object to invoke a private method "),a(n.$$.fragment),w=p(".\n    "),v=f("br"),b=f("br"),N=s(),a(j.$$.fragment),R=p("\nUse it like this\n"),a(x.$$.fragment)},l(e){t=u(e,"This extension will allow any object to invoke a private method "),r(n.$$.fragment,e),w=u(e,".\n    "),v=h(e,"BR",{}),b=h(e,"BR",{}),N=o(e),r(j.$$.fragment,e),R=u(e,"\nUse it like this\n"),r(x.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),$(e,w,a),$(e,v,a),$(e,b,a),$(e,N,a),i(j,e,a),$(e,R,a),i(x,e,a),T=!0},p:d,i(e){T||(m(n.$$.fragment,e),m(j.$$.fragment,e),m(x.$$.fragment,e),T=!0)},o(e){g(n.$$.fragment,e),g(j.$$.fragment,e),g(x.$$.fragment,e),T=!1},d(e){e&&l(t),c(n,e),e&&l(w),e&&l(v),e&&l(b),e&&l(N),c(j,e),e&&l(R),c(x,e)}}}function j(e){let t,n,s,o,w,v,b,N,j,R,x,T;return n=new P({props:{language:"csharp",inline:!0,code:"BindingFlags.NonPublic | BindingFlags.Instance"}}),o=new P({props:{language:"csharp",inline:!0,code:"MethodInfo"}}),j=new P({props:{language:"csharp",inline:!0,code:"using System;"}}),x=new P({props:{language:"csharp",inline:!0,code:"using System.Reflection;"}}),{c(){t=p("The magic happens mainly with "),a(n.$$.fragment),s=p(" \nwhich allows us to use reflection to get the "),a(o.$$.fragment),w=p(" for the specified private method.\n\n"),v=f("br"),b=f("br"),N=p("\nDon't forget to include using statemnets "),a(j.$$.fragment),R=p(" and "),a(x.$$.fragment)},l(e){t=u(e,"The magic happens mainly with "),r(n.$$.fragment,e),s=u(e," \nwhich allows us to use reflection to get the "),r(o.$$.fragment,e),w=u(e," for the specified private method.\n\n"),v=h(e,"BR",{}),b=h(e,"BR",{}),N=u(e,"\nDon't forget to include using statemnets "),r(j.$$.fragment,e),R=u(e," and "),r(x.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),$(e,s,a),i(o,e,a),$(e,w,a),$(e,v,a),$(e,b,a),$(e,N,a),i(j,e,a),$(e,R,a),i(x,e,a),T=!0},p:d,i(e){T||(m(n.$$.fragment,e),m(o.$$.fragment,e),m(j.$$.fragment,e),m(x.$$.fragment,e),T=!0)},o(e){g(n.$$.fragment,e),g(o.$$.fragment,e),g(j.$$.fragment,e),g(x.$$.fragment,e),T=!1},d(e){e&&l(t),c(n,e),e&&l(s),c(o,e),e&&l(w),e&&l(v),e&&l(b),e&&l(N),c(j,e),e&&l(R),c(x,e)}}}function R(e){let t,n,s;return n=new P({props:{language:"csharp",code:'public class Person\n{\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n\n    private string GetFullName() // <-- Private Method\n    {\n        return $"{FirstName} {LastName}";\n    }\n\n    private string GetFullNameWithNickname(string nickname) // <-- Private Method with argument\n    {\n        return $"{FirstName} \'{nickname}\' {LastName}";\n    }\n}\n\n[Fact]\npublic void GetFullName__Should_Return_ExpectedResult()\n{\n    // ARRANGE\n    var test = new Person { FirstName = "Ace", LastName = "Rimmer" };\n\n    // ACT\n    var name = test.RunPrivateMethod("GetFullName"); // <-- without args\n    var nickname = test.RunPrivateMethod("GetFullNameWithNickname", "what a guy!"); // <-- with args\n    \n    // ASSERT\n    name.Should().Be("Ace Rimmer");\n    nickname.Should().Be("Ace \'what a guy!\' Rimmer");\n}'}}),{c(){t=p("The following usage example shows how this could be used in a unit test\n\n"),a(n.$$.fragment)},l(e){t=u(e,"The following usage example shows how this could be used in a unit test\n\n"),r(n.$$.fragment,e)},m(e,a){$(e,t,a),i(n,e,a),s=!0},p:d,i(e){s||(m(n.$$.fragment,e),s=!0)},o(e){g(n.$$.fragment,e),s=!1},d(e){e&&l(t),c(n,e)}}}function x(e){let t,n,p,f,u,h;return t=new b({props:{title:"TL;DR",$$slots:{default:[N]},$$scope:{ctx:e}}}),p=new b({props:{title:"Explanation",$$slots:{default:[j]},$$scope:{ctx:e}}}),u=new b({props:{title:"Usage",$$slots:{default:[R]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=s(),a(p.$$.fragment),f=s(),a(u.$$.fragment)},l(e){r(t.$$.fragment,e),n=o(e),r(p.$$.fragment,e),f=o(e),r(u.$$.fragment,e)},m(e,a){i(t,e,a),$(e,n,a),i(p,e,a),$(e,f,a),i(u,e,a),h=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a);const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),p.$set(s);const r={};4&n&&(r.$$scope={dirty:n,ctx:e}),u.$set(r)},i(e){h||(m(t.$$.fragment,e),m(p.$$.fragment,e),m(u.$$.fragment,e),h=!0)},o(e){g(t.$$.fragment,e),g(p.$$.fragment,e),g(u.$$.fragment,e),h=!1},d(e){c(t,e),e&&l(n),c(p,e),e&&l(f),c(u,e)}}}function T(e){let t,n,p,f;return t=new w({props:{title:y,tags:e[0],projects:e[1]}}),p=new v({props:{$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=s(),a(p.$$.fragment)},l(e){r(t.$$.fragment,e),n=o(e),r(p.$$.fragment,e)},m(e,a){i(t,e,a),$(e,n,a),i(p,e,a),f=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),p.$set(n)},i(e){f||(m(t.$$.fragment,e),m(p.$$.fragment,e),f=!0)},o(e){g(t.$$.fragment,e),g(p.$$.fragment,e),f=!1},d(e){c(t,e),e&&l(n),c(p,e)}}}const y="Test Private Methods with C#";function F(e){return[["unit test","c-sharp"],[]]}export default class extends e{constructor(e){super(),t(this,e,F,T,n,{})}}
//# sourceMappingURL=test-private-methods.svelte-aa150cd3.js.map
