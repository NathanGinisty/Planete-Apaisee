// import * as main from './main.js';

var intervenantID = window.location.href.split('#')[1];

function LoadAgendaByID(_intervenantID) { }

function UpdateAgendaByID(_intervenantID) {
    document.getElementById("agenda").innerHTML = "agenda de " + intervenantID;
}

function UpdateFormByID(_intervenantID) {
    document.getElementById("intervenants").value = intervenantID;
}

function UpdateIntervenant(_intervenantID) {
    document.location.href = window.location.href.split('#')[0] + "#" + _intervenantID;
    intervenantID = _intervenantID;
    UpdateAgendaByID(_intervenantID);
    UpdateFormByID(_intervenantID);
    // console.log("update to " + document.getElementById("intervenants").value);
}

function PageInit() {
    if (intervenantID == "" || intervenantID == null) {
        intervenantID = document.getElementById("intervenants").value;
    }

    UpdateIntervenant(intervenantID);
}


// ---------------------------------- //
// -------------- INIT -------------- //
// ---------------------------------- //

PageInit();
document.addEventListener("click", function () { UpdateIntervenant(document.getElementById("intervenants").value) });