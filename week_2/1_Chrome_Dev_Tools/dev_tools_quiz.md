#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
      The elements tab, as well as right clicking on the page itself to show element.  Allows for the real time editing of both HTML and CSS.  It does so by showing the HTML source and CSS affecting the element to the right of it.

  * Javascript Debugging
      This is done in the sources tab.  As far as I can tell it basically shows the Javascript inside a browser compiler.

  * Performance Optimization 
      This is done in the Network tab which demonstrates each request to the server along with its size, time, and so on.  If you refresh you can see any changes made to the code/images/sources via the network tab
* What's the quick key for your OS to spawn the Dev Tools inspector?
alt+command+i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
      The colors hex code appears to be #0b0f11.  Which is a very dark blue.

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
I believe because the color is inherited from  html, body. In order to change it, we would have to change the color from html body, so that it inherits the color change.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  The image of times square comes in at 316 KB.

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    Using the network tab, you can see how everything on the page is loaded when accesing the website.  I sort by size and the image of times square is 316kb with url: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?
  reduce blocking resources is the easiest, with one step to make it happen.

  How many kilobytes of data can be eliminated?
For that specific step it doesn't offer a kb elimination estimate.  For the other steps there are varying degrees; as and example, optimizing images would eliminate an estimated 885.9Kib of data.