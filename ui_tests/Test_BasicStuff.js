Feature('Landing Page');

Scenario('I can see the landing page title', ({ I }) => {
    I.amOnPage("");
    I.wait(2)
    I.see("Athlete Skill Tracker");
    I.see("Gym: CF Allstars");

    I.click("Link");
    I.waitInUrl("#", 5);
});