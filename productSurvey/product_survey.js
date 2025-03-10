function submitFeedback() {

    //initialized const variables that help store the values
    //and thus allow referral of those values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const share = document.getElementById('shareText').value;

    //creates pop up
    alert('Thank you for your valuable feedback')

    //assigned the input given to the
    //element it calls by the user,
    //and replaces the inner HTML content
    //with it. Correlates with line 29 of HTML
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = share;
    
    //Displays user inputs once submitFeedback is ran
    //line 29 of html
    document.getElementById('userInfo').style.display = 'block';

    //assigned button element to submitButton
    const submitButton = document.getElementById('submitBtn');

    //assigned submitFeedback to the clicking of prev mentioned 
    //button element
    submitButton.onclick = submitFeedback;
}
    //listens for any key pressed, then checks
    //if that key is enter and runs submitFeedback
    document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
    });



