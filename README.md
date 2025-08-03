
# SauceDemo QA Testing Project

This repository contains a complete Software Quality Assurance (SQA) test suite for the [SauceDemo](https://www.saucedemo.com) demo e-commerce site. It includes manual test cases, bug reports, automation scripts written using **Selenium WebDriver with JavaScript**, and performance tests using **Apache JMeter**.

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
│  
├── Performance Testing/  
│   ├── Load Test/
│   │   ├── SauceDemo Load Test.jmx  
│   │   ├── summary_report.png  
│   │   ├── view_result_tree.png  
│   │   ├── graph_result.png  
│   │   ├── aggregate_result.png  
│   │   └── response_time_graph.png  
│   │  
│   ├── Login Test/  
│   │   ├── SauceDemo Login Test.jmx  
│   │   ├── summary_report.png  
│   │   ├── view_result_tree.png  
│   │   ├── http_header_manager.png  
│   │   └── login_request.png  
│   │  
│   ├── Spike Test/  
│   │   ├── Concurrent Users (Spike Test).jmx  
│   │   ├── concurrent_user.png  
│   │   ├── graph_result.png  
│   │   └── view_result_table.png  
│   │  
│   └── Broken Link Test/  
│       ├── Broken Link or Invalid URL Test.jmx  
│       ├── response_assertion.png  
│       └── view_result_tree.png  

---

# ✅ Features Covered

## Manual Testing

- Full end-to-end test case documentation  
- Logical flows, expected results, and actual outcomes  
- Written in an easy-to-understand Excel format  

## Automation (Selenium WebDriver - JS)

- ✅ Login Functionality  
- ✅ Add to Cart  
- ✅ Remove Item  
- ✅ Remove Without Adding  
- ✅ Verify Cart Contents  
- ✅ Wrong Password (Negative Case)  

Each script follows clean structure and is easy to extend.

## Bug Reporting

- 1 bug tracking sheet (CSV) + 4 visual screenshot proofs  
- Includes severity, steps to reproduce, and resolution status  

## Performance Testing (Apache JMeter)

✔️ **Load Test**  
   - Simulates typical traffic patterns  
   - Includes: `summary_report`, `view_result_tree`, `graph_result`, `aggregate_result`, `response_time_graph`

✔️ **Login Test**  
   - Measures login performance under multiple users  
   - Includes: `summary_report`, `view_result_tree`, `http_header_manager`, `login_request`

✔️ **Spike Test**  
   - Tests how the system handles sudden spikes in user traffic  
   - Includes: `concurrent_user`, `graph_result`, `view_result_table`

✔️ **Broken Link Test**  
   - Identifies invalid or unreachable URLs  
   - Includes: `response_assertion`, `view_result_tree`

Each `.jmx` file is backed by **real visual output (.png)** to help understand and interpret the results.

---

# 🧠 How to Use This Project for Practice or Learning

If you're a QA beginner, intern, or just want to improve your automation skills this is a great real-world practice project.

You can:

 🛠️ Run each script to understand test flow  
 📊 Study manual test cases to learn how to write your own  
 🐞 Open bug reports to learn bug tracking formats  
 🧪 Create your own scenarios based on this site  
 ⚡ Analyze how the app performs under load using JMeter  
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
```

## 3. Run a Test Script

To run, for example, the Login test:

```bash
node login.test.js
```

Chrome will launch, simulate the login process, and close.

Repeat the above command for each script file (e.g., `addtocart.test.js`, `Wrongpass.test.js`, etc.)

---

# ▶️ How to Run Performance Tests (JMeter)

## 1. Prerequisites

- [Download and install Apache JMeter](https://jmeter.apache.org/)

## 2. Steps

- Open JMeter and go to `File → Open`
- Select any `.jmx` file from `Performance Testing/`
- Click the **Start** button (green play icon)
- View the results in **Summary Report**, **View Results Tree**, or **Graph Results**

📂 Visual results (`.png`) are included in each subfolder to support result analysis.

---

🔗 Live Website Under Test  
[SauceDemo.com](https://www.saucedemo.com)

---

🙋 Author  
Muhammad Noor Ul Huda  
Aspiring SQA Engineer | Entry-Level Tester  
📍 Pakistan  

⭐ If this project helped you learn something, feel free to star it or fork it to build your own version!
