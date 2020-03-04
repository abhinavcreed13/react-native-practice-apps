# React Native Reference Git 
Practice Apps for improving React Native skills

## Resources

### React-Native Basics

- Colors Reference: https://reactnative.dev/docs/colors

- Flexbox cheatsheet: https://reactnative.dev/docs/flexbox

- React Hooks: https://reactjs.org/docs/hooks-intro.html

- Official Docs: https://facebook.github.io/react-native/docs/getting-started

- Overview of available Components & APIs: https://facebook.github.io/react-native/docs/components-and-apis

- Expo Docs: https://docs.expo.io/versions/latest/

### React Native Debugging

- Expo Debugging Docs: https://docs.expo.io/versions/v34.0.0/workflow/debugging/

- Chrome Dev Tools Docs: https://developers.google.com/web/tools/chrome-devtools/

### React Native Adaptive UI

- Dimensions API - Official Docs: https://facebook.github.io/react-native/docs/dimensions#docsNav

- Platform-specific Code - Official Docs: https://facebook.github.io/react-native/docs/platform-specific-code

---
### React Native Guess Game App

#### Concepts

- Working with different components
- Working on layouts
- Styling Card component
- Color theming with constants
- ``TouchableWithoutFeedback``, ``Alert`` components usage
- Switching between Multiple screens
- Adding custom fonts
- Font styling approach - components/default sheets
- Adding local images
    - Using require with ``Image`` component
    - Styling images
    - Using network images
- Nested ``Text`` components
    - Styles passed down to nested ``Text`` components (!!exception!!)
- Building Custom Button component
    - ``TouchableOpacity`` component
    - Adding custom icons - @expo/vector-icons
        - List of expo vector icons: https://expo.github.io/vector-icons/
- UI Library
    - NativeBase: https://docs.nativebase.io/
- ``ScrollView`` for list
    - ``contentContainerStyle`` property
    - ``flexGrow`` property
- ``FlatList`` for list
    - ``contentContainerStyle`` property
    - ``renderItem`` property

![concepts](imgs/concepts.png)
---
#### Responsive + Adaptive UI

- ``Dimensions`` API
    - Get Width: ``Dimensions.get('window').width``
    - API with `if` conditions
    - Listening to orientation changes: ``Dimensions.addEventListener('change',function)``
- ``KeyboardAvoidingView`` component
    - ``behavior="position"``
    - ``keyboardVerticalOffset``
- ``ScreenOriention`` API from ``expo``
    - ``lockAsync`` function
- ``Platform`` API
    - ``OS`` property
    - No listeners
    - ``select`` method - ios, android keys
    - Platform-specific files (.android, .ios)
- ``SafeAreaView`` component

---
### React Native Meals App

#### Concepts

