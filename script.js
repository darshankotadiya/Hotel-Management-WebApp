//Ek array banavyo che data save karva
var badha_rooms = [
    { name: "Sado Room", bhadu: 1000 },
    { name: "Deluxe Room", bhadu: 2000 },
    { name: "VIP Room", bhadu: 5000 }
];

function badlo(tab_name) {
    // Badha div ne hide kariya
    document.getElementById('home').style.display = 'none';
    document.getElementById('rooms').style.display = 'none';
    document.getElementById('calc').style.display = 'none';
    document.getElementById(tab_name).style.display ='block';

    
    if(tab_name == 'rooms') {
        batao_rooms();
    }
}

// Rooms ne screen par batavva mate ni loop
function batao_rooms() {
    var container = document.getElementById('box_container');
    container.innerHTML = ""; 
    for (var i = 0; i < badha_rooms.length; i++) {
        container.innerHTML += "<div class='room_card'>" + "<h3>" + badha_rooms[i].name + "</h3>" + "<p>Price: " 
        + badha_rooms[i].bhadu + "</p>" + "</div>"
    }
}

//Bill calculate 
function hisab_karo() {
    var divas = document.getElementById('input_day').value;
    
    if(divas > 0) {
        var total = divas * 1000; // Standard price fix 
        document.getElementById('final_bill').innerHTML = "Total Rupiya: " + total;
    } else {
        alert("Enter valid days!");
    }
}