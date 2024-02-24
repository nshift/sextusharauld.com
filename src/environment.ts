export class Environment {
  static BucketName = () => required("PUBLIC_BUCKET_NAME");
  static Region = () => required("PUBLIC_AWS_REGION");
}

function required(environmentName: string) {
  const environmentVariable = import.meta.env[environmentName];
  if (!environmentVariable) {
    throw new Error(`Environment variable ${environmentName} is required.`);
  }
  return environmentVariable;
}
