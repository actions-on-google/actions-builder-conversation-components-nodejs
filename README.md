# Actions on Google: Conversation Components Sample

### Setup
#### Actions Console
1. From the [Actions on Google Console](https://console.actions.google.com/), **New project** > **Create project** > under **More options** > **Conversation building environment** > **Start with an empty project**

#### Actions CLI
1. Download the [Actions CLI](https://developers.google.com/assistant/actionssdk/gactions)
1. Navigate to `sdk/settings/settings.yaml`, and replace `<PROJECT_ID>` with your project ID
1. Navigate to the `sdk/` directory by running `cd sdk` from the root directory of this project.
1. Run `gactions login` to login to your account.
1. Run `gactions push` to push console settings.
1. Run `gactions deploy preview` to deploy the project.

### Running this Sample
+ You can test your Action on any Google Assistant-enabled device on which the Assistant is signed into the same account used to create this project. Just say or type, “OK Google, talk to my test app”.
+ You can also use the Actions on Google Console simulator to test most features and preview on-device behavior.

## Troubleshooting
+ If running into issues after following the above steps, clear your browser's cache and make sure pop ups are allowed.

## References & Issues
+ Questions? Go to [StackOverflow](https://stackoverflow.com/questions/tagged/actions-on-google), [Assistant Developer Community on Reddit](https://www.reddit.com/r/GoogleAssistantDev/) or [Support](https://developers.google.com/assistant/support).
+ For bugs, please report an issue on Github.
+ Actions on Google [Documentation](https://developers.google.com/assistant)
+ Actions on Google [Codelabs](https://codelabs.developers.google.com/?cat=Assistant)

## Make Contributions
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License
See [LICENSE](LICENSE).

## Terms
Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/).
