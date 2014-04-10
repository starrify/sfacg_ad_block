/* 
 * A simple Chrome extension for removing ad on comic.sfacg.com
 * by Pengyu CHEN (cpy.prefers.you[at]gmail.com)
 * COPYLEFT, ALL WRONGS RESERVED.
 */

var iframes = document.getElementsByTagName('iframe');
while (iframes.length > 0)
    iframes[0].parentNode.removeChild(iframes[0]);
