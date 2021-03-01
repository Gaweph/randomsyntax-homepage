<script>
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import Prism from "../components/PrismJS.svelte";
  import Callout from "../components/Callout.svelte";
  import LinkExternal from "../components/Link-External.svelte";
  import Link from "../components/Link.svelte";
  import PostSection from "../components/Post-Section.svelte";
  import P5Canvas from "../components/P5Canvas.svelte";

  const title = "Coding Challenge: Birds and Bees";
  const date = "2018-09-16";
  const tags = ["p5"];
  const projects = ["Coding-Challenge"];

  import sketch from "./challenge-birds-and-bees.js";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  <p>
    This is my variant of
    <LinkExternal
      href="https://thecodingtrain.com/CodingChallenges/086-beesandbombs.html">
      Coding Challenge #86: Cube Wave by Bees and Bombs
    </LinkExternal>
    video by
    <LinkExternal href="https://thecodingtrain.com/">
      Daniel Shiffman on the Coding Train
    </LinkExternal>
  </p>
  <p>These are alwasy a lot of fun to try to improve upon.</p>
  <PostSection title="Live Example">
    <p>My example adds some colour to the original version.</p>
    <P5Canvas p5Version="0.5.11" {sketch} />

    <Callout title="p5js & Typescript">
      <p>
        As much most of Daniels videos. This uses
        <LinkExternal href="https://p5js.org/get-started/">p5js</LinkExternal>
        and my variant also use
        <LinkExternal href="https://www.typescriptlang.org/">
          typescript
        </LinkExternal>
        .
      </p>

      <p>
        See my
        <LinkExternal href="https://github.com/Gaweph/p5-typescript-starter">
          p5-typescript-starter
        </LinkExternal>
        project to get started using these technologies together
      </p>
      <p>
        YOu can see the
        <LinkExternal
          href="https://github.com/Gaweph/p5-live-examples/tree/master/CodingChallenges/CC_086_beesandbombs">
          Full Example Source Code
        </LinkExternal>
        for this example.
      </p>
    </Callout>
  </PostSection>

  <PostSection title="Original Version by beesandbombs">

    <img
      src="https://66.media.tumblr.com/b0ab265af61e714f2120d701ee4096b2/tumblr_oco0nnxZg51r2geqjo1_540.gifv"
      alt="wave_cube_original" />
    <br />
    You can see the
    <LinkExternal
      href="https://beesandbombs.tumblr.com/post/149654056864/cube-wave">
      Original Wave Cube
    </LinkExternal>
    by
    <LinkExternal href="https://beesandbombs.tumblr.com/">
      beesandbombs on tumblr
    </LinkExternal>

  </PostSection>

</PostContents>
