// export default {
//     APIKEY: 'amazonaws.com/split-dev-two',
//     REGION: 'us-east-1',
//     TYPE: 'execute-api',
//     ENDPOINT: 'iff00umlx0',
// };;

const config={
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:7a695e31-3d99-40bb-b430-84d9936cc3f6',
    
    // REQUIRED - Amazon Cognito Region
    region: 'US_EAST_1',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'US_EAST_1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_9evlVxVpd',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '6kcerlar4pfaeho21ca2fu8qar',
}
export default config
