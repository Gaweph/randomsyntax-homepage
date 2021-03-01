<script>
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import Prism from "../components/PrismJS.svelte";
  import Callout from "../components/Callout.svelte";
  import Vimeo from "../components/Vimeo.svelte";
  import PostSection from "../components/Post-Section.svelte";
  import LinkExternal from "../components/Link-External.svelte";

  const title = "Time Game 1 - Implementing Time Travel";
  const date = "2016-10-09 22:30:00";
  const tags = ["software", "unity3d"];
  const projects = ["Time Travel Game"];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  This is my current progress of a time travel puzzle game created with Unity3D
  <Vimeo id="186188380" />
  I will briefly outline how I implemented time travel in Unity3d. As the title
  suggests, this method will be the same if you are trying to create some sort
  of replay system.
  <PostSection title="Record">
    The first thing we need to do is to record our players movement. The easiest
    thing to do seems to be to record the players position and rotation
    (Transform). For this we create an object which will be used to hold the
    recorded information.
    <Prism
      language="csharp"
      header="RecordingData.cs"
      code={`
public class RecordingData
{    
    public float RecordedRate { get; set; }
    private List<RecordData> recordedData = new List<RecordData>();

    public struct RecordData
    {
        public Vector3 Position { get; set; }
        public Quaternion Rotation { get; set; }
    }

    public void AddDataLine(RecordData data)
    {
        recordedData.Add(data);
    }

    public int pointer = 0;
    public void MoveToStartOfData()
    {
        pointer = 0;
    }

    public RecordData? GetNextDataLine()
    {
        var count = recordedData.Count;
        RecordData? data = null;
        if (count > 0 && pointer < count && pointer >= 0) // not empty and pointer is within range and pointer not negative
        {
            data = recordedData[pointer];
        }        
        pointer++;
        return data;
    }
}`} />
  </PostSection>

  <Callout title="Note">
    This can be extended to record more information in the future (maybe
    <strong>Scale</strong>
    ?)
  </Callout>
  We then need to call a method which records the data.
  <Prism
    language="csharp"
    header="TakeSnapShot()"
    code={`private RecordingData recordingData = new RecordingData();
public void TakeSnapshot()
{
    var t = Transform;
    var data = new RecordData()
    {
        Position = t.position,
        Rotation = t.rotation
    };
    recordingData.AddDataLine(data);    
}`} />
  We need to call the **TakeSnapshot** method at a known interval. I have used
  coroutines to ensure a consistent sample of data. In the below example we are
  using **0.05 seconds** which is a rate of 20fps. This seems to offer a smooth
  enough playback rate (discussed later in this article).
  <Prism
    language="csharp"
    header="Record Coroutine"
    code={`
public bool DoRecording = true;
void StartRecording()
{
    DoRecording = true;
    StartCoroutine(RecordingTimer(0.05f, 0f));
}

//RECORDING LOOP
IEnumerator RecordingTimer(float sampleRate)
{
    recordingData.RecordedRate = sampleRate;
    while (DoRecording) // Repeat until DoRecording is false
    {
        TakeSnapshot();
        yield return new WaitForSeconds(recordingData.RecordedRate / Time.timeScale);
    }
}`} />
  <Callout title="Note">
    <strong>DoRecording</strong>
    can be set to false to stop recording.
  </Callout>

  <PostSection title="Replay">
    Then we just need to play this data back. Again this is done with a
    coroutine.
    <Prism
      language="csharp"
      header="Playback Coroutine"
      code={`
public bool DoPlayback = true;
public void StartPlayback()
{
    DoPlayback = true;
    recordingData.MoveToStartOfData(); //Move to start of playback
    StartCoroutine(PlaybackTimer());
}`} />
    This is the same as the recording loop except it calls Next SnapShot().
    <Prism
      language="csharp"
      header="Playback Loop"
      code={`
//PLAYBACK LOOP
IEnumerator PlaybackTimer()
{
    while (DoPlayback) // Repeat Until DoPlayback is false
    {
        NextSnapshot();
        yield return new WaitForSeconds(recordingData.RecordedRate / Time.timeScale);
    }
}`} />
    The
    <strong>NextSnapshot</strong>
    method simply retrieves the desired transform of the object.
    <Prism
      language="csharp"
      header="NextSnapshot()"
      code={`
private RecordingData.RecordData? _desiredMoveLocation = null;

//MOVE DESIRED LOCATION TO NEXT LOCATION
private void NextSnapshot()
{
    var data = recordingData.GetNextDataLine();

    if (_desiredMoveLocation.HasValue && !data.HasValue) //If we previously had move location and now we do not
    {
        //END OF REPLAY - YOU MAY WANT TO REMOVE THE REPLAY OBJECT FROM SCENE NOW
    }
    _desiredMoveLocation = data;
}`} />
    We then move the object each update frame using the
    <strong>Lerp</strong>
    function (this helps keep the movement smooth).
    <Prism
      language="csharp"
      header="Move Object"
      code={`
public void Update()
{
    if (_desiredMoveLocation.HasValue)
    {
        var playbackRate = recordingData.RecordedRate;
        var amount = Math.Abs(Time.deltaTime) / playbackRate;
        var p = Vector3.Lerp(Transform.position, _desiredMoveLocation.Value.Position, amount);
        var r = Quaternion.Lerp(Transform.rotation, _desiredMoveLocation.Value.Rotation, amount);

        Transform.position = p;
        Transform.rotation = r;
    }
}`} />
  </PostSection>

  <Callout title="This is not the only way">
    There are many many ways of doing this. I am outlining how I did it.
    <br />
    I have simplified my implementation for the purposes of this post (to
    outline roughly how it was done).
    <br />
    Any feedback or improvements are welcome :)
  </Callout>

  <Callout title="Have a question?">
    Feel free to ask me anything (I have overlooked some internal workings in
    this post). I also have a
    <LinkExternal
      href="https://forum.unity3d.com/threads/wip-time-game-time-travel.435684/">
      Unity3d Forum WIP post
    </LinkExternal>
    for this game prototype (in progress).
    <br />

  </Callout>

  <Callout title="More Info?">
    I have not gone into any detail on how the replay data can be saved and
    loaded between games (I have implemented this in my prototype).
    <br />
    I can try and write a post outlining this if this is of interest?
  </Callout>
</PostContents>
