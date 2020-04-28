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

matey suggested this:
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

above was close but actually need was:
```
  "projects": {
    "myanims": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
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

The first part of the tutorial involved playing with simple animations.

src/app/app.component.ts
```
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myanims'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myanims');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('myanims app is running!');
  });
});
```

src/app/app.component.html
```
...
<div class="mycontent" role="main">
  <div class="jumbotron" style="background-color: #fff; height: calc(9vh);">
    <h1>Angular Bootstrap Demo</h1>
    <p class="lead">
      {{ leadLine }}
    </p>

  </div>

  <div  class="open-close-container">
    <button [@openClose]="isOpen ? 'open' : 'closed'" class="btn btn-lg btn-primary" (click)="toggle()">Click me!</button>
    <button [@removeMe]="btnState" class="btn btn-lg btn-primary" (click)="toggle()">Click me!</button>
  </div>
  <div>
    <ul>
      <li *ngFor="let item of items" [@myTrigger]='state' 
      (@myTrigger.start)="animStart($event)" (@myTrigger.done)="animComplete($event)"  >
        {{ item }}        
      </li>
    </ul>
  </div>

  <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>
...
```

src/app/app.component.scss
```
ul {
    list-style-type: none;
    margin: 30px 30px 0 0;
    padding: 0;
}
li {
    padding: 15px;
    width: 100%;
    background: #f1f1f1;
    margin-bottom: 2px;
    font-weight: bold;
}
.mycontent {
    width: 90%;
    padding: 90px;
}
```

## route

ng generate component Howto

ng generate component Examples


npm i foundation-sites --save

npm WARN bootstrap@4.4.1 requires a peer of popper.js@^1.16.0 but none is installed. You must install peer dependencies yourself.
npm WARN sass-loader@8.0.2 requires a peer of node-sass@^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN sass-loader@8.0.2 requires a peer of fibers@>= 3.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN webpack-subresource-integrity@1.4.0 requires a peer of html-webpack-plugin@^2.21.0 || ~3 || >=4.0.0-alpha.2 <5 but none is installed. You must install peer dependencies yourself.
npm WARN foundation-sites@6.6.3 requires a peer of what-input@>=4.1.0 but none is installed. You must install peer dependencies yourself.

## start point

git tag 'before.animations'

added input area getting bigger on focus,
an animation for adding item
an animation for deleting an item

git tag 'add.delete.input.focus.animations'

git tag 'add.tab.change.animations'
