import { computed as e } from "vue";
function h(n, a) {
  return {
    displayValue: e(() => ""),
    handleIncrease: () => {
      console.log("增加");
    },
    handleDecrease: () => {
      console.log("减少");
    },
    handleFocus: () => {
    },
    handleBlur: () => {
    },
    handleInput: () => {
    },
    handleChange: () => {
    }
  };
}
export {
  h as default
};
