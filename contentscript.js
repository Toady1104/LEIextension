/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
 
//var regex = /art/;
//var regex2 = /artigo/;

// art(?. )

//if (regex.test(document.body.innerText))
//{
	//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("\\d\\d", "gi"), "XX"); //document.body.innerText
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp( "(?:art\\.|artigo) " , "gi"), "O ARTIGO"); //(("\\. ") || ("igo")) //("art\\.")|("artigo")
	//document.body.innerHTML = document.body.innerHTML.replace(new RegExp( "artigo \\d\\d\\d" , "gi"), "O ARTIGO");
	//document.body.innerHTML.replace(new RegExp("uno", "g"), "dos");
	
	// The regular expression produced a match, so notify the background page.
	chrome.extension.sendRequest({}, function(response) {});
//} else
//{
	// No match was found.
//}
