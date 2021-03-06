import{a as e,b as t,c as n,d as r,i as o,s as a,e as i,S as s,f as c,k as f,g as d,o as m,m as l,p as u,u as p,t as $,h,j as g,n as v,z as y,C as w,G as b,y as R,A as T,B as D,E as S}from"./client.6c61c330.js";import"./Tag.d7146f10.js";import"./Post-Tags-Projects.d7577e0f.js";import{P as x,a as k}from"./Post-Contents.70cd398c.js";import{P as I}from"./Post-Section.6722fb24.js";import{L as P}from"./Link-External.f7598c17.js";import{P as L}from"./PrismJS.987654e1.js";import{C as O}from"./Callout.4f436b47.js";import{V as N}from"./Vimeo.05c82669.js";function E(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,a=t(e);if(r){var i=t(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return n(this,o)}}function j(e){var t,n,r=new L({props:{language:"csharp",header:"RecordingData.cs",code:"\npublic class RecordingData\n{    \n    public float RecordedRate { get; set; }\n    private List<RecordData> recordedData = new List<RecordData>();\n\n    public struct RecordData\n    {\n        public Vector3 Position { get; set; }\n        public Quaternion Rotation { get; set; }\n    }\n\n    public void AddDataLine(RecordData data)\n    {\n        recordedData.Add(data);\n    }\n\n    public int pointer = 0;\n    public void MoveToStartOfData()\n    {\n        pointer = 0;\n    }\n\n    public RecordData? GetNextDataLine()\n    {\n        var count = recordedData.Count;\n        RecordData? data = null;\n        if (count > 0 && pointer < count && pointer >= 0) // not empty and pointer is within range and pointer not negative\n        {\n            data = recordedData[pointer];\n        }        \n        pointer++;\n        return data;\n    }\n}"}});return{c:function(){t=y("The first thing we need to do is to record our players movement. The easiest\r\n    thing to do seems to be to record the players position and rotation\r\n    (Transform). For this we create an object which will be used to hold the\r\n    recorded information.\r\n    "),c(r.$$.fragment)},l:function(e){t=w(e,"The first thing we need to do is to record our players movement. The easiest\r\n    thing to do seems to be to record the players position and rotation\r\n    (Transform). For this we create an object which will be used to hold the\r\n    recorded information.\r\n    "),d(r.$$.fragment,e)},m:function(e,o){u(e,t,o),l(r,e,o),n=!0},p:b,i:function(e){n||($(r.$$.fragment,e),n=!0)},o:function(e){h(r.$$.fragment,e),n=!1},d:function(e){e&&v(t),g(r,e)}}}function A(e){var t,n,r,o;return{c:function(){t=y("This can be extended to record more information in the future (maybe\r\n    "),n=R("strong"),r=y("Scale"),o=y("\r\n    ?)")},l:function(e){t=w(e,"This can be extended to record more information in the future (maybe\r\n    "),n=T(e,"STRONG",{});var a=D(n);r=w(a,"Scale"),a.forEach(v),o=w(e,"\r\n    ?)")},m:function(e,a){u(e,t,a),u(e,n,a),S(n,r),u(e,o,a)},d:function(e){e&&v(t),e&&v(n),e&&v(o)}}}function M(e){var t,n,r;return{c:function(){t=R("strong"),n=y("DoRecording"),r=y("\r\n    can be set to false to stop recording.")},l:function(e){t=T(e,"STRONG",{});var o=D(t);n=w(o,"DoRecording"),o.forEach(v),r=w(e,"\r\n    can be set to false to stop recording.")},m:function(e,o){u(e,t,o),S(t,n),u(e,r,o)},d:function(e){e&&v(t),e&&v(r)}}}function C(e){var t,n,r,o,a,i,s,f,m,p,x,k=new L({props:{language:"csharp",header:"Playback Coroutine",code:"\npublic bool DoPlayback = true;\npublic void StartPlayback()\n{\n    DoPlayback = true;\n    recordingData.MoveToStartOfData(); //Move to start of playback\n    StartCoroutine(PlaybackTimer());\n}"}}),I=new L({props:{language:"csharp",header:"Playback Loop",code:"\n//PLAYBACK LOOP\nIEnumerator PlaybackTimer()\n{\n    while (DoPlayback) // Repeat Until DoPlayback is false\n    {\n        NextSnapshot();\n        yield return new WaitForSeconds(recordingData.RecordedRate / Time.timeScale);\n    }\n}"}}),P=new L({props:{language:"csharp",header:"NextSnapshot()",code:"\nprivate RecordingData.RecordData? _desiredMoveLocation = null;\n\n//MOVE DESIRED LOCATION TO NEXT LOCATION\nprivate void NextSnapshot()\n{\n    var data = recordingData.GetNextDataLine();\n\n    if (_desiredMoveLocation.HasValue && !data.HasValue) //If we previously had move location and now we do not\n    {\n        //END OF REPLAY - YOU MAY WANT TO REMOVE THE REPLAY OBJECT FROM SCENE NOW\n    }\n    _desiredMoveLocation = data;\n}"}}),O=new L({props:{language:"csharp",header:"Move Object",code:"\npublic void Update()\n{\n    if (_desiredMoveLocation.HasValue)\n    {\n        var playbackRate = recordingData.RecordedRate;\n        var amount = Math.Abs(Time.deltaTime) / playbackRate;\n        var p = Vector3.Lerp(Transform.position, _desiredMoveLocation.Value.Position, amount);\n        var r = Quaternion.Lerp(Transform.rotation, _desiredMoveLocation.Value.Rotation, amount);\n\n        Transform.position = p;\n        Transform.rotation = r;\n    }\n}"}});return{c:function(){t=y("Then we just need to play this data back. Again this is done with a\r\n    coroutine.\r\n    "),c(k.$$.fragment),n=y("\r\n    This is the same as the recording loop except it calls Next SnapShot().\r\n    "),c(I.$$.fragment),r=y("\r\n    The\r\n    "),o=R("strong"),a=y("NextSnapshot"),i=y("\r\n    method simply retrieves the desired transform of the object.\r\n    "),c(P.$$.fragment),s=y("\r\n    We then move the object each update frame using the\r\n    "),f=R("strong"),m=y("Lerp"),p=y("\r\n    function (this helps keep the movement smooth).\r\n    "),c(O.$$.fragment)},l:function(e){t=w(e,"Then we just need to play this data back. Again this is done with a\r\n    coroutine.\r\n    "),d(k.$$.fragment,e),n=w(e,"\r\n    This is the same as the recording loop except it calls Next SnapShot().\r\n    "),d(I.$$.fragment,e),r=w(e,"\r\n    The\r\n    "),o=T(e,"STRONG",{});var c=D(o);a=w(c,"NextSnapshot"),c.forEach(v),i=w(e,"\r\n    method simply retrieves the desired transform of the object.\r\n    "),d(P.$$.fragment,e),s=w(e,"\r\n    We then move the object each update frame using the\r\n    "),f=T(e,"STRONG",{});var l=D(f);m=w(l,"Lerp"),l.forEach(v),p=w(e,"\r\n    function (this helps keep the movement smooth).\r\n    "),d(O.$$.fragment,e)},m:function(e,c){u(e,t,c),l(k,e,c),u(e,n,c),l(I,e,c),u(e,r,c),u(e,o,c),S(o,a),u(e,i,c),l(P,e,c),u(e,s,c),u(e,f,c),S(f,m),u(e,p,c),l(O,e,c),x=!0},p:b,i:function(e){x||($(k.$$.fragment,e),$(I.$$.fragment,e),$(P.$$.fragment,e),$(O.$$.fragment,e),x=!0)},o:function(e){h(k.$$.fragment,e),h(I.$$.fragment,e),h(P.$$.fragment,e),h(O.$$.fragment,e),x=!1},d:function(e){e&&v(t),g(k,e),e&&v(n),g(I,e),e&&v(r),e&&v(o),e&&v(i),g(P,e),e&&v(s),e&&v(f),e&&v(p),g(O,e)}}}function W(e){var t,n,r,o,a;return{c:function(){t=y("There are many many ways of doing this. I am outlining how I did it.\r\n    "),n=R("br"),r=y("\r\n    I have simplified my implementation for the purposes of this post (to\r\n    outline roughly how it was done).\r\n    "),o=R("br"),a=y("\r\n    Any feedback or improvements are welcome :)")},l:function(e){t=w(e,"There are many many ways of doing this. I am outlining how I did it.\r\n    "),n=T(e,"BR",{}),r=w(e,"\r\n    I have simplified my implementation for the purposes of this post (to\r\n    outline roughly how it was done).\r\n    "),o=T(e,"BR",{}),a=w(e,"\r\n    Any feedback or improvements are welcome :)")},m:function(e,i){u(e,t,i),u(e,n,i),u(e,r,i),u(e,o,i),u(e,a,i)},d:function(e){e&&v(t),e&&v(n),e&&v(r),e&&v(o),e&&v(a)}}}function V(e){var t;return{c:function(){t=y("Unity3d Forum WIP post")},l:function(e){t=w(e,"Unity3d Forum WIP post")},m:function(e,n){u(e,t,n)},d:function(e){e&&v(t)}}}function F(e){var t,n,r,o,a=new P({props:{href:"https://forum.unity3d.com/threads/wip-time-game-time-travel.435684/",$$slots:{default:[V]},$$scope:{ctx:e}}});return{c:function(){t=y("Feel free to ask me anything (I have overlooked some internal workings in\r\n    this post). I also have a\r\n    "),c(a.$$.fragment),n=y("\r\n    for this game prototype (in progress).\r\n    "),r=R("br")},l:function(e){t=w(e,"Feel free to ask me anything (I have overlooked some internal workings in\r\n    this post). I also have a\r\n    "),d(a.$$.fragment,e),n=w(e,"\r\n    for this game prototype (in progress).\r\n    "),r=T(e,"BR",{})},m:function(e,i){u(e,t,i),l(a,e,i),u(e,n,i),u(e,r,i),o=!0},p:function(e,t){var n={};4&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n)},i:function(e){o||($(a.$$.fragment,e),o=!0)},o:function(e){h(a.$$.fragment,e),o=!1},d:function(e){e&&v(t),g(a,e),e&&v(n),e&&v(r)}}}function G(e){var t,n,r;return{c:function(){t=y("I have not gone into any detail on how the replay data can be saved and\r\n    loaded between games (I have implemented this in my prototype).\r\n    "),n=R("br"),r=y("\r\n    I can try and write a post outlining this if this is of interest?")},l:function(e){t=w(e,"I have not gone into any detail on how the replay data can be saved and\r\n    loaded between games (I have implemented this in my prototype).\r\n    "),n=T(e,"BR",{}),r=w(e,"\r\n    I can try and write a post outlining this if this is of interest?")},m:function(e,o){u(e,t,o),u(e,n,o),u(e,r,o)},d:function(e){e&&v(t),e&&v(n),e&&v(r)}}}function U(e){var t,n,r,o,a,i,s,p,b,R,T,D=new N({props:{id:"186188380"}}),S=new I({props:{title:"Record",$$slots:{default:[j]},$$scope:{ctx:e}}}),x=new O({props:{title:"Note",$$slots:{default:[A]},$$scope:{ctx:e}}}),k=new L({props:{language:"csharp",header:"TakeSnapShot()",code:"private RecordingData recordingData = new RecordingData();\npublic void TakeSnapshot()\n{\n    var t = Transform;\n    var data = new RecordData()\n    {\n        Position = t.position,\n        Rotation = t.rotation\n    };\n    recordingData.AddDataLine(data);    \n}"}}),P=new L({props:{language:"csharp",header:"Record Coroutine",code:"\npublic bool DoRecording = true;\nvoid StartRecording()\n{\n    DoRecording = true;\n    StartCoroutine(RecordingTimer(0.05f, 0f));\n}\n\n//RECORDING LOOP\nIEnumerator RecordingTimer(float sampleRate)\n{\n    recordingData.RecordedRate = sampleRate;\n    while (DoRecording) // Repeat until DoRecording is false\n    {\n        TakeSnapshot();\n        yield return new WaitForSeconds(recordingData.RecordedRate / Time.timeScale);\n    }\n}"}}),E=new O({props:{title:"Note",$$slots:{default:[M]},$$scope:{ctx:e}}}),V=new I({props:{title:"Replay",$$slots:{default:[C]},$$scope:{ctx:e}}}),U=new O({props:{title:"This is not the only way",$$slots:{default:[W]},$$scope:{ctx:e}}}),B=new O({props:{title:"Have a question?",$$slots:{default:[F]},$$scope:{ctx:e}}}),_=new O({props:{title:"More Info?",$$slots:{default:[G]},$$scope:{ctx:e}}});return{c:function(){t=y("This is my current progress of a time travel puzzle game created with Unity3D\r\n  "),c(D.$$.fragment),n=y("\r\n  I will briefly outline how I implemented time travel in Unity3d. As the title\r\n  suggests, this method will be the same if you are trying to create some sort\r\n  of replay system.\r\n  "),c(S.$$.fragment),r=f(),c(x.$$.fragment),o=y("\r\n  We then need to call a method which records the data.\r\n  "),c(k.$$.fragment),a=y("\r\n  We need to call the **TakeSnapshot** method at a known interval. I have used\r\n  coroutines to ensure a consistent sample of data. In the below example we are\r\n  using **0.05 seconds** which is a rate of 20fps. This seems to offer a smooth\r\n  enough playback rate (discussed later in this article).\r\n  "),c(P.$$.fragment),i=f(),c(E.$$.fragment),s=f(),c(V.$$.fragment),p=f(),c(U.$$.fragment),b=f(),c(B.$$.fragment),R=f(),c(_.$$.fragment)},l:function(e){t=w(e,"This is my current progress of a time travel puzzle game created with Unity3D\r\n  "),d(D.$$.fragment,e),n=w(e,"\r\n  I will briefly outline how I implemented time travel in Unity3d. As the title\r\n  suggests, this method will be the same if you are trying to create some sort\r\n  of replay system.\r\n  "),d(S.$$.fragment,e),r=m(e),d(x.$$.fragment,e),o=w(e,"\r\n  We then need to call a method which records the data.\r\n  "),d(k.$$.fragment,e),a=w(e,"\r\n  We need to call the **TakeSnapshot** method at a known interval. I have used\r\n  coroutines to ensure a consistent sample of data. In the below example we are\r\n  using **0.05 seconds** which is a rate of 20fps. This seems to offer a smooth\r\n  enough playback rate (discussed later in this article).\r\n  "),d(P.$$.fragment,e),i=m(e),d(E.$$.fragment,e),s=m(e),d(V.$$.fragment,e),p=m(e),d(U.$$.fragment,e),b=m(e),d(B.$$.fragment,e),R=m(e),d(_.$$.fragment,e)},m:function(e,c){u(e,t,c),l(D,e,c),u(e,n,c),l(S,e,c),u(e,r,c),l(x,e,c),u(e,o,c),l(k,e,c),u(e,a,c),l(P,e,c),u(e,i,c),l(E,e,c),u(e,s,c),l(V,e,c),u(e,p,c),l(U,e,c),u(e,b,c),l(B,e,c),u(e,R,c),l(_,e,c),T=!0},p:function(e,t){var n={};4&t&&(n.$$scope={dirty:t,ctx:e}),S.$set(n);var r={};4&t&&(r.$$scope={dirty:t,ctx:e}),x.$set(r);var o={};4&t&&(o.$$scope={dirty:t,ctx:e}),E.$set(o);var a={};4&t&&(a.$$scope={dirty:t,ctx:e}),V.$set(a);var i={};4&t&&(i.$$scope={dirty:t,ctx:e}),U.$set(i);var s={};4&t&&(s.$$scope={dirty:t,ctx:e}),B.$set(s);var c={};4&t&&(c.$$scope={dirty:t,ctx:e}),_.$set(c)},i:function(e){T||($(D.$$.fragment,e),$(S.$$.fragment,e),$(x.$$.fragment,e),$(k.$$.fragment,e),$(P.$$.fragment,e),$(E.$$.fragment,e),$(V.$$.fragment,e),$(U.$$.fragment,e),$(B.$$.fragment,e),$(_.$$.fragment,e),T=!0)},o:function(e){h(D.$$.fragment,e),h(S.$$.fragment,e),h(x.$$.fragment,e),h(k.$$.fragment,e),h(P.$$.fragment,e),h(E.$$.fragment,e),h(V.$$.fragment,e),h(U.$$.fragment,e),h(B.$$.fragment,e),h(_.$$.fragment,e),T=!1},d:function(e){e&&v(t),g(D,e),e&&v(n),g(S,e),e&&v(r),g(x,e),e&&v(o),g(k,e),e&&v(a),g(P,e),e&&v(i),g(E,e),e&&v(s),g(V,e),e&&v(p),g(U,e),e&&v(b),g(B,e),e&&v(R),g(_,e)}}}function B(e){var t,n,r=new x({props:{title:_,tags:e[0],projects:e[1]}}),o=new k({props:{$$slots:{default:[U]},$$scope:{ctx:e}}});return{c:function(){c(r.$$.fragment),t=f(),c(o.$$.fragment)},l:function(e){d(r.$$.fragment,e),t=m(e),d(o.$$.fragment,e)},m:function(e,a){l(r,e,a),u(e,t,a),l(o,e,a),n=!0},p:function(e,t){var n=p(t,1)[0],r={};4&n&&(r.$$scope={dirty:n,ctx:e}),o.$set(r)},i:function(e){n||($(r.$$.fragment,e),$(o.$$.fragment,e),n=!0)},o:function(e){h(r.$$.fragment,e),h(o.$$.fragment,e),n=!1},d:function(e){g(r,e),e&&v(t),g(o,e)}}}var _="Time Game 1 - Implementing Time Travel";function z(e){return[["software","unity3d"],["Time Travel Game"]]}var H=function(t){e(c,s);var n=E(c);function c(e){var t;return r(this,c),t=n.call(this),o(i(t),e,z,B,a,{}),t}return c}();export default H;
