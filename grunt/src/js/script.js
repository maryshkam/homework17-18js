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