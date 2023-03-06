<script>
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
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
		await loginForm.validate();
		if ($loginForm.valid) {
			const data = new URLSearchParams();
			data.append('email', $email.value);
			data.append('password', $password.value);

			const response = await fetch(this.action, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: data.toString()
			});

			/** @type {import('@sveltejs/kit').ActionResult} */
			const result = deserialize(await response.text());

			if (result.type === 'success') {
				// re-run all `load` functions, following the successful update
				await invalidateAll();
			}
			applyAction(result);
		}
	}
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login Page" />
</svelte:head>

<div class="mb-4 mt-3 social-netowrks">
	<a href="/api/oauth2/authorize/google">Auth with Google</a>
	<br>
	<a href="/api/oauth2/authorize/facebook">Auth with Facebook (config a ajouté coté back)</a>
</div>

<form method="POST" on:submit|preventDefault={handleSubmit}>
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
	<button type="submit" disabled={!$loginForm.valid} class="btn btn-secondary">
		Se connecter
	</button>
</form>
