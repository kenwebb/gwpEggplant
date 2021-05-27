// buttons.js
// https://thoughtbot.com/blog/structure-for-styling-in-react-native
// this is an example, and is NOT for direct use in GWP

export const small = {
  paddingHorizontal: 10, // like setting both of paddingLeft and paddingRight
  paddingVertical: 12, // like setting both of paddingTop and paddingBottom
  width: 75
};

export const rounded = {
  borderRadius: 10
};

export const smallRounded = {
  //...base,
  ...small,
  ...rounded
};
