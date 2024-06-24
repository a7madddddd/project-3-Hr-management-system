

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();




  // form 1 contact
// document.getElementById("form1").addEventListener("submit", (event)=>{
  
//   const firstName = document.getElementById('firstname').value
//   const lastName = document.getElementById('lastname').value
//   const phone = document.getElementById('phone').value
//   const email = document.getElementById('email').value
//   const subject = document.getElementById('subject').value
//   const description = document.getElementById('description').value


//   // form 1 contact storage
//   localStorage.setItem('First Name', firstName);
//   localStorage.setItem('Last Name', lastName);
//   localStorage.setItem('Phone', phone);
//   localStorage.setItem('Email', email);
//   localStorage.setItem('Subject', subject);
//   localStorage.setItem('Description', description);

//   alert('Your contact response has been recorded.!')
//   event.defaultPrevented();
// });


//   // form 2 feedback
//   document.getElementById('form2').addEventListener('submit', (x)=>{
    
    
//    const userName = document.getElementById('username').value
//    const date = document.getElementById('date').value
//    const position = document.getElementById('position').value
//    const email2 = document.getElementById('email2').value
//    const problems =  document.getElementById('problems').value
//    const description = document.getElementById('description2').value

//     // form 2 feedback storage
//     localStorage.setItem('User Name', userName)
//     localStorage.setItem('Date', date)
//     localStorage.setItem('Position', position)
//     localStorage.setItem('Email', email2)
//     localStorage.setItem('Problem', problems)
//     localStorage.setItem('Description', description)

//     alert('Your feedback response has been recorded.!')
//     x.defaultPrevented();

//   });

// 





  // form 1 contact




//////////////////////////////////////////////////////////////////////
// 
// 
//   // form 2 feedback
document.getElementById('form2').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way
    
  let form2=[];

  // Load employee data from JSON file
  fetch('../../info page/employees.json')
  .then(response => response.json())
  .then(data => {
      // Display all employees initially
      const employeeNameForFeedback = document.getElementById('username');
      // Filter employees based on search input
      
          const searchTerm = employeeNameForFeedback .value.toLowerCase();
          const filteredEmployeesForFeedback = data.filter(employee => 
              employee.name.toLowerCase().includes(searchTerm) ||
              employee.position.toLowerCase().includes(searchTerm) ||
              employee.department.toLowerCase().includes(searchTerm)
              // Add more fields for searching as needed
          );
          console.log(filteredEmployeesForFeedback);
     
  
          if (filteredEmployeesForFeedback.length === 0) {
            console.log('No employees found matching the search criteria.');

            const employeeName = document.getElementById('username').value;
            const email = document.getElementById('email2').value;
            const employeePosition=document.getElementById('position').value;
            const employeeImage= "../../Images/no_person.png";
            const date = document.getElementById('date').value;
            const description = document.getElementById('description2').value;
            

     form2={
      name:employeeName,
      date:date,
      position:employeePosition,
      email:email,
      problems:problems,
      description:description,
      image:employeeImage,
    }
    console.log(form2);
        
        
          } else {
            console.log('Filtered employees:', filteredEmployeesForFeedback);
        

          const employeeName = filteredEmployeesForFeedback[0].name;
          const email = document.getElementById('email2').value;
          const employeePosition=filteredEmployeesForFeedback[0].position;
          const employeeImage=filteredEmployeesForFeedback[0].image;
          const date = document.getElementById('date').value;
          const description = document.getElementById('description2').value;



     form2={
      name:employeeName,
      date:date,
      position:employeePosition,
      email:email,
      problems:problems,
      description:description,
      image:employeeImage,
    }
          
        }


 


    let feedback_array2= JSON.parse(localStorage.getItem('feedback_array2')) || []
    console.log(`fsdfdsfdsfs${feedback_array2}`);
  


    feedback_array2.push(form2)
    localStorage.setItem('feedback_array2', JSON.stringify(feedback_array2))

    alert('Your feedback response has been recorded.!')
    x.defaultPrevented();

  })
  .catch(error => {
    console.error('Error fetching or processing data:', error);
    // Handle errors from fetch or data processing
  });




 document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('itemForm');
            const input = document.getElementById('itemInput');
            const cardContainer = document.getElementById('cardContainer');

            // Function to create and display cards
            const createCard = (text) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.textContent = text;
                cardContainer.appendChild(card);
            };

            // Add item and display as card
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const itemText = input.value.trim();
                if (itemText) {
                    createCard(itemText);
                    input.value = '';
                }
            });
        });
     
    })

