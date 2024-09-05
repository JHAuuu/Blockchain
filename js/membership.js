document.addEventListener('DOMContentLoaded', function () {
    const tierOptions = document.querySelectorAll('.tier-option');
    const tierPriceDetail = document.getElementById('tierPriceDetail');
    const tierDescription = document.getElementById('tierDescription');
    const tierBadges = document.getElementById('tierBadges');
    const button = document.querySelector('.btn-joined');

    tierOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Update the tier details section with the selected tier's information
            const price = this.getAttribute('data-price');
            const description = this.getAttribute('data-description');
            const benefits = this.getAttribute('data-benefits');

            tierPriceDetail.textContent = price;
            tierDescription.textContent = description;
            tierBadges.textContent = benefits;

            

            if (this.classList.contains('option1')) {
                button.textContent = 'Joined';
                button.classList.add('joined');
                button.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent the default link behavior
                    Swal.fire({
                        title: "Don't you want to continue your membership?",
                        text: "There will be more interesting content coming soon",
                        icon: "question",
                        denyButtonText: `No, I don't want`,
                        showDenyButton: true,
                        showCancelButton: true,
                        showConfirmButton: false
                    });
                });
              } else {
                button.textContent = 'Upgrade';
                button.classList.remove('joined');
            }
              

            // Optionally, add an active class to the selected option for styling
            tierOptions.forEach(o => o.classList.remove('active-tier'));
            this.classList.add('active-tier');
        });
    });
});