const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdownContent = document.querySelector('.dropdown-content')
const ticket = document.querySelector('.ticket')
const ticketBtns = document.querySelectorAll('.ticket-btn')
const closeTicketBtn = document.querySelector('#close-ticket-btn')
const hamburgerBtn = document.querySelector('.hamburger-btn')
const hamburgerMenu = document.querySelector('.hamburger-menu')

dropdownBtn.addEventListener('click' , () => {
    dropdownContent.classList.toggle('toggle')
})

ticketBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        ticket.classList.add('open')
    })
})

closeTicketBtn.addEventListener('click', () => {
    ticket.classList.remove('open')
})

hamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('toggle')
    console.log('wdadawd')
})

// outside click

document.addEventListener('click', () => {
    let isClickedMenu = dropdownContent.contains(event.target);
    let isDropdownBtn = (event.target === dropdownBtn);

    if (!isClickedMenu && !isDropdownBtn) {
        dropdownContent.classList.remove('toggle');
    }
})