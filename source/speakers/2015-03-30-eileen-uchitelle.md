---
title: Eileen Uchitelle
meta: How to performance
time: 10:45AM
bio: Eileen M. Uchitelle spends her days working on performance and security at Basecamp; or as you probably know it better, the place Ruby on Rails was born. She accidentally started contributing to open source after giving a talk on some problems with Active Record. Aaron Patterson was there and told her "fix it yourself" (not really). When she's not making Rails better by improving Active Record and speeding up integration tests, Eileen enjoys craft beer and hiking in the Hudson Valley with her husband and their dog.
author: GORUCO
image: /assets/images/speakers/2015/eileen_uchitelle_16-9.jpg
twitter: eileencodes
location: Kingston, NY
order: 2
year: 2015
---

###Talk Synopsis
Google Analytics, Like Buttons, Twitter Widgets, Olark chat boxes; all examples of third party JavaScript elements that are embedded by users in their websites.

Testing third party code once embedded in a page, is often difficult and cumbersome.  Verifying those elements are working properly (or even more basically, are not breaking the page) is difficult to get right.  Clients will often not give you access to their page, or allow you to debug 'live', leaving scope for bugs to creep in.

Complicating matters further, other JavaScripts are often competing to execute on the page (sometimes erroring out), and then you have to make this all work cross-browser!

####So what is the right approach to take?

I will show you how using a Ruby script to generate and minify my JavaScript, and a Node.js proxy server to intercept responses, I am able to safely inject my JavaScript into the page.

In addition to this, I will show you ways to use Rspec/Capybara to come run regression tests that utilize the proxy, and test my JavaScript while it is **live** embedded on client pages.


###Biography
Nate is a software developer lead at Magnetic, an advertising firm in New York that focuses on Search Retargeting.

Formerly, he has worked at OMGPOP, Lehman Brothers, and his own startup Robot Recruit.

He has a dog named butters that accompanies him wherever he goes.

blog: [dewful.com](http://dewful.com/) (not updated too often)


