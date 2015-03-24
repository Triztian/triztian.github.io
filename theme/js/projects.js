$(document.).ready(function() {
    var params = new URI(window.location.href).search(true),
        srp = {}; // Holds the search results if search params were provided.
        
    // PROJECTS is an assumed global index
    // LANGUAGES is an assumed global set
    // PLATFORMS is an assumed global set
    // Project entry:
    //
    // [{
    //  id: String,
    //  name: String,
    //  keywords: [ String ... ],
    // }]
   if ( 'keywords' in params ) {
       var words = params.keywords.replace(/[- ]/g, ",").split(',');
       words.forEach(function(kw) {
           PROJECTS.forEach(function(proj) {
                if ( proj.keywords.indexOf(kw) > -1 ) {
                   srp[proj] = proj;
                }
           });
       });
   }
});
