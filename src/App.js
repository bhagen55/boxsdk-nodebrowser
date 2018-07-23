import React, { Component } from 'react';
import { ContentExplorer } from 'box-ui-elements';
import messages from 'box-ui-elements/i18n/en-US';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import logo from './logo.svg';
import 'box-ui-elements/dist/explorer.css';
import appAuth from './appauth.json';
const appConfig = require('./config.js');
const BoxSDK = appConfig.boxSDK;


class App extends Component {
	constructor(props) {
		super(props);

		const sdk = BoxSDK.getPreconfiguredInstance(appAuth);

		var client = sdk.getAppAuthClient('enterprise');
		console.log(client);

		var token = '';
		client.exchangeToken(['item_upload', 'item_delete'])
			.then(tokenInfo => {
				token = tokenInfo;
			});
	}






	// client.exchangeToken('base_explorer', 'item_preview', 'item_download', 'item_share').then(tokenInfo => {
	// 	console.log("Hi im here");
	// 	console.error("what the fuck just happened");
	// 	//console.log(tokenInfo.accessToken);
	// 	// function(result) {
	// 	// 	console.log("Sending result")
	// 	// 	console.log(result);
	// 	// 	return result;
	// 	// },
	// 	// function(err) {
	// 	// 	console.log("Sending an error")
	// 	// 	console.error(err);
	// 	// 	return '';
	// 	});



  render() {
    return (
    <ContentExplorer
        token={this.token}
        language='en-US'
        messages={messages}
    />
    );
  }
}

export default App;
