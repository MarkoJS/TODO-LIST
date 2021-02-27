var inputElement1 = document.getElementById('inputElement1');
var inputElement2 = document.getElementById('inputElement2');
var prioritet = document.getElementById('prioritet');
var appendButton = document.getElementById('appendButton');
var nameTable = document.getElementById('teloTabele');
var rowId = 0;

appendButton.addEventListener('click', () => {
    let content = nameTable.innerHTML;
    rowId++;
    content += `<tr>` +
        `<td class="id">`+ rowId + `</td>` +
        '<td class="prvi">Nije zavrseno</td>' +
        '<td class="drugi">' + inputElement1.value + '</td>' +
        '<td class="treci">' + inputElement2.value + '</td>' +
        '<td class="cetvrti">' + prioritet.value + '</td>' +
        '<td><button type="button" class="btn btn-primary" id="data" data-toggle="modal" data-target="#exampleModal">Izmeni</button></td>' +
        '</tr>';
    nameTable.innerHTML = content;
    inputElement1.value= "";
    inputElement2.value= "";


    var edit = document.getElementById("data").parentElement.parentElement.getElementsByTagName("td");


    document.getElementById('modalNaslov').innerHTML += edit[2].innerHTML
    document.getElementById('znz').innerHTML += edit[1].innerHTML
    document.getElementById('inputElement3').innerHTML += edit[3].innerHTML
    document.getElementById('inputElement4').innerHTML += edit[4].innerHTML


    document.getElementById('save').addEventListener('click', (e) => {
        e.preventDefault();

        edit[2].innerHTML = document.getElementById("inputElement3").innerHTML 
        edit[3].innerHTML = document.getElementById("inputElement4").innerHTML
        document.getElementById('znz').innerHTML = "zavrseno"
        edit[1].innerHTML = "zavrseno"
        
        
    })


});

// popuniti modal u tom redu
var mtitle = document.getElementById('modalNaslov');
var mopis = document.getElementById('inputGroup-sizing-default');
var mpriority = document.getElementById('inputGroup-sizing-default2');

mtitle = inputElement1.value;
mopis = inputElement2.value;
mpriority = prioritet.value;










