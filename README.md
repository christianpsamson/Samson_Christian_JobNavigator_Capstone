# Carrera

Welcome to Carrera, your go-to app for efficiently managing and tracking your job search process. Whether you're actively seeking new opportunities or just exploring the market, Carrera is designed to streamline and organize your job hunt.

![Base URL screenshot](src/assets/images/project.png)

This project was generated with <span style="color:green">VUE + VITE</span>

## How to Use

1.  The app automatically defaults to chicken recipes. To search for a new recipe:

        - Navigate to the search bar.
        - Enter any keyword, such as "beef."

    The app will then look up various recipes and display images for inspiration.

2.  It also provides links to corresponding YouTube videos for a more interactive experience.
3.  Functionality Status:

    - Search Meals: Fully operational.
    - Meals by Letter: In progress.
    - Meals by Ingredient: In progress.

## Project Requirements

### Data Binding

The following are few of the components which utilized various data binding techniques. Data binding has been used atleast four times in this project.

   <p>&nbsp;</p>

**RecipeByName.vue**

**@change**: This is an event binding that listens for the "change" event on the input element and triggers the searchMeals method when the event occurs.

```javascript
@change="searchMeals"
```

<p>&nbsp;</p>

**:src**: This is a attribute binding used to dynamically set the src and alt attribute of the img element.

```html
<img :src="meal.strMealThumb" :alt="strMeal" />
```

<p>&nbsp;</p>

**String Interpolations** : This is the syntax for text interpolation. It is used various times within the template to dynamically display the value.

```html
<h3 class="p-3 font-semibold text-sky-800">{{ meal.strMeal }}</h3>
```

<p>&nbsp;</p>

**:href**: This is a binding used to dynamically set the href attribute of the a element.

```javascript
:href="meal.strYoutube"
```

<p>&nbsp;</p>

**MenuBar.vue**

```html
<router-link
  class="inline-flex items-center h-full px-5 text-lg font-mono font-semibold tracking-widest text-transform: uppercase"
  :to="{ name: 'home' }"
  >Recipe Library</router-link
>
```

### Directives Utilization

Various directives have been strategically employed accross different components to enhance the functionality and appearance of the application.

**RecipeByName.vue**

**v-if**

```html
<div v-if="!meals.length" class="flex justify-center text-gray-600 p-8"></div>
```

**v-for**

```html
<div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow"></div>
```

**v-model**: This is a two-way binding directive used with the input element. It binds the keyword variable to the input value.

```javascript
v-model="keyword"
```

**v-text**

```html
<h4 class="font-light text-amber-400 italic" v-text="meal.strCategory"></h4>
```

### Vue Routing

The application includes two distint routes which render different views.

1. Home
2. Search Recipes
3. Search By Letter
4. Search By Ingredient
