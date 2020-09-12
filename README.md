# InputDetector

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

##How to use it

It can be used in a form or a div. Forms must have a `name` tag and div must have `id` tag just to be recognized by the directive.

<div [inputsToSave]="inputsToSave" (onInputChanges)="onInputChanges($event)" [onFinish]="$onFinish">
</div>

- [inputsToSave]: its an array of input names, if you want to capture only a certain number of inputs in a div. If you want to capture all just do not use it.
- (onInputChanges): when you finish the directive will return to you all the inputs with their old and new value. You must pass a method to the directive.
- [onFinish]: this is an eventEmitter you pass to the directive just to tell it that you are done and you want it to return the inputs snapshot with old and new values. With this approach you can trigger this event wherever you want.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
