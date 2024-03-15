// your-script.js
window.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("modal-container");
  fetch("modal.html")
    .then((response) => response.text())
    .then((modalHTML) => {
      modalContainer.innerHTML = modalHTML;
      const dynamicModal = new bootstrap.Modal("#dynamicModal");

      // Example buttons to trigger different modals
      const logoutBtn = document.getElementById("logoutBtn");
      const confirmChangesBtn = document.getElementById("confirmChangesBtn");

      logoutBtn.addEventListener("click", () =>
        showModal(
          "Logout Confirmation",
          "Are you sure you want to log out?",
          '<button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button><button type="button" class="btn btn-accept" id="confirmLogoutBtn">Logout</button>'
        )
      );

      if (confirmChangesBtn) {
        confirmChangesBtn.addEventListener("click", () =>
          showModal(
            "Confirm Changes",
            "Do you want to save the changes?",
            '<button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button><button type="button" class="btn btn-accept" id="confirmChangesBtn">Save Changes</button>'
          )
        );
      }

      // Check if the element with ID 'confirmInviteBtn' exists before adding the event listener
      const confirmInviteBtn = document.getElementById("confirmInviteBtn");
      if (confirmInviteBtn) {
        confirmInviteBtn.addEventListener("click", () =>
          showModal(
            "Confirm Invites",
            "Do you want to send the invites?",
            '<button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button><button type="button" class="btn btn-accept" id="confirmInviteBtn">Send Invite</button>'
          )
        );
      }

      // Check if the element with ID 'confirmEditBtn' exists before adding the event listener
      const confirmEditBtn = document.getElementById("confirmEditBtn");
      if (confirmEditBtn) {
        confirmEditBtn.addEventListener("click", () =>
          showModal(
            "Confirm Edit",
            "Do you want to save the changes?",
            '<button type="button" class="btn btn-cancel" data-bs-dismiss="modal">Cancel</button><button type="button" class="btn btn-accept" id="confirmEditBtn">Save Changes</button>'
          )
        );
      }

      function showModal(title, body, footer) {
        const dynamicModalLabel = document.getElementById("dynamicModalLabel");
        const dynamicModalBody = document.getElementById("dynamicModalBody");
        const dynamicModalFooter =
          document.getElementById("dynamicModalFooter");

        if (dynamicModalLabel && dynamicModalBody && dynamicModalFooter) {
          dynamicModalLabel.textContent = title;
          dynamicModalBody.innerHTML = body;
          dynamicModalFooter.innerHTML = footer;

          dynamicModal.show();
        } else {
          console.error("Modal elements not found in the DOM.");
        }
      }
    })
    .catch((error) => console.error("Error loading modal:", error));
});
