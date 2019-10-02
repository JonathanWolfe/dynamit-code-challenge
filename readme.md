# Dynamit Code Challenge

Took the mockup provided over at
https://github.com/Dynamit/front-end-code-day/tree/master/hotdog and made it into a
responsive HTML template.

Since the provided mockup didn't include some info like hover styles and adjustments for
various breakpoints, I just made up them up. There are 2 breakpoints: zero up to 768
pixels gets the "small" version that has less header images, smaller paddings, a multi-row
navigation, and the special info sections stack on top of each other rather than sit
side-by-side; for 769 pixels and up, they get the design as provided;

I think I might have technically spent more time setting up the repo and tools than I did
actually making the page, but not using `stylelint` and `postcss` is a bigger sin than the
initial setup costs.

# Usage

- `npm run postcss`: Process css, adding any prefixes as needed
- `npm run stylelint`: Lint the output and also sort the css properties into a nice order
- `npm run server`: Start a server and serve up the index page
