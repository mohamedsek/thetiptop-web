<script>
	import { goto, invalidateAll } from '$app/navigation';
	import { apiClient } from '$services/apiClient';
	import { messageErrors } from '$services/formValidation';
	import { field, form } from 'svelte-forms';
	import { between, required } from 'svelte-forms/validators';

	export let data;
	const firstName = field(
		'firstName',
		`${data.user.firstName}`,
		[required(), alpha(), between(3, 50)],
		{
			stopAtFirstError: true
		}
	);
	const lastName = field(
		'lastName',
		`${data.user.lastName}`,
		[required(), alpha(), between(3, 50)],
		{
			stopAtFirstError: true
		}
	);

	const updateProfileForm = form(firstName, lastName);

	function alpha() {
		const pattern = /^[a-zA-Z]+$/;

		return (value) => {
			if (value === null || value === undefined) {
				return { valid: false, name: 'alpha' };
			}
			return { valid: pattern.test(value), name: 'alpha' };
		};
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await updateProfileForm.validate();
		if ($updateProfileForm.valid) {
			const formData = {
				firstName: $firstName.value,
				lastName: $lastName.value
			};
			const response = await apiClient.put(
				`${import.meta.env.VITE_API_BASE_URL}/users/profile/${data.user.uid}`,
				{
					payload: formData,
					token: data.accessToken
				}
			);
			if (response.status === 'Success') {
				await invalidateAll();
				await goto('/profile');
				return;
			}
			await updateProfileForm.validate();
		}
	}
</script>

<svelte:head>
	<title>UpdateInfo</title>
	<meta name="description" content="UpdateInfo Page" />
</svelte:head>

<div class="container   border rounded m-auto p-0">
	<div class="form-container col-12  ">
		<h1 class="text-center fw-bold fs-3 mt-4">Modifier mon compte</h1>

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
						{$updateProfileForm.hasError('firstName.required')
							? messageErrors.firstName.required
							: ''}
						{$updateProfileForm.hasError('firstName.alpha') ? messageErrors.firstName.alpha : ''}
						{$updateProfileForm.hasError('firstName.between')
							? messageErrors.firstName.between
							: ''}
						{!$updateProfileForm.hasError('firstName.required') &&
						!$updateProfileForm.hasError('firstName.alpha') &&
						!$updateProfileForm.hasError('firstName.between')
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
						{$updateProfileForm.hasError('lastName.required')
							? messageErrors.lastName.required
							: ''}
						{$updateProfileForm.hasError('lastName.alpha') ? messageErrors.lastName.alpha : ''}
						{$updateProfileForm.hasError('lastName.between') ? messageErrors.lastName.between : ''}
						{!$updateProfileForm.hasError('lastName.required') &&
						!$updateProfileForm.hasError('lastName.alpha') &&
						!$updateProfileForm.hasError('lastName.between')
							? 'Nom'
							: ''}
					</label>
				</div>
			</div>

			<div class="btn-wrapper d-flex justify-content-center mb-4">
				<button class="btn-signup me-2" on:click={updateProfileForm.reset}>Annuler</button>
				<button type="submit" disabled={!$updateProfileForm.valid} class="btn-signup">
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
