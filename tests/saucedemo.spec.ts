import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { inventoryPage } from "../pages/inventoryPage";
import { cartPage } from "../pages/cartPage";
import { checkoutPage } from "../pages/checkoutPage";
import { RandomData } from "../helpers/RandomData";
import Credentials from "../helpers/Credentials.json";

let login: loginPage;
let inventory: inventoryPage;
let cart: cartPage;
let checkout: checkoutPage;
let randomData: RandomData;
let firstName: string;
let lastName: string;

test.beforeEach(async ({ page }) => {
  login = new loginPage(page);
  inventory = new inventoryPage(page);
  cart = new cartPage(page);
  checkout = new checkoutPage(page);
  randomData = new RandomData();
  firstName = randomData.generateRandomString();
  lastName = randomData.generateRandomString();
});

test("Verify the purchase path", async ({ page }) => {
  await login.goto();
  await login.standartUserLogin();

  await inventory.checkIfThePageIsOpened(page);
  await inventory.addBackpackToCart();
  await inventory.clickOnTheCart();

  await cart.checkIfCartIsOpened(page);
  await cart.clickOnTheContinueShopButton();

  await inventory.checkIfThePageIsOpened(page);
  await inventory.addBikeLightToCart();
  await inventory.clickOnTheCart();

  await cart.clickOnTheCheckoutButton();

  await checkout.fillCheckputFormFileds(
    firstName,
    lastName,
    Credentials.zipCode
  );
  await checkout.clickOnContinueButton();
  await checkout.clickOnTheFinishButton();

  await checkout.checkIfOrderCompleted(page);
});

test("Locked User Login", async ({ page }) => {
  const login = new loginPage(page);
  await login.goto();
  await login.lockedUserLogin();
  expect(page.url()).not.toEqual(Credentials.inventoryLink);
});
