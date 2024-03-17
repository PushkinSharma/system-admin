// Function to show the filter modal
// Function to show the filter modal with custom content
function showFilterModal(filterIconId, modalContent, modalHeader) {
  var filterIcon = document.getElementById(filterIconId);
  filterIcon.addEventListener("click", function () {
    var modal = document.getElementById("filterModal");
    var modalInstance = new bootstrap.Modal(modal);

    // Set modal content
    var modalContentContainer = document.getElementById("filterModalContent");
    var modalHeaderContainer = document.getElementById("filterModalHeader");
    modalContentContainer.innerHTML = modalContent;
    modalHeaderContainer.innerHTML = modalHeader;

    modalInstance.show();
  });
}

// Configuration for filter modal 1 (Status)
var filterContent1 = `
    <form class="px-5">
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-3" type="checkbox" value="" id="option1">
        <label class="form-check-label" for="option1">
          Active
        </label>
      </div>
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-3" type="checkbox" value="" id="option2">
        <label class="form-check-label" for="option2">
          Expired
        </label>
      </div>
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-3" type="checkbox" value="" id="option2">
        <label class="form-check-label" for="option2">
          Activation Pending
        </label>
      </div>
    </form>
  `;

var filterHeader1 = `
    <h5 class="modal-title" id="filterModalLabel">Filter by Status</h5>
    `;

// Configuration for filter modal 2 (Payment Status)
var filterContent2 = `
    <form class="px-5">
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-3" type="checkbox" value="" id="option1">
        <label class="form-check-label" for="option1">
          Overdue
        </label>
      </div>
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-3" type="checkbox" value="" id="option2">
        <label class="form-check-label" for="option2">
          Due this week
        </label>
      </div>
      <div class="form-check d-flex align-items-center">
      <input class="form-check-input me-3" type="checkbox" value="" id="option1">
      <label class="form-check-label" for="option1">
        Due this month
      </label>
        </div>
        <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-3" type="checkbox" value="" id="option1">
        <label class="form-check-label" for="option1">
        Due this quarter
        </label>
        </div>
    <div class="form-check d-flex align-items-center">
    <input class="form-check-input me-3" type="checkbox" value="" id="option1">
    <label class="form-check-label" for="option1">
        Paid
    </label>
    </div>
    </form>
  `;

var filterHeader2 = `
    <h5 class="modal-title" id="filterModalLabel">Filter by Payment</h5>
    `;

// Attach click event listeners to filter icons with respective modal content
showFilterModal("filterStatus", filterContent1, filterHeader1);
showFilterModal("filterPayment", filterContent2, filterHeader2);
