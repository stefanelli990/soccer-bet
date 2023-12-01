const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdownContent = document.querySelector('.dropdown-content')
const ticket = document.querySelector('.ticket')
const ticketBtns = document.querySelectorAll('.ticket-btn')
const closeTicketBtn = document.querySelector('#close-ticket-btn')
const hamburgerBtn = document.querySelector('.hamburger-btn')
const hamburgerMenu = document.querySelector('.hamburger-menu')

// toggle dropdown
dropdownBtn.addEventListener('click' , (event) => {
    dropdownContent.classList.toggle('toggle')

    // Stop propagation if the click is on icons or spans inside dropdownBtn
    if (event.target.tagName === 'SPAN' || event.target.tagName === 'ICONIFY-ICON') {
        event.stopPropagation();
    }
})

// dropdown outside close

document.addEventListener('click', (event) => {
    let isClickedMenu = dropdownContent.contains(event.target);
    let isDropdownBtn = (event.target === dropdownBtn);

    if (!isClickedMenu && !isDropdownBtn) {
        dropdownContent.classList.remove('toggle');
    }
})

// open ticket side menu
ticketBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        ticket.classList.add('open')
    })
})

// close ticket side menu
closeTicketBtn.addEventListener('click', () => {
    ticket.classList.remove('open')
})

// toggle hamburger menu
hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('toggle')
    console.log('wdadawd')
})



