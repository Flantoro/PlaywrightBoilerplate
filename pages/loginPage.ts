import { expect, type Locator, type Page } from "@playwright/test";

export class loginPage {
  readonly page: Page;
  readonly usernameInputField: Locator;
  readonly passwordInputField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInputField = page.locator("[data-test='username']");
    this.passwordInputField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[id='login-button']");
  }

  async goto() {
    await this.page.goto("");
  }

  async standartUserLogin() {
    await this.usernameInputField.fill("standard_user");
    await this.passwordInputField.fill("secret_sauce");
    await this.loginButton.click();
  }

  async lockedUserLogin() {
    await this.usernameInputField.fill("locked_out_user");
    await this.passwordInputField.fill("secret_sauce");
    await this.loginButton.click();
  }
}
