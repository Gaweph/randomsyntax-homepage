<script>
  import Gallery from "../components/Gallery.svelte";
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import PostSection from "../components/Post-Section.svelte";
  import Callout from "../components/Callout.svelte";
  import LinkExternal from "../components/Link-External.svelte";

  const title = "Arch Linux New Install";
  const date = "2014-01-31";
  const projects = [];
  const tags = ["setup", "software"];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>

  <PostSection title="Something New">
    I have been contemplating re-installing my main OS. Currently I'm running
    <LinkExternal href="https://www.linuxmint.com/">Mint</LinkExternal>
    ( 14 - Cinnamon) and Windows 7. I have always wanted to install
    <LinkExternal href="https://www.gentoo.org/get-started/">
      Gentoo
    </LinkExternal>
    , but I just can't bring myself to doing it, everything I read suggests it
    will take hours upon hours to install. Then there's the maintenance,
    apparently everything is compiled at install time, which can increase
    installation times.
  </PostSection>

  <PostSection title="Arch">
    <p>
      I have been looking at
      <strong>Arch Linux</strong>
      , and I think this provides a good middle ground. You get to build a
      system running only what you configure and install, but it seems easier
      and less daunting that a full
      <strong>Gentoo</strong>
      install.
    </p>
    <p>
      One thing I would like to highlight is that the
      <LinkExternal
        href="https://wiki.archlinux.org/index.php/Installation_guide">
        <strong>DOCUMENTATION IS AMAZING</strong>
      </LinkExternal>
      , really really helpful, if you need to know it, it's in there. Check out
      the
      <LinkExternal href="https://wiki.archlinux.org/index.php/Beginners">
        Beginners Guide
      </LinkExternal>
      if you need help getting going.
    </p>

    <p>After 2 hours of work, here is what I have:</p>
    <p>
      (It still needs a lot of work, this is simply the stock xfce, with
      chromium installed)
    </p>
    <Gallery
      images={['/blog/content/images/arch-linux-new-install/arch_initial_screenshot.png']} />

  </PostSection>

  <Callout>
    Something to note is that my previous install of
    <strong>Mint</strong>
    had encrypted my home folders with
    <strong>ecryptfs</strong>
    (standard ubuntu encryption). This was easily used with my new install by
    following the Auto-Mount steps in this
    <LinkExternal href="https://wiki.archlinux.org/index.php/ECryptfs">
      ecryptfs Arch Guide
    </LinkExternal>
  </Callout>
</PostContents>
