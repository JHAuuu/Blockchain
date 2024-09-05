function filterSelection(category) {
    var elements = document.getElementsByClassName('filterDiv');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none'; // Hide all elements by default

        if (category === 'all' || elements[i].classList.contains(category)) {
            elements[i].style.display = ''; // Show elements that match the category
        }
    }

    // Update active button
    var btns = document.getElementsByClassName('filter-btn');
    for (var j = 0; j < btns.length; j++) {
        btns[j].classList.remove('active');
    }
    event.currentTarget.classList.add('active');
}