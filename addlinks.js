/*
  A lump of JavaScript to open Google codesense files from the Chromium
  project in a local textmate instance via the textmate URL scheme.

  Copyright (c) 2011, Robert Kroeger
  
  TODO(rjkroege): Insert some kind of licensing drivel here.
*/

/**
 * Parse a Google code sense URL into a dictionary of parameters.
 */
function parseCSurl (u) {
  var dici = {};
  u.split('?')[1].split('&').forEach(function (e) {
    s = e.split('=');
    dici[s[0]] = s[1];
  })
  return dici;
}

/**
 * Walks up the node inclusion chain until we find an element.
 */
function findParentElement(n) {
  if (n.nodeType == 1) {
    return n;
  } else {
    return findParentElement(n.parentNode);
  }
}

/**
 * Given a path p, strips the uninteresting drivel part of the URL.
 * I don't know if the drivel part at the beginning is significant.
 * So, we simply slice off everything up to src/ as we know really
 * for very sure that Chrome is in src/ :-)
 */
function stripDrivel (p) {
  return p.replace(/.*src\//, 'src/');
}

// The directory that contains the chrome src.
// Can we read an environment variable from an extension?
var CHROME_ROOT = '~/tools/g/';

function makeTxtMateUrl(p, l) {
  var u = 'txmt://open/?url=file://' + CHROME_ROOT; // '~/.bash_profile&line=11&column=2';
  u += p.replace(/.*src\//, 'src/');
  u += '&line=' + l;
  return u;
}

/**
 * Opens the specified URL u in textmate. Somehow.
 */
function openInTextMate(u) {
  window.console.info('url: ' + u);
  window.location = u;
}

/**
 * Listens to all clicks. Handles the clicks on the numbers
 * by jumping to a textmate URL.
 */
function onArbitraryClick (e) {
  if (findParentElement(e.target.parentNode).className == 'GOYGFLXBM-') {
    // Rip apart the URL that codesearch so nicely provides for us.
    var u = e.target.href;
    dici = parseCSurl(u);
    openInTextMate(makeTxtMateUrl(dici['hl'], dici['l']));
  }
}

document.addEventListener('mouseup', onArbitraryClick);
