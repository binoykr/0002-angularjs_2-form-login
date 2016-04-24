import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, Control} from 'angular2/common';
import {Login} from './login';

@Component({
    selector: 'login-form',
    templateUrl: '../../views/login/login.html',
    directives: [FORM_DIRECTIVES]
})
export class LoginForm {
	loginForm: ControlGroup;
	

	username: Control;
	password: Control;

	submitted = false;
	model = new Login('');

	constructor(fb: FormBuilder) {
		this.username = new Control('', Validators.required);
		this.password = new Control('', Validators.required);

		this.loginForm = fb.group({
			'username':  this.username,
			'password':  this.password
		});
	}

	onSubmit(): void {
		this.submitted = true;
		this.model = new Login(this.loginForm.value.username);
	}
}