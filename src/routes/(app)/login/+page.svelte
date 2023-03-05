<script>
	import { messageErrors } from '$services/formValidation';
	import { field, form } from 'svelte-forms';
	import { between, email as emailValidator, required } from 'svelte-forms/validators';

	const email = field('email', '', [required(), emailValidator()], {
		stopAtFirstError: true
	});
	const password = field('password', '', [required(), between(8, 64)], {
		stopAtFirstError: true
	});

	const loginForm = form(email, password);

	async function handleSubmit(event) {
		event.preventDefault();
		await loginForm.validate();
		console.log($loginForm);

		if ($loginForm.valid) {
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
				{$loginForm.hasError('email.required') ? messageErrors.email.required : ''}
				{$loginForm.hasError('email.not_an_email') ? messageErrors.email.not_an_email : ''}
				{!$loginForm.hasError('email.required') && !$loginForm.hasError('email.not_an_email')
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
				{$loginForm.hasError('password.required') ? messageErrors.password.required : ''}
				{$loginForm.hasError('password.between') ? messageErrors.password.between : ''}
				{!$loginForm.hasError('password.required') && !$loginForm.hasError('email.between')
					? 'Mot de passe'
					: ''}
			</label>
		</div>
	</div>
	<button type="submit" disabled={!$loginForm.valid} class="btn btn-secondary"> Se connecter </button>
</form>
