<script>
  import Gallery from "$components/Gallery.svelte";
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import Callout from "$components/Callout.svelte";
  import LinkExternal from "$components/Link-External.svelte";
  import P5Canvas from "$components/P5Canvas.svelte";
  import FullScreen from "$components/Full-Screen.svelte";

  const title = "10Print";
  const tags = ["p5"];
  const projects = [];
  const date = "2020-06-05";

  import sketch from "./10print-js";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  <PostSection>
    Simple
    <LinkExternal href="https://10print.org/">10Print</LinkExternal>
    implementation in p5.
    <p>
      Considering it only uses 2 characters ('\' and '/') I find this
      mesmerizing to watch.
    </p>

    <FullScreen>
      <P5Canvas {sketch} />
    </FullScreen>
    <p>This page only exists here so I can put it into full screen mode.</p>

  </PostSection>
</PostContents>
