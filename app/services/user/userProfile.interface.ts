export interface userContacts {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	email: string;
	password: string;
	name: string;
	avatarPath: string;
	address: string;
	contactId: number;
}

export interface userProfile {
	contacts: userContacts[];
	email: string;
	id: number;
	name: string;
	avatarPath: string;
	address: string;
}