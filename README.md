# Running Test on Ag-Grid using WebdriverIO

Repo for UI Automaton using WebdriverIO with Mocha and Chai.
Web Automation Testing with Mocha and Chai, WebdriverIO V6 using Page Object Model

***

## Features

- [WebdriverIO V6](https://v6.webdriver.io/)
- [Page Object Model](https://webdriver.io/docs/pageobjects/)
- [ESLint](https://eslint.org/)
- [HTML Reporter](https://webdriver.io/docs/rpii-wdio-html-reporter/)
- [TypeScript](https://webdriver.io/docs/typescript/)

****

## Quick start

Choose one of the following options:

1. (Optional) Install nvm in your machine.
    - [Install nvm on Windows](https://codeburst.io/nvm-for-windows-how-to-install-and-use-13b7a4209791)
    - [Install nvm on Mac](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

2. Install nodeJs using nvm. You can also install nodeJS without using nvm. Here are some references if you are installing not using nvm.
    - [Install nodeJs on Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
    - [Install nodeJs on Mac](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm)

3. Install your favorite IDE. I used [VS Code](https://code.visualstudio.com/download) for this.

4. Clone the git repo — `https://github.com/ianoroceo/ag-grid`.

5. Create `.env` file and add

    ```console
    URL=https://www.ag-grid.com/example.php
    ```

6. For Running your tests, Please refer to the npm script in package.json

| NPM Script  | Description       |
|-------------|-------------------|
| `npm run test` | Runs all of the tests on your Machine in Chrome |

***

# Exam Instructions

1. Follow the Quick start instructions

2. Create your branch by following the format (First and Last name Initial-AscendumExam). For Example: `IO-AscendumExam`

3. Write the tests in [grid.test.ts](tests/grid.test.ts) with the following format

    ```javascript
    it("Should <what is being validated>", () => {
    })
    ```

    For example

    ```javascript
    it("Should display the grids", () => {
    });
    ```

    > Please be descriptive enough on the tests that is being validated

4. Add Notes on your tests explaining your thought process on creating a function / method. If you use forEach or for loop, explain why you decided to use it (if applicable). Please see example in [grid.test.ts](tests/grid.test.ts)

5. Add descriptive commit messages

6. Once you are finished, create a PR with the Subject (First and Last name Initial-AscendumExam Final). For Example: `IO-AscendumExam Final` and add the following

    - Add @ianoroceo as Reviewer
    - Assign the PR to yourself
    - Add Label `DO NOT MERGE`
    - Add a descriptive comment description for the PR
    - If the PR template is not loaded when you create a PR, please add this on your PR Description

        ```console
        #### Summary

        [A brief description of what this pull request does.]

        #### Checklist

        [Place an x (no spaces) in all applicable fields. Please remove unrelated fields.]

        - [ ] Bug fix (non-breaking change which fixes an issue)
        - [ ] New feature (non-breaking change which adds functionality)
        - [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
        - [ ] Is the code properly formatted using EsLint?
        - [ ] Have tested it in integration
        - [ ] Has ReadMe.md been updated, if required?
        ```

    > Reminder: ONLY create a PR if you are sure you have completed the Exam. Please see [sample PR](https://github.com/ianoroceo/ag-grid/pull/1) as reference

***

## Tests to be built

> Please thoroughly follow instructions. Good luck!

1. Create a Test to Validate Primary Column Headers have the following Text

    ```console
    Participant
    Game of Choice
    Performance
    Monthly Breakdown
    ```

2. Create a Test to Validate that the Primary Column Headers are available in the Columns Sidebar options

3. Create a test to grab the Secondary Column options and validate that these headers are available in the Columns Sidebar options

4. Create a Test to Validate that Filtering Name will return result. The following names to be used are

    ```console
    Gil
    Tony
    Isabella
    Poppy
    ```

5. Create a Test to Validate that Winnings in October is less than 5000

## Bonus Round
> You don't have to do this but it will give you extra points for the exam. Please create a separate test file and name it `grid.bonus.test.ts`

1. Upgrade the Test Automation from WebdriverIO v6 to v7.
2. After upgrading, create a Test where Rating is `2 and 4 Starts` ONLY and only show the following columns

    ```console
    Name
    Country
    Game Name
    Rating
    Jan to May Winnings
    ```

3. Following item #1, after filter by Rating and selecting the columns, create a test to change the data size to `100000 Rows, 22 Cols`, change the Theme to Balham and `Filter any column` by `Kobe`

***

# FAQ

**Question:** What is Primary and Secondary Column Headers?

**Answer:** Please see image below. Primary Column Headers are in Red while the Secondary Column Headers are in Green

![ag-grid](./docs/ag-grid.png)
