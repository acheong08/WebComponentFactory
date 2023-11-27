(async () => {
  const module = await import(
    "https://cdn.jsdelivr.net/gh/g-utils/WebComponentFactory/wcf.js"
  );
  const { register_component } = module;
  register_component("test-wcf", "test_wcf.html", false);
  register_component("test-wcf-shadow", "test_wcf_shadow.html", true);
})();
