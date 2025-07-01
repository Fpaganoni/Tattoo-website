enum CredentialStatus {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
}

interface ICredential {
  credentialID: number;
  email: string;
  password: string;
}

export default ICredential;
export { CredentialStatus };
