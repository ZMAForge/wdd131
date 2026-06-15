const snortle = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 4,
    health: 100,
    image: "snortleblat.webp",
    attacked: function() {
        this.health -= 20;
        if (this.health === 0) {
            alert("Character Died")
        }
    },
    levelUp: function() {
        this.level += 1;
    }
}

function refreshHTML() {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const article = document.createElement("article");
    article.classList = "card"
    let html = `<img class="image" src=${snortle.image}>
    <div class="name">
        <h2>${snortle.name}</h2>
    </div>
    <div class="stats">
        <p><strong>Class: </strong>${snortle.class}</p>
        <p><strong>Level: </strong>${snortle.level}</p>
        <p><strong>Health: </strong>${snortle.health}</p>
    </div>
    <button class="buttons" id="damage">Damage</button>
    <button class="buttons" id="levelup">Level Up</button>`

    article.innerHTML = html;
    main.appendChild(article)

    const dmgBtn = article.querySelector("#damage");
    dmgBtn.addEventListener("click", function() {
        console.log("Damage Triggered");
        snortle.attacked();
        refreshHTML();
        console.log(snortle.health);
    });
    
    const lvlBtn = article.querySelector("#levelup");
    lvlBtn.addEventListener("click", function() {
        console.log("LVLUP Triggered")
        console.log(snortle.level)
        snortle.levelUp();
        refreshHTML();
        console.log(snortle.level)
    })
}
refreshHTML();