const UrlParser = {
    parseActiveUrlWithCombiner() {
      const url = window.location.hash.slice(1).toLowerCase();
      const splitedUrl = this._urlSplitter(url);
      return this._urlCombiner(splitedUrl);
    },
  
    parseActiveUrlWithoutCombiner() {
      // Penting: Hanya lowercase resource, bukan ID
      const url = window.location.hash.slice(1);
      const splitUrl = url.split('/');
      
      // Lowercase hanya untuk resource (splitUrl[1])
      if (splitUrl[1]) {
        splitUrl[1] = splitUrl[1].toLowerCase();
      }
      
      // Gabungkan kembali URL dengan ID yang tetap case-sensitive
      const parsedUrl = splitUrl.join('/');
      
      return this._urlSplitter(parsedUrl);
    },
  
    _urlSplitter(url) {
      const urlsSplits = url.split('/');
      return {
        resource: urlsSplits[1] || null,
        id: urlsSplits[2] || null,
        verb: urlsSplits[3] || null,
      };
    },
  
    _urlCombiner(splitedUrl) {
      return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
        (splitedUrl.id ? '/:id' : '') +
        (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
    },
  };
  
  export default UrlParser;