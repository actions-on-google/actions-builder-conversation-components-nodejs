# Actions on Google: Conversation Components Sample

### Prerequisites
1. Node.js and NPM
    + We recommend installing using [nvm for Linux/Mac](https://github.com/creationix/nvm) and [nvm-windows for Windows](https://github.com/coreybutler/nvm-windows)
1. Install the [Firebase CLI](https://developers.google.com/assistant/actions/dialogflow/deploy-fulfillment)
    + We recommend using MAJOR version `8` , `npm install -g firebase-tools@^8.0.0`
    + Run `firebase login` with your Google account

### Setup
#### Actions Console
1. From the [Actions on Google Console](https://console.actions.google.com/), **New project** > **Create project** > under **What kind of Action do you want to build?** > **Custom** > **Blank project**

#### Actions CLI
1. Install the [Actions CLI](https://developers.google.com/assistant/actionssdk/gactions)
1. Navigate to `sdk/settings/settings.yaml`, and replace `<PROJECT_ID>` with your project ID
1. Run `gactions login` to login to your account.
1. Run `gactions push` to push your project.
1. Run `gactions deploy preview` to deploy your project.

### Running this Sample
+ You can test your Action on any Google Assistant-enabled device on which the Assistant is signed into the same account used to create this project. Just say or type, “OK Google, talk to my test app”.
+ You can also use the Actions on Google Console simulator to test most features and preview on-device behavior.

### Running tests

This Action uses the [Assistant conversation testing library](https://github.com/actions-on-google/assistant-conversation-testing-nodejs) for testing. Follow the steps below to run the tests for this project:

1.  Enable the Actions API for your project (The Actions API is enabled by default for newly created projects):
    1. Visit the [Google API console](https://console.developers.google.com/apis/library) and select your project from the **Select a project** dropdown.
    1. If the Action API is not enabled, search for *"Actions API"* and click **Enable**.
1.  Create a Service Account key:
    1. Visit the [Google Cloud console credentials page](https://console.developers.google.com/apis/credentials) and select your project from the **Select a project** dropdown.
    1. In the "Service Accounts" click on the "App Engine default service account" service account.
    1.  Enter a service account name and click **Create**.
    1.  From the **Select a role** dropdown, select **Project > Owner**.
    1.  Click **Continue**.
    1.  Click **ADD KEY**, then select **Create new key**, then press **CREATE**
        to download the service account JSON file.
1. Rename the service account file to `service_account.json`, and place it in the root folder of the project.
1. Enable [Web and App Activity Controls](https://support.google.com/websearch/answer/54068) for the service account. It is necessary to have this setting enabled in order to call the Actions API.
    + `npm run enable-activity-controls`
1. Run tests
    + `npm run test`

## References & Issues
+ Questions? Go to [StackOverflow](https://stackoverflow.com/questions/tagged/actions-on-google) or the [Assistant Developer Community on Reddit](https://www.reddit.com/r/GoogleAssistantDev/).
+ For bugs, please report an issue on Github.
+ Actions on Google [Documentation](https://developers.google.com/assistant)
+ Actions on Google [Codelabs](https://codelabs.developers.google.com/?cat=Assistant)

## Contributing
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
See [LICENSE](LICENSE).
