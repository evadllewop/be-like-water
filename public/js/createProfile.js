$(document).ready(() => {
    // Getting references to our form and input
    const childProfile = $("form.childProfile");
    const childName = $("input#childName");
    const childAge = $("input#childAge");
    const childBio = $("input#childBio");
    const childAlg = $("input#childAlg");
    const childMed = $("input#childMed");
    const childRes = $("input#childRes");

    // When the signup button is clicked, we validate the email and password are not blank
    childProfile.on("submit", event => {
        event.preventDefault();
        const userData = {
            name: childName.val().trim(),
            age: childAge.val().trim(),
            bio: childBio.val().trim(),
            allergies: childAlg.val().trim(),
            medications: childMed.val().trim(),
            restrictions: childRes.val().trim(),
        };

        // if (!userData.email || !userData.password) {
        //     return;
        // }
        // If we have an email and password, run the signUpUser function
        createProfile(userData.name, userData.age, userData.bio, userData.allergies, userData.medications, userData.restrictions);
        childName.val("");
        childAge.val("");
        childBio.val("");
        childAlg.val("");
        childMed.val("");
        childRes.val("");

    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function createProfile(name, age, bio, allergies, medications, restrictions) {
        $.post("/api/createProfile", {
            name: name,
            age: age,
            bio: bio,
            allergies: allergies,
            medications: medications,
            restrictions: restrictions
        })
            .then(() => {
                window.location.replace("/createProfile");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
