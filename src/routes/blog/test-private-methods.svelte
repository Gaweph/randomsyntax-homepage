<script>
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import Gallery from "$components/Gallery.svelte";
  import Callout from "$components/Callout.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import LinkExternal from "$components/Link-External.svelte";
  import Link from "$components/Link.svelte";
  import Prism from "$components/PrismJS.svelte";

  const title = "Test Private Methods with C#";
  const date = "2021-02-14";
  const tags = ["unit test", "c-sharp"];
  const projects = [];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>

  <PostSection title="TL;DR">
    This extension will allow any object to invoke a private method <Prism language="csharp" inline={true} code={`RunPrivateMethod()`} />.
    <br /><br />
  <Prism
  language="csharp"
  code={
`public static class TestHelpers
{
    public static object RunPrivateMethod(this object obj, string methodName, params object[] args)
    {
        var method = obj
            .GetType()
            .GetMethod(methodName, BindingFlags.NonPublic | BindingFlags.Instance);
        if (method == null)
        {
            throw new ArgumentException(
                $"{obj.GetType()} does not contain the method {methodName}", 
                "methodName"
            );
        }
        return method.Invoke(obj, args);
    }
}`} />
Use it like this
<Prism
language="csharp"
code={
`var res1 = obj.RunPrivateMethod("SecretInternalMethod");
var res2 = obj.RunPrivateMethod("SecretInternalMethodWithArgs", arg1, arg2);`} />
</PostSection>

<PostSection title="Explanation">

The magic happens mainly with <Prism language="csharp" inline="{true}" code={`BindingFlags.NonPublic | BindingFlags.Instance`} /> 
which allows us to use reflection to get the <Prism language="csharp" inline="{true}" code={`MethodInfo`} /> for the specified private method.

<br /><br />
Don't forget to include using statemnets <Prism language="csharp" inline="{true}" code={`using System;`} /> and <Prism language="csharp" inline="{true}" code={`using System.Reflection;`} />

</PostSection>
<PostSection title="Usage">
The following usage example shows how this could be used in a unit test

<Prism language="csharp" code={
`public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    private string GetFullName() // <-- Private Method
    {
        return $"{FirstName} {LastName}";
    }

    private string GetFullNameWithNickname(string nickname) // <-- Private Method with argument
    {
        return $"{FirstName} '{nickname}' {LastName}";
    }
}

[Fact]
public void GetFullName__Should_Return_ExpectedResult()
{
    // ARRANGE
    var test = new Person { FirstName = "Ace", LastName = "Rimmer" };

    // ACT
    var name = test.RunPrivateMethod("GetFullName"); // <-- without args
    var nickname = test.RunPrivateMethod("GetFullNameWithNickname", "what a guy!"); // <-- with args
    
    // ASSERT
    name.Should().Be("Ace Rimmer");
    nickname.Should().Be("Ace 'what a guy!' Rimmer");
}`} 
/>

</PostSection>
</PostContents>
