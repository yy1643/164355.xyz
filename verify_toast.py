import time
from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 720})

        # Open local HTML file
        page.goto("file:///app/contact.html")

        # Fill out form
        page.fill("#name", "Test User")
        page.fill("#email", "test@test.com")
        page.fill("#message", "Hello")

        # Submit form
        page.click(".submit-btn")

        # Wait for the animation to play
        time.sleep(0.5)

        # Take a screenshot
        page.screenshot(path="/home/jules/verification/toast.png")

        browser.close()

if __name__ == "__main__":
    main()
