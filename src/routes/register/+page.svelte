<script>
	import { messageErrors } from '$services/formValidation';
	import { field, form } from 'svelte-forms';
	import { between, email as emailValidator, required } from 'svelte-forms/validators';

	function checkPasswordsEquality() {
		return (value) => {
			return { valid: value === $password.value, name: 'confirm_password_does_not_match' };
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

	const registrationForm = form(email, password, confirmPassword);

	async function handleSubmit(event) {
		event.preventDefault();
		await registrationForm.validate();
		console.log($registrationForm);

		if ($registrationForm.valid) {
			console.log('Form is valid');
			return;
		}
		console.log('Form is NOT valid');
	}
</script>

<svelte:head>
	<title>Register</title>
	<meta name="description" content="Register Page" />
</svelte:head>

<a href="/api/oauth2/authorize/google">Auth with Google</a>
<a href="/api/oauth2/authorize/facebook">Auth with Facebook (config a ajouté coté back)</a>
<form on:submit={handleSubmit}>
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
				!$registrationForm.hasError('email.between')
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
