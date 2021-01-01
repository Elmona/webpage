
# Webpage
This is a static site generator. The frameworkis are Gatsby, Contentful, Netlifly. The main concept is that the site will have outstanding performance according to WCAG and automatic analysis tools out of the box. You can set up the template in minutes and start coding or just use it as a template sort of like WordPress.

## Get Started
// TODO

## Routing
Because Contentful has a flat information structure routing is kind of hard. If you google the problem you find a lot of blogs. And when you start thinking about adding more routes it is getting hard.

A lot of CMS has and tree structure of the site and it works kinda well. So I implemented this with contentful. That will make it easy to create advanced routings. And easily add and manage your web content.

## Continuous delivery
A pretty fun way to work is continuous delivery. For every change you almost instantly have it delivered in production. Hotfixes are not a problem.

## Updating Content
When you press the publish button or commit some new code and push it to the repository you can add webhooks and send a signal to build a new artifact. The artifact is then built with integrated tests, if something will not build or some test is wrong the content will not be published.

If every test succeed you will have an updated site with new content.

## Cost
All the code I write is open source. My goal was to get hosting and build times almost for free, there is no hidden license cost but you will have to pay for services.

You will be surprised about how many options there are out there. And today you can get a lot for cheap. I encourage you to modify the options to get it even better.

## Performance
In Sweden, we have a law that ensures that web content is accessible. That made me think really hard about how to get there. 