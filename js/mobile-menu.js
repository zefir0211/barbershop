(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobile-modal-open]"),
      closeModalBtn: document.querySelector("[data-mobile-modal-close]"),
      closeModalBtn1: document.querySelector("[data-mobile-modal-close-1]"),
      closeModalBtn2: document.querySelector("[data-mobile-modal-close-2]"),
      closeModalBtn3: document.querySelector("[data-mobile-modal-close-3]"),
      closeModalBtn4: document.querySelector("[data-mobile-modal-close-4]"),
      closeModalBtn5: document.querySelector("[data-mobile-modal-close-5]"),
      modal: document.querySelector("[data-mobile-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn1.addEventListener("click", toggleModal);
    refs.closeModalBtn2.addEventListener("click", toggleModal);
    refs.closeModalBtn3.addEventListener("click", toggleModal);
    refs.closeModalBtn4.addEventListener("click", toggleModal);
    refs.closeModalBtn5.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();