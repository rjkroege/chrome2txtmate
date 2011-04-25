A chrome extension to make links in Google code search to open files in markdown.
Do a search in [Google Code Search](http://codesearch.google.com/codesearch?vert=chromium), have
a local checkout of Chrome and click on a line number to open the appropriate file in
Textmate. Sort of spiffy. Doesn't always seem to work.

Overview of the Implementation
===

*  Find the appropriate UI elements in CS that should be outbound links
*  Replace the markup with [textmate url scheme links](http://blog.macromates.com/2007/the-textmate-url-scheme/)  
*  Have some markup to set the base.
*  Sign the thinger 
*  Push to the Chrome extension app store (sure...)

CS UI Element
===
The right value is `GOYGFLXBM-` I hope they don't change it. But they will. But
if I use this regularly, it won't be a problem 'cause I'll update it regularly.

Basic Chrome Extension
===
I have now built. Now, I must decide what comes next.

1. I want a configurator for the value to inject for the lookup. It would be a 
simple web page where we can enter the path containing src. (I might want to
think about generalizing.)

    i.  need a nice UX
    
    ii.  need a way to store per-machine state (cookie?)

2. I want to package it up as a crx file.

3. I want to put the crx file on drunkenpkt.

4. I want to share the crx with the chromium mailing list.

Other Notes
===
Might need to remove duplicate Chrome tabs: [duplicate tab
detector](https://github.com/mbhutton/chrome-duplicate-tab-detector)

