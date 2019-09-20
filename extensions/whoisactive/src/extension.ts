/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';

import ControllerBase from './controllers/controllerBase';
import MainController from './controllers/mainController';

let controllers: ControllerBase[] = [];

export function activate(context: vscode.ExtensionContext): void {
	// Start the main controller
	let mainController = new MainController(context);
	controllers.push(mainController);
	context.subscriptions.push(mainController);
	mainController.activate();
}

export function deactivate(): void {
	for (let controller of controllers) {
		controller.deactivate();
	}
}
