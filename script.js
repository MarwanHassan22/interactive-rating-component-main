//  holding elements 
const ratings = document.querySelectorAll('.rating');
const rateSubmit = document.querySelector('.submit-rating');
const ratingSection = document.querySelector('.rating-section');
const thanksSection = document.querySelector('.thanks-section')
// loop all rating buttons
ratings.forEach(rate=>{
    // listen to the selected button
    rate.addEventListener('click', (ratingSelected)=>{
        // storing value of rating selection
        ratingSelected = rate.innerHTML;
        // console.log(ratingSelected); just for try and error 
        rateSubmit.addEventListener('click', ()=>{
            // hide rating section and review thanks section
            ratingSection.classList.add('d-none');
            thanksSection.classList.remove('d-none');
            // push rate value into thanks section
            document.querySelector('#rating-result').innerHTML = ratingSelected;
        })
    })
    
})
    console.log(rateReview);



