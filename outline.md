https://learn-2.galvanize.com/cohorts/4454/blocks/1882/content_files/lessons/js-fundamentals3-todo.md

1.	Create repo
2.	Add HTML from above instructions
3.	NPM install the live-server
a.	Confirm working
4.	Add some CSS
5.	Add basic console.log js

6.	Requirements
a.	View all of the to-do tasks
b.	Add a to-do to the list of to-do tasks
c.	Mark a task as completed by crossing it out on click
d.	Remove to-do tasks by removing those elements from the DOM
e.	Be aesthetically pleasing (styled)

7.	Stretch Goals
a.	Add instructions and info to the readme.md

b.	Make the list persist through a refresh of the page by using local storage to store to-do's

c.	Archive completed tasks in a viewable location on screen

8.	Recommended Flow
a.	Start by adding the HTML code. This is like the skeleton of the page, so add a title, list, form, input, buttons, etc...

Non-Functional Mockup
    (UL)Task List Container{
        (LI)Task Container{
            (Span) Single textline
            (stretch) Space for delete button
        }
    }

    (div)Creation Area {
        (input)Text Entry
        (button)Create Button
    }
placeholder="123-45-678"
<!--This is a comment. Comments are not displayed in the browser-->

b.	Add JS
i.	Create a variable that will hold your to-do list items.
ii.	Add a function that takes in a string as input and adds it to the to-do list.
iii.	Add an event handler to populate an HTML element with your to-do list when the user clicks the appropriate button.
iv.	Etc... break down the big problems into baby steps and solve them systematically. Test as you go.
c.	With the main functionality in place, style your HTML elements using CSS. Make use of the developer console for testing styling.
d.	Finished with the main objectives? Continue on to the stretch goals to make your application even better.

9.	JS Code Outlines
a.	Recurring – COMMIT at every non-crash stage/milestone
b.	Object of Objects for to-do management?
Storage:
	Id: object{
		String task
		Bool completed

c.	Have a starting “to-do” set. This functions as tutorialization and demos styling
i.	One task already present
ii.	One task that is already marked complete
d.	Have creation/completion as separate functions that can be called programmatically, instead of hard-bound to the explicit listener
i.	Have tutorials be spawned and completed on load programmatically?
e.	Event handler to button for spawn
f.	Event handler to tasks (programmatically assigned on spawn) for crossout
g.	Removal via button on task

10.	HTML Outline
