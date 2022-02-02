# Very Basic Card

Is this a very basic card? Yes.

It contains an image, header and description text.

#### CDN link:
```
<script type='module' src='https://unpkg.com/very-basic-card@0.0.2/dist/very-basic-card/very-basic-card.esm.js'></script>
```

#### HTML Tag
```
<very-basic-card>
```

### Properties:

**img** - Image URL
```
<very-basic-card img="url.com">
```

**heading** - Heading text
```
<very-basic-card heading="Example heading">
```

**description** - Description text
```
<very-basic-card description="This is an example description">
```

### Update Property value in HTML (modifying attribute)

```
const card = document.getElementsByTagName('very-basic-card')[0]
card.setAttribute('description', 'Is this a description?')
```
