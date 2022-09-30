var vname = "formURL";
var vlink = window.location.href;
if(sessionStorage.getItem(vname) === null){sessionStorage.setItem(vname, vlink.substring(vlink.indexOf('?')));}
if(sessionStorage.getItem(vname) !== null)
{
  var vurl = '';
  if(window.location.href.indexOf('?') > 0){vurl = window.location.href.substring(0, window.location.href.indexOf('?'))}else{vurl = window.location.href;}
  if(sessionStorage.getItem(vname).includes('?')){vlink = vurl + sessionStorage.getItem(vname);}else{vlink = vurl;}
}
if(document.getElementById(vname)){document.getElementById(vname).value = vlink;}