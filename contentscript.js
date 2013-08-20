/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

//var regex = /the/;
var regex = /the/;

// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText))
{
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp("the", "g"), "XXX"); //document.body.innerText
	//document.body.innerHTML.replace(new RegExp("uno", "g"), "dos");
	// The regular expression produced a match, so notify the background page.
	chrome.extension.sendRequest({}, function(response) {});
} else
{
	// No match was found.
}
