const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
i = 0;


(async function example() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {
        do {
            await driver.get("https://iedu.maknon.org.sa/web/login")
            await driver.manage().window().setRect({ width: 550, height: 694 })
            await driver.findElement(By.id("login")).click()
            await driver.findElement(By.id("login")).sendKeys("2398870937")
            await driver.findElement(By.id("password")).click()
            await driver.findElement(By.id("password")).sendKeys("8462")
            await driver.findElement(By.css(".btn-primary")).click()
            i++
        } while (i < 100)
    } finally {
        await driver.quit();
    }
})();

