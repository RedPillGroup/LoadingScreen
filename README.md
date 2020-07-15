# Loading Screen Package
Create loading screen with custom description & background image

## Usage

```javascript
<LoadingScreen
	isVisible={true}
	message="Your message"
	bgColor="#000"
	bgImage="../path-to-your-background-image"
	color="#FFF"
	fontFamily="HVD"
	fontSize="2rem"
	logo="../path-to-you-logo"
	spinnerColor="#000"
	landscapeGame={true}
/>
```

## Options

| Required | Parameter | Type | Example | Description |
| :------------: | ------------ | ------------ | ------------ | ------------ |
| &#10003; | **isVisible** | `boolean` | true | *Determine if the component is load or not* |
| &#10003; | **message** | `string` | Chargement ... | *Loading message* |
| &#10003; | **bgColor** | `string` | #FFF | *Set the background color* |
| &#10003; | **bgImage** | `string` | ../path-to-your-background-image | *Set the background image* |
| &#10003; | **color** | `string` | #000 | *Set the descritpion's color* |
| &#10003; | **fontFamily** | `string` | HVD | *Set the font family* |
| &#10003; | **fontSize** | `string` | 2rem | *Set the font size* |
| &#10003; | **logo** | `string` | ../path-to-your-logo | *Set the logo* |
| &#10003; | **spinnerColor** | `string` | #FFF | *Set the spinner color* |
| &#10003; | **landscapeGame** | `bool` | true | *Determine if a rotation is necessary on mobile device* |

