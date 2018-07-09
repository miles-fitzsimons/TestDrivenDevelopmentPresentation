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

https://www.youtube.com/watch?v=y6yJuPJK67w
at circa 8:00 for studies on drops in bugs

From Video:
Doing unit testing is not the same thing as TDD
And we will run those tests, and the first time we run them they should fail
Not just once or twice, but all the time.
Maybe won't compile, or maybe will say I can't find this method
Before we write any new code, we write a failing test:
We want the test to fail, because if it doesn't we have some other problem going on. Maybe we're not actually testing what we think we're testing. This is the fundamental basis of TDD
We first write a failing test, and only after it fails do we write the application logic that passes that test.
And we write the minimum necessary code to just pass that test.
One thing it removes is needing to juggle in our heads about what it needs to do today and tomorrow. Instead, just pass this one small test. This can influence design and implementation.

This is a subtle change in priority but it has dramatic impact on the way you appraoch and write code.

So why do it?

In 2008, Microsoft, IBM and the North Carolina State University colloborated on research into TDD and published a paper entitled: "Realizing quality improvement through test driven development". In this paper, they contend that, and I quote, "The results of the case studies indicate that the pre-release defect density of the four products decreased between 40% and 90% relative to similar projects that did not use the TDD practice".

** about.html **

As demonstrated by Microsoft et al, TDD leads to fewer bugs and therefore higher code quality. This leads to higher confidence in your code base, which in turn leads to fast release cycles and a high release frequency. My team practices mainline development. This means that when we are satisfied with our code, we push directly to upstream master. Every time. We do not have pull requests and we do not have traditional code review. However, we have confidence. We often work in pairs or in a group, so code is reviewed in that way. Our devs are becoming QAs and our QAs are becoming devs. Quality is everybody's responsibility, not just QAs. Once we have pushed to upstream master, we hit a button in TeamCity and our code is in production within about 6 minutes. We release several times a day, every day. It is liberating. But accidents do happen. And we address mistakes immediately. If a build is failing, we stop dev work and fix it.

TDD encourages elegance. We are going to do a live demo soon, and you will see how this is realised. Once you have made your failing test pass, you have the opportunity to refactor your code. And because your code is throughly tested, you will know the second that your refactor has broken it.

There are of course some drawbacks to TDD. The most common argument is that it takes more time to practice TDD. Quoting the same paper from before, "Subjectively, the teams experienced a 15–35% increase in initial development time after adopting TDD". Huh, that's not good. However, I argue that this is a sound investment. From that same paper "this increase in development time is offset by the reduced maintenance costs due to the improvement in quality". And some blog I found on Medium states fixing a bug in production costs 15x more than fixing a bug at implementation time. But I'd take that with a grain of salt.

An argument I came across a lot in researching this talk is that TDD requires discipline. But I think that is a rubbish argument. Being a developer requires discipline. Getting out of bed requires discipline. We love pushing ourselves and learning new things, it's in our blood. Sometimes in my team I feel like I'm nagging. "Why are you writing code? Did you write a test?". And it can be a bit draining. But it's worth it. The joy of seeing a gracefully failing test is unparalled. That means you now get to do the fun bit - make it pass.

There are many more pros and many more cons...There is a wealth of information and debate on the internet and I encourage you to look into it.

But anyway, I'm bored of lecturing. Let's get coding.

So we have a client. They know a little bit about programming, but not much. They know what a string is and they know what an int is, but that's about it. They have hired us because they need to interface with a legacy system. The legacy system gives them a string of comma-delimited ints, and they need to get the sum of those ints.

** clientRequirements.html **

Here are our requirements. First... second... third...

Mainline development - confidence - quality - frequent release.

TODO:
Figure out how to change tabs in VSCode w keyboard
research mainline development
make green light same colour as dos code
write noop snippet

From practice:
Lose newline requirements
Make the int, string thing really overt.
Action points at end: Thank yall. Start doing it, on any codebase. Find me on Slack if you want any help.
eg: on bullets
make terminal bigger
Hover mouse on termianl when talking about it
