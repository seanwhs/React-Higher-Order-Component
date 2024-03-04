# React Higher Order Component (HOC) Demo

This repository serves as a demonstration of using Higher Order Components (HOCs) in React. HOCs are a powerful pattern in React for code reuse, logic abstraction, and component composition. In this example, we'll see how to use an HOC to enhance components with shared functionality.

## Overview

In this demo, we have two components, `Person1` and `Person2`, representing individuals making bids. Both components have similar functionality for bidding on an item, but we want to abstract out the logic for increasing bids into a reusable HOC.

## How to Use

To run this demo, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your_username/react-hoc-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-hoc-demo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000` to see the demo in action.

## Components

### App

The `App` component is the main entry point of our application. It renders both `Person1` and `Person2` components.

### HOC (Higher Order Component)

The `UpdatedComponent` HOC is responsible for enhancing components with bidding functionality. It takes an original component as input and returns a new component with additional logic for bidding.

### Person1

The `Person1` component represents Jimmy making a bid. It displays Jimmy's current bid amount and provides a button to increase the bid.

### Person2

The `Person2` component represents Solomon making a bid. Similar to `Person1`, it displays Solomon's bid amount and provides a button to increase the bid.

## Usage

To use the HOC, simply import it into your component file and wrap your component with it. This will provide the component with the `increaseBid` function and `amount` prop.

```javascript
import React from "react";
import UpdatedComponent from './HOC';

function YourComponent({amount, increaseBid}) {
  // Your component logic here
}

export default UpdatedComponent(YourComponent);
```

## Feedback

If you have any feedback, suggestions, or improvements for this demo, feel free to open an issue or pull request in this repository.

---

This README provides a basic overview of the project, its components, and how to use the provided Higher Order Component. Feel free to expand on it with additional details or instructions specific to your project's needs.