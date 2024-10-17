# Book-Webpage

**Project Lead:** Vincent Cifone

**Initial Author:** Rowan Rishe

**Group Contributors:** Xavier Lora, Matthew Griffith, Kyle Matthews

**Project:** Top 100 books of all time

**Project Description:** In this lab, students are given an existing webpage displaying 100 books in a card view

**Application Overview:**
The main page that we access and view is books.php which loads the mustache engine, loads in books from data.json, and then passess data to a template. This template then builds and displays all of the information on the books into a carded layout. 


URL to access: http://localhost/lab_2/public/books.php


**Steps:**

- Ensure the root project directory is named 'lab_2'.
- Remove the vendor dependencies and reinstall them with the following commands if you have issues:

*1.*
cmd: rm -rf vendor
powershell: Remove-Item -Recurse -Force vendor

*2.*
composer install


