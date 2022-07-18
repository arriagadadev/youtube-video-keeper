import { shallowMount } from "@vue/test-utils";
import LinkAdder from "@/components/LinkAdder.vue";

describe("LinkAdder.vue", () => {
  it("renders LinkAdder component", () => {
    const wrapper = shallowMount(LinkAdder);
    expect(wrapper.text()).toMatch("Añadir nuevo video");
  });
});

/* describe("HelloWorld.vue", () => {
  it("renders home page", () => {
    const msg = "new message";
    const wrapper = shallowMount(Home, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
}); */
