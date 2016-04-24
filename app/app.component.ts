import {Component, FormBuilder} from 'angular2/core';
import {LoginForm} from './login/login-form.component'

@Component({
    selector: 'app-view',
    templateUrl: '../views/app-view.html',
    directives: [LoginForm]
})
export class AppComponent { 
}