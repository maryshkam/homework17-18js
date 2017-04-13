$(function() {
// Визиваю плагін
$('.carousel').carousel();


    // template
    var temp = $('#test').html();
    var data = {
        head: "Animals",
        text: "Animals are multicellular, eukaryotic organisms of the kingdom Animalia (also called Metazoa). The animal kingdom emerged as a clade within Apoikozoa as the sister group to the choanoflagellates. Animals are motile, meaning they can move spontaneously and independently at some point in their lives. Their body plan eventually becomes fixed as they develop, although some undergo a process of metamorphosis later in their lives. All animals are heterotrophs: they must ingest other organisms or their products for sustenance.",
        titel: "Different animals:",
        li1: "Ferret",
        li2: "Hedgehog",
        li3: "Squirrel",
        li4: "Tiger",
        li5: "Raccoon",
        text2: "Most known animal phyla appeared in the fossil record as marine species during the Cambrian explosion, about 542 million years ago. Animals can be divided broadly into vertebrates and invertebrates. Vertebrates have a backbone or spine (vertebral column), and amount to less than five percent of all described animal species. They include fish, amphibians, reptiles, birds and mammals. The remaining animals are the invertebrates, which lack a backbone. These include molluscs (clams, oysters, octopuses, squid, snails); arthropods (millipedes, centipedes, insects, spiders, scorpions, crabs, lobsters, shrimp); annelids (earthworms, leeches), nematodes (filarial worms, hookworms), flatworms (tapeworms, liver flukes), cnidarians (jellyfish, sea anemones, corals), ctenophores (comb jellies), and sponges. The study of animals is called zoology."
    };
    var content = tmpl(temp, data);
    $('body').append(content);

});
(function($) {
  $.fn.carousel = function(){
    var left = $('.left-arrow');
    var right = $('.right-arrow');
    var list = $('.carousel__list');
    var move = 120;
    var start = 0;
    var maxMove = 0;
    var number = list.find('li').length - 1;
    var minMove = number * (-move);

    left.on('click', function() {
        if (start != maxMove) {
            start += move;
            list.animate({left: start + "px"}, 1000);
        }
    });
    right.on('click', function() {
        if (start != minMove)
            start -= move;
        list.animate({left: start + "px"}, 1000);
    });
  }
})(jQuery);
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();