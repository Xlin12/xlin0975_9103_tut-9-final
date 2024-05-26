# xlin0975_9103_tut-9-final
final assessment
# Instructions on How to Interact with the Work:

## Double-Click to Reset:
- Double-click anywhere on the canvas to clear all the elements.
- This action will trigger the gradual reappearance of all the components (rectangles, semi-circles, and circles).




# Details of your individual approach to animating the group code.
## One of the following methods:
- I choose to drive your individual code: User Input:Incorporate mouse or keyboard inputs for animation.
 
## Reveals only some components at a time:
- After double-clicking, rectangles will reappear first, followed by semi-circles, and finally circles.
- The elements will gradually reappear, creating a visual effect of elements fading back into the canvas.

## Gradual Appearance Animation
- GIF Reference: Loading animations where elements appear one after another, such as a series of dots or shapes gradually coming into view.
![Circle animation](<readmelmages/circle animation.png>)
![Transitions and Animations of circle and rectangle ](<readmelmages/Transitions and Animations.png>)
- Influence: This concept inspired the staged reappearance of rectangles, semi-circles, and circles after the double-click event.

## A short technical explanation
- Double-Click Event Listener:
- - The canvas.addEventListener('dblclick', handleDoubleClick); sets up an event listener that triggers the handleDoubleClick function on a double-click.

- Clear Canvas:
- - The clearCanvas function empties the arrays storing the rectangles, semi-circles, and circles, effectively removing them from the canvas.

- Initiate Appearance:
- - The initiateAppearance function uses setTimeout to stagger the reappearance of each type of component.

- Gradual Reappearance Functions:
- - Functions like appearRectangles, appearSemiCircles, and appearCircles repopulate the respective arrays with their elements.

- References:
- - P5.js Library: Utilized for rendering and animating graphics on the canvas.<https://p5js.org/learn/interactivity.html>.
- - JavaScript Event Handling: For handling double-click events.<https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>.