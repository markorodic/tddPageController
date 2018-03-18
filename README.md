# TDD Kata - Page Controller

A simple exercise to practice tdd with vanilla Javascript.

## Page Controller Kata

This kata is about the writing of the underlying data model for a pager control (NOT about the presentation). What you should create is a class which is smart enough to provide all the data required to actually render the links to pages.

### So, the pager gets the following data as input:

```
Total number of items.
```
```
Page size. That is, number of items per page.
```
```
Offset e.g. 4680, which means that the user has already flipped through 234 pages (20 items each).
```

### Given this data, the pager should be able to answer the following questions:

```
How many pages are there? e.g. total records / records per page.
```
```
Should prev/next link be visible? e.g. prev button should not be visible when user is on the first page.
```
```
Which links to print? e.g. when user is on 25th page, then 
links to 24, 25 and 26 should be printed.
```
```
Which page is current? so we could bold/highlight it's number (and remove the link).
```