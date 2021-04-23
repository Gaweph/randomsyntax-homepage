import{S as t,i as e,s as n,c as s,a as o,k as a,g as r,p as i,n as c,r as l,u as $,v as f,j as m,t as p,h as u,e as g,d,f as y,o as h}from"./start-58671407.js";import{P as w,a as x}from"./Post-Contents.svelte-e489b913.js";import{P as b}from"./PrismJS.svelte-9fb173a8.js";import{C as v}from"./Callout.svelte-964e625c.js";import{L as S}from"./Link-External.svelte-3d7b7f7c.js";import{P}from"./Post-Section.svelte-bb286e68.js";import"./Post-Tags-Projects.svelte-0a7c383c.js";import"./Icon.svelte-469e1454.js";import"./free-solid-svg-icons-650f6a7f.js";function k(t){let e;return{c(){e=p("Setting up a new machine is always a bit of a pain. Wouldn't it be nice if\r\n    your machine could just get the software you wanted and install it for you.")},l(t){e=u(t,"Setting up a new machine is always a bit of a pain. Wouldn't it be nice if\r\n    your machine could just get the software you wanted and install it for you.")},m(t,n){c(t,e,n)},d(t){t&&m(e)}}}function I(t){let e;return{c(){e=p("BoxStarter.org")},l(t){e=u(t,"BoxStarter.org")},m(t,n){c(t,e,n)},d(t){t&&m(e)}}}function T(t){let e,n,o,r;return e=new S({props:{href:"http://boxstarter.org/",$$slots:{default:[I]},$$scope:{ctx:t}}}),o=new b({props:{language:"powershell",code:"\nSTART\nhttp://boxstarter.org/package/nr/url?URL_TO_YOUR_BOXSTARTER_SCRIPT.ps1\n"}}),{c(){s(e.$$.fragment),n=p("\r\n    can install all of your software out with a single command.\r\n    "),s(o.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t,"\r\n    can install all of your software out with a single command.\r\n    "),a(o.$$.fragment,t)},m(t,s){i(e,t,s),c(t,n,s),i(o,t,s),r=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(l(e.$$.fragment,t),l(o.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),$(o.$$.fragment,t),r=!1},d(t){f(e,t),t&&m(n),f(o,t)}}}function C(t){let e;return{c(){e=p("GitHub Repository")},l(t){e=u(t,"GitHub Repository")},m(t,n){c(t,e,n)},d(t){t&&m(e)}}}function B(t){let e,n,o,r,w,x,v,P;return w=new S({props:{href:"https://raw.githubusercontent.com/Gaweph/Boxstarter-scripts/master/Developer-Machine.ps1",$$slots:{default:[C]},$$scope:{ctx:t}}}),v=new b({props:{language:"powershell",code:'\n# Boxstarter options\n$Boxstarter.RebootOk=$true # Allow reboots?\n$Boxstarter.NoPassword=$false # Is this a machine with no login password?\n$Boxstarter.AutoLogin=$true # Save my password securely and auto-login after a reboot\n# Basic setup\nUpdate-ExecutionPolicy Unrestricted\nSet-ExplorerOptions -showHidenFilesFoldersDrives -showProtectedOSFiles -showFileExtensions\n#Enable-RemoteDesktop\nDisable-InternetExplorerESC\n#Disable-UAC\n#Set-TaskbarSmall\n \n# disable defrag because I have an SSD \nGet-ScheduledTask -TaskName *defrag* | Disable-ScheduledTask \n# Install Visual Studio 2015\ncinst visualstudio2015enterprise\nif (Test-PendingReboot) { Invoke-Reboot }\n#Other dev tools\ncinst visualstudiocode -y\ncinst nodejs.install -y\nchoco install unity -y\n#Browsers\ncinst googlechrome -y\ncinst firefox -y\n#Other tools\ncinst notepadplusplus -y\ncinst 7zip.install -y\ncinst adobereader -y\ncinst skype -y\ncinst dropbox -y\ncinst virtualbox -y\nchoco install jdk8 -y\ncinst putty.install -y\ncinst spotify -y\ncinst vlc -y\nchoco install steam -y\n# VS extensions\nInstall-ChocolateyVsixPackage ProPowerTools https://visualstudiogallery.msdn.microsoft.com/d0d33361-18e2-46c0-8ff2-4adea1e34fef/file/29666/12/ProPowerTools.vsix\nInstall-ChocolateyVsixPackage vstu2015 https://visualstudiogallery.msdn.microsoft.com/8d26236e-4a64-4d64-8486-7df95156aba9/file/142077/10/vstu2015.msi\n# Node modules (Global)\nnpm install -g gulp\nnpm install -g bower\nnpm install -g typings\nnpm install -g hexo-cli\nnpm install -g typescript\nif (Test-PendingReboot) { Invoke-Reboot }\n#cinst Microsoft-Hyper-V-All -source windowsFeatures\ncinst IIS-WebServerRole -source windowsfeatures\ncinst IIS-HttpCompressionDynamic -source windowsfeatures\ncinst IIS-ManagementScriptingTools -source windowsfeatures\ncinst IIS-WindowsAuthentication -source windowsfeatures\nInstall-ChocolateyPinnedTaskBarItem "$($Boxstarter.programFiles86)GoogleChromeApplicationchrome.exe"\nInstall-ChocolateyPinnedTaskBarItem "$($Boxstarter.programFiles86)Microsoft Visual Studio 14.0Common7IDEdevenv.exe"\n# Update Windows and reboot if necessary\nInstall-WindowsUpdate -AcceptEula -GetUpdatesFromMS\nif (Test-PendingReboot) { Invoke-Reboot }\n      '}}),{c(){e=p("My current\r\n    "),n=g("strong"),o=p("Home Development Script"),r=p("\r\n    can be found at my\r\n    "),s(w.$$.fragment),x=p("\r\n    Here it is at the time of writing this post:\r\n    "),s(v.$$.fragment)},l(t){e=u(t,"My current\r\n    "),n=d(t,"STRONG",{});var s=y(n);o=u(s,"Home Development Script"),s.forEach(m),r=u(t,"\r\n    can be found at my\r\n    "),a(w.$$.fragment,t),x=u(t,"\r\n    Here it is at the time of writing this post:\r\n    "),a(v.$$.fragment,t)},m(t,s){c(t,e,s),c(t,n,s),h(n,o),c(t,r,s),i(w,t,s),c(t,x,s),i(v,t,s),P=!0},p(t,e){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),w.$set(n)},i(t){P||(l(w.$$.fragment,t),l(v.$$.fragment,t),P=!0)},o(t){$(w.$$.fragment,t),$(v.$$.fragment,t),P=!1},d(t){t&&m(e),t&&m(n),t&&m(r),f(w,t),t&&m(x),f(v,t)}}}function R(t){let e;return{c(){e=p("Chocolatey Packages")},l(t){e=u(t,"Chocolatey Packages")},m(t,n){c(t,e,n)},d(t){t&&m(e)}}}function j(t){let e,n,o,r;return n=new S({props:{href:"https://chocolatey.org/packages",$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){e=p("Boxstarter is able to use\r\n    "),s(n.$$.fragment),o=p("\r\n    which means it has access to many many pieces of software.")},l(t){e=u(t,"Boxstarter is able to use\r\n    "),a(n.$$.fragment,t),o=u(t,"\r\n    which means it has access to many many pieces of software.")},m(t,s){c(t,e,s),i(n,t,s),c(t,o,s),r=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){r||(l(n.$$.fragment,t),r=!0)},o(t){$(n.$$.fragment,t),r=!1},d(t){t&&m(e),f(n,t),t&&m(o)}}}function M(t){let e;return{c(){e=p("Alternatively you can now use a Package Manager in Windows.")},l(t){e=u(t,"Alternatively you can now use a Package Manager in Windows.")},m(t,n){c(t,e,n)},d(t){t&&m(e)}}}function W(t){let e;return{c(){e=p("Chocolatey")},l(t){e=u(t,"Chocolatey")},m(t,n){c(t,e,n)},d(t){t&&m(e)}}}function A(t){let e;return{c(){e=p("Packages")},l(t){e=u(t,"Packages")},m(t,n){c(t,e,n)},d(t){t&&m(e)}}}function D(t){let e,n,o,r,g,d;return e=new v({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),o=new S({props:{href:"https://chocolatey.org/",$$slots:{default:[W]},$$scope:{ctx:t}}}),g=new S({props:{href:"https://chocolatey.org/packages",$$slots:{default:[A]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=p("\r\n    Windows 10 now includes a Package Manager. Check out my personal favourite\r\n    "),s(o.$$.fragment),r=p("\r\n    which includes many many\r\n    "),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t,"\r\n    Windows 10 now includes a Package Manager. Check out my personal favourite\r\n    "),a(o.$$.fragment,t),r=u(t,"\r\n    which includes many many\r\n    "),a(g.$$.fragment,t)},m(t,s){i(e,t,s),c(t,n,s),i(o,t,s),c(t,r,s),i(g,t,s),d=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),o.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){d||(l(e.$$.fragment,t),l(o.$$.fragment,t),l(g.$$.fragment,t),d=!0)},o(t){$(e.$$.fragment,t),$(o.$$.fragment,t),$(g.$$.fragment,t),d=!1},d(t){f(e,t),t&&m(n),f(o,t),t&&m(r),f(g,t)}}}function E(t){let e,n,p,u,g,d,y,h,w,x;return e=new P({props:{title:"Whats the problem",$$slots:{default:[k]},$$scope:{ctx:t}}}),p=new P({props:{title:"Welcome BoxStarter",$$slots:{default:[T]},$$scope:{ctx:t}}}),g=new P({props:{title:"My Script",$$slots:{default:[B]},$$scope:{ctx:t}}}),y=new v({props:{$$slots:{default:[j]},$$scope:{ctx:t}}}),w=new P({props:{title:"Other Windows 10 Options",$$slots:{default:[D]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=o(),s(p.$$.fragment),u=o(),s(g.$$.fragment),d=o(),s(y.$$.fragment),h=o(),s(w.$$.fragment)},l(t){a(e.$$.fragment,t),n=r(t),a(p.$$.fragment,t),u=r(t),a(g.$$.fragment,t),d=r(t),a(y.$$.fragment,t),h=r(t),a(w.$$.fragment,t)},m(t,s){i(e,t,s),c(t,n,s),i(p,t,s),c(t,u,s),i(g,t,s),c(t,d,s),i(y,t,s),c(t,h,s),i(w,t,s),x=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),p.$set(o);const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),g.$set(a);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),y.$set(r);const i={};4&n&&(i.$$scope={dirty:n,ctx:t}),w.$set(i)},i(t){x||(l(e.$$.fragment,t),l(p.$$.fragment,t),l(g.$$.fragment,t),l(y.$$.fragment,t),l(w.$$.fragment,t),x=!0)},o(t){$(e.$$.fragment,t),$(p.$$.fragment,t),$(g.$$.fragment,t),$(y.$$.fragment,t),$(w.$$.fragment,t),x=!1},d(t){f(e,t),t&&m(n),f(p,t),t&&m(u),f(g,t),t&&m(d),f(y,t),t&&m(h),f(w,t)}}}function O(t){let e,n,p,u;return e=new w({props:{title:H,tags:t[0],projects:t[1]}}),p=new x({props:{$$slots:{default:[E]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=o(),s(p.$$.fragment)},l(t){a(e.$$.fragment,t),n=r(t),a(p.$$.fragment,t)},m(t,s){i(e,t,s),c(t,n,s),i(p,t,s),u=!0},p(t,[e]){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),p.$set(n)},i(t){u||(l(e.$$.fragment,t),l(p.$$.fragment,t),u=!0)},o(t){$(e.$$.fragment,t),$(p.$$.fragment,t),u=!1},d(t){f(e,t),t&&m(n),f(p,t)}}}const H="My Boxstarter Script";function F(t){return[["software","automation"],[]]}export default class extends t{constructor(t){super(),e(this,t,F,O,n,{})}}
//# sourceMappingURL=boxstarter-hello-world.svelte-840427b6.js.map