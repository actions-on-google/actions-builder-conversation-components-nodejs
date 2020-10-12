/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
'use strict';
/**
 * Generate credentials to run tests
 *
 * Expected usage: node generate-credentials.js /path/to/client_secret.json
 * /path/to/credentials.json
 */
if (process.argv.length !== 4) {
  console.error('Incorrect number of arguments.');
  console.error(
      'Usage: node generate-credentials.js /path/to/client_secret.json /path/to/credentials.json');
  process.exit(1);
}
const args = process.argv.slice(2);
// First parameter should be file path to client secret.
// Second parameter should be result credentials file.
const [clientSecretPath, outputFile] = args;
// Read file data
const fs = require('fs');
const https = require('https');
const readline = require('readline');
const {OAuth2Client} = require('google-auth-library');
// Options for both reading and writing
const fileOptions = {
  encoding: 'utf8'
};
fs.readFile(clientSecretPath, fileOptions, (err, data) => {
  const clientSecretFile = JSON.parse(data);
  if (!('installed' in clientSecretFile)) {
    console.error(
        'Error: Missing required \'installed\' field in the provided client secret. file. Please make sure that you correctly followed the README instructions for the credentials file generation.');
    process.exit(1);
  }
  const clientId = clientSecretFile.installed.client_id;
  const clientSecret = clientSecretFile.installed.client_secret;
  const oauth2Client =
      new OAuth2Client(clientId, clientSecret, 'urn:ietf:wg:oauth:2.0:oob');
  const scopes = ['https://www.googleapis.com/auth/actions.builder'];
  console.log(
      `Reading data for project "${clientSecretFile.installed.project_id}"`);
  console.log(
      'Please go to the following link to authorize, then copy the code below');
  // Google OAuth URL to enable the Assistant SDK API for the given client id
  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    // If you only need one scope you can pass it as a string
    scope: scopes
  });
  console.log(url);
  const rl =
      readline.createInterface({input: process.stdin, output: process.stdout});
  rl.question('Authorization code: ', (code) => {
    // Use this code to obtain a refresh token
    oauth2Client.getToken(code, (err, tokens) => {
      const refreshToken = tokens.refresh_token;
      // Create test-credentials.json
      const fileData = {
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        type: 'authorized_user'
      };
      fs.writeFile(outputFile, JSON.stringify(fileData), fileOptions, err => {
        if (err) {
          console.error(`Unable to save "${outputFile}"`, err);
        } else {
          console.log(`Saved user credentials in "${outputFile}"`);
          console.log('You are now ready to run tests');
          console.log('Make sure you DO NOT commit this file');
        }
      });
      rl.close();
    });
  });
});

