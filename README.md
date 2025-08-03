# SauceDemo QA Testing Project

This repository contains a complete Software Quality Assurance (SQA) test suite for the [SauceDemo](https://www.saucedemo.com) demo e-commerce site. It includes manual test cases, bug reports, and automation scripts written using **Selenium WebDriver with JavaScript**.

---

# 📁 Project Structure

project-portfolio/  
│  
├── Test Cases/  
│   └── SauceDemo_Full_Website_Test_Cases.xlsx  
│  
├── Automation/  
│   ├── login.test.js  
│   ├── addtocart.test.js  
│   ├── Removeitem.test.js  
│   ├── Removewithoutadding.test.js  
│   ├── VerifyCart.test.js  
│   ├── Wrongpass.test.js  
│   └── (screenshots for each test)  
│  
├── Bug Report/  
│   ├── Saucedemo-bug-tracking.csv  
│   └── b1.PNG, b2.PNG, b3.PNG, b4.PNG  

---

# ✅ Features Covered

# Manual Testing

 Full end-to-end test case documentation  
 Logical flows, expected results, and actual outcomes  
 Written in an easy-to-understand Excel format  

# Automation (Selenium WebDriver - JS)

 ✅ Login Functionality  
 ✅ Add to Cart  
 ✅ Remove Item  
 ✅ Remove Without Adding  
 ✅ Verify Cart Contents  
 ✅ Wrong Password (Negative Case)  

Each script follows clean structure and is easy to extend.

# Bug Reporting

 1 bug tracking sheet (CSV) + 4 visual screenshot proofs  
 Includes severity, steps to reproduce, and resolution status  

# 🧠 How to Use This Project for Practice or Learning

If you're a QA beginner, intern, or just want to improve your automation skills this is a great real-world practice project.

You can:

 🛠️ Run each script to understand test flow  
 📊 Study manual test cases to learn how to write your own  
 🐞 Open bug reports to learn bug tracking formats  
 🧪 Create your own scenarios based on this site  
 💻 Learn how to integrate tests with Git and VS Code  

Use this repo to **test yourself**, or even **showcase your QA skills in interviews.**

---

# ▶️ How to Run Automation Scripts in VS Code

## 1. Prerequisites

- Node.js installed → [Download here](https://nodejs.org/)  
- Google Chrome installed  
- VS Code (or any code editor)  
- Git Bash (optional)  

## 2. Setup Steps

Open a terminal inside the `Automation/` folder and run:

```bash
npm init -y
npm install selenium-webdriver
3. Run a Test Script
To run, for example, the Login test:

bash
Copy
Edit
node login.test.js
Chrome will launch, simulate the login process, and close.

Repeat the above command for each script file (e.g., addtocart.test.js, Wrongpass.test.js, etc.)

🔗 Live Website Under Test
SauceDemo.com

yaml
Copy
Edit

---

## ✅ Now, the **completely separated Author section**:

```markdown
---

🙋 Author  
Muhammad Noor Ul Huda  
Aspiring SQA Engineer | Entry-Level Tester  
📍 Pakistan  

⭐ If this project helped you learn something, feel free to star it or fork it to build your own version.
