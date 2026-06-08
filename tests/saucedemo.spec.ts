import { test, expect } from "@playwright/test";

test("orangeHrm login", async ({ page }) => {
  await page.goto(
    "https://sulphate-undefined-hardener.ngrok-free.dev/orangehrm/web/index.php/auth/login",
  );
  await page.getByRole("textbox", { name: "Username" }).fill("orangehrm_skbn");
  await page.getByRole("textbox", { name: "Password" }).fill("184G1a0126@");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.getByRole("link", { name: "client brand banner" }),
  ).toBeVisible();
});
