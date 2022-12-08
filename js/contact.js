// import * as main from './main.js';

var intervenantID = window.location.href.split('#')[1];

function LoadAgendaByID(_intervenantID) { }

function UpdateAgendaByID(_intervenantID) { }

function UpdateFormByID(_intervenantID) {
    var z = document.getElementById("intervenants").value = intervenantID;
}

function UpdateIntervenant(_intervenantID) {
    UpdateAgendaByID(_intervenantID);
    UpdateFormByID(_intervenantID);
}

// Load init page

UpdateIntervenant(intervenantID);