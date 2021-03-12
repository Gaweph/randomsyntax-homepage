<script context="module">
  export async function preload({ params, query }) {
    var url =
      "https://gist.githubusercontent.com/Gaweph/4cc5359a43d724a534ddc6efc82cc58d/raw/a93809baf23738dba70d1f39295f0028ee3eb594/AnimationFromTransform.cs";
    let response = await this.fetch(url);
    let text = await response.text();
    let gistContents = text;
    return { gistContents };
  }
</script>

<script>
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import Prism from "$components/PrismJS.svelte";
  import Callout from "$components/Callout.svelte";
  import Vimeo from "$components/Vimeo.svelte";
  import Gallery from "$components/Gallery.svelte";
  import PostSection from "$components/Post-Section.svelte";

  const title = "Mecanim Animation From Transform";
  const date = "2016-10-17 21:30:00";
  const tags = ["software", "unity3d"];
  const projects = [];

  export let gistContents;
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  In this post I will try to explain how I implemented simple auto animation for
  my characters based on their changing position in the scene (using mecanim and
  a simple script).
  <Vimeo id="187484099" />

  <Callout title="Position and Rotation only">
    In the above example the only thing being manipulated is the objects
    position and rotation (The animations are happening automagically)
  </Callout>

  <PostSection title="How to">
    First we need to load a Mecanim
    <strong>Animator->Controller</strong>
    and a model to attach an Animator component onto.
  </PostSection>
  In my example I have used the classic unity model of
  <strong>Kyle the Robot</strong>
  and the standard
  <strong>ThirdPersonAnimatorController</strong>
  (Any model and controller will do).
  <br />
  <Gallery
    useThumbnail={false}
    images={['/content/blog/images/unity3d-animation-from-transform/Standard_asset_Animator_Robot_kyle.png']} />
  <br />

  <PostSection title="Animation States and Variables">
    We can see that there are a few states and variables included in this
    controller.
  </PostSection>
  The variable we are interested in is
  <strong>Forward</strong>
  .
  <br />
  <Gallery
    useThumbnail={false}
    images={['/content/blog/images/unity3d-animation-from-transform/ThirdPersonAnimatorController.png']} />
  <br />
  The value of
  <strong>Forward</strong>
  will determine the walk/run animation that mecanim wil animate for us.
  <PostSection title="The Code">

    <Prism language="csharp" code={gistContents} />
  </PostSection>

  <PostSection title="Explanation">
    Each Update() the
    <strong>Velocity</strong>
    (Vector3) of the object is taken . This value is then passed to the animator
    (if one exists) which sets the specified movement float ("
    <strong>Forward</strong>
    " in my example)
    <Callout title="Velocity">
      This is the difference between this frames transform and the previous
      frames transform.
    </Callout>

    <Callout title="Note">
      <strong>MinMovementAmount</strong>
      - This variable can be changed in order to get the desired effect. I found
      that a value of 1 produced good movements for the prototype I was
      implementing.
    </Callout>
  </PostSection>

  <PostSection title="Usage">
    Simply attach this script to your object that contains your character. Good
    luck, let me know in the comments if anything needs explaining or if this
    does not work for you :)
  </PostSection>
</PostContents>
