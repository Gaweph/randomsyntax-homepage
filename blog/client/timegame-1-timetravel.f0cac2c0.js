import{S as e,i as t,s as n,c as r,e as a,a as o,h as i,m as s,j as c,t as d,b as m,d as l,g as p,p as $,v as f,z as h,o as g,r as u,u as y,x as w}from"./client.3bcff5e9.js";import"./Tag.6df3a1f0.js";import"./Post-Tags-Projects.8c4b6793.js";import{P as v,a as b}from"./Post-Contents.cd7a3b72.js";import{P as T}from"./Post-Section.886e8eee.js";import{L as R}from"./Link-External.93f8a0fb.js";import{P as D}from"./PrismJS.5d05741f.js";import{C as x}from"./Callout.5dcc87e8.js";import{V as S}from"./Vimeo.2703dcc9.js";function I(e){let t,n;const a=new D({props:{language:"csharp",header:"RecordingData.cs",code:"\npublic class RecordingData\n{    \n    public float RecordedRate { get; set; }\n    private List<RecordData> recordedData = new List<RecordData>();\n\n    public struct RecordData\n    {\n        public Vector3 Position { get; set; }\n        public Quaternion Rotation { get; set; }\n    }\n\n    public void AddDataLine(RecordData data)\n    {\n        recordedData.Add(data);\n    }\n\n    public int pointer = 0;\n    public void MoveToStartOfData()\n    {\n        pointer = 0;\n    }\n\n    public RecordData? GetNextDataLine()\n    {\n        var count = recordedData.Count;\n        RecordData? data = null;\n        if (count > 0 && pointer < count && pointer >= 0) // not empty and pointer is within range and pointer not negative\n        {\n            data = recordedData[pointer];\n        }        \n        pointer++;\n        return data;\n    }\n}"}});return{c(){t=$("The first thing we need to do is to record our players movement. The easiest\r\n    thing to do seems to be to record the players position and rotation\r\n    (Transform). For this we create an object which will be used to hold the\r\n    recorded information.\r\n    "),r(a.$$.fragment)},l(e){t=f(e,"The first thing we need to do is to record our players movement. The easiest\r\n    thing to do seems to be to record the players position and rotation\r\n    (Transform). For this we create an object which will be used to hold the\r\n    recorded information.\r\n    "),o(a.$$.fragment,e)},m(e,r){c(e,t,r),s(a,e,r),n=!0},p:h,i(e){n||(d(a.$$.fragment,e),n=!0)},o(e){m(a.$$.fragment,e),n=!1},d(e){e&&p(t),l(a,e)}}}function k(e){let t,n,r,a;return{c(){t=$("This can be extended to record more information in the future (maybe\r\n    "),n=g("strong"),r=$("Scale"),a=$("\r\n    ?)")},l(e){t=f(e,"This can be extended to record more information in the future (maybe\r\n    "),n=u(e,"STRONG",{});var o=y(n);r=f(o,"Scale"),o.forEach(p),a=f(e,"\r\n    ?)")},m(e,o){c(e,t,o),c(e,n,o),w(n,r),c(e,a,o)},d(e){e&&p(t),e&&p(n),e&&p(a)}}}function P(e){let t,n,r;return{c(){t=g("strong"),n=$("DoRecording"),r=$("\r\n    can be set to false to stop recording.")},l(e){t=u(e,"STRONG",{});var a=y(t);n=f(a,"DoRecording"),a.forEach(p),r=f(e,"\r\n    can be set to false to stop recording.")},m(e,a){c(e,t,a),w(t,n),c(e,r,a)},d(e){e&&p(t),e&&p(r)}}}function L(e){let t,n,a,i,v,b,T,R,x,S,I;const k=new D({props:{language:"csharp",header:"Playback Coroutine",code:"\npublic bool DoPlayback = true;\npublic void StartPlayback()\n{\n    DoPlayback = true;\n    recordingData.MoveToStartOfData(); //Move to start of playback\n    StartCoroutine(PlaybackTimer());\n}"}}),P=new D({props:{language:"csharp",header:"Playback Loop",code:"\n//PLAYBACK LOOP\nIEnumerator PlaybackTimer()\n{\n    while (DoPlayback) // Repeat Until DoPlayback is false\n    {\n        NextSnapshot();\n        yield return new WaitForSeconds(recordingData.RecordedRate / Time.timeScale);\n    }\n}"}}),L=new D({props:{language:"csharp",header:"NextSnapshot()",code:"\nprivate RecordingData.RecordData? _desiredMoveLocation = null;\n\n//MOVE DESIRED LOCATION TO NEXT LOCATION\nprivate void NextSnapshot()\n{\n    var data = recordingData.GetNextDataLine();\n\n    if (_desiredMoveLocation.HasValue && !data.HasValue) //If we previously had move location and now we do not\n    {\n        //END OF REPLAY - YOU MAY WANT TO REMOVE THE REPLAY OBJECT FROM SCENE NOW\n    }\n    _desiredMoveLocation = data;\n}"}}),O=new D({props:{language:"csharp",header:"Move Object",code:"\npublic void Update()\n{\n    if (_desiredMoveLocation.HasValue)\n    {\n        var playbackRate = recordingData.RecordedRate;\n        var amount = Math.Abs(Time.deltaTime) / playbackRate;\n        var p = Vector3.Lerp(Transform.position, _desiredMoveLocation.Value.Position, amount);\n        var r = Quaternion.Lerp(Transform.rotation, _desiredMoveLocation.Value.Rotation, amount);\n\n        Transform.position = p;\n        Transform.rotation = r;\n    }\n}"}});return{c(){t=$("Then we just need to play this data back. Again this is done with a\r\n    coroutine.\r\n    "),r(k.$$.fragment),n=$("\r\n    This is the same as the recording loop except it calls Next SnapShot().\r\n    "),r(P.$$.fragment),a=$("\r\n    The\r\n    "),i=g("strong"),v=$("NextSnapshot"),b=$("\r\n    method simply retrieves the desired transform of the object.\r\n    "),r(L.$$.fragment),T=$("\r\n    We then move the object each update frame using the\r\n    "),R=g("strong"),x=$("Lerp"),S=$("\r\n    function (this helps keep the movement smooth).\r\n    "),r(O.$$.fragment)},l(e){t=f(e,"Then we just need to play this data back. Again this is done with a\r\n    coroutine.\r\n    "),o(k.$$.fragment,e),n=f(e,"\r\n    This is the same as the recording loop except it calls Next SnapShot().\r\n    "),o(P.$$.fragment,e),a=f(e,"\r\n    The\r\n    "),i=u(e,"STRONG",{});var r=y(i);v=f(r,"NextSnapshot"),r.forEach(p),b=f(e,"\r\n    method simply retrieves the desired transform of the object.\r\n    "),o(L.$$.fragment,e),T=f(e,"\r\n    We then move the object each update frame using the\r\n    "),R=u(e,"STRONG",{});var s=y(R);x=f(s,"Lerp"),s.forEach(p),S=f(e,"\r\n    function (this helps keep the movement smooth).\r\n    "),o(O.$$.fragment,e)},m(e,r){c(e,t,r),s(k,e,r),c(e,n,r),s(P,e,r),c(e,a,r),c(e,i,r),w(i,v),c(e,b,r),s(L,e,r),c(e,T,r),c(e,R,r),w(R,x),c(e,S,r),s(O,e,r),I=!0},p:h,i(e){I||(d(k.$$.fragment,e),d(P.$$.fragment,e),d(L.$$.fragment,e),d(O.$$.fragment,e),I=!0)},o(e){m(k.$$.fragment,e),m(P.$$.fragment,e),m(L.$$.fragment,e),m(O.$$.fragment,e),I=!1},d(e){e&&p(t),l(k,e),e&&p(n),l(P,e),e&&p(a),e&&p(i),e&&p(b),l(L,e),e&&p(T),e&&p(R),e&&p(S),l(O,e)}}}function O(e){let t,n,r,a,o;return{c(){t=$("There are many many ways of doing this. I am outlining how I did it.\r\n    "),n=g("br"),r=$("\r\n    I have simplified my implementation for the purposes of this post (to\r\n    outline roughly how it was done).\r\n    "),a=g("br"),o=$("\r\n    Any feedback or improvements are welcome :)")},l(e){t=f(e,"There are many many ways of doing this. I am outlining how I did it.\r\n    "),n=u(e,"BR",{}),r=f(e,"\r\n    I have simplified my implementation for the purposes of this post (to\r\n    outline roughly how it was done).\r\n    "),a=u(e,"BR",{}),o=f(e,"\r\n    Any feedback or improvements are welcome :)")},m(e,i){c(e,t,i),c(e,n,i),c(e,r,i),c(e,a,i),c(e,o,i)},d(e){e&&p(t),e&&p(n),e&&p(r),e&&p(a),e&&p(o)}}}function N(e){let t;return{c(){t=$("Unity3d Forum WIP post")},l(e){t=f(e,"Unity3d Forum WIP post")},m(e,n){c(e,t,n)},d(e){e&&p(t)}}}function j(e){let t,n,a,i;const h=new R({props:{href:"https://forum.unity3d.com/threads/wip-time-game-time-travel.435684/",$$slots:{default:[N]},$$scope:{ctx:e}}});return{c(){t=$("Feel free to ask me anything (I have overlooked some internal workings in\r\n    this post). I also have a\r\n    "),r(h.$$.fragment),n=$("\r\n    for this game prototype (in progress).\r\n    "),a=g("br")},l(e){t=f(e,"Feel free to ask me anything (I have overlooked some internal workings in\r\n    this post). I also have a\r\n    "),o(h.$$.fragment,e),n=f(e,"\r\n    for this game prototype (in progress).\r\n    "),a=u(e,"BR",{})},m(e,r){c(e,t,r),s(h,e,r),c(e,n,r),c(e,a,r),i=!0},p(e,t){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),h.$set(n)},i(e){i||(d(h.$$.fragment,e),i=!0)},o(e){m(h.$$.fragment,e),i=!1},d(e){e&&p(t),l(h,e),e&&p(n),e&&p(a)}}}function E(e){let t,n,r;return{c(){t=$("I have not gone into any detail on how the replay data can be saved and\r\n    loaded between games (I have implemented this in my prototype).\r\n    "),n=g("br"),r=$("\r\n    I can try and write a post outlining this if this is of interest?")},l(e){t=f(e,"I have not gone into any detail on how the replay data can be saved and\r\n    loaded between games (I have implemented this in my prototype).\r\n    "),n=u(e,"BR",{}),r=f(e,"\r\n    I can try and write a post outlining this if this is of interest?")},m(e,a){c(e,t,a),c(e,n,a),c(e,r,a)},d(e){e&&p(t),e&&p(n),e&&p(r)}}}function A(e){let t,n,h,g,u,y,w,v,b,R,N;const A=new S({props:{id:"186188380"}}),M=new T({props:{title:"Record",$$slots:{default:[I]},$$scope:{ctx:e}}}),C=new x({props:{title:"Note",$$slots:{default:[k]},$$scope:{ctx:e}}}),W=new D({props:{language:"csharp",header:"TakeSnapShot()",code:"private RecordingData recordingData = new RecordingData();\npublic void TakeSnapshot()\n{\n    var t = Transform;\n    var data = new RecordData()\n    {\n        Position = t.position,\n        Rotation = t.rotation\n    };\n    recordingData.AddDataLine(data);    \n}"}}),V=new D({props:{language:"csharp",header:"Record Coroutine",code:"\npublic bool DoRecording = true;\nvoid StartRecording()\n{\n    DoRecording = true;\n    StartCoroutine(RecordingTimer(0.05f, 0f));\n}\n\n//RECORDING LOOP\nIEnumerator RecordingTimer(float sampleRate)\n{\n    recordingData.RecordedRate = sampleRate;\n    while (DoRecording) // Repeat until DoRecording is false\n    {\n        TakeSnapshot();\n        yield return new WaitForSeconds(recordingData.RecordedRate / Time.timeScale);\n    }\n}"}}),F=new x({props:{title:"Note",$$slots:{default:[P]},$$scope:{ctx:e}}}),G=new T({props:{title:"Replay",$$slots:{default:[L]},$$scope:{ctx:e}}}),U=new x({props:{title:"This is not the only way",$$slots:{default:[O]},$$scope:{ctx:e}}}),B=new x({props:{title:"Have a question?",$$slots:{default:[j]},$$scope:{ctx:e}}}),_=new x({props:{title:"More Info?",$$slots:{default:[E]},$$scope:{ctx:e}}});return{c(){t=$("This is my current progress of a time travel puzzle game created with Unity3D\r\n  "),r(A.$$.fragment),n=$("\r\n  I will briefly outline how I implemented time travel in Unity3d. As the title\r\n  suggests, this method will be the same if you are trying to create some sort\r\n  of replay system.\r\n  "),r(M.$$.fragment),h=a(),r(C.$$.fragment),g=$("\r\n  We then need to call a method which records the data.\r\n  "),r(W.$$.fragment),u=$("\r\n  We need to call the **TakeSnapshot** method at a known interval. I have used\r\n  coroutines to ensure a consistent sample of data. In the below example we are\r\n  using **0.05 seconds** which is a rate of 20fps. This seems to offer a smooth\r\n  enough playback rate (discussed later in this article).\r\n  "),r(V.$$.fragment),y=a(),r(F.$$.fragment),w=a(),r(G.$$.fragment),v=a(),r(U.$$.fragment),b=a(),r(B.$$.fragment),R=a(),r(_.$$.fragment)},l(e){t=f(e,"This is my current progress of a time travel puzzle game created with Unity3D\r\n  "),o(A.$$.fragment,e),n=f(e,"\r\n  I will briefly outline how I implemented time travel in Unity3d. As the title\r\n  suggests, this method will be the same if you are trying to create some sort\r\n  of replay system.\r\n  "),o(M.$$.fragment,e),h=i(e),o(C.$$.fragment,e),g=f(e,"\r\n  We then need to call a method which records the data.\r\n  "),o(W.$$.fragment,e),u=f(e,"\r\n  We need to call the **TakeSnapshot** method at a known interval. I have used\r\n  coroutines to ensure a consistent sample of data. In the below example we are\r\n  using **0.05 seconds** which is a rate of 20fps. This seems to offer a smooth\r\n  enough playback rate (discussed later in this article).\r\n  "),o(V.$$.fragment,e),y=i(e),o(F.$$.fragment,e),w=i(e),o(G.$$.fragment,e),v=i(e),o(U.$$.fragment,e),b=i(e),o(B.$$.fragment,e),R=i(e),o(_.$$.fragment,e)},m(e,r){c(e,t,r),s(A,e,r),c(e,n,r),s(M,e,r),c(e,h,r),s(C,e,r),c(e,g,r),s(W,e,r),c(e,u,r),s(V,e,r),c(e,y,r),s(F,e,r),c(e,w,r),s(G,e,r),c(e,v,r),s(U,e,r),c(e,b,r),s(B,e,r),c(e,R,r),s(_,e,r),N=!0},p(e,t){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),M.$set(n);const r={};4&t&&(r.$$scope={dirty:t,ctx:e}),C.$set(r);const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),F.$set(a);const o={};4&t&&(o.$$scope={dirty:t,ctx:e}),G.$set(o);const i={};4&t&&(i.$$scope={dirty:t,ctx:e}),U.$set(i);const s={};4&t&&(s.$$scope={dirty:t,ctx:e}),B.$set(s);const c={};4&t&&(c.$$scope={dirty:t,ctx:e}),_.$set(c)},i(e){N||(d(A.$$.fragment,e),d(M.$$.fragment,e),d(C.$$.fragment,e),d(W.$$.fragment,e),d(V.$$.fragment,e),d(F.$$.fragment,e),d(G.$$.fragment,e),d(U.$$.fragment,e),d(B.$$.fragment,e),d(_.$$.fragment,e),N=!0)},o(e){m(A.$$.fragment,e),m(M.$$.fragment,e),m(C.$$.fragment,e),m(W.$$.fragment,e),m(V.$$.fragment,e),m(F.$$.fragment,e),m(G.$$.fragment,e),m(U.$$.fragment,e),m(B.$$.fragment,e),m(_.$$.fragment,e),N=!1},d(e){e&&p(t),l(A,e),e&&p(n),l(M,e),e&&p(h),l(C,e),e&&p(g),l(W,e),e&&p(u),l(V,e),e&&p(y),l(F,e),e&&p(w),l(G,e),e&&p(v),l(U,e),e&&p(b),l(B,e),e&&p(R),l(_,e)}}}function M(e){let t,n;const $=new v({props:{title:C,tags:e[0],projects:e[1]}}),f=new b({props:{$$slots:{default:[A]},$$scope:{ctx:e}}});return{c(){r($.$$.fragment),t=a(),r(f.$$.fragment)},l(e){o($.$$.fragment,e),t=i(e),o(f.$$.fragment,e)},m(e,r){s($,e,r),c(e,t,r),s(f,e,r),n=!0},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),f.$set(n)},i(e){n||(d($.$$.fragment,e),d(f.$$.fragment,e),n=!0)},o(e){m($.$$.fragment,e),m(f.$$.fragment,e),n=!1},d(e){l($,e),e&&p(t),l(f,e)}}}const C="Time Game 1 - Implementing Time Travel";function W(e){return[["software","unity3d"],["Time Travel Game"]]}export default class extends e{constructor(e){super(),t(this,e,W,M,n,{})}}
