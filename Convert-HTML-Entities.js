function convertHTML(str) {
  // use replace statement with regex to replace all matches in string
  let converted = str.replace(/[&<>"']/g, function(match){
    switch (match){
      case '&':
        return '&amp;';
        break;
      
      case '<':
        return '&lt;';
        break;

      case '>':
        return '&gt;';
        break;

      case '"':
        return '&quot;';
        break;

      case "'":
        return '&apos;'
        break;
    }
  })
  return converted;
}

convertHTML("Dolce & Gabbana");
