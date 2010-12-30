/*
  A lump of JavaScript to open Google codesense files from the Chromium
  project in a local textmate instance via the textmate URL scheme.

  Copyright (c) 2011, Robert Kroeger
  
  TODO(rjkroege): Insert some kind of licensing drivel here.
*/


// Obsolete. 
// TODO(rjkroege): Remove this if it proves to not be necessary.
/**
 * Dredge through the file diddling the links.
 */
function addLinks() {
  alert('foo on you Rob');
  
  targets = document.querySelectorAll('.GOYGFLXBM-');
  Array.prototype.forEach.call(targets, function (v) {
    window.console.info(v.innerText);
  });
  
  alert('length: ' + targets.length);
}

// addLinks();

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
}

/**
 * Listens to all clicks. Handles the clicks on the numbers
 * by jumping to a textmate URL.
 */
function onArbitraryClick (e) {
  // window.console.info('hello from the click handler');
  // window.console.info('click: ' + e.target);
  // window.console.info('click: ' + findParentElement(e.target.parentNode));
  if (findParentElement(e.target.parentNode).className == 'GOYGFLXBM-') {
    // we have in theory clicked on something that matches the intended pattern.
    
    // Debugging... remove this.
    // window.console.info('Giant Bunnies')
    // alert('clicked on a number, target: ' + e.target.href);

    // Rip apart the URL that codesearch so nicely provides for us.
    var u = e.target.href;
    dici = parseCSurl(u);
    //window.console.info('params: ' + dici['hl'] + ' ' + dici['l']);
    // window.console.info('newpath: ' + stripDrivel(dici['hl']));
  

    openInTextMate(makeTxtMateUrl(dici['hi'], dici['l']));
    
  }
}


// document.addEventListener("click", onArbitraryClick);
document.addEventListener('mouseup', onArbitraryClick);
