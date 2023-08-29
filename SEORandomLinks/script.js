const SEOarray1 = {
  'Test1': 'https://url1/',
  'Test2': 'https://url2/',
  'Test3': 'https://url3/',
  'Test4': 'https://url4/',
  'Test5': 'https://url5/'
}
const SEOarray2 = {
  'TestA': 'https://urlA/',
  'TestB': 'https://urlB/',
  'TestC': 'https://urlC/',
  'TestD': 'https://urlD/'
}

function SEOlinks(count, array, selector){
  var SEOarraynames = Object.keys(array);
  var SEOarraylinks = Object.values(array);
  var SEOreturn = '<ul class="menu">';
  for(i=0;i<count;i++){
    let SEOrandom = Math.floor(Math.random() * (SEOarraylinks.length - 0));
    SEOreturn += '<li class="menu-item"><a href="' + SEOarraylinks[SEOrandom] + '" class="menu-link">' + SEOarraynames[SEOrandom] + '</a></li>';
    SEOarraynames.splice(SEOrandom,1);
    SEOarraylinks.splice(SEOrandom,1);
  }
  SEOreturn += '</ul>';
  document.querySelector(selector).innerHTML = SEOreturn;
}

SEOlinks(4, SEOarray1, '#seo-random-links1');
SEOlinks(4, SEOarray2, '#seo-random-links2');