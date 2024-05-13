/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/Main_Functions";
import { homeLocators } from "../../support/pageObject/locators/bbc-home-navigation-locators/home-navigation-locators";
import { bbcVideoLocators } from "../../support/pageObject/locators/bbc-video-locators/bbc-video-locators";

describe("Verify video fuctionality", () => {
  const mainFunctions = new MainFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Video");
    mainFunctions.assertURL("/video");
    cy.wait(20000);
    mainFunctions.registerPopUp();
  });

  it("Verify that video will stop and play on click", () => {
    mainFunctions.videoHandler(bbcVideoLocators.PAUSE_BUTTON);
    cy.get(bbcVideoLocators.PLAY_BUTTON, { includeShadowDom: true }).should(
      "have.attr",
      "aria-hidden",
      "false"
    );
    cy.wait(2000);
    mainFunctions.videoHandler(bbcVideoLocators.PLAY_BUTTON);
    cy.get(bbcVideoLocators.PAUSE_BUTTON, { includeShadowDom: true }).should(
      "have.attr",
      "aria-hidden",
      "false"
    );
  });

  it("Verify that video 10 seconds forward and backward buttons work correctly", () => {
    cy.wait(2000);
    cy.get(bbcVideoLocators.TIME_CURRENT, { includeShadowDom: true })
      .shadow()
      .find(bbcVideoLocators.TIME_TEXT, { includeShadowDom: true })
      .then(($timeEl) => {
        const timeText = $timeEl[0].innerHTML;
        mainFunctions.videoHandler(bbcVideoLocators.FORWARD_TEN_SECOND_BUTTON);
        mainFunctions.videoHandler(bbcVideoLocators.FORWARD_TEN_SECOND_BUTTON);
        mainFunctions.videoHandler(bbcVideoLocators.BACK_TEN_SECOND_BUTTON);
        cy.get(bbcVideoLocators.TIME_CURRENT, { includeShadowDom: true })
          .shadow()
          .find(bbcVideoLocators.TIME_TEXT, { includeShadowDom: true })
          .then(($endTime) => {
            const afterTime = $endTime[0].innerHTML;
            expect(timeText).to.be.not.equal(afterTime);
          });
      });
  });

  it("Verify that video responsive to volume mute/unmute", () => {
    mainFunctions.videoHandler(bbcVideoLocators.SOUND_BUTTON_MUTE);
    cy.get(bbcVideoLocators.SOUND_VOLUME_SLIDE_BAR, { includeShadowDom: true })
      .eq(1)
      .should("have.attr", "aria-valuetext", "Muted");
    cy.wait(4000);
    mainFunctions.videoHandler(bbcVideoLocators.SOUND_BUTTON_UNMUTE);
    cy.get(bbcVideoLocators.SOUND_VOLUME_SLIDE_BAR, { includeShadowDom: true })
      .eq(1)
      .should("have.attr", "aria-valuetext", "Volume level 8");
    cy.wait(4000);
  });

  it("Verify that video  responsive to have playback speed 2x and 0.5", () => {
    mainFunctions.videoHandler(bbcVideoLocators.PLAYBACK_SPEED_2X);
    cy.wait(4000);
    cy.get(bbcVideoLocators.PLAYBACK_SPEED_TEXT, {
      includeShadowDom: true,
    })
      .invoke("text")
      .then((text) => {
        const equalVal = text.split("×");
        const firstValue = equalVal[0].trim();
        expect(firstValue).to.equal("2");
      });
    mainFunctions.videoHandler(bbcVideoLocators.PLAYBACK_SPEED_05X);
    cy.wait(2000);
    cy.get(bbcVideoLocators.PLAYBACK_SPEED_TEXT, {
      includeShadowDom: true,
    })
      .invoke("text")
      .then((text) => {
        const equalVal = text.split("×");
        const firstValue = equalVal[0].trim();
        expect(firstValue).to.equal("0.5");
      });
  });

  it("Verify that autoplay can be turned off/turned on", () => {
    mainFunctions.videoHandler(bbcVideoLocators.PLAYBACK_SETTINGS_MENU);
    mainFunctions.videoHandler(bbcVideoLocators.AUTOPLAY_TOGGLE);
    cy.get(bbcVideoLocators.AUTOPLAY_TOGGLE, { includeShadowDom: true }).should(
      "not.contain",
      "toggle_on"
    );
    cy.wait(2000);

    mainFunctions.videoHandler(bbcVideoLocators.AUTOPLAY_TOGGLE);
    cy.get(bbcVideoLocators.AUTOPLAY_TOGGLE, { includeShadowDom: true }).should(
      "have.class",
      "toggle_on"
    );
  });

  it("Verify that video response to turn off subtitles/turn on subtitles", () => {
    mainFunctions.videoHandler(bbcVideoLocators.SUBTITLES_MENU);
    mainFunctions.videoHandler(bbcVideoLocators.SUBTITLES_TOGGLE);
    cy.get(bbcVideoLocators.SUBTITLES_TOGGLE, {
      includeShadowDom: true,
    }).should("not.contain", "toggle_on");
    cy.wait(4000);
    mainFunctions.videoHandler(bbcVideoLocators.SUBTITLES_MENU);
    cy.get(bbcVideoLocators.SUBTITLES_TOGGLE, {
      includeShadowDom: true,
    }).should("have.class", "toggle_on");
    cy.wait(2000);
  });

  it("Verify that user can play next video manually", () => {
    cy.get(bbcVideoLocators.SIDE_VIDEOS_HEADERS)
      .first()
      .then(($firstVideoText) => {
        const firstVideoText = $firstVideoText.text();
        cy.get(bbcVideoLocators.SIDE_VIDEOS).first().click();
        cy.get(bbcVideoLocators.MAIN_VIDEO_HEADER).should(
          "have.text",
          firstVideoText
        );
      });
  });

  // Video handler do not work
  // it.only("Verify that video  response screen size changes", () => {
  //   // Trigger the click event on the full screen button

  // cy.get("#smp-ads-controls", { includeShadowDom: true }).then(
  //   ($adsControls) => {
  //     if ($adsControls.length > 0) {
  //       cy.waitUntil(() => $adsControls.should("not.be.visible"));
  //     } else {
  //       mainFunctions.videoHandler('[aria-label="Skip forward 10 seconds"]');
  //     }
  //   }
  // );

  //   cy.get('[aria-label="Enter full screen"]', { includeShadowDom: true })
  //     .trigger("mouseover")
  //     .realClick();

  //   // Check if the video layout has the "fullscreen" class
  //   cy.get("smp-video-layout").should("have.class", "fullscreen");

  //   // Call your function to handle exiting full screen mode
  //   mainFunctions.videoHandler('[aria-label="Exit full screen"]');

  //   // Add assertions for other elements or behaviors after exiting full screen mode
  //   cy.get(".seek_bar_accessible_slider", { includeShadowDom: true })
  //     .eq(1)
  //     .should("have.attr", "aria-valuetext", "Volume level 8");
  // });

  // Video handler do not work
  // it.only("Verify that video  response to picture mode", () => {
  //   mainFunctions.videoHandler('[aria-label="Open Picture in Picture mode"]');
  //   cy.wait(5000)
  //   mainFunctions.videoHandler('[aria-label="Pause"]');
  //   cy.wait(2000)
  //   mainFunctions.videoHandler('[aria-label="Play"]');
  //   cy.wait(50000)
  // });

  // volume control only visibly can be changed
  //   it.only("Verify that video  responsive to volume min max levels", () => {
  //     cy.get('[aria-label="Mute"]' , { includeShadowDom: true }).trigger("mouseover");
  //     cy.wait(1000)
  //     cy.get(".seek_bar_line_indicator", { includeShadowDom: true }).eq(1).trigger("mouseover");
  //     cy.wait(1000)
  //     cy.get("smp-volume-slider", { includeShadowDom: true })
  //       .should("have.attr", "interacting")
  //       .should("have.attr", "hovering");

  //     cy.get(".seek_bar_line_indicator", { includeShadowDom: true }).should("be.visible");
  //     cy.wait(1000)
  //     cy.get(".seek_bar_line_indicator", { includeShadowDom: true }).then($el => {
  //         const rect = $el[0].getBoundingClientRect();
  //         console.log(rect);
  //       });
  //     cy.get(".seek_bar_line_indicator", { includeShadowDom: true })
  //       .invoke("attr", "style", "left: 1px; visibility: visible;")
  //       .click(1, 1);

  //         cy.get(".seek_bar_accessible_slider", { includeShadowDom: true })
  //           .eq(1) // If you have multiple volume controls, adjust the index
  //           .focus() // Ensure the element has focus before typing
  //           .type("{rightarrow}");

  //         cy.wait(1000);
  //         cy.get(".seek_bar_accessible_slider", { includeShadowDom: true })
  //           .eq(1)
  //           .should("have.attr", "aria-valuetext", "Volume level 7");

  //         cy.get(".seek_bar_slider", { includeShadowDom: true })
  //           .eq(1)
  //           .invoke(
  //             "attr",
  //             "style",
  //             "--smp-seek-bar-slider-initial-left: -6px; left: calc(9% - 6px);"
  //           );
  //         cy.get(".seek_bar_progress", { includeShadowDom: true })
  //           .eq(1)
  //           .invoke("attr", "style", "width: 11%;");
  //         cy.get(".number_wrap > .number_span", { includeShadowDom: true })
  //           .eq(1)
  //           .invoke("text", 1);
  //         cy.wait(1000);
  //         cy.get(".seek_bar_accessible_slider", { includeShadowDom: true })
  //           .eq(1)
  //           .should("have.attr", "aria-valuetext", "Volume level 1");
  //   });
});
