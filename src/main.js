

(function () {
    addLinks();
})();




function addLinks() {
    addLink("");
    addLink("Check&thinsp;&thinsp;&thinsp;out&thinsp;&thinsp;&thinsp;my<br>modrinth", "https://modrinth.com/user/OP_Hero");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("Join&thinsp;&thinsp;&thinsp;my&thinsp;&thinsp;&thinsp;Discord<br>server", "https://discord.gg/7TNTK6uBdP");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("Follow&thinsp;&thinsp;&thinsp;me&thinsp;&thinsp;&thinsp;on<br>GitHub", "https://github.com/OP-Hero");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("");
    addLink("");
    addLink("");
}


function addLink(text, link = false) {
    let card = document.getElementById("links");
    let linkElem = document.createElement("a");
    
    if (link) {
        linkElem.href = link;
    }
    
    linkElem.innerHTML = text;
    linkElem.classList.add("link");
    let br = document.createElement("br");
    
    card.appendChild(linkElem);
    card.appendChild(br);
    card.appendChild(br);
}
