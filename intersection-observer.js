export default {
  data() {
    return {
      observer: null
    };
  },
  props: {
    refId: {
      type: String,
      default: ""
    }
  },
  mounted() {
    console.log(this.$refs);
    const customRootMargin = document.documentElement.clientHeight / 5;
    const options = {
      rootMargin: `-${customRootMargin}px`,
      threshold: [0.01]
    };
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("ob");
          this.observer.unobserve(entry.target);
        }
      });
    }, options);
    this.$nextTick(() => {
      this.observer.observe(this.$refs[this.refId]);
    });
  },
  onBeforeUnmount() {
    this.observer.disconnect();
  },
  template: `
    <div :ref="refId">
      <slot></slot>
    </div>
  `
};
