# Dark Mode Toggle using JS

This project is base example snippet to create a dark mode toggle by using onClick button or by using a checkbox input.

**Note:** No extra stylesheet or library is used. It is basic use of HTML, CSS and Javascript.

## Development Guide

I will explain how to use **onClick Button** toggle for changing theme. Also don't forget to link CSS and Javascript file to your HTML.

#### Base HTML
- Create a basic HTML content as per your need.
- Give an **id** to your respective container element or body tag (in case you have no container).

#### Styling CSS
- Create base `:root` themes for both dark and light with each different state colors as per your need.

  ---
  #### I defined background-color, text-color and button color in each theme.

- Define two classes, one light and one dark. We will toggle these classes at container.
- Use these classes in css hirarchy to change color of your content as per need.
Example:
```
.light .content button {
    background-color: var(--light-btn-color);
    color: var(--light-text-color);
}
``` 

#### Creatung Functions
- Create the function and referrence the container at the top of file.
- Inside the function, use conditions like if container `contains` this class then remove that and add another.
- Do check about classlist functions like add, remove and toggle in javascript for more info.
- Add the function in your HTML under attribute onClick.
```
<button onclick="toggleFunc()">Toggle Mode</button>
```

## Screenshots

#### Light Mode
![]("./darkMode.png")

#### Light Mode
![]("./lightMode.png")