<script>
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import Gallery from "../components/Gallery.svelte";
  import Callout from "../components/Callout.svelte";
  import PostSection from "../components/Post-Section.svelte";
  import LinkExternal from "../components/Link-External.svelte";
  import Link from "../components/Link.svelte";
  import Prism from "../components/PrismJS.svelte";

  const title = "Test Private Methods with C#";
  const date = "2021-02-14";
  const tags = ["unit test", "c-sharp"];
  const projects = [];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>

  <PostSection title="TL;DR">
    Need the solution in the hurry?  Here you go:
  <Prism
  language="csharp"
  code={
`using System;
using System.Reflection;
namespace TestUtilities
{
    public static class TestHelpers
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
    }
}`} />
Use it like this
<Prism
language="csharp"
code={
`var res1 = testObject.RunPrivateMethod("SecretInternalMethod");
var res2 = testObject.RunPrivateMethod("SecretInternalMethodWithArgs", arg1, arg2);`} />
</PostSection>

<PostSection title="Explanation">

We have a class with some internal code that we would like to run in isolation to test that it is doing what we think it is doing.  
<br /><br />
I know there are many arguments to  be made as to whether we should be doing this.  Many will suggest that having lots of logic in a private method means that it should probably be refactored into a helper class or service layer,  
while this is true in some cases the fact is that sometimes we have some code in a class (legacy code) and we want to test it.

<Callout title="Great, I can test my private methods.  But should I?">
Running logic inside of private method suggests that the code should be refactored (maybe moved to a helper class or a service layer).  
The fact is that sometimes we need to test existing/legacy code or for a number of reasons the logic is in a private method and we need to test it.
</Callout>

The main probelm we have is that if we make an instance of a class we just don't have access to its private stuff from the outside.  
Luckily for us the <Prism language="csharp" inline="true" code={`System.Reflection`} /> namespace can help us get access to the private members and invoke them.

<br /><br />

The above solution is an extension method that  allows any object to call <Prism language="csharp" inline="true" code={`RunPrivateMethod()`} />.
<br /><br />

The magic happens mainly with <Prism language="csharp" inline="true" code={`BindingFlags.NonPublic | BindingFlags.Instance`} /> 
which allows us to use reflection to get the <Prism language="csharp" inline="true" code={`MethodInfo`} /> for the specified private method.

</PostSection>
<PostSection title="Usage">
The following usage example shows how this would be used in a unit test

<Prism language="csharp" code={
`public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }

    private string GetFullName() // <-- Private Method
    {
        return $"{FirstName} {LastName}";
    }

    private string GetFullNameWithNickname(string nickname) // <-- Private Method
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
    var name = test.RunPrivateMethod("GetFullName"); // <-- name of method
    var nickname = test.RunPrivateMethod("GetFullNameWithNickname", "what a guy!"); // <-- with args
    // ASSERT
    name.Should().Be("Ace Rimmer");
    nickname.Should().Be("Ace 'what a guy!' Rimmer");
}`} 
/>

</PostSection>
</PostContents>
