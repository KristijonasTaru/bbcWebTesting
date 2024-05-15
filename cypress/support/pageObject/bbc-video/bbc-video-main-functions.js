export default class VideoPlayerFunctions {
  static clickVideoButton(locator) {
    cy.get(locator, { timeout: 5000, includeShadowDom: true }).click({
      force: true,
    });
  }

  static assertAttributeFalse(locator) {
    cy.get(locator, { includeShadowDom: true }).should(
      "have.attr",
      "aria-hidden",
      "false"
    );
  }

  static assertAttribute(locator, attrValue) {
    cy.get(locator, { includeShadowDom: true })
      .eq(1)
      .should("have.attr", "aria-valuetext", attrValue);
  }

  static getValuePlaybackSpeed(locator, speedValue) {
    cy.get(locator, {
      includeShadowDom: true,
    })
      .invoke("text")
      .then((text) => {
        const equalVal = text.split("×");
        const firstValue = equalVal[0].trim();
        expect(firstValue).to.equal(speedValue);
      });
  }

  static toggleOnAssertion(locator, doContain){
    cy.get(locator, { includeShadowDom: true }).should(
        doContain,
        "toggle_on"
      );
  }
}

