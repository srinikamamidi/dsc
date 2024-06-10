const { Builder, By, Key,until}=require("selenium-webdriver");
(async function example(){
   

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("http://www.google.com");
        await driver.wait(until.titleContains("Google"),10000);
        console.log('testcase 1 ');
        await driver.findElement(By.name("q")).sendKeys("Selenium",Key.RETURN);
        await driver.wait(until.titleContains('Selenium'),1000);
        console.log('testcase 2');
        const search = await driver.findElements(By.css('div.g'))
        console.log('Test Case 3 Passed: Found ${search.length} search results');
        const isSearch =   await driver.findElement(By.name("q"));
        const isS =  await isSearch.isDisplayed();
        console.log('Test Case 4 Passed : Found ${isS}');



    } catch (error) {
        console.log('Test Failed:', error);
    } finally {
        console.log("Quitting the browser...");
        await driver.quit();
     }
})();