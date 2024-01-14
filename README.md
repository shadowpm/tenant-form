# CASE STUDY: Tenant form

In this project, you can find a simple form, that takes the tenant's Name, Email, Phone number, and average salary, and displays the entered data in the end.
What can be expected while testing the app, is to see each question in every step, with a very simple design.

After the user enters their answer for each step, they can go to the next step by pressing the "Next" button, or they can go to the previous step by clicking the back arrow.
If you go back a step while filling out the form, you can still see your entered answer in the previous text box.

All the fields are required and have a corresponding validation error, not letting the user pass through unless they have entered the data.
In the email field, there is a simple regex checking the email format validity. Also in the phone number field, only numbers can be entered.

There is a simple progress bar available at the bottom of each step.
The simple design is responsive for all available sizes.

## Technical decisions

Considering that this peoject is a simple form, I made my decisions keeping the project simple and neat, but also scalable.

For the project overall structure, each component(page) has its own folder (containing the style file, and later if wanted test file).

Then there is a ui folder which contains the ui element components, being reused throughout the pages.

For the styling, I used material-ui as it is free to use, and made my styling decisions easier for the look of each element. and since the app  design is super simple and the css used is very minimal, I just made a css file where ever needed for each component folder.

For state management, I went with a simple costume hook, using react useContext and useReducer, making the app state accesible throughout the whole project.

I also used prettier to keep the code clean and the syntax uniform.

## Setting up the project

To run this project, make sure you have Node.js and npm installed on your machine. You can download them from https://nodejs.org/.

At the time this project is compatible with node v20.5.1, and npm version 9.8.0>, so it is recommended to have the same versions installed to avoid further complications.

After having this requirements in place, you may run `npm install`, and then you can start te project by running `npm start`.
Now feel free to use any of the implemented scripts that you can find further in this documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run format`

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
By running this command, you will format the code so that it's all the way syntactically consistant.
