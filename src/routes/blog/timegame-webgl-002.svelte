<script>
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import Gallery from "$components/Gallery.svelte";
  import Callout from "$components/Callout.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import LinkExternal from "$components/Link-External.svelte";
  import Link from "$components/Link.svelte";

  const title = "Time Game 4 - WEBGL Demo [V0.02]";
  const date = "2017-07-08 09:37:00";
  const tags = ["software", "unity3d"];
  const projects = ["Time Travel Game"];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  A new build of my time game prototype is available. !
  <Gallery
    useThumbnail={false}
    images={['https://raw.githubusercontent.com/Gaweph/TimeGame-WebGL-Demo/master/V0.02/V0.02.png']} />
  <br />
  I have revamped and simplified the graphics to try and refine the game
  mechanics first. A
  <LinkExternal href="https://gaweph.github.io/TimeGame-WebGL-Demo/V0.02/">
    Full Screen WebGl Demo
  </LinkExternal>
  can be played online.
  <Callout title="Feedback welcome">
    Any feedback would be appreciated. Is it obvious what to do?
  </Callout>
</PostContents>
