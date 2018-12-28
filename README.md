# Testing with Jest and CI validation with Circle CI
Prototype code to show a basic implementacion of testing using jest and test integration with Circle CI plataform.

### Steps:
1. Create a nodejs project, you can you Test Driven Development or any other strategy
2. Use a testing suite to create the necesary tests that can ensure the unit or group of code its OK.
3. Run all the tests (locally first) and improve your code until all tests pass.
4. Add the folder .circleci to your project.
5. Inside .circleci add the Circle Ci configuration file config.yml
6. After that you should upload your project to Github.
7. Start your session in CircleCI with your actual Github account, select the actual project and follow the steps.
8. Build the project and wait until you see the status: SUCCESS(Check and fix things if the build Failed).
9. After getting Circle CI tests working (status: SUCCESS), go the Github, select actual project and settings, select Branches and add the rule (Require status checks to pass before merging) to the branch you are using(usually is master) and select circleci. You could even include administrator in this rule.
