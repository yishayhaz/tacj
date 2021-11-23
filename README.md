# import

cdn links:
```html
<link rel="stylesheet" href="https://unpkg.com/tacj@1.0.2/tacj.css">
<script src="https://unpkg.com/tacj@1.0.2/tacj.js"></script>
```

or,

```javascript
npm i tacj

import tacj from 'tacj/tacj.js'
import 'tacj/tacj.css'
```

# First, SplitText

to start with any animation - you have to split your paragraph into lines, words and letters, <br/>
to do that use the `splitText()` function

the functions first argument will be the selector of the paragraph<br/>
(unique, im using `document.querySelector()`).

the second argument is not required,<br/>it's a callback function that will execute when the `splitText()` function is finished.

it will look something like this:

```javascript
tacj.splitText("p", cb);
```

<br/>
Now, You can make your own animations with your paragraph - or use my awesome built-in animations.

#### important notes

inside the paragraph, you cannot use any tags, signs or emojies.

**The formatting syntax:**<br/>
use `[my awesome paragraph..]` to make the text inside bold.<br/>
use `{my awesome paragraph..}` to make the text italic.</br>
use `_awesome paragraph.._` for underline.</br>

for every line, you should use `^`, **and no spaces around**.<br/>
like this: `my first line^my second line`.

and of course, you can do something like `{[_my paragraph is too cool_]}`

and if you want to use one of this signs - `[{_^` just put `~` before, works for `~` also.

# typing()

![typing-animation-gif](https://user-images.githubusercontent.com/50710472/139737136-937846ed-7e24-49a9-be43-4a1121d048bf.gif)

basic syntax:

```javascript
tacj.animate("p", { type: "typing" });
```

functions first argument is the selector, then settings, and a callback function (not required).
in settings, you can define a lot of variables,

```javascript
type: 'typing', // the type of the animation
time: 7, // how long the it will take the javascript to add the right classes to the html
duration: 0.5, // duration for the css animation
color: 'red', // any valid css color
transform: 'translateY(5px) rotate(-10deg)', // any valid transform value
textShadow: "2px 2px orange" // any valid text-shadow value
```

**the code for the gif above:**

```javascript
tacj.animate(
  "p",
  {
    type: "typing",
    time: 7,
    duration: 0.5,
    color: "red",
    transform: "translateY(5px) rotate(-10deg)",
    textShadow: "2px 2px orange",
  },
  () => alert("I will run when the animation is over!")
);
```

> Note: everything is not required except `type:`

# sendColors()

![sendColors-animation-gif (1)](https://user-images.githubusercontent.com/50710472/139739220-2e1b16a7-d91e-4aa8-88d2-c6545a8d7ffb.gif)

basic syntax:

```javascript
tacj.animate("p", { type: "sendColors" });
```

functions first argument is the selector, then settings, and a callback function (not required).
in settings, you can define a lot of variables,

```javascript
type: 'sendColors', // the type of the animation
time: 7, // how long the it will take the javascript to add the right classes to the html
duration: 0.5, // duration for the css animation
color: 'red', // any valid css color
// instead of settings one color, you set 3 for gradient effect
color_1: 'red', color_2: 'blue', color_3: 'green', // any valid color accepted
jump: -15, // the letters can take a little jump, set to negative value for it to go up
textShadow: "2px 2px orange" // any valid text-shadow value
```

the gif above on action:

```javascript
tacj.animate(
  "p",
  {
    type: "sendColors",
    time: 7,
    duration: 0.5,
    color: "red",
    jump: -5,
    color: "red",
    textShadow: "2px 2px orange",
  },
  () => console.log("I will run when the animation is over")
);
```

you can also do this:

```javascript
tacj.animate(
  "p",
  {
    type: "sendColors",
    time: 7,
    duration: 0.5,
    color_1: "red",
    color_2: "blue",
    color_3: "yellow",
    jump: -5,
    color: "red",
    textShadow: "2px 2px orange",
  },
  () => console.log("I will run when the animation is over")
);
```

> Note: everything is not required except `type:`

**For safer usage** put the animate function in the cb of splitText, like this:

```javascript
tacj.splitText("p", () => {
  tacj.animate("p", { type: "sendColors" });
});
```

But, you can call the animate() function any time.

# End

I created this library because every other option in pretty shitty, or costs you money (hm hhm gsap),
you can use my code however you want, its not that good anyways,

if you have anything to say / ask / approve / complain / demand,
Im on discord [Post Malone#0376](https://discord.com/channels/me/484834908758605824), or on twitter [@yishayhaz)](https://twitter.com/yishayhaz),

for now, lets party <br/>
![pepe-pepe-drinking](https://user-images.githubusercontent.com/50710472/139740244-6fd77ed6-1d8d-431d-a8da-8d0b22df2877.gif)
