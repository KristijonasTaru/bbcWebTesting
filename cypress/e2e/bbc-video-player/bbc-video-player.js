/// <reference types="Cypress" />
import MainFunctions from "../../support/pageObject/main-functions";
import VideoPlayerFunctions from "../../support/pageObject/bbc-video/bbc-video-main-functions";
import { bbcVideoLocators } from "../../support/pageObject/bbc-video/bbc-video-locators";
import { homeLocators } from "../../support/pageObject/bbc-home-navigation/home-navigation-locators";

describe("Verify video fuctionality", () => {

  beforeEach(() => {
    MainFunctions.beforeEachRoutine();
    MainFunctions.clickLink(homeLocators.LINKS_NAVBAR, "Video");
    MainFunctions.assertURL("/video");
    cy.wait(8000);
    MainFunctions.acceptCookies();
    cy.wait(15000);
    MainFunctions.closePopUpWindow();
    cy.wait(2000);
    
  });

  it("Verify that video will stop and play on click", () => {
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.PAUSE_BUTTON);
    VideoPlayerFunctions.assertAttributeFalse(bbcVideoLocators.PLAY_BUTTON);
    cy.wait(2000);
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.PLAY_BUTTON);
    VideoPlayerFunctions.assertAttributeFalse(bbcVideoLocators.PAUSE_BUTTON);
  });

  it("Verify that video 10 seconds forward and backward buttons work correctly", () => {
    cy.wait(2000);
    cy.get(bbcVideoLocators.TIME_CURRENT, { includeShadowDom: true })
      .shadow()
      .find(bbcVideoLocators.TIME_TEXT, { includeShadowDom: true })
      .then(($timeEl) => {
        const timeText = $timeEl[0].innerHTML;
        VideoPlayerFunctions.clickVideoButton(
          bbcVideoLocators.FORWARD_TEN_SECOND_BUTTON
        );
        VideoPlayerFunctions.clickVideoButton(
          bbcVideoLocators.FORWARD_TEN_SECOND_BUTTON
        );
        VideoPlayerFunctions.clickVideoButton(
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
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.SOUND_BUTTON_MUTE);
    VideoPlayerFunctions.assertAttribute(
      bbcVideoLocators.SOUND_VOLUME_SLIDE_BAR,
      "Muted"
    );
    cy.wait(4000);
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.SOUND_BUTTON_UNMUTE);
    VideoPlayerFunctions.assertAttribute(
      bbcVideoLocators.SOUND_VOLUME_SLIDE_BAR,
      "Volume level 8"
    );
    cy.wait(2000);
  });

  it("Verify that video  responsive to have playback speed 2x and 0.5", () => {
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.PLAYBACK_SPEED_2X);
    cy.wait(4000);
    VideoPlayerFunctions.getValuePlaybackSpeed(
      bbcVideoLocators.PLAYBACK_SPEED_TEXT,
      "2"
    );
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.PLAYBACK_SPEED_05X);
    cy.wait(2000);
    VideoPlayerFunctions.getValuePlaybackSpeed(
      bbcVideoLocators.PLAYBACK_SPEED_TEXT,
      "0.5"
    );
  });

  it("Verify that autoplay can be turned off/turned on", () => {
    VideoPlayerFunctions.clickVideoButton(
      bbcVideoLocators.PLAYBACK_SETTINGS_MENU
    );
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.AUTOPLAY_TOGGLE);
    VideoPlayerFunctions.toggleOnAssertion(
      bbcVideoLocators.AUTOPLAY_TOGGLE,
      "not.contain"
    );
    cy.wait(2000);

    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.AUTOPLAY_TOGGLE);
    VideoPlayerFunctions.toggleOnAssertion(
      bbcVideoLocators.AUTOPLAY_TOGGLE,
      "have.class"
    );
  });

  it("Verify that video response to turn off subtitles/turn on subtitles", () => {
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.SUBTITLES_MENU);
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.SUBTITLES_TOGGLE);
    VideoPlayerFunctions.toggleOnAssertion(
      bbcVideoLocators.SUBTITLES_TOGGLE,
      "not.contain"
    );
    cy.wait(4000);
    VideoPlayerFunctions.clickVideoButton(bbcVideoLocators.SUBTITLES_MENU);
    VideoPlayerFunctions.toggleOnAssertion(
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
});
