A chrome extension to make links in Google code search to open files in markdown.

Overview of the task
===

*  Find the appropriate UI elements in CS that should be outbound links
*  Replace the markup with textmate url scheme links  
*  Have some markup to set the base.
*  Sign the thinger 
*  Push to the Chrome extension app store

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


Aside
===
An editor inline as a Chrome extension would permit editing code with respect to the 
contents of the code search interface. The code search interface gives the IDE 
interface with navigation. Then click on a file to edit it. With high-lights.

Obviously, we also would need a terminal window. The terminal would link-ify everything.
And provide a rich tab-based auto-completed with some kind of semantic facility.
And wily-style cut and paste.  One file/tab makes things easier: for example, I can
use native undo.

What about projects that don't have a google CS backend?  We could add a project navigator
to the go backend. (The backend knows how to host wily commands, speaks 9p for the plan9
types, etc.)

This scheme means that the existing work is possibly usable sooner. In fact, the client
side is almost entirely done in this vision. I should flesh it out. I can use divvy for
window management. Or just have lots of tabs. And the PM summary tab: a popup window that
provides an overview of the current CL. (Can prototype this in TextMate's web view?)

Other Notes
===
Might need to remove duplicate Chrome tabs: [duplicate tab
detector](https://github.com/mbhutton/chrome-duplicate-tab-detector)




