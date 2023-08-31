// csillagok
window.addEventListener("DOMContentLoaded", () => {
  const starRating_2 = new StarRating_2("form");
});

class StarRating_2 {
  constructor(qs) {
    this.ratings_2 = [
      { id: 6, name: "Borzalmas" },
      { id: 7, name: "Rossz" },
      { id: 8, name: "Elmegy" },
      { id: 9, name: "Jó" },
      { id: 10, name: "Kiváló" },
    ];
    this.rating_2 = null;
    this.el = document.querySelector(qs);

    this.init();
  }
  init() {
    this.el?.addEventListener("change", this.updateRating_2.bind(this));

    // stop Firefox from preserving form data between refreshes
    try {
      this.el?.reset();
    } catch (err) {
      console.error("Element isn’t a form.");
    }
  }
  updateRating_2(e) {
    // clear animation delays
    Array.from(this.el.querySelectorAll(`[for*="rating_2"]`)).forEach((el) => {
      el.className = "rating_2__label";
    });

    const rating_2Object = this.ratings_2.find((r) => r.id === +e.target.value);
    const prevRating_2ID = this.rating_2?.id || 0;

    let delay = 0;
    this.rating_2 = rating_2Object;
    this.ratings_2.forEach((rating_2) => {
      const { id } = rating_2;

      // add the delays
      const rating_2Label = this.el.querySelector(`[for="rating_2-${id}"]`);

      if (id > prevRating_2ID + 1 && id <= this.rating_2.id) {
        ++delay;
        rating_2Label.classList.add(`rating_2__label--delay${delay}`);
      }

      // hide ratings to not read, show the one to read
      const rating_2TextEl = this.el.querySelector(`[data-rating="${id}"]`);

      if (this.rating_2.id !== id) rating_2TextEl.setAttribute("hidden", true);
      else rating_2TextEl.removeAttribute("hidden");
    });
  }
}
