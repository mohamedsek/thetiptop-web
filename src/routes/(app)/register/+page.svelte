<script>
	import { apiClient } from '$services/apiClient';
	import { messageErrors } from '$services/formValidation';
	import { field, form } from 'svelte-forms';
	import { between, email as emailValidator, required } from 'svelte-forms/validators';
	import AuthSocialNetworks from '$lib/components/app/auth/AuthSocialNetworks.svelte';
	// /home/user/work/new/thetiptop-web/src/lib/components/app/auth/AuthSocialNetworks.svelte

	let backValidationErrors = {};

	function removeBackError(fieldName) {
		backValidationErrors[fieldName] = '';
	}

	function checkPasswordsEquality() {
		return (value) => {
			return { valid: value === $password.value, name: 'confirm_password_does_not_match' };
		};
	}

	function checked() {
		return (value) => {
			return { valid: !!value, name: 'checked' };
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

	const acceptRgpd = field('acceptRgpd', false, [checked()], {
		stopAtFirstError: true
	});

	const acceptNewsLetter = field('acceptNewsLetter', false, [], {
		stopAtFirstError: true
	});

	const registrationForm = form(
		email,
		password,
		confirmPassword,
		firstName,
		lastName,
		acceptRgpd,
		acceptNewsLetter
	);

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
			const response = await apiClient.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
				payload: formData
			});
			if (response.status === 'Success') {
				window.location.href = '/login?registration=success';
				return;
			}

			if (response.status === 'Failure' && response.errors && response.errors.length !== 0) {
				backValidationErrors = {};
				response.errors.forEach(
					(error) => (backValidationErrors[error.field] = error.defaultMessage)
				);
			}

			await registrationForm.validate();
		}
	}
</script>

<svelte:head>
	<title>Register</title>
	<meta name="description" content="Register Page" />
</svelte:head>

<div class="container row  border rounded m-auto p-0">
	<div class="left-banner  col-5 rounded-start d-none d-lg-flex ps-4">
		<div class="lh-lg align-middle fs-5">
			Bienvenue ! <br />
			Veuillez vous inscrire en utilisant un compte Facebook , Google ou LinkedIn sinon vous pouvez utiliser
			votre adresse mail.
		</div>
	</div>
	<div class="form-container col-12 col-md-12 col-lg-7 ">
		<h1 class="text-center fw-bold fs-3 mt-4">Inscription</h1>
		<div class="mb-4 mt-3 social-netowrks social-icons d-flex justify-content-center ">
			<AuthSocialNetworks />
		</div>
		<h6 class="text-center fw-bold fs-4">Ou utiliser votre adresse mail</h6>
		<form on:submit={handleSubmit} class="p-4">
			<div class="mb-3 ">
				<div class="form-floating">
					<input
						type="text"
						class="form-control {!$firstName.valid && 'is-invalid'}"
						id="floatingFirstName"
						placeholder="Prénom"
						bind:value={$firstName.value}
					/>
					<label class={!$firstName.valid && 'text-danger'} for="floatingFirstName">
						{$registrationForm.hasError('firstName.required')
							? messageErrors.firstName.required
							: ''}
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
						class="form-control {!$email.valid || backValidationErrors.email ? 'is-invalid' : ''}"
						id="floatingEmail"
						placeholder="mail@exemple.fr"
						bind:value={$email.value}
						on:input={() => removeBackError('email')}
					/>
					<label
						class={(!$email.valid || backValidationErrors.email) && 'text-danger'}
						for="floatingEmail"
					>
						{backValidationErrors.email ? backValidationErrors.email : ''}
						{!backValidationErrors.email && $registrationForm.hasError('email.required')
							? messageErrors.email.required
							: ''}
						{!backValidationErrors.email && $registrationForm.hasError('email.not_an_email')
							? messageErrors.email.not_an_email
							: ''}
						{!backValidationErrors.email &&
						!$registrationForm.hasError('email.required') &&
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
			<div class="mb-3 small lh-sm">
				<div
					class="{$registrationForm.hasError('acceptRgpd.checked')
						? ''
						: 'd-none'} small mb-1 text-danger rgpd-required"
				>
					* Vous devez confirmer que vous avez lu et que vous acceptez nos CGU et notre politique de
					confidentialité.
				</div>
				<input
					class="d-inline me-2"
					id="acceptRgpd-checkbox"
					type="checkbox"
					bind:checked={$acceptRgpd.value}
				/>
				<label class="d-inline" for="acceptRgpd-checkbox">
					J'ai lu et j'accepte les Conditions Générales d'Utilisation ainsi que la Politique de
					confidentialité
				</label>
			</div>
			<div class="mb-3 small lh-sm">
				<input
					class="d-inline me-2"
					id="acceptNewsLetter-checkbox"
					type="checkbox"
					bind:checked={$acceptNewsLetter.value}
				/>
				<label class="d-inline" for="acceptNewsLetter-checkbox">
					Je souhaite recevoir par email la newsletter Thétiptop pour être averti(e) en
					avant-première de l'arrivée de nouveaux thés, profiter d'offres spéciales ou obtenir des
					conseils sur le thé
				</label>
			</div>

			<div class="btn-wrapper d-flex justify-content-center mb-4">
				<button type="submit" disabled={!$registrationForm.valid} class="btn-signup  ">
					S'inscrire
				</button>
			</div>
		</form>
		<p class="alreadySignup">
			Déjà inscrit? <a href="/login" class="text-dark fw-bold"> Se Connecter </a>
		</p>
	</div>
</div>

<style>
	.dot i {
		width: 35px;
		height: 35px;
		color: #000;
		text-align: center;
	}
	.btn-signup {
		background-color: #00aa88;
		color: #fff;
		padding: 5px 20px;
		border-radius: 15px;
		font-weight: 600;
		border: none;
	}
	.left-banner {
		background-color: #00aa88;
		color: #fff;
		justify-content: center;
		align-items: center;
	}
	.alreadySignup {
		text-align: right;
	}
</style>
