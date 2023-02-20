const messageErrors = {
	email: {
		required: "L'adresse email est requise.",
		not_an_email: "L'adresse email est invalide."
	},
	password: {
		required: 'Le mot de passe est requis.',
		between: 'Le mot de passe doit contenir au minimum 8.'
	},
	confirmPassword: {
		required: 'La Confirmation du mot de passe est obligatoire.',
		confirm_password_does_not_match: 'Les mots de passe ne correspondent pas !'
	}
};

export { messageErrors };
