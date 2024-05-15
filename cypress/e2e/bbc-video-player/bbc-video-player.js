/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import VideoPlayerFunctions from "../../support/pageObject/bbc-video/bbc-video-main-functions";
import { bbcVideoLocators } from "../../support/pageObject/bbc-video/bbc-video-locators";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify video fuctionality", () => {
  const mainFunctions = new MainFunctions();
  const videoPlayerFunctions = new VideoPlayerFunctions();

  beforeEach(() => {
    mainFunctions.beforeEachRoutine();
    mainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Video");
    mainFunctions.assertURL("/video");
    cy.wait(8000);
    mainFunctions.acceptCookies();
    cy.wait(15000);
    mainFunctions.closePopUpWindow();
    cy.wait(2000);
    
  });

  it("Verify that video will stop and play on click", () => {
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.PAUSE_BUTTON);
    videoPlayerFunctions.assertAttributeFalse(bbcVideoLocators.PLAY_BUTTON);
    cy.wait(2000);
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.PLAY_BUTTON);
    videoPlayerFunctions.assertAttributeFalse(bbcVideoLocators.PAUSE_BUTTON);
  });

  it("Verify that video 10 seconds forward and backward buttons work correctly", () => {
    cy.wait(2000);
    cy.get(bbcVideoLocators.TIME_CURRENT, { includeShadowDom: true })
      .shadow()
      .find(bbcVideoLocators.TIME_TEXT, { includeShadowDom: true })
      .then(($timeEl) => {
        const timeText = $timeEl[0].innerHTML;
        videoPlayerFunctions.clickVideoButton(
          bbcVideoLocators.FORWARD_TEN_SECOND_BUTTON
        );
        videoPlayerFunctions.clickVideoButton(
          bbcVideoLocators.FORWARD_TEN_SECOND_BUTTON
        );
        videoPlayerFunctions.clickVideoButton(
          bbcVideoLocators.BACK_TEN_SECOND_BUTTON
        );
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
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.SOUND_BUTTON_MUTE);
    videoPlayerFunctions.assertAttribute(
      bbcVideoLocators.SOUND_VOLUME_SLIDE_BAR,
      "Muted"
    );
    cy.wait(4000);
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.SOUND_BUTTON_UNMUTE);
    videoPlayerFunctions.assertAttribute(
      bbcVideoLocators.SOUND_VOLUME_SLIDE_BAR,
      "Volume level 8"
    );
    cy.wait(2000);
  });

  it("Verify that video  responsive to have playback speed 2x and 0.5", () => {
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.PLAYBACK_SPEED_2X);
    cy.wait(4000);
    videoPlayerFunctions.getValuePlaybackSpeed(
      bbcVideoLocators.PLAYBACK_SPEED_TEXT,
      "2"
    );
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.PLAYBACK_SPEED_05X);
    cy.wait(2000);
    videoPlayerFunctions.getValuePlaybackSpeed(
      bbcVideoLocators.PLAYBACK_SPEED_TEXT,
      "0.5"
    );
  });

  it("Verify that autoplay can be turned off/turned on", () => {
    videoPlayerFunctions.clickVideoButton(
      bbcVideoLocators.PLAYBACK_SETTINGS_MENU
    );
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.AUTOPLAY_TOGGLE);
    videoPlayerFunctions.toggleOnAssertion(
      bbcVideoLocators.AUTOPLAY_TOGGLE,
      "not.contain"
    );
    cy.wait(2000);

    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.AUTOPLAY_TOGGLE);
    videoPlayerFunctions.toggleOnAssertion(
      bbcVideoLocators.AUTOPLAY_TOGGLE,
      "have.class"
    );
  });

  it("Verify that video response to turn off subtitles/turn on subtitles", () => {
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.SUBTITLES_MENU);
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.SUBTITLES_TOGGLE);
    videoPlayerFunctions.toggleOnAssertion(
      bbcVideoLocators.SUBTITLES_TOGGLE,
      "not.contain"
    );
    cy.wait(4000);
    videoPlayerFunctions.clickVideoButton(bbcVideoLocators.SUBTITLES_MENU);
    videoPlayerFunctions.toggleOnAssertion(
      bbcVideoLocators.SUBTITLES_TOGGLE,
      "have.class"
    );
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
  //   cy.get('[aria-label="Enter full screen"]', { includeShadowDom: true })
  //     .trigger("mouseover")
  //     .realClick();

  //   // Check if the video layout has the "fullscreen" class
  //   cy.get("smp-video-layout").should("have.class", "fullscreen");

  //   // Call your function to handle exiting full screen mode
  //   mainFunctions.clickVideoButton('[aria-label="Exit full screen"]');

  //   // Add assertions for other elements or behaviors after exiting full screen mode
  //   cy.get(".seek_bar_accessible_slider", { includeShadowDom: true })
  //     .eq(1)
  //     .should("have.attr", "aria-valuetext", "Volume level 8");
  // });

  // Video handler do not work
  // it.only("Verify that video  response to picture mode", () => {
  //   mainFunctions.clickVideoButton('[aria-label="Open Picture in Picture mode"]');
  //   cy.wait(5000)
  //   mainFunctions.clickVideoButton('[aria-label="Pause"]');
  //   cy.wait(2000)
  //   mainFunctions.clickVideoButton('[aria-label="Play"]');
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
  //   addSkip() {
  //   cy.get(mainFunctionLocators.BBC_BODY).then(($body) => {
  //     if (
  //       $body
  //         .find("#smp-ads-wrapper", { includeShadowDom: true })
  //         .is(":visible")
  //     ) {
  //       cy.get("#smp-ads-wrapper", { includeShadowDom: true }).then(
  //         ($adsControls) => {
  //           cy.waitUntil(() => $adsControls.should("not.be.visible"));
  //         }
  //       );
  //     }
  //   });
  // }
});
