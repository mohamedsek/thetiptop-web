<script>
	import { goto, invalidateAll } from '$app/navigation';
	import { apiClient } from '$services/apiClient';
	import { messageErrors } from '$services/formValidation';
	import { field, form } from 'svelte-forms';
	import { between, required } from 'svelte-forms/validators';
	export let data;

	let backValidationErrors = {};

	function removeBackError(fieldName) {
		backValidationErrors[fieldName] = '';
	}

	const oldPassword = field('oldPassword', '', [required(), between(8, 64)], {
		stopAtFirstError: true
	});

	const password = field('password', '', [required(), between(8, 64)], {
		stopAtFirstError: true
	});
	const confirmPassword = field('confirmPassword', '', [required(), checkPasswordsEquality()], {
		stopAtFirstError: true
	});

	const updatePasswordForm = form(oldPassword, password, confirmPassword);
	function checkPasswordsEquality() {
		return (value) => {
			return { valid: value === $password.value, name: 'confirm_password_does_not_match' };
		};
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await updatePasswordForm.validate();
		if ($updatePasswordForm.valid) {
			const formData = {
				oldPassword: $oldPassword.value,
				password: $password.value,
				confirmPassword: $confirmPassword.value
			};
			const response = await apiClient.put(
				`${import.meta.env.VITE_API_BASE_URL}/users/password/${data.user.uid}`,
				{
					payload: formData,
					token: data.accessToken
				}
			);
			if (response.status === 'Success') {
				await invalidateAll();
				await goto('/auth/logout');
				return;
			}
			if (response.status === 'Failure' && response.errors && response.errors.length !== 0) {
				backValidationErrors = {};
				response.errors.forEach(
					(error) => (backValidationErrors[error.field] = error.defaultMessage)
				);
			}
			await updatePasswordForm.validate();
		}
	}
</script>

<svelte:head>
	<title>Modifier mot de passe</title>
	<meta name="description" content="updatePassword Page" />
</svelte:head>

<div class="container   border rounded m-auto p-0">
	<div class="form-container col-12  ">
		<h1 class="text-center fw-bold fs-3 mt-4">Modifier mon compte</h1>

		<form on:submit={handleSubmit} class="p-4">
			<div class="mb-3">
				<div class="form-floating">
					<input
						type="password"
						class="form-control {(!$oldPassword.valid || backValidationErrors.oldPassword) &&
							'is-invalid'}"
						id="floatingOldPassword"
						placeholder="Ancien mot de passe"
						bind:value={$oldPassword.value}
					/>
					<label
						class={(!$oldPassword.valid || backValidationErrors.oldPassword) && 'text-danger'}
						for="floatingOldPassword"
					>
						{backValidationErrors.oldPassword ? backValidationErrors.oldPassword : ''}
						{!backValidationErrors.oldPassword &&
						$updatePasswordForm.hasError('oldPassword.required')
							? messageErrors.password.required
							: ''}
						{!backValidationErrors.oldPassword &&
						$updatePasswordForm.hasError('oldPassword.between')
							? messageErrors.password.between
							: ''}
						{!backValidationErrors.oldPassword &&
						!$updatePasswordForm.hasError('oldPassword.required') &&
						!$updatePasswordForm.hasError('oldPassword.between')
							? 'Ancien mot de passe'
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
						{$updatePasswordForm.hasError('password.required')
							? messageErrors.password.required
							: ''}
						{$updatePasswordForm.hasError('password.between') ? messageErrors.password.between : ''}
						{!$updatePasswordForm.hasError('password.required') &&
						!$updatePasswordForm.hasError('password.between')
							? 'Nouveau mot de passe'
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
						placeholder="Confirmation mot de passe"
						bind:value={$confirmPassword.value}
					/>
					<label class={!$confirmPassword.valid && 'text-danger'} for="floatingConfirmPassword">
						{$updatePasswordForm.hasError('confirmPassword.required')
							? messageErrors.confirmPassword.required
							: ''}
						{$updatePasswordForm.hasError('confirmPassword.confirm_password_does_not_match')
							? messageErrors.confirmPassword.confirm_password_does_not_match
							: ''}
						{!$updatePasswordForm.hasError('confirmPassword.required') &&
						!$updatePasswordForm.hasError('confirmPassword.confirm_password_does_not_match')
							? 'Confirmation du Nouveau mot de passe'
							: ''}
					</label>
				</div>
			</div>

			<div class="btn-wrapper d-flex justify-content-center mb-4">
				<button type="submit" disabled={!$updatePasswordForm.valid} class="btn-signup  ">
					Modifier
				</button>
			</div>
		</form>
	</div>
</div>

<style>
	.btn-signup {
		background-color: #00aa88;
		color: #fff;
		padding: 5px 20px;
		border-radius: 15px;
		font-weight: 600;
		border: none;
	}
</style>
