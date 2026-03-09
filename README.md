### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
Differences between getElementById, getElementsByClassName, and querySelector , querySelectorAll are-
getElementById selected by elements id and return element, it is not select multiple element.
getElementsByClassName selected by class and return HTML Collection, it's can select multiple elements.
querySelector selected by CSS selector and return element, it is not select multiple element.
querySelectorAll selected by CSS selector and return NodeList, it can select multiple elements and it's support forEach()



### 2. How do you create and insert a new element into the DOM?
Answer:
Create element using document.createElement(), then add innerText or innerHTML, then insert/append with father element using append(), appendChild().



### 3. What is Event Bubbling? And how does it work?
Answer:
An event that starts to happen on the child element and it propagates (bubbles up) to its parent and its parents, and it continues up the DOM tree until it reaches the document object. 
Suppose a div has a p, and p has a button. When the button is clicked, the button and its parent p and its parent div are also clicked at the same time.



### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using the event.target property.
Reduces the number of event listeners.
Improves performance and memory usage.
Uses event bubbling to capture events.
Ideal for dynamically added elements



### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() is stop the default action of an element that the browser normally performs.
stopPropagation() is stop the event from propagating (bubbling) to parent elements in the DOM tree.