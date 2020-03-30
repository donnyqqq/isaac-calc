let damage = 3.50
let tears = 1
let artefacts = {
    'polyph' : {
        id: 169,
        dmg: (damage+4)*2,
        hrt: 0,
        trs: (tears*2.1)+3,
        rng: 0,
        spdShot: 0,
        spd: 0,
        luck: 0
    },
    'momsknife': {
        id: 114,
        dmg: damage*2,
        hrt: 0,
        trs: 0,
        rng: 0,
        spdShot: 0,
        spd: 0,
        luck: 0
    },
    'brim': {
        id: 118,
        dmg: damage,
        hrt: 0,
        trs: tears-(tears*3),
        rng: 0,
        spdShot: 0,
        spd: 0,
        luck: 0
    }
}
let slots = [];

const setStats = () => {
    if(!slots[0] || !slots[1]) return null;
    let item1 = slots[0];
    let item2 = slots[1];
    let slot = document.getElementById('stats')
    let damag = Number(item1.dmg) + Number(item2.dmg)
    let heartz = Number(item1.hrt) + Number(item2.hrt)
    let tearz = Number(item1.trs) + Number(item2.trs)
    let rang = Number(item1.rng) + Number(item2.rng)
    let shsp = Number(item1.spdShot) + Number(item2.spdShot)
    let sped = Number(item1.spd) + Number(item2.spd)
    let luzck = Number(item1.luck) + Number(item2.luck)
    slot.innerHTML = `
    <strong>Damage:</strong>${damag}</br> 
    <strong>Hearts:</strong> ${heartz}</br> 
    <strong>Tears(delay):</strong>${tearz}</br> 
    <strong>Range:</strong>${rang}</br> 
    <strong>Shot Speed:</strong>${shsp}</br> 
    <strong>Speed:</strong>${sped}</br> 
    <strong>Luck:</strong>${luzck}`
}
$(document).ready(()=>{
    $('.artefact').click(function  () {
        setArt($(this).attr('id'))
    })


})
function setArt(id){
    if(!slots[0]){
        slots[0]= artefacts[id];
    } else if (!slots[1]){
        slots[1]= artefacts[id];
    } else {
        slots[0] = artefacts[id];
        slots[1] = null;
    }
    setStats();
}