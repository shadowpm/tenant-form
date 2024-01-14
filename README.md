## CASE STUDY: Tenant form

In this project, you can find a simple form, that takes the tenant's Name, Email, Phone number, and average salary, and displays the entered data in the end.
What can be expected while testing the app, is to see each question in every step, with a very simple design.
After the user enters their answer for each step, they can go to the next step by pressing the "Next" button, or they can go to the previous step by clicking the back arrow.
If you go back a step while filling out the form, you can still see your entered answer in the previous text box.
All the fields are required and have a corresponding validation error, not letting the user pass through unless they have entered the data.
In the email field, there is a simple regex checking the email format validity. Also in the phone number field, only numbers can be entered.
There is a simple progress bar available at the bottom of each step.
The simple design is responsive for all available sizes.

# Setting up the project

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

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
