import{S as e,i as t,s as n,c as a,a as s,k as r,g as o,p as i,n as m,r as c,u as l,v as h,j as g,t as $,h as d,q as u,e as f,d as p}from"./start-4dad6118.js";import{P as w,a as v}from"./Post-Contents.svelte-4a40fe3b.js";import{C as b}from"./Callout.svelte-be9503e1.js";import{P as y}from"./Post-Section.svelte-1d216518.js";import{P as R}from"./PrismJS.svelte-a738c872.js";import"./Post-Tags-Projects.svelte-56c26b16.js";import"./Icon.svelte-1528da35.js";import"./free-solid-svg-icons-650f6a7f.js";function j(e){let t,n,s,o,f;return n=new R({props:{language:"csharp",code:'using System;\nusing System.Reflection;\nnamespace TestUtilities\n{\n    public static class TestHelpers\n    {\n        public static object RunPrivateMethod(this object obj, string methodName, params object[] args)\n        {\n            var method = obj\n                .GetType()\n                .GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);\n            if (method == null)\n            {\n                throw new ArgumentException(\n                    $"{obj.GetType()} does not contain the method {methodName}", \n                    "methodName"\n                );\n            }\n            return method.Invoke(obj, args);\n        }\n    }\n}'}}),o=new R({props:{language:"csharp",code:'var res1 = testObject.RunPrivateMethod("SecretInternalMethod");\nvar res2 = testObject.RunPrivateMethod("SecretInternalMethodWithArgs", arg1, arg2);'}}),{c(){t=$("Need the solution in the hurry?  Here you go:\r\n  "),a(n.$$.fragment),s=$("\r\nUse it like this\r\n"),a(o.$$.fragment)},l(e){t=d(e,"Need the solution in the hurry?  Here you go:\r\n  "),r(n.$$.fragment,e),s=d(e,"\r\nUse it like this\r\n"),r(o.$$.fragment,e)},m(e,a){m(e,t,a),i(n,e,a),m(e,s,a),i(o,e,a),f=!0},p:u,i(e){f||(c(n.$$.fragment,e),c(o.$$.fragment,e),f=!0)},o(e){l(n.$$.fragment,e),l(o.$$.fragment,e),f=!1},d(e){e&&g(t),h(n,e),e&&g(s),h(o,e)}}}function N(e){let t;return{c(){t=$("Running logic inside of private method suggests that the code should be refactored (maybe moved to a helper class or a service layer).  \r\nThe fact is that sometimes we need to test existing/legacy code or for a number of reasons the logic is in a private method and we need to test it.")},l(e){t=d(e,"Running logic inside of private method suggests that the code should be refactored (maybe moved to a helper class or a service layer).  \r\nThe fact is that sometimes we need to test existing/legacy code or for a number of reasons the logic is in a private method and we need to test it.")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function k(e){let t,n,s,o,u,w,v,y,j,k,x,P,T,M,F,B,S,I,G,A,L;return u=new b({props:{title:"Great, I can test my private methods.  But should I?",$$slots:{default:[N]},$$scope:{ctx:e}}}),v=new R({props:{language:"csharp",inline:"true",code:"System.Reflection"}}),P=new R({props:{language:"csharp",inline:"true",code:"RunPrivateMethod()"}}),S=new R({props:{language:"csharp",inline:"true",code:"BindingFlags.NonPublic | BindingFlags.Instance"}}),G=new R({props:{language:"csharp",inline:"true",code:"MethodInfo"}}),{c(){t=$("We have a class with some internal code that we would like to run in isolation to test that it is doing what we think it is doing.  \r\n"),n=f("br"),s=f("br"),o=$("\r\nI know there are many arguments to  be made as to whether we should be doing this.  Many will suggest that having lots of logic in a private method means that it should probably be refactored into a helper class or service layer,  \r\nwhile this is true in some cases the fact is that sometimes we have some code in a class (legacy code) and we want to test it.\r\n\r\n"),a(u.$$.fragment),w=$("\r\n\r\nThe main probelm we have is that if we make an instance of a class we just don't have access to its private stuff from the outside.  \r\nLuckily for us the "),a(v.$$.fragment),y=$(" namespace can help us get access to the private members and invoke them.\r\n\r\n"),j=f("br"),k=f("br"),x=$("\r\n\r\nThe above solution is an extension method that  allows any object to call "),a(P.$$.fragment),T=$(".\r\n"),M=f("br"),F=f("br"),B=$("\r\n\r\nThe magic happens mainly with "),a(S.$$.fragment),I=$(" \r\nwhich allows us to use reflection to get the "),a(G.$$.fragment),A=$(" for the specified private method.")},l(e){t=d(e,"We have a class with some internal code that we would like to run in isolation to test that it is doing what we think it is doing.  \r\n"),n=p(e,"BR",{}),s=p(e,"BR",{}),o=d(e,"\r\nI know there are many arguments to  be made as to whether we should be doing this.  Many will suggest that having lots of logic in a private method means that it should probably be refactored into a helper class or service layer,  \r\nwhile this is true in some cases the fact is that sometimes we have some code in a class (legacy code) and we want to test it.\r\n\r\n"),r(u.$$.fragment,e),w=d(e,"\r\n\r\nThe main probelm we have is that if we make an instance of a class we just don't have access to its private stuff from the outside.  \r\nLuckily for us the "),r(v.$$.fragment,e),y=d(e," namespace can help us get access to the private members and invoke them.\r\n\r\n"),j=p(e,"BR",{}),k=p(e,"BR",{}),x=d(e,"\r\n\r\nThe above solution is an extension method that  allows any object to call "),r(P.$$.fragment,e),T=d(e,".\r\n"),M=p(e,"BR",{}),F=p(e,"BR",{}),B=d(e,"\r\n\r\nThe magic happens mainly with "),r(S.$$.fragment,e),I=d(e," \r\nwhich allows us to use reflection to get the "),r(G.$$.fragment,e),A=d(e," for the specified private method.")},m(e,a){m(e,t,a),m(e,n,a),m(e,s,a),m(e,o,a),i(u,e,a),m(e,w,a),i(v,e,a),m(e,y,a),m(e,j,a),m(e,k,a),m(e,x,a),i(P,e,a),m(e,T,a),m(e,M,a),m(e,F,a),m(e,B,a),i(S,e,a),m(e,I,a),i(G,e,a),m(e,A,a),L=!0},p(e,t){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),u.$set(n)},i(e){L||(c(u.$$.fragment,e),c(v.$$.fragment,e),c(P.$$.fragment,e),c(S.$$.fragment,e),c(G.$$.fragment,e),L=!0)},o(e){l(u.$$.fragment,e),l(v.$$.fragment,e),l(P.$$.fragment,e),l(S.$$.fragment,e),l(G.$$.fragment,e),L=!1},d(e){e&&g(t),e&&g(n),e&&g(s),e&&g(o),h(u,e),e&&g(w),h(v,e),e&&g(y),e&&g(j),e&&g(k),e&&g(x),h(P,e),e&&g(T),e&&g(M),e&&g(F),e&&g(B),h(S,e),e&&g(I),h(G,e),e&&g(A)}}}function x(e){let t,n,s;return n=new R({props:{language:"csharp",code:'\n[Fact]\npublic void GetFullName__Should_Return_ExpectedResult()\n{\n    // ARRANGE\n    var test = new Person { FirstName = "Ace", LastName = "Rimmer" };\n\n    // ACT\n    var name = test.RunPrivateMethod("GetFullName"); // <-- without args\n    var nickname = test.RunPrivateMethod("GetFullNameWithNickname", "what a guy!"); // <-- with args\n    \n    // ASSERT\n    name.Should().Be("Ace Rimmer");\n    nickname.Should().Be("Ace \'what a guy!\' Rimmer");\n}\n\npublic class Person\n{\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n\n    private string GetFullName() // <-- Private Method\n    {\n        return $"{FirstName} {LastName}";\n    }\n\n    private string GetFullNameWithNickname(string nickname) // <-- Private Method with argument\n    {\n        return $"{FirstName} \'{nickname}\' {LastName}";\n    }\n}\n'}}),{c(){t=$("The following usage example shows how this would be used in a unit test\r\n\r\n"),a(n.$$.fragment)},l(e){t=d(e,"The following usage example shows how this would be used in a unit test\r\n\r\n"),r(n.$$.fragment,e)},m(e,a){m(e,t,a),i(n,e,a),s=!0},p:u,i(e){s||(c(n.$$.fragment,e),s=!0)},o(e){l(n.$$.fragment,e),s=!1},d(e){e&&g(t),h(n,e)}}}function P(e){let t,n,$,d,u,f;return t=new y({props:{title:"TL;DR",$$slots:{default:[j]},$$scope:{ctx:e}}}),$=new y({props:{title:"Explanation",$$slots:{default:[k]},$$scope:{ctx:e}}}),u=new y({props:{title:"Usage",$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=s(),a($.$$.fragment),d=s(),a(u.$$.fragment)},l(e){r(t.$$.fragment,e),n=o(e),r($.$$.fragment,e),d=o(e),r(u.$$.fragment,e)},m(e,a){i(t,e,a),m(e,n,a),i($,e,a),m(e,d,a),i(u,e,a),f=!0},p(e,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a);const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),$.$set(s);const r={};4&n&&(r.$$scope={dirty:n,ctx:e}),u.$set(r)},i(e){f||(c(t.$$.fragment,e),c($.$$.fragment,e),c(u.$$.fragment,e),f=!0)},o(e){l(t.$$.fragment,e),l($.$$.fragment,e),l(u.$$.fragment,e),f=!1},d(e){h(t,e),e&&g(n),h($,e),e&&g(d),h(u,e)}}}function T(e){let t,n,$,d;return t=new w({props:{title:M,tags:e[0],projects:e[1]}}),$=new v({props:{$$slots:{default:[P]},$$scope:{ctx:e}}}),{c(){a(t.$$.fragment),n=s(),a($.$$.fragment)},l(e){r(t.$$.fragment,e),n=o(e),r($.$$.fragment,e)},m(e,a){i(t,e,a),m(e,n,a),i($,e,a),d=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),$.$set(n)},i(e){d||(c(t.$$.fragment,e),c($.$$.fragment,e),d=!0)},o(e){l(t.$$.fragment,e),l($.$$.fragment,e),d=!1},d(e){h(t,e),e&&g(n),h($,e)}}}const M="Test Private Methods with C#";function F(e){return[["unit test","c-sharp"],[]]}export default class extends e{constructor(e){super(),t(this,e,F,T,n,{})}}
//# sourceMappingURL=test-private-methods.svelte-7c5ccd8f.js.map
