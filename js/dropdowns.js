// Data for input fields with dropdowns
const inputFieldsData = [
    {
      placeholder: 'Country',
      dropdownItems: ['USA', 'Canada', 'UK']
    },
    // {
    //   placeholder: 'City',
    //   dropdownItems: ['New York', 'Los Angeles', 'Toronto', 'London']
    // },
    // Add more objects for additional input fields
  ];
  
  // Function to generate HTML for input field with dropdown
  function generateInputFieldHTML(placeholder, dropdownItems) {
    let dropdownItemsHTML = '';
    dropdownItems.forEach(item => {
      dropdownItemsHTML += `<li><a class="dropdown-item" href="#" data-value="${item}">${item}</a></li>`;
    });
  
    return `
        <input type="text" placeholder="${placeholder}" />
        <span class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            transform="rotate(90)"
          >
            <path
              d="M7.42499 16.6L12.8583 11.1667C13.5 10.525 13.5 9.475 12.8583 8.83334L7.42499 3.4"
              stroke="#6B7280"
              stroke-width="1.3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
  
        <ul class="dropdown-menu mt-3">
          ${dropdownItemsHTML}
        </ul>
      
    `;
  }
  
  // Function to create input fields with dropdowns
  function createInputFields() {
    const inputFieldsContainer = document.getElementById('inputFieldsContainer');
    
    // Loop through inputFieldsData and create input fields
    inputFieldsData.forEach(field => {
      const inputFieldHTML = generateInputFieldHTML(field.placeholder, field.dropdownItems);
      inputFieldsContainer.insertAdjacentHTML('beforeend', inputFieldHTML);
    });
  
    // Add event listener to dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function() {

        event.preventDefault();
        const selectedValue = this.getAttribute('data-value');
        this.closest('.dropdown').querySelector('input[type="text"]').value = selectedValue;
      });
    });
  }
  
  // Call the function to create input fields with dropdowns
  createInputFields();
  