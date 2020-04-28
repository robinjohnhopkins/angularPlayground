# Myanims

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

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

## change css to scss after project started

https://medium.com/@rageshchakkadath/migrate-your-existing-angular-6-application-from-css-to-scss-f555749d490e

new project - just create like this

```
ng new your_application --style=scss
```

### migrate:

```
ng config schematics.@schematics/angular:component.styleext scss
```
This would change the configuration in angular.json as follows.
```
"schematics": {
"@schematics/angular:component": {
"styleext": "scss"
}
```

### Step 2: Rename the css files
If you are using mac or linux, open the src folder from the terminal, and type the following command.

```
cd src
find . -name "*.css" -exec bash -c 'mv "$1" "${1%.css}".scss' - '{}' \;
```

### Step 3: Change all the references
There are files where you need to change where these css files are included. This would typically include:
styleUrls field in the @Component decorator in component.ts files
If you reference bootstrap or font-awesome, you can change the files that import their css files into the .scss alternatives.
In your angular.json file, there may be references to your style.css files which you must change to .scss as we have renamed it.


## anims


