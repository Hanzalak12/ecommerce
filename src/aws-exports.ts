// export default {
//     APIKEY: 'amazonaws.com/split-dev-two',
//     REGION: 'us-east-1',
//     TYPE: 'execute-api',
//     ENDPOINT: 'iff00umlx0',
// };;

const config={
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:b0ffc4fb-251b-4d94-9a54-d98d6d4c5677',
    
    // REQUIRED - Amazon Cognito Region
    region: 'US_EAST_1',

    // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'US_EAST_1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_VKlvOY3no',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '5i9npdo4bg9cpqvco3mrnhtf3r',
}
export default config