function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

describe("Hello Tauri", () => {
  it("should work", async () => {
    const button = await $("button");
    button.click();
    await sleep(5000);
    const div = await $("div");
    const text = await div.getText();
    expect(text).toMatch(/^foo$/);
  });
});
