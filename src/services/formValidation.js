const messageErrors = {
	email: {
		required: "L'adresse email est obligatoire.",
		not_an_email: "L'adresse email est invalide."
	},
	password: {
		required: 'Le mot de passe est obligatoire.',
		between: 'Le mot de passe doit contenir entre 8 et 64 caractères.'
	},
	confirmPassword: {
		required: 'La Confirmation du mot de passe est obligatoire.',
		confirm_password_does_not_match: 'La confirmation du mot de passe ne correspond pas.'
	},
	firstName: {
		required: 'Le prénom est obligatoire.',
		alpha: 'Le prénom ne peut contenir que des lettres.',
		between: 'Le prénom doit contenir entre 3 et 50 caractères.'
	},
	lastName: {
		required: 'Le nom est obligatoire.',
		alpha: 'Le nom ne peut contenir que des lettres.',
		between: 'Le nom doit contenir entre 3 et 50 caractères.'
	}
};

export { messageErrors };
