<script>
	import { apiClient } from '$services/apiClient';
	import { messageErrors } from '$services/formValidation';
	import { field, form } from 'svelte-forms';
	import { between, email as emailValidator, required } from 'svelte-forms/validators';

	function checkPasswordsEquality() {
		return (value) => {
			return { valid: value === $password.value, name: 'confirm_password_does_not_match' };
		};
	}

	function alpha() {
		const pattern = /^[a-zA-Z]+$/;

		return (value) => {
			if (value === null || value === undefined) {
				return { valid: false, name: 'alpha' };
			}
			return { valid: pattern.test(value), name: 'alpha' };
		};
	}

	const email = field('email', '', [required(), emailValidator()], {
		stopAtFirstError: true
	});
	const password = field('password', '', [required(), between(8, 64)], {
		stopAtFirstError: true
	});
	const confirmPassword = field('confirmPassword', '', [required(), checkPasswordsEquality()], {
		stopAtFirstError: true
	});
	const firstName = field('firstName', '', [required(), alpha(), between(3, 50)], {
		stopAtFirstError: true
	});
	const lastName = field('lastName', '', [required(), alpha(), between(3, 50)], {
		stopAtFirstError: true
	});

	const registrationForm = form(email, password, confirmPassword, firstName, lastName);

	async function handleSubmit(event) {
		event.preventDefault();
		await registrationForm.validate();
		if ($registrationForm.valid) {
			const formData = {
				email: $email.value,
				password: $password.value,
				confirmPassword: $confirmPassword.value,
				firstName: $firstName.value,
				lastName: $lastName.value
			};
			await apiClient.postWithRedirect('/api/auth/register', {
				payload: formData
			});
			window.location.href = '/login?registration=success';
		}
	}
</script>

<svelte:head>
	<title>Register</title>
	<meta name="description" content="Register Page" />
</svelte:head>

<div class="mb-4 mt-3 social-netowrks">
	<a href="/api/oauth2/authorize/google">Auth with Google</a>
	<br>
	<a href="/api/oauth2/authorize/facebook">Auth with Facebook (config a ajouté coté back)</a>
</div>

<form on:submit={handleSubmit}>
	<div class="mb-3">
		<div class="form-floating">
			<input
				type="text"
				class="form-control {!$firstName.valid && 'is-invalid'}"
				id="floatingFirstName"
				placeholder="Prénom"
				bind:value={$firstName.value}
			/>
			<label class={!$firstName.valid && 'text-danger'} for="floatingFirstName">
				{$registrationForm.hasError('firstName.required') ? messageErrors.firstName.required : ''}
				{$registrationForm.hasError('firstName.alpha') ? messageErrors.firstName.alpha : ''}
				{$registrationForm.hasError('firstName.between') ? messageErrors.firstName.between : ''}
				{!$registrationForm.hasError('firstName.required') &&
				!$registrationForm.hasError('firstName.alpha') &&
				!$registrationForm.hasError('firstName.between')
					? 'Prénom'
					: ''}
			</label>
		</div>
	</div>
	<div class="mb-3">
		<div class="form-floating">
			<input
				type="text"
				class="form-control {!$lastName.valid && 'is-invalid'}"
				id="floatingLastName"
				placeholder="Nom"
				bind:value={$lastName.value}
			/>
			<label class={!$lastName.valid && 'text-danger'} for="floatingLastName">
				{$registrationForm.hasError('lastName.required') ? messageErrors.lastName.required : ''}
				{$registrationForm.hasError('lastName.alpha') ? messageErrors.lastName.alpha : ''}
				{$registrationForm.hasError('lastName.between') ? messageErrors.lastName.between : ''}
				{!$registrationForm.hasError('lastName.required') &&
				!$registrationForm.hasError('lastName.alpha') &&
				!$registrationForm.hasError('lastName.between')
					? 'Nom'
					: ''}
			</label>
		</div>
	</div>
	<div class="mb-3">
		<div class="form-floating">
			<input
				type="email"
				class="form-control {!$email.valid && 'is-invalid'}"
				id="floatingEmail"
				placeholder="mail@exemple.fr"
				bind:value={$email.value}
			/>
			<label class={!$email.valid && 'text-danger'} for="floatingEmail">
				{$registrationForm.hasError('email.required') ? messageErrors.email.required : ''}
				{$registrationForm.hasError('email.not_an_email') ? messageErrors.email.not_an_email : ''}
				{!$registrationForm.hasError('email.required') &&
				!$registrationForm.hasError('email.not_an_email')
					? 'E-mail'
					: ''}
			</label>
		</div>
	</div>

	<div class="mb-3">
		<div class="form-floating">
			<input
				type="password"
				class="form-control {!$password.valid && 'is-invalid'}"
				id="floatingPassword"
				placeholder="Mot de passe"
				bind:value={$password.value}
			/>
			<label class={!$password.valid && 'text-danger'} for="floatingPassword">
				{$registrationForm.hasError('password.required') ? messageErrors.password.required : ''}
				{$registrationForm.hasError('password.between') ? messageErrors.password.between : ''}
				{!$registrationForm.hasError('password.required') &&
				!$registrationForm.hasError('password.between')
					? 'Mot de passe'
					: ''}
			</label>
		</div>
	</div>

	<div class="mb-3">
		<div class="form-floating">
			<input
				type="password"
				class="form-control {!$confirmPassword.valid && 'is-invalid'}"
				id="floatingConfirmPassword"
				placeholder="Confirmation du mot de passe"
				bind:value={$confirmPassword.value}
			/>
			<label class={!$confirmPassword.valid && 'text-danger'} for="floatingConfirmPassword">
				{$registrationForm.hasError('confirmPassword.required')
					? messageErrors.confirmPassword.required
					: ''}
				{$registrationForm.hasError('confirmPassword.confirm_password_does_not_match')
					? messageErrors.confirmPassword.confirm_password_does_not_match
					: ''}
				{!$registrationForm.hasError('confirmPassword.required') &&
				!$registrationForm.hasError('confirmPassword.confirm_password_does_not_match')
					? 'Confirmation du mot de passe'
					: ''}
			</label>
		</div>
	</div>
	<button type="submit" disabled={!$registrationForm.valid} class="btn btn-secondary">
		Créer nouveau compte
	</button>
</form>
