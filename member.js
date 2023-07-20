function skillsMember()  { // 1
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var member = member + " " + skills;
    document.getElementById("member").value = member;
}
