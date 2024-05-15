class VideoPlayerFunctions {
  clickVideoButton(locator) {
    cy.get(locator, { timeout: 5000, includeShadowDom: true }).click({
      force: true,
    });
  }

  assertAttributeFalse(locator) {
    cy.get(locator, { includeShadowDom: true }).should(
      "have.attr",
      "aria-hidden",
      "false"
    );
  }

  assertAttribute(locator, attrValue) {
    cy.get(locator, { includeShadowDom: true })
      .eq(1)
      .should("have.attr", "aria-valuetext", attrValue);
  }

  getValuePlaybackSpeed(locator, speedValue) {
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

  toggleOnAssertion(locator, doContain){
    cy.get(locator, { includeShadowDom: true }).should(
        doContain,
        "toggle_on"
      );
  }
}

export default VideoPlayerFunctions;
