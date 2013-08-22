/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
//import java.util.regex.Matcher;
//import java.util.regex.Pattern;

//DEBUG:
//console.log ("TEST");
 
var regex = /art/;
//var regex2 = /artigo/;

// art(?. )

if (regex.test(document.body.innerText))
{
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp( "(?:art\\.|artigo) \\d{1,4}" , "gi"), "O ARTIGO"); //(("\\. ") || ("igo")) //("art\\.")|("artigo")
	console.log ("line 20");
	// The regular expression produced a match, so notify the background page.
	chrome.extension.sendRequest({}, function(response) {});
} else
{
	// No match was found.
}
