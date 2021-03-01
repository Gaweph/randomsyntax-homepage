<script>
  import Gallery from "../components/Gallery.svelte";
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import PostSection from "../components/Post-Section.svelte";

  const title = "A week with Arch ";
  const tags = ["software", "setup"];
  const projects = [];
  const date = "2014-02-16";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>

  <PostSection>
    <p>
      After a week using Arch, getting the desktop just the way I want it, and
      generally getting to grips with what it means to have to read up on
      everything you install and configure; I must say I like Arch.
    </p>
    <p>
      Here is what I finally have (I went for XFCE because it is lightweight).
    </p>
    <Gallery images={['/blog/content/images/a_week_with_arch/arch_desktop.png']} />

  </PostSection>
  <PostSection title="What I like">
    <p>I’m very happy with the speed and ease of use so far.</p>
    <p>
      Arch makes no assumptions, this means you literally have to configure
      everything. An example of this is that I could not get thunar to auto
      mount and add a desktop icon for my USB drives. After some research
      (amazing Arch documentation) this was simply a case of enabling the thunar
      volume manager alongside lxpolkit.
    </p>
  </PostSection>
  <PostSection title="Bottom Line">
    <p>
      Things may take a little longer to get working and configured. but this
      results in no cruft at all in your system, and you leave knowing how
      things work in much more depth and are then able to problem solve in
      future. And when something does’t work you really get to go into the
      documentation (of which there is ample amounts of information on
      everything).
    </p>
    <p>
      I would say that I have learnt more on how a linux distribution works in
      my first week with arch, than I have in around 3 years of Ubuntu and Mint.
    </p>
    <p>
      There is something very satisfying about knowing exactly what is running
      on your system.
    </p>

  </PostSection>
</PostContents>
