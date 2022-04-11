(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    // mobileBodyRef: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    // refs.mobileBodyRef.classList.toggle("scroll");
  }
})();

(() => {
const {
  height: pageHaderHeidth
} = document
  .querySelector(".header")
  .getBoundingClientRect();

document.main.style.paddingTop = `${pageHaderHeidth}px`;
})();

// (() => {
// const outer = document.createElement("[backdrop]");
// const inner = document.createElement("[backdrop]");
// outer.style.overflow = 'scroll';
// document.body.appendChild(outer);
// outer.appendChild(inner);
// const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
// document.body.removeChild(outer);
// })();

function bodyLock(){
  const LockPaddingValue = window.indexWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  for (let index = 0; index < LockPadding.length; index++) {
    const el = LockPadding[index];
    el.style.paddingRight = LockPaddingValue;
  }
  body.style.paddingRight = LockPaddingValue;
  body.classList.add('scroll');

};
