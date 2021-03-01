<script>
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import Callout from "../components/Callout.svelte";
  import PostSection from "../components/Post-Section.svelte";
  import Link from "../components/Link.svelte";

  const title = "Time Game 3 - WEBGL Demo [V0.01]";
  const date = "2016-12-29 21:23:00";
  const tags = ["software", "unity3d"];
  const projects = ["Time Travel Game"];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  I have created a WEBGL build of the time machine proof of concept game. You
  should be able to play directly below.
  <Callout title="Too boring?">
    Im sorry for the lack of levels and content.
    <br />
    This project was mainly for me to try and see what would be needed to
    implement the time travel piece of functionality
  </Callout>

  <iframe
    style="width: 1024px; height: 700px;"
    src="https://gaweph.github.io/TimeGame-WebGL-Demo/V0.01//"
    title="Marching Squares Linear Interpolation" />

  <Callout title="Explanation">
    I have tried to explain how some of the game mechanics work in other
    <Link href="/blog/projects/Time Travel Game">TimeGame project posts</Link>

  </Callout>

  <Callout title="Just ask :)">
    If you need any further explanation or help then feel free to ask :) Ill try
    my best to answer.
  </Callout>
</PostContents>
