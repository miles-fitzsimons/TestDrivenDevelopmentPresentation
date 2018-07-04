===== intro.html =====

Open with story about nervousness

Hi, I'm Miles. I'm a developer in Sales and Purchases and I like test-driven development

Audience interaction required - talk won't work otherwise. I doubt there'll be time for questions at the end, so please ask them during.

===== About Slide =====
Start with:
Traditionally, the development cycle often looks like this: You have some requirements, so you write some application logic and then if you have time or can be bothered you write some tests. Then you open a pull request, have the code reviewed and merged and released some time in the future.
TDD is very similar, but it has one minor but very important difference: You write the tests first. You write a test for a method or a class that may not even exist. And then you see that test fail. In some languages, the code may not even compile, so this is not a graceful failure. You can then create the method or class in order to see the test fail gracefully. Great. Now you are ready to start implementing the logic.

== Pros ==

- Gives confidence - mainline development (no PRs) and release to prod several times a day. Failures must be addressed immediately
- Devs become QAs and QAs become devs - cross functional teams
- improves quality
- Self documenting
- Finds defects earlier -> leads to less defects
  == Cons ==

- requires discipline
- Takes longer. Buuuuuutttttttt slide 11 of dehringer

https://www.slideshare.net/dehringer/test-driven-development-5785229
The three laws of TDD: slide 8

Intro
About
Requirements
Red light / green light / refactor

Lynda.com video
https://www.youtube.com/watch?v=QCif_-r8eK4

- usual approach is to 1) write some code, 2) write some tests to check and verify code
- TDD asks you to write the test first. Write the tests first, then the application logic.
- Can't test a method I haven't written - but you can. mabe won't compile, maybe will. Might run, but will say can't find this method or class.
- Before we write any code, we write a failing test. Only when it fails do we write application logic to pass the test. And we write the minimum necessary code to pass the test.
- This helps with development because we don't need to juggle in our minds all the things the code might need to do today and tomorrow as well as all of its edge cases.
- We get focus and clarity - do nothing more than pass this one test.
- Figure it out first, let it drive what you write.

## Client requirements

Maybe put empty string returns 0 as an edge case
returns 1 number
returns sum of 2 numbers
also works for \n
returns sum of unknown numbers

https://www.youtube.com/watch?v=y6yJuPJK67w
at circa 8:00 for studies on drops in bugs

This is just the beginning - there's still mocking and dependency injection
