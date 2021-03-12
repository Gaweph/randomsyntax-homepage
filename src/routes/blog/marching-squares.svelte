<script>
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import Prism from "$components/PrismJS.svelte";
  import Callout from "$components/Callout.svelte";
  import LinkExternal from "$components/Link-External.svelte";
  import Link from "$components/Link.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import P5Canvas from "$components/P5Canvas.svelte";
  import FullScreen from "$components/Full-Screen.svelte";

  const title = "Marching Squares";
  const date = "2019-07-09";
  const tags = ["p5"];
  const projects = [];

  import sketch from "./marching-squares-js.js";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  My initial implementation of the **Marching Squares** algorithm, I was
  insipred after reading
  <LinkExternal
    href="http://jamie-wong.com/2014/08/19/metaballs-and-marching-squares/">
    Metaballs and Marching Squares
  </LinkExternal>
  by
  <strong>Jamie Wong</strong>

  <FullScreen>
    <P5Canvas {sketch} />
  </FullScreen>
  <br />
  <LinkExternal
    href="https://github.com/Gaweph/p5-live-examples/tree/master/Random/MarchingSquares">
    Source
  </LinkExternal>
  <Callout>
    A Less blocky
    <Link href="marching-squares-linear-interpolation">
      Linear interpolation version
    </Link>
    can be found in a future post
  </Callout>
</PostContents>
